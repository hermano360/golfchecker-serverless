import { randomUUID } from "crypto";
import { queryPaginationRequests } from "../dynamo/utils";
import { fetchAlertsByUser, generateAlertSlices } from "../alerts/utils";
import { getLatestUpdatedAt } from "../updatedAt/utils";
import { Alert, AlertSlice } from "../alerts/types";
import { IsoTimeStamp } from "../time/types";
import { Match, MatchWithKeys } from "./types";
import { setLatestMatchedAt } from "../matchedAt/utils";
import { Table } from "sst/node/table";
import { Queue } from "sst/node/queue";
import { sqs } from "../sqs/utils";
import { fetchAllUsers } from "../users/utils";
import { getTimeStampNow } from "../time/utils";

export const formatMatches = (
  userId: string,
  matches: Match[] = [],
  matchedAt: IsoTimeStamp
): MatchWithKeys[] => {
  const formattedMatches = matches.map((match) => ({
    ...match,
    PK: `match#userId#${userId}#matchedAt#${matchedAt}`,
    SK: `courseId#${match.courseId}#teeTime#${match.teeTime}`,
    userId,
    matchedAt,
    id: randomUUID(),
  }));

  return formattedMatches;
};

export const fetchMatchesFromAlertSlice = async (
  alertSlice: AlertSlice,
  updatedAt: IsoTimeStamp
): Promise<Match[]> => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK AND SK BETWEEN :startsAt AND :endsAt`,
    ExpressionAttributeValues: {
      ":PK": `entry#updatedAt#${updatedAt}`,
      ":startsAt": `courseId#${alertSlice.courseId}#teeTime#${alertSlice.startsAt}`,
      ":endsAt": `courseId#${alertSlice.courseId}#teeTime#${alertSlice.endsAt}`,
    },
    Select: "ALL_ATTRIBUTES",
  };

  const matches = await queryPaginationRequests<Match>(params);

  return matches;
};

export const collectMatchesFromAlerts = async (
  alerts: Alert[]
): Promise<Match[]> => {
  console.log("generateAlertSlices");
  console.log(JSON.stringify({ alerts }));
  const alertSlices = generateAlertSlices(alerts);
  const updatedAt = await getLatestUpdatedAt();

  const allMatches: Match[] = [];

  if (!updatedAt) {
    return allMatches;
  }

  for (let alertSlice of alertSlices) {
    const matches = await fetchMatchesFromAlertSlice(alertSlice, updatedAt);
    allMatches.push(...matches);
  }

  return allMatches;
};

export const generateMatchesByUser = async (
  userId: string
): Promise<{ matches: Match[]; matchedAt: IsoTimeStamp }> => {
  const alerts = await fetchAlertsByUser(userId, true);

  const matches = await collectMatchesFromAlerts(alerts);

  const matchedAt = await setLatestMatchedAt(userId);

  return {
    matchedAt,
    matches,
  };
};

export const fetchMatchesByUser = async ({
  userId,
  matchedAt,
}: {
  userId: string;
  matchedAt: IsoTimeStamp;
}): Promise<Match[]> => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": `match#userId#${userId}#matchedAt#${matchedAt}`,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression:
      "courseId, teeTime, numPlayers, price, numHoles, updatedAt",
  };

  const matches = await queryPaginationRequests<Match>(params);

  return matches;
};

export const generateMatches = async () => {
  console.log("Generating new matches!");
  const users = await fetchAllUsers();

  const userMatchRequests = users.map((userId) =>
    sqs
      .sendMessage({
        QueueUrl: Queue.MatchingQueue.queueUrl,
        MessageBody: JSON.stringify({
          userId,
        }),
      })
      .promise()
  );

  await Promise.all(userMatchRequests);
};

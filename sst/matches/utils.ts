import { randomUUID } from "crypto";
import { CourseId } from "../courses/utils";
import { DynamoKeys, queryPaginationRequests } from "../dynamo/utils";
import { IsoTimeStamp } from "../time/utils";
import { setLatestMatchedAt } from "../matchedAt/utils";
import {
  Alert,
  AlertSlice,
  fetchAlertsByUser,
  generateAlertSlices,
} from "../alerts/utils";
import { getLatestUpdatedAt } from "../updatedAt/utils";
import { Table } from "sst/node/table";
import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export type Match = {
  courseId: CourseId;
  teeTime: IsoTimeStamp;
  numPlayers: number;
  price: number;
  numHoles: number;
  updatedAt: IsoTimeStamp;
};

export type MatchWithKeys = Match & {
  matchedAt: IsoTimeStamp;
} & DynamoKeys;

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

export const fetchMatchesByUser = async (
  userId: string
): Promise<{ matches: Match[]; matchedAt: IsoTimeStamp }> => {
  const alerts = await fetchAlertsByUser(userId);

  const matches = await collectMatchesFromAlerts(alerts);

  const matchedAt = await setLatestMatchedAt(userId);

  return {
    matchedAt,
    matches,
  };
};

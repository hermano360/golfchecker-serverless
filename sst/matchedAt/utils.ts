import { Table } from "sst/node/table";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { IsoTimeStamp } from "../time/utils";
import { StringConditions } from "aws-cdk-lib/aws-sns";
import * as utils from "../utils";

dayjs.extend(utc);

export const setLatestMatchedAt = async (
  userId: string
): Promise<IsoTimeStamp> => {
  const matchedAt = dayjs.utc().toISOString() as IsoTimeStamp;

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      PK: `matchedAt#userId#${userId}`,
      SK: matchedAt,
      matchedAt: matchedAt,
      userId: userId,
    },
  };

  await utils.saveSingleItem(params);

  return matchedAt;
};

export const getLatestMatchedAt = async (
  userId: StringConditions
): Promise<IsoTimeStamp | undefined> => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: "PK = :PK",
    ExpressionAttributeValues: {
      ":PK": `matchedAt#userId#${userId}`,
    },
    Limit: 1,
    ProjectionExpression: "matchedAt",
    ScanIndexForward: false,
  };

  const results = await utils.queryPaginationRequests<{
    matchedAt: IsoTimeStamp;
  }>(params);

  const item = results[0];

  if (!item || !item.matchedAt) {
    return;
  }

  const matchedAt = item.matchedAt as IsoTimeStamp;

  return matchedAt;
};

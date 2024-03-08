import AWS from "aws-sdk";
import { Table } from "sst/node/table";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { IsoTimeStamp } from "../time/utils";

dayjs.extend(utc);

const dynamoDb = new AWS.DynamoDB.DocumentClient();

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

  await dynamoDb.put(params).promise();

  return matchedAt;
};

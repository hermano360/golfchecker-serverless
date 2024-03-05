import AWS from "aws-sdk";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getLatestMatchedAtUtil = async (userId) => {
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

  const results = await dynamoDb.query(params).promise();

  const item = results.Items ? results.Items[0] : {};

  console.log({ item, userId });
  return item;
};

export const setLatestMatchedAtUtil = async (userId) => {
  const currentTimeStamp = new Date().toISOString();

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      PK: `matchedAt#userId#${userId}`,
      SK: currentTimeStamp,
      matchedAt: currentTimeStamp,
      userId: userId,
    },
  };

  await dynamoDb.put(params).promise();

  return { matchedAt: currentTimeStamp };
};

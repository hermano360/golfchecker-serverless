import AWS from "aws-sdk";
import dayjs from "dayjs";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getLatestUpdatedAt = async () => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: "PK = :updatedAt",
    ExpressionAttributeValues: {
      ":updatedAt": "updatedAt",
    },
    Limit: 1,
    ProjectionExpression: "updatedAt",
    ScanIndexForward: false,
  };

  const results = await dynamoDb.query(params).promise();

  const item = results.Items ? results.Items[0] : {};
  return item;
};

export const setLatestUpdatedAt = async () => {
  const currentTimeStamp = dayjs().toISOString();

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      PK: "updatedAt",
      SK: currentTimeStamp,
      updatedAt: currentTimeStamp,
    },
  };

  await dynamoDb.put(params).promise();

  return { updatedAt: currentTimeStamp };
};

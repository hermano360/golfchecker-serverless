import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
import { Table } from "sst/node/table";
import { randomUUID } from "crypto";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const deleteAlertById = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;
  const alertId = evt.pathParameters?.alertId;

  if (!userId || !alertId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: {
      PK: `alert#userId#${userId}`,
      SK: `alertId#${alertId}`,
    },
  };
  try {
    await dynamoDb.delete(params).promise();

    return {
      statusCode: 200,
      body: `Successfully deleted alertId ${alertId}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `There was an error deleting alertId ${alertId}`,
    };
  }
});

export const setAlerts = ApiHandler(async (evt) => {
  if (!evt.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const body = JSON.parse(evt.body);

  if (!body.userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const alertId = randomUUID();

  const data = {
    ...body,
    id: alertId,
  };

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      PK: `alert#userId#${body.userId}`,
      SK: `alertId#${alertId}`,
      ...data,
    },
  };

  await dynamoDb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
});

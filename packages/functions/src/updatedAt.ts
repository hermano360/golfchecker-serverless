import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
import * as uuid from "uuid";
// import { ApiGatewayProxyEventV2 } from "aws-lambda";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getLatest = ApiHandler(async (evt) => {
  return {
    statusCode: 200,
    body: evt.requestContext.time,
  };
});

export const setLatest = ApiHandler(async (evt) => {
  const currentTimeStamp = new Date().toISOString();

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      // The attributes of the item to be created
      PK: "updatedAt", // The id of the author
      SK: currentTimeStamp, // timestamp for this particular
      updatedAt: currentTimeStamp, //
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }

  return {
    statusCode: 200,
    body: evt.requestContext.time,
  };
});

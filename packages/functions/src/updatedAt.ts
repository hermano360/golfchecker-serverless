import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
// import * as uuid from "uuid";
// import { ApiGatewayProxyEventV2 } from "aws-lambda";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getLatest = ApiHandler(async () => {
  const params = {
    // Get the table name from the environment variable
    TableName: Table.GolfChecker.tableName,
    // Get all the rows where the userId is our hardcoded user id
    KeyConditionExpression: "PK = :updatedAt",
    ExpressionAttributeValues: {
      ":updatedAt": "updatedAt",
    },
    Limit: 1,
    ProjectionExpression: "updatedAt",
    ScanIndexForward: false,
  };

  try {
    const results = await dynamoDb.query(params).promise();

    const item = results.Items ? results.Items[0] : {};
    return {
      statusCode: 200,
      body: JSON.stringify(item),
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
});

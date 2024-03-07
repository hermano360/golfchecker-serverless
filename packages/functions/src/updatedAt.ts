import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
// import * as uuid from "uuid";
// import { ApiGatewayProxyEventV2 } from "aws-lambda";
import { Table } from "sst/node/table";
import {
  getLatestUpdatedAt,
  setLatestUpdatedAt,
} from "../../../sst/updatedAt/utils";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getLatest = ApiHandler(async () => {
  try {
    const updatedAt = await getLatestUpdatedAt();

    return {
      statusCode: 200,
      body: JSON.stringify({ updatedAt }),
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
  try {
    const updatedAt = await setLatestUpdatedAt();

    return {
      statusCode: 200,
      body: JSON.stringify({ updatedAt }),
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

import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";

import {
  getLatestMatchedAtUtil,
  setLatestMatchedAtUtil,
} from "../../utils/matchedAt";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getLatestMatchedAt = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  try {
    const { matchedAt } = await getLatestMatchedAtUtil(userId);

    return {
      statusCode: 200,
      body: JSON.stringify({ matchedAt, userId }),
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

export const setLatestMatchedAt = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }
  try {
    const { matchedAt } = await setLatestMatchedAtUtil(userId);

    return {
      statusCode: 200,
      body: JSON.stringify({ matchedAt, userId }),
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

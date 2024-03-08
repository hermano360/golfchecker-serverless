import { ApiHandler } from "sst/node/api";
import * as matchedAtUtils from "../matchedAt/utils";

export const getLatestMatchedAt = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  try {
    const matchedAt = await matchedAtUtils.getLatestMatchedAt(userId);

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
    const matchedAt = await matchedAtUtils.setLatestMatchedAt(userId);

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

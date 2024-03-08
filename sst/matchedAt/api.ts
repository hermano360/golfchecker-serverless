import { ApiHandler } from "sst/node/api";
import { getLatestMatchedAt, setLatestMatchedAt } from "./utils";

export const getLatestMatchedAtHandler = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  try {
    const matchedAt = await getLatestMatchedAt(userId);

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

export const setLatestMatchedAtHandler = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }
  try {
    const matchedAt = await setLatestMatchedAt(userId);

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

import { ApiHandler } from "sst/node/api";
import { getLatestUpdatedAt, setLatestUpdatedAt } from "./utils";

export const getLatestUpdatedAtHandler = ApiHandler(async () => {
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

export const setLatestUpdatedAtHandler = ApiHandler(async (evt) => {
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

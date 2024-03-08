import { ApiHandler } from "sst/node/api";
import * as utils from "../utils";

export const getLatestUpdatedAt = ApiHandler(async () => {
  try {
    const updatedAt = await utils.getLatestUpdatedAt();

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

export const setLatestUpdatedAt = ApiHandler(async (evt) => {
  try {
    const updatedAt = await utils.setLatestUpdatedAt();

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

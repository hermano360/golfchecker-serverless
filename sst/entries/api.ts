import { ApiHandler } from "sst/node/api";
import * as utils from "../utils";

export const fetchEntries = ApiHandler(async (evt) => {
  const { body } = evt;

  if (!body) {
    return {
      statusCode: 500,
    };
  }
  const { startsAt, endsAt, courseId, updatedAt } = JSON.parse(body);

  if (!startsAt || !endsAt || !courseId || !updatedAt) {
    return {
      statusCode: 400,
      body: `Invalid payload. Missing parameters: ${JSON.stringify({
        startsAt,
        endsAt,
        courseId,
        updatedAt,
      })}`,
    };
  }

  try {
    const entries = await entryUtils.fetchEntries({
      startsAt,
      endsAt,
      courseId,
      updatedAt,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(entries),
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

export const saveEntries = ApiHandler(async (evt) => {
  const { body } = evt;
  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "There was a problem with your request",
      }),
    };
  }

  const { updatedAt, entries = [] } = JSON.parse(body);

  if (!updatedAt || entries.length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "There was a problem with your request",
      }),
    };
  }

  try {
    await utils.saveEntries(entries, updatedAt);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Successfully saved ${entries.length} tee time entries`,
      }),
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
});

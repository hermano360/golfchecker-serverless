import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
import { fetchEntitiesUtil, setEntryItemUtil } from "../../utils/entities";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const fetchEntities = ApiHandler(async (evt) => {
  const { body } = evt;

  if (!body) {
    return {
      statusCode: 500,
    };
  }
  const { startsAt, endsAt, courseId, updatedAt } = JSON.parse(body);

  if (!startsAt || !endsAt || !courseId || !updatedAt) {
    return {
      statusCode: 500,
      body: `Invalid payload. Missing parameters: ${JSON.stringify({
        startsAt,
        endsAt,
        courseId,
        updatedAt,
      })}`,
    };
  }

  try {
    const entities = await fetchEntitiesUtil({
      startsAt,
      endsAt,
      courseId,
      updatedAt,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(entities),
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

export const setEntities = ApiHandler(async (evt) => {
  const { body } = evt;
  if (!body) {
    return {
      statusCode: 400,
    };
  }

  const { updatedAt, entries = [] } = JSON.parse(body);

  if (!updatedAt || entries.length === 0) {
    return {
      statusCode: 200,
    };
  }

  try {
    await setEntryItemUtil(updatedAt, entries);

    return { statusCode: 200 };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
});

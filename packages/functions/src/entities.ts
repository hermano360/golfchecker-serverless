import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
import { Table } from "sst/node/table";
import {
  getEntryItem,
  setEntryItemUtil,
  splitWriteItems,
} from "../../utils/entities";

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

  const params = {
    // Get the table name from the environment variable
    TableName: Table.GolfChecker.tableName,
    // Get all the rows where the userId is our hardcoded user id
    KeyConditionExpression: `PK = :PK AND SK BETWEEN :startsAt AND :endsAt`,
    ExpressionAttributeValues: {
      ":PK": `entry#updatedAt#${updatedAt}`,
      ":startsAt": `courseId#${courseId}#teeTime#${startsAt}`,
      ":endsAt": `courseId#${courseId}#teeTime#${endsAt}`,
    },
    Select: "ALL_ATTRIBUTES",
  };

  try {
    const results = await dynamoDb.query(params).promise();

    const { Items = [] } = results;

    return {
      statusCode: 200,
      body: JSON.stringify(Items),
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

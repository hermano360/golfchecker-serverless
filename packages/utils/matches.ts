import { Table } from "sst/node/table";
import AWS from "aws-sdk";
import { splitWriteItems } from "./data/dynamoUtils";
import { randomUUID } from "crypto";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getMatchItem = ({
  userId,
  matchedAt,
  courseId,
  teeTime,
  updatedAt,
  id,
}) => {
  return {
    PK: `match#userId#${userId}#matchedAt#${matchedAt}`,
    SK: `courseId#${courseId}#teeTime#${teeTime}`,
    updatedAt,
    userId,
    matchedAt,
    courseId,
    teeTime,
    id,
  };
};

export const writeMatchItems = async (params) => {
  return new Promise((resolve, reject) => {
    dynamoDb.batchWrite(params, (err, data) => {
      if (err) {
        const message = err instanceof Error ? err.message : String(err);
        return reject(err);
      }

      resolve(data);
    });
  });
};

export const setMatchItemUtil = async ({ matchedAt, userId, matches = [] }) => {
  const formattedEntries = matches.map((match) => ({
    PutRequest: {
      Item: getMatchItem({ ...match, matchedAt, userId, id: randomUUID() }),
    },
  }));

  const sectionedItems = splitWriteItems(formattedEntries);

  sectionedItems.forEach(async (items, i) => {
    if (items.length === 0) {
      return;
    }

    console.log(JSON.stringify(items));
    const params = {
      RequestItems: {
        [Table.GolfChecker.tableName]: items,
      },
    };

    await writeMatchItems(params);
  });

  return { success: true };
};

export const fetchMatchesUtil = async ({ userId, matchedAt }) => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": `match#userId#${userId}#matchedAt#${matchedAt}`,
    },
    Select: "ALL_ATTRIBUTES",
  };

  const results = await dynamoDb.query(params).promise();

  const { Items = [] } = results;

  console.log(Items.length);

  return Items;
};

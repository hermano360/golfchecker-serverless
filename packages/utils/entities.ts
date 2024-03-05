import { Table } from "sst/node/table";
import AWS from "aws-sdk";
import { splitWriteItems } from "./data/dynamoUtils";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getEntryItem = ({ updatedAt, courseId, teeTime, ...rest }) => {
  return {
    PK: `entry#updatedAt#${updatedAt}`,
    SK: `courseId#${courseId}#teeTime#${teeTime}`,
    updatedAt,
    courseId,
    teeTime,
    ...rest,
  };
};

export const writeEntryItems = async (params) => {
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

export const setEntryItemUtil = async (updatedAt, entries = []) => {
  const formattedEntries = entries.map((entry) => ({
    PutRequest: {
      Item: getEntryItem({ updatedAt, ...entry }),
    },
  }));

  if (formattedEntries.length === 0) {
    return { success: true };
  }
  const sectionedItems = splitWriteItems(formattedEntries);

  sectionedItems.forEach(async (items, i) => {
    const params = {
      RequestItems: {
        [Table.GolfChecker.tableName]: items,
      },
    };

    await writeEntryItems(params);
  });

  return { success: true };
};

export const fetchEntitiesUtil = async ({
  updatedAt,
  courseId,
  startsAt,
  endsAt,
}) => {
  const params = {
    TableName: Table.GolfChecker.tableName,

    KeyConditionExpression: `PK = :PK AND SK BETWEEN :startsAt AND :endsAt`,
    ExpressionAttributeValues: {
      ":PK": `entry#updatedAt#${updatedAt}`,
      ":startsAt": `courseId#${courseId}#teeTime#${startsAt}`,
      ":endsAt": `courseId#${courseId}#teeTime#${endsAt}`,
    },
    Select: "ALL_ATTRIBUTES",
  };

  const results = await dynamoDb.query(params).promise();

  const { Items = [] } = results;

  return Items;
};

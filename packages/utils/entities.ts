import { Table } from "sst/node/table";
import AWS from "aws-sdk";

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

export const splitWriteItems = (items: any[]) => {
  const sectionedItems = [[]];

  items.forEach((item: any) => {
    if (sectionedItems[sectionedItems.length - 1].length >= 25) {
      sectionedItems.push([]);
    }

    sectionedItems[sectionedItems.length - 1].push(item);
  });

  return sectionedItems;
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

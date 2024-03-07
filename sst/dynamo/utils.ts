import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export type DynamoKeys = {
  PK: string;
  SK: string;
};

export function sectionItemsForSaving<Type>(items: Type[]): Type[][] {
  const itemSections: Type[][] = [[]];

  items.forEach((item: Type) => {
    if (itemSections[itemSections.length - 1].length >= 25) {
      itemSections.push([]);
    }

    itemSections[itemSections.length - 1].push(item);
  });

  return itemSections;
}

export function generatePutRequests<Type>(items: Type[] = []) {
  const putRequests = items.map((item) => ({
    PutRequest: {
      Item: item,
    },
  }));

  const sectionedPutRequests = sectionItemsForSaving(putRequests);

  return sectionedPutRequests;
}

export async function writePutRequests<Type>(
  tableName: string,
  items: Type[] = []
) {
  const putRequestCollection = generatePutRequests(items);

  for (const putRequestList of putRequestCollection) {
    const RequestItems = {
      [tableName]: putRequestList,
    } as AWS.DynamoDB.DocumentClient.BatchWriteItemRequestMap;

    if (putRequestList.length > 0) {
      console.log(`Writing ${putRequestList.length} Records`);
      await dynamoDb.batchWrite({ RequestItems }).promise();
    }
  }
}

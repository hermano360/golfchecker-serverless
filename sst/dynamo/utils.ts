import AWS from "aws-sdk";
import { DynamoKeys } from "./types";

export const dynamoDb = new AWS.DynamoDB.DocumentClient();

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

export function dedupePutRequestItems<Type>(items: (Type & DynamoKeys)[]) {
  const itemMapping: Record<string, Type> = {};

  items.forEach((item) => {
    itemMapping[item.PK.concat(item.SK)] = item;
  });

  return Object.values(itemMapping);
}

export function generatePutRequests<Type>(items: (Type & DynamoKeys)[] = []) {
  const dedupedItems = dedupePutRequestItems(items);

  const putRequests = dedupedItems.map((item) => ({
    PutRequest: {
      Item: item,
    },
  }));

  const sectionedPutRequests = sectionItemsForSaving(putRequests);

  return sectionedPutRequests;
}

export async function writePutRequests<Type>(
  tableName: string,
  items: (Type & DynamoKeys)[] = []
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

export async function queryPaginationRequests<Type>(
  params: AWS.DynamoDB.DocumentClient.QueryInput
): Promise<Type[]> {
  const itemsCollection: Type[] = [];

  let ExclusiveStartKey = undefined;
  let isItemsListEmpty = false;
  let isItemsListComplete = false;
  let result;

  do {
    result = await dynamoDb.query({ ...params, ExclusiveStartKey }).promise();
    const items: Type[] = result.Items as Type[];

    itemsCollection.push(...items);
    ExclusiveStartKey = result.LastEvaluatedKey;
    isItemsListEmpty = items.length === 0;
    isItemsListComplete = params.Limit ? items.length >= params.Limit : false;
  } while (ExclusiveStartKey && !isItemsListEmpty && !isItemsListComplete);

  return itemsCollection;
}

export async function fetchSingleItem<Type>(
  params: AWS.DynamoDB.DocumentClient.GetItemInput
): Promise<Type | undefined> {
  const result = await dynamoDb.get(params).promise();
  const item = result.Item as Type;

  return item;
}

export async function saveSingleItem<Type>(
  params: AWS.DynamoDB.DocumentClient.PutItemInput
): Promise<undefined> {
  await dynamoDb.put(params).promise();
  return;
}

export async function deleteSingleItem<Type>(
  params: AWS.DynamoDB.DocumentClient.DeleteItemInput
): Promise<undefined> {
  await dynamoDb.delete(params).promise();
  return;
}

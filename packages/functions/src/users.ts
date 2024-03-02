import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const registerUser = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      PK: `userId`,
      SK: `userId#${userId}`,
      id: userId,
    },
  };

  await dynamoDb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "register user received" }),
  };
});

// Preparing when there are alot of users
export const fetchUsers = ApiHandler(async (evt) => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": `userId`,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression: "id",
  };

  const itemsCollection = [];
  let isLastEvalutedKeyUndefined = false;
  let ExclusiveStartKey = undefined;
  let result;

  while (!isLastEvalutedKeyUndefined) {
    result = await dynamoDb.query({ ...params, ExclusiveStartKey }).promise();
    const { Items = [] } = result;
    itemsCollection.push(...Items.map(({ id }) => id));

    isLastEvalutedKeyUndefined = typeof result.LastEvaluatedKey === "undefined";
    ExclusiveStartKey = result.LastEvaluatedKey;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ users: itemsCollection }),
  };
});

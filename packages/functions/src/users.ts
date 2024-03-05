import { ApiHandler } from "sst/node/api";
import AWS from "aws-sdk";
import { Table } from "sst/node/table";
import { fetchAllUsers } from "../../utils/users";

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
  const users = await fetchAllUsers();

  return {
    statusCode: 200,
    body: JSON.stringify({ users }),
  };
});

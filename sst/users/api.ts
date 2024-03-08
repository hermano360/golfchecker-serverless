import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import { saveSingleItem } from "../dynamo/utils";
import { fetchAllUsers } from "./utils";

export const saveUser = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      PK: `userId`,
      SK: `userId#${userId}`,
      id: userId,
    },
  };

  await saveSingleItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "save user received" }),
  };
});

export const fetchAllUsersHandler = ApiHandler(async (evt) => {
  const users = await fetchAllUsers();

  return {
    statusCode: 200,
    body: JSON.stringify({ users }),
  };
});

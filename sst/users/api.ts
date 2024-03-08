import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import * as userUtils from "./utils";
import { saveSingleItem } from "../dynamo/utils";

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

export const fetchAllUsers = ApiHandler(async (evt) => {
  const users = await userUtils.fetchAllUsers();

  return {
    statusCode: 200,
    body: JSON.stringify({ users }),
  };
});

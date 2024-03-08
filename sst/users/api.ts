import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import * as utils from "../utils";

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

  await utils.saveSingleItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "save user received" }),
  };
});

export const fetchAllUsers = ApiHandler(async (evt) => {
  const users = await utils.fetchAllUsers();

  return {
    statusCode: 200,
    body: JSON.stringify({ users }),
  };
});

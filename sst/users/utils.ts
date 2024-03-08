import { Table } from "sst/node/table";
import * as utils from "../utils";

export const fetchAllUsers = async (): Promise<string[]> => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": `userId`,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression: "id",
  };

  const users = await utils.queryPaginationRequests<{ id: string }>(params);

  return users.map(({ id }) => id);
};

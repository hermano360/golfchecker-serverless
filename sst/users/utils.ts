import { Table } from "sst/node/table";
import { queryPaginationRequests } from "../dynamo/utils";

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

  const users = await queryPaginationRequests<{ id: string }>(params);

  return users.map(({ id }) => id);
};

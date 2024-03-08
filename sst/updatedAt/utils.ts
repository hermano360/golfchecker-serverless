import dayjs from "dayjs";
import { Table } from "sst/node/table";
import utc from "dayjs/plugin/utc";
import { IsoTimeStamp } from "../time/utils";
import * as utils from "../utils";

dayjs.extend(utc);

export const getLatestUpdatedAt = async (): Promise<
  IsoTimeStamp | undefined
> => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: "PK = :updatedAt",
    ExpressionAttributeValues: {
      ":updatedAt": "updatedAt",
    },
    Limit: 1,
    ProjectionExpression: "updatedAt",
    ScanIndexForward: false,
  };

  const results = await utils.queryPaginationRequests<{
    updatedAt: IsoTimeStamp;
  }>(params);

  const { updatedAt } = results[0] || {};

  if (!updatedAt) {
    return;
  }

  return updatedAt;
};

export const setLatestUpdatedAt = async (): Promise<
  IsoTimeStamp | undefined
> => {
  const currentTimeStamp = dayjs.utc().toISOString() as IsoTimeStamp;

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      PK: "updatedAt",
      SK: currentTimeStamp,
      updatedAt: currentTimeStamp,
    },
  };

  await utils.saveSingleItem(params);

  return currentTimeStamp;
};

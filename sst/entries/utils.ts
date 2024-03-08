import { parse } from "node-html-parser";
import * as utils from "../utils";
import { IsoTimeStamp } from "../time/utils";
import { DynamoKeys } from "../dynamo/utils";
import { Table } from "sst/node/table";
import { CourseId } from "../courses/utils";

export type Price = `$${number}.${number}`;

export type TeeTimeEntry = {
  courseId: CourseId;
  teeTime: IsoTimeStamp;
  numPlayers: number;
  price: number;
  numHoles: number;
};

export type TeeTimeEntryWithKeys = TeeTimeEntry & {
  updatedAt: IsoTimeStamp;
} & DynamoKeys;

export const fetchEntries = async ({
  startsAt,
  endsAt,
  courseId,
  updatedAt,
}: {
  startsAt: IsoTimeStamp;
  endsAt: IsoTimeStamp;
  courseId: CourseId;
  updatedAt: IsoTimeStamp;
}): Promise<TeeTimeEntry[]> => {
  const params = {
    TableName: Table.GolfChecker.tableName,

    KeyConditionExpression: `PK = :PK AND SK BETWEEN :startsAt AND :endsAt`,
    ExpressionAttributeValues: {
      ":PK": `entry#updatedAt#${updatedAt}`,
      ":startsAt": `courseId#${courseId}#teeTime#${startsAt}`,
      ":endsAt": `courseId#${courseId}#teeTime#${endsAt}`,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression: "courseId, teeTime, numPlayers, price, numHoles",
  };

  const entries = await utils.queryPaginationRequests<TeeTimeEntry>(params);

  return entries;
};

export const formatEntries = (
  entries: TeeTimeEntry[] = [],
  updatedAt: IsoTimeStamp
): TeeTimeEntryWithKeys[] =>
  entries.map((entry) => ({
    ...entry,
    PK: `entry#updatedAt#${updatedAt}`,
    SK: `courseId#${entry.courseId}#teeTime#${entry.teeTime}`,
    updatedAt,
  }));

export const generateEntriesFromHtml = (
  scrapingText: string
): TeeTimeEntry[] => {
  const root = parse(scrapingText);

  const teeTimeEntries = utils.extractTeeTimeEntries(root);

  return teeTimeEntries;
};

export const saveEntries = async (
  entries: TeeTimeEntry[],
  updatedAt: IsoTimeStamp
): Promise<TeeTimeEntry[]> => {
  const formattedEntries = formatEntries(entries, updatedAt);

  await utils.writePutRequests(Table.GolfChecker.tableName, formattedEntries);

  return entries;
};

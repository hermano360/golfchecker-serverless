import { parse } from "node-html-parser";
import { extractTeeTimeEntries } from "../html/utils";
import { IsoTimeStamp } from "../time/utils";
import { DynamoKeys, writePutRequests } from "../dynamo/utils";
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

  const teeTimeEntries = extractTeeTimeEntries(root);

  return teeTimeEntries;
};

export const saveEntries = async (
  entries: TeeTimeEntry[] = [],
  updatedAt: IsoTimeStamp
) => {
  const formattedEntries = formatEntries(entries, updatedAt);

  return await writePutRequests(Table.GolfChecker.tableName, formattedEntries);
};

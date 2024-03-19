import { parse } from "node-html-parser";
import { Table } from "sst/node/table";
import { queryPaginationRequests, writePutRequests } from "../dynamo/utils";
import { TeeTimeEntry, TeeTimeEntryWithKeys } from "./types";
import { DateSlash, IsoTimeStamp } from "../time/types";
import { CourseId, CourseName } from "../courses/types";
import { extractTeeTimeEntries } from "../html/utils";

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

  const entries = await queryPaginationRequests<TeeTimeEntry>(params);

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
  scrapingText: string,
  data: { date: DateSlash; courses: CourseName[] }
): TeeTimeEntry[] => {
  const root = parse(scrapingText);

  const teeTimeEntries = extractTeeTimeEntries(root);
  console.log(
    `${teeTimeEntries.length} entries fetched for ${
      data.date
    } - ${JSON.stringify(data.courses)}`
  );
  return teeTimeEntries;
};

export const saveEntries = async (
  entries: TeeTimeEntry[],
  updatedAt: IsoTimeStamp
): Promise<TeeTimeEntry[]> => {
  const formattedEntries = formatEntries(entries, updatedAt);

  await writePutRequests(Table.GolfChecker.tableName, formattedEntries);

  return entries;
};

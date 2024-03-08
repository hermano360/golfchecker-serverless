import { CourseId } from "../courses/types";
import { DynamoKeys } from "../dynamo/types";
import { IsoTimeStamp } from "../time/types";

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

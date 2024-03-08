import { CourseId } from "../courses/types";
import { DynamoKeys } from "../dynamo/types";
import { IsoTimeStamp } from "../time/types";

export type Match = {
  courseId: CourseId;
  teeTime: IsoTimeStamp;
  numPlayers: number;
  price: number;
  numHoles: number;
  updatedAt: IsoTimeStamp;
};

export type MatchWithKeys = Match & {
  matchedAt: IsoTimeStamp;
} & DynamoKeys;

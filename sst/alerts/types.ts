import { CourseId } from "../courses/types";
import { ClockTime, DateDash, IsoTimeStamp } from "../time/types";

export type AlertRequest = {
  startTime: ClockTime;
  endTime: ClockTime;
  userId: string;
  courseId: CourseId;
  numPlayers: number;
  startDate: DateDash;
  endDate: DateDash;
};
export type Alert = AlertRequest & { id: string; allowNotification: boolean };

export type AlertSlice = {
  startsAt: IsoTimeStamp;
  endsAt: IsoTimeStamp;
  courseId: CourseId;
};

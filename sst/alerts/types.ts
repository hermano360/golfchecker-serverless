import { ClockTime, DateDash, IsoTimeStamp } from "../time/types";

export type Alert = {
  startTime: ClockTime;
  endTime: ClockTime;
  userId: string;
  courseId: string;
  numPlayers: number;
  id: string;
  startDate: DateDash;
  endDate: DateDash;
};

export type AlertSlice = {
  startsAt: IsoTimeStamp;
  endsAt: IsoTimeStamp;
  courseId: string;
};

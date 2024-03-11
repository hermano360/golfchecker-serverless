import { ClockTime, DateDash, IsoTimeStamp } from "../time/types";

export type AlertRequest = {
  startTime: ClockTime;
  endTime: ClockTime;
  userId: string;
  courseId: string;
  numPlayers: number;
  startDate: DateDash;
  endDate: DateDash;
};
export type Alert = AlertRequest & { id: string };

export type AlertSlice = {
  startsAt: IsoTimeStamp;
  endsAt: IsoTimeStamp;
  courseId: string;
};

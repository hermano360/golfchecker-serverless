import AWS from "aws-sdk";
import { Table } from "sst/node/table";
import { queryPaginationRequests } from "../dynamo/utils";
import {
  ClockTime,
  DateDash,
  IsoTimeStamp,
  generateDateTimeRangeList,
} from "../time/utils";

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

export const fetchAlertsByUser = async (userId: string): Promise<Alert[]> => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": `alert#userId#${userId}`,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression:
      "startTime, endTime, endDate, userId, courseId, startDate, numPlayers, id",
  };

  const alerts = await queryPaginationRequests<Alert>(params);

  return alerts;
};

export const generateAlertSlicesFromAlert = (alert: Alert): AlertSlice[] => {
  console.log({ alert });
  const timeSegments = generateDateTimeRangeList(
    alert.startTime,
    alert.startDate,
    alert.endTime,
    alert.endDate
  );

  return timeSegments.map((timeSegment) => ({
    ...timeSegment,
    courseId: alert.courseId,
  }));
};

export const generateAlertSlices = (alerts: Alert[]): AlertSlice[] => {
  const alertSlicess = alerts.reduce(
    (alertSlices: AlertSlice[], alert: Alert) => [
      ...alertSlices,
      ...generateAlertSlicesFromAlert(alert),
    ],
    []
  );

  return alertSlicess;
};

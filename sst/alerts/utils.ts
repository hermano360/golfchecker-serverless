import { Table } from "sst/node/table";
import { Alert, AlertSlice } from "./types";
import { queryPaginationRequests } from "../dynamo/utils";
import {
  generateDateTimeRangeList,
  getTimeStampFromDateTime,
  getTimeStampNow,
} from "../time/utils";
import { getKeys } from "../dynamo/getKeys";

export const fetchAlertsByUser = async (
  userId: string,
  filterExpired?: boolean
): Promise<Alert[]> => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": getKeys.manyAlerts({ userId }).PK,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression:
      "startTime, endTime, endDate, userId, courseId, startDate, numPlayers, id, allowNotification",
  };

  const alerts = await queryPaginationRequests<Alert>(params);

  if (!filterExpired) {
    return alerts;
  }
  return alerts.filter((alert) => {
    return (
      getTimeStampFromDateTime(alert.endDate, alert.endTime) > getTimeStampNow()
    );
  });
};

export const generateAlertSlicesFromAlert = (alert: Alert): AlertSlice[] => {
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

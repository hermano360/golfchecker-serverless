import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import { randomUUID } from "crypto";
import {
  deleteSingleItem,
  editSingleItem,
  fetchSingleItem,
  saveSingleItem,
  generateUpdateObjects,
} from "../dynamo/utils";
import { Alert } from "./types";
import { fetchAlertsByUser } from "./utils";
import { getKeys } from "../dynamo/getKeys";

export const fetchAlerts = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  console.log({ userId });
  const alerts = await fetchAlertsByUser(userId, true);

  return {
    statusCode: 200,
    body: JSON.stringify(alerts),
  };
});

export const deleteAlertById = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;
  const alertId = evt.pathParameters?.alertId;

  if (!userId || !alertId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: getKeys.singleAlert({ userId, alertId }),
  };
  try {
    await deleteSingleItem(params);

    return {
      statusCode: 200,
      body: `Successfully deleted alertId ${alertId}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `There was an error deleting alertId ${alertId}`,
    };
  }
});

export const fetchAlertById = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;
  const alertId = evt.pathParameters?.alertId;

  if (!userId || !alertId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: getKeys.singleAlert({ userId: userId, alertId }),
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression:
      "startTime, endTime, endDate, userId, courseId, startDate, numPlayers, allowNotification, id",
  };

  try {
    const alert = await fetchSingleItem<Alert>(params);

    if (!alert) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Alert not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(alert),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error fetching alert" }),
    };
  }
});

export const editAlert = ApiHandler(async (evt) => {
  if (!evt.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const body = JSON.parse(evt.body);

  if (!body.userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const alertId = body.alertId;

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: getKeys.singleAlert({ userId: body.userId, alertId }),
    ...generateUpdateObjects(body),
  };

  await editSingleItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
});

export const saveAlert = ApiHandler(async (evt) => {
  if (!evt.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const body = JSON.parse(evt.body);

  if (!body.userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const alertId = randomUUID();

  const data = {
    ...body,
    id: alertId,
    allowNotification: true,
  };

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      ...getKeys.singleAlert({ userId: body.userId, alertId }),
      ...data,
    },
  };
  await saveSingleItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
});

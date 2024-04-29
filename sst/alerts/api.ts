import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import { randomUUID } from "crypto";
import {
  deleteSingleItem,
  editSingleItem,
  fetchSingleItem,
  saveSingleItem,
  generateUpdateObjects,
  getKeys,
} from "../dynamo/utils";
import { Alert } from "./types";
import { fetchAlertsByUser } from "./utils";

export const fetchAlerts = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const alerts = await fetchAlertsByUser(userId, true);

  return {
    statusCode: 200,
    body: JSON.stringify(alerts),
  };
});

export const deleteAlertById = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;
  const id = evt.pathParameters?.alertId;

  console.log({ userId, id });

  if (!userId || !id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: getKeys.singleAlert({ userId, id }),
  };
  try {
    await deleteSingleItem(params);

    return {
      statusCode: 200,
      body: `Successfully deleted alertId ${id}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `There was an error deleting alertId ${id}`,
    };
  }
});

export const fetchAlertById = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;
  const id = evt.pathParameters?.id;

  if (!userId || !id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: getKeys.singleAlert({ userId: userId, id }),
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

  console.log({ body });

  if (!body.userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const id = body.id;

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: getKeys.singleAlert({ userId: body.userId, id }),
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

  const id = randomUUID();

  const data = {
    ...body,
    id,
    allowNotification: true,
  };

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      ...getKeys.singleAlert({ userId: body.userId, id }),
      ...data,
    },
  };
  await saveSingleItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
});

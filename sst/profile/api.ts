import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import { saveSingleItem, getKeys, fetchSingleItem } from "../dynamo/utils";
import { Profile } from "./types";

export const fetchProfileHandler = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const params = {
    TableName: Table.GolfChecker.tableName,
    Key: getKeys.singleProfile({ userId }),
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression:
      "userId, userName, smsAllowed, phone, emailAllowed, email",
  };

  try {
    const profile = await fetchSingleItem<Profile>(params);

    if (!profile) {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(profile),
    };
  } catch (err) {
    console.log({ err });
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    };
  }
});

export const setProfileHandler = ApiHandler(async (evt) => {
  const body = JSON.parse(evt.body);

  if (!body.userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }
  const userId = body.userId;

  console.log({ userId });
  const data = {
    smsAllowed: false,
    emailAllowed: false,
    phone: "",
    email: "",
    ...body,
  };

  const params = {
    TableName: Table.GolfChecker.tableName,
    Item: {
      ...getKeys.singleProfile({ userId }),
      ...data,
    },
  };
  await saveSingleItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
});

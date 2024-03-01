import { ApiHandler } from "sst/node/api";

export const fetchAlerts = ApiHandler(async (evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Fetching Alerts",
    }),
  };
});

export const setAlerts = ApiHandler(async (evt) => {
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

  const { userId } = body;

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
});

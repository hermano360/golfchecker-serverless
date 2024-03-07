import { ApiHandler } from "sst/node/api";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";

import duration from "dayjs/plugin/duration";
import { getPstDayToday } from "../time/utils";

const sqs = new AWS.SQS();

dayjs.extend(utc);
dayjs.extend(duration);

export const initiateEntryFetching = ApiHandler(async (evt) => {
  if (!evt.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const body = JSON.parse(evt.body);

  const pstToday = getPstDayToday();

  // Getting the default date to be searched (in PST) and subsequent days afterwards
  const { date = pstToday, days = 0 } = body;

  await sqs
    .sendMessage({
      QueueUrl: Queue.ScrapeRequestQueue.queueUrl,
      MessageBody: JSON.stringify({
        date,
        days,
      }),
    })
    .promise();

  return {
    statusCode: 200,
    body: `Scraping requested with ${date} with ${days} days ahead`,
  };
});

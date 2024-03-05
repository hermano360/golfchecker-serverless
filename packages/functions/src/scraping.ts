import { ApiHandler } from "sst/node/api";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";

import duration from "dayjs/plugin/duration";

const sqs = new AWS.SQS();

dayjs.extend(utc);
dayjs.extend(duration);

export const startScrape = ApiHandler(async (evt) => {
  if (!evt.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const today = dayjs.utc().subtract(8, "hours").format("MM/DD/YYYY");
  const { date = today, days = 0 } = JSON.parse(evt.body);

  console.log(`Original date ${date} and days ${days}`);
  await sqs
    .sendMessage({
      QueueUrl: Queue.Queue.queueUrl,
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

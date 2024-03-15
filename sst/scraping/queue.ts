import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";
import duration from "dayjs/plugin/duration";
import { exceedsElapsedUpdatedAt } from "../time/utils";
import { deleteSQSMessage, extendSQSMessageVisibility } from "../sqs/utils";
import { extractFirstValidRecord, scrapingUtility } from "./utils";
import { setLatestUpdatedAt } from "../updatedAt/utils";
import { SQSEvent } from "../sqs/types";
import { ScrapeRequestType } from "./types";
import { generateMatches } from "../matches/utils";

const sqs = new AWS.SQS();

dayjs.extend(utc);
dayjs.extend(duration);

export const scrapeRequest = async (event: SQSEvent) => {
  const record = await extractFirstValidRecord(
    Queue.ScrapeRequestQueue.queueUrl,
    event.Records
  );

  if (!record) {
    return;
  }

  const enoughTimeElasped = exceedsElapsedUpdatedAt(300);

  if (!enoughTimeElasped) {
    console.log("Not enough time since last updated");
    await deleteSQSMessage(
      Queue.ScrapeRequestQueue.queueUrl,
      record.receiptHandle
    );
    return {};
  }

  await extendSQSMessageVisibility(
    Queue.ScrapeRequestQueue.queueUrl,
    record.receiptHandle,
    300
  );

  const body: ScrapeRequestType = JSON.parse(record.body);

  const { date, days } = body;

  const updatedAt = await setLatestUpdatedAt();
  const dayArray = Array(days + 1).fill(0);

  const queueQueriesFirst = dayArray.map((_, i) =>
    sqs
      .sendMessage({
        QueueUrl: Queue.FetchingQueue.queueUrl,
        MessageBody: JSON.stringify({
          date: dayjs.utc(date).add(i, "days").format("MM/DD/YYYY"),
          updatedAt,
          courses: ["Griffith Park - Wilson", "Griffith Park - Harding"],
        }),
      })
      .promise()
  );
  const queueQueriesSecond = dayArray.map((_, i) =>
    sqs
      .sendMessage({
        QueueUrl: Queue.FetchingQueue.queueUrl,
        MessageBody: JSON.stringify({
          date: dayjs.utc(date).add(i, "days").format("MM/DD/YYYY"),
          updatedAt,
          courses: ["Roosevelt", "Sepulveda - Balboa", "Sepulveda - Encino"],
        }),
      })
      .promise()
  );
  const queueQueriesThird = dayArray.map((_, i) =>
    sqs
      .sendMessage({
        QueueUrl: Queue.FetchingQueue.queueUrl,
        MessageBody: JSON.stringify({
          date: dayjs.utc(date).add(i, "days").format("MM/DD/YYYY"),
          updatedAt,
          courses: ["Penmar", "Rancho Park"],
        }),
      })
      .promise()
  );

  await Promise.all([
    ...queueQueriesFirst,
    ...queueQueriesSecond,
    ...queueQueriesThird,
  ]);

  await deleteSQSMessage(
    Queue.ScrapeRequestQueue.queueUrl,
    record.receiptHandle
  );

  console.log("Messages queued!");
};

export const scrapeFetch = async (event: SQSEvent) => {
  const records = event.Records;

  for (let record of records) {
    await extendSQSMessageVisibility(
      Queue.FetchingQueue.queueUrl,
      record.receiptHandle,
      300
    );

    const body = JSON.parse(record.body);

    if (!body || !body.date || !body.updatedAt) {
      await deleteSQSMessage(
        Queue.FetchingQueue.queueUrl,
        record.receiptHandle
      );
      return;
    }

    try {
      const { date, updatedAt, courses } = body;

      await scrapingUtility(date, updatedAt, courses);

      console.log("submitted entries, deleting message");

      await deleteSQSMessage(
        Queue.FetchingQueue.queueUrl,
        record.receiptHandle
      );

      // After updating database, try to generate matches for these new times

      await generateMatches();
    } catch (err) {
      console.log(err);

      // set visibilty timeout to 0 so that we can try this again
      await extendSQSMessageVisibility(
        Queue.FetchingQueue.queueUrl,
        record.receiptHandle,
        0
      );
    }
  }
};

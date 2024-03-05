import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";
import { getLatestUpdatedAt, setLatestUpdatedAt } from "../../utils/updatedAt";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import { fetchAlertsByUser } from "../../utils/alerts";
import { fetchEntitiesUtil, setEntryItemUtil } from "../../utils/entities";
import { getRangeListOfDates, parseTimeDashes } from "../../utils/data/time";
import { fetchScraping, processScraping } from "../../utils/scraping";
import { setMatchItemUtil } from "../../utils/matches";
import { setLatestMatchedAtUtil } from "../../utils/matchedAt";

dayjs.extend(duration);
dayjs.extend(utc);

const sqs = new AWS.SQS();

const scrapingUtility = async (date, updatedAt) => {
  const result = await fetchScraping(date);
  console.log("FETCHING SCRAPING", date);
  const { entries } = await processScraping(result);
  console.log("submitting entries", { entries: entries.length, updatedAt });
  await setEntryItemUtil(updatedAt, entries);
  console.log("entries completed", { entries: entries.length, updatedAt });
};

export async function scrape(event) {
  const records = event.Records;
  for (const record of records) {
    try {
      await sqs
        .changeMessageVisibility({
          QueueUrl: Queue.FetchingQueue.queueUrl,
          ReceiptHandle: record.receiptHandle,
          VisibilityTimeout: 300,
        })
        .promise();

      console.log("Changed visiblity", record.receiptHandle);

      const { date, updatedAt } = JSON.parse(record.body);

      await scrapingUtility(date, updatedAt);

      console.log("submitted entries, deleting message");

      await sqs
        .deleteMessage({
          QueueUrl: Queue.FetchingQueue.queueUrl,
          ReceiptHandle: record.receiptHandle,
        })
        .promise();
    } catch (err) {
      console.log(err);
      await sqs
        .changeMessageVisibility({
          QueueUrl: Queue.FetchingQueue.queueUrl,
          ReceiptHandle: record.receiptHandle,
          VisibilityTimeout: 0,
        })
        .promise();
    }
  }

  return { success: true };
}

export async function consumer(event) {
  const firstRecord = event.Records[0];
  const receiptHandle = firstRecord.receiptHandle;

  if (!firstRecord.body) {
    return await sqs
      .deleteMessage({
        QueueUrl: Queue.Queue.queueUrl,
        ReceiptHandle: receiptHandle,
      })
      .promise();
  }

  const { date, days } = JSON.parse(event.Records[0].body);
  if (!date || typeof days === "undefined") {
    return await sqs
      .deleteMessage({
        QueueUrl: Queue.Queue.queueUrl,
        ReceiptHandle: receiptHandle,
      })
      .promise();
  }

  await sqs
    .changeMessageVisibility({
      QueueUrl: Queue.Queue.queueUrl,
      ReceiptHandle: receiptHandle,
      VisibilityTimeout: 300,
    })
    .promise();

  const { updatedAt } = await getLatestUpdatedAt();

  const secondsSinceLastUpdated = dayjs
    .duration(dayjs().diff(dayjs(updatedAt)))
    .asSeconds();

  console.log({ secondsSinceLastUpdated });

  // if (secondsSinceLastUpdated < 300) {
  //   console.log("Not enough time since last updated");
  //   return {};
  // }

  const lastUpdatedAt = await setLatestUpdatedAt();

  const queueQueries = Array(days + 1)
    .fill(0)
    .map((_, i) =>
      sqs
        .sendMessage({
          QueueUrl: Queue.FetchingQueue.queueUrl,
          MessageBody: JSON.stringify({
            date: dayjs
              .utc(date)
              .subtract(8, "hours")
              .add(i, "days")
              .format("MM/DD/YYYY"),
            updatedAt: lastUpdatedAt.updatedAt,
          }),
        })
        .promise()
    );

  await Promise.all(queueQueries);

  await sqs
    .deleteMessage({
      QueueUrl: Queue.Queue.queueUrl,
      ReceiptHandle: receiptHandle,
    })
    .promise();

  console.log("Messages queued!");

  return {};
}

export async function match(event) {
  const userId = JSON.parse(event.Records[0].body).userId;

  const alerts = await fetchAlertsByUser(userId);
  const { updatedAt } = await getLatestUpdatedAt();

  const alertQueries = alerts.reduce((acc, alert) => {
    const dateList = getRangeListOfDates(alert.startDate, alert.endDate);
    const { courseId, startTime, endTime } = alert;

    const values = dateList.map((date) => ({
      updatedAt,
      courseId,
      startsAt: parseTimeDashes(date, startTime),
      endsAt: parseTimeDashes(date, endTime),
    }));

    return [...acc, ...values];
  }, []);

  const matchQueries = await Promise.all(alertQueries.map(fetchEntitiesUtil));

  const matches = matchQueries.reduce((finalMatches, query) => {
    return [...finalMatches, ...query];
  }, []);

  const { matchedAt } = await setLatestMatchedAtUtil(userId);

  if (matches.length === 0) {
    return {};
  }

  await setMatchItemUtil({ matchedAt, userId, matches });

  return {};
}

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

export async function scrape(event) {
  const day = dayjs.utc().utcOffset(-8);

  const offset = JSON.parse(event.Records[0].body).dateOffset;

  if (offset < 0) {
    return;
  }

  const date = day.add(offset, "day").format("MM/DD/YYYY");
  const { updatedAt } = await getLatestUpdatedAt();

  console.log({ date, updatedAt });

  const result = await fetchScraping(date);
  console.log("FETCHING SCRAPING", date);
  const { entries } = await processScraping(result);
  console.log("submitting entries", { entries: entries.length, updatedAt });
  await setEntryItemUtil(updatedAt, entries);
  console.log("submitted entries");

  return {};
}

export async function consumer(event) {
  const day = dayjs.utc().utcOffset(-8);

  const { updatedAt } = await getLatestUpdatedAt();

  const secondsSinceLastUpdated = dayjs
    .duration(dayjs().diff(dayjs(updatedAt)))
    .asSeconds();

  if (secondsSinceLastUpdated < 300) {
    console.log("Not enough time since last updated");
    return {};
  }

  const newUpdatedAt = await setLatestUpdatedAt();

  console.log({ newUpdatedAt });

  //   await sqs
  //     .sendMessage({
  //       QueueUrl: Queue.FetchingQueue.queueUrl,
  //       MessageBody: JSON.stringify({
  //         dateOffset: 0,
  //       }),
  //     })
  //     .promise();
  //   await sqs
  //     .sendMessage({
  //       QueueUrl: Queue.FetchingQueue.queueUrl,
  //       MessageBody: JSON.stringify({
  //         dateOffset: 1,
  //       }),
  //     })
  //     .promise();
  //   await sqs
  //     .sendMessage({
  //       QueueUrl: Queue.FetchingQueue.queueUrl,
  //       MessageBody: JSON.stringify({
  //         dateOffset: 2,
  //       }),
  //     })
  //     .promise();
  await sqs
    .sendMessage({
      QueueUrl: Queue.FetchingQueue.queueUrl,
      MessageBody: JSON.stringify({
        dateOffset: 3,
      }),
    })
    .promise();

  console.log("Messages queued!");

  return {};
}

export async function requester() {
  await sqs
    .sendMessage({
      QueueUrl: Queue.Queue.queueUrl,
      MessageBody: JSON.stringify({ ordered: new Date().toISOString() }),
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "Successfully received request" }),
  };
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

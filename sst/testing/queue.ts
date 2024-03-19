import { Queue } from "sst/node/queue";
import { getPstBusinessDay } from "../time/utils";
import {
  deleteSQSMessage,
  extendSQSMessageVisibility,
  sqs,
} from "../sqs/utils";
import { SQSEvent } from "../sqs/types";
import {
  ScrapeRequestData,
  generateScrapeRequests,
  splitIntoGroups,
} from "./utils";
import { CourseName } from "../courses/types";
import { setLatestUpdatedAt } from "../updatedAt/utils";
import { scrapingUtility } from "../scraping/utils";

const cons = {
  green: (text: string) => console.log("\x1b[32m" + text),
  red: (text: string) => console.log("\x1b[31m" + text),
  blue: (text: string) => console.log("\x1b[34m" + text),
  yellow: (text: string) => console.log("\x1b[33m" + text),
  black: (text: string) => console.log("\x1b[30m" + text),
  magenta: (text: string) => console.log("\x1b[35m" + text),
  cyan: (text: string) => console.log("\x1b[36m" + text),
  white: (text: string) => console.log("\x1b[37m" + text),
  gray: (text: string) => console.log("\x1b[90m" + text),
};

export const acceptQueue = async (event: SQSEvent) => {
  const records = event.Records;

  for (let recordIndex = 0; recordIndex < records.length; recordIndex++) {
    const record = records[recordIndex];
    if (recordIndex > 0) {
      cons.yellow(
        `++++++++++++++++++++++ Post Poning ${record.messageId}++++++++++++++++++++++`
      );

      await extendSQSMessageVisibility(
        Queue.TestAcceptQueue.queueUrl,
        record.receiptHandle,
        0
      );
    } else {
      await extendSQSMessageVisibility(
        Queue.TestAcceptQueue.queueUrl,
        record.receiptHandle,
        300
      );
    }
  }

  const record = records[0];
  cons.green(
    `------------------Starting ${record.messageId}------------------`
  );

  const requests: ScrapeRequestData[] = JSON.parse(record.body);

  const request = requests[0];
  const { date, updatedAt, courses } = request;

  try {
    console.log({ date, updatedAt, courses });
    await scrapingUtility(date, updatedAt, courses);
  } catch (err) {
    cons.blue(
      `++++++++++++++++++++++ Error ${record.messageId} ${JSON.stringify({
        date,
        updatedAt,
        courses,
      })} ++++++++++++++++++++++`
    );
  }

  if (requests.length > 1) {
    await sqs
      .sendMessage({
        QueueUrl: Queue.TestAcceptQueue.queueUrl,
        MessageBody: JSON.stringify(requests.slice(1)),
      })
      .promise();
  } else {
    cons.cyan("Done with fetching group!");
    // await generateMatches();
  }

  deleteSQSMessage(Queue.TestAcceptQueue.queueUrl, record.receiptHandle);
  cons.red(
    `!!!!!!!!!!!!!!!!!!!!!!!Ending ${record.messageId}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`
  );

  return {
    finished: true,
  };
};

export const testReceives = async (event: SQSEvent) => {
  const records = event.Records;

  const date = getPstBusinessDay();
  const days = 6;
  const coursesGroups: CourseName[][] = [
    ["Griffith Park - Wilson"],
    ["Roosevelt"],
    ["Griffith Park - Harding"],
    ["Sepulveda - Balboa"],
    ["Sepulveda - Encino"],
    ["Penmar"],
    ["Rancho Park"],
  ];

  const updatedAt = await setLatestUpdatedAt();
  if (!updatedAt) {
    return;
  }

  const scrapeRequestInfos = generateScrapeRequests(
    date,
    days,
    updatedAt,
    coursesGroups
  );

  const groups = splitIntoGroups(scrapeRequestInfos, 5).filter(
    (group) => group
  );

  for (let group of groups) {
    await sqs
      .sendMessage({
        QueueUrl: Queue.TestAcceptQueue.queueUrl,
        MessageBody: JSON.stringify(group),
      })
      .promise();
  }

  for (const record of records) {
    await deleteSQSMessage(
      Queue.TestReceiveQueue.queueUrl,
      record.receiptHandle
    );
  }

  return {
    statusCode: 200,
    body: `Scraping requested with ${date} with ${days} days ahead`,
  };
};

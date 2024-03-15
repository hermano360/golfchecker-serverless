import { Queue } from "sst/node/queue";
import { getPstBusinessDay } from "../time/utils";
import { sqs } from "../sqs/utils";

export const scheduleFetching = async () => {
  const date = getPstBusinessDay();
  const days = 6;

  console.log({ date, days });

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
};

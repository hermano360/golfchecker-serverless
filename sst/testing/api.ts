import { ApiHandler } from "sst/node/api";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Queue } from "sst/node/queue";
import duration from "dayjs/plugin/duration";
import { sqs } from "../sqs/utils";

dayjs.extend(utc);
dayjs.extend(duration);

export const initiateTestQueue = ApiHandler(async (evt) => {
  await sqs
    .sendMessage({
      QueueUrl: Queue.TestReceiveQueue.queueUrl,
      MessageBody: JSON.stringify({ date: evt.requestContext.timeEpoch }),
    })
    .promise();

  return {
    statusCode: 200,
    body: `Queue Test requested`,
  };
});

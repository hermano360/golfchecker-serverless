import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";
import { fetchAllUsers } from "../users/utils";

const sqs = new AWS.SQS();

export async function initiateMatchesFetching() {
  const users = await fetchAllUsers();

  const userMatchRequests = users.map((userId) =>
    sqs
      .sendMessage({
        QueueUrl: Queue.MatchingQueue.queueUrl,
        MessageBody: JSON.stringify({
          userId,
        }),
      })
      .promise()
  );

  await Promise.all(userMatchRequests);

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "Matching Sequence Initialized" }),
  };
}

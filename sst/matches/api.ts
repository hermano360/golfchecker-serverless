import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";
import { fetchAllUsers } from "../users/utils";
import { ApiHandler } from "sst/node/api";
import * as matchedAtUtils from "../matchedAt/utils";
import * as matchesUtils from "./utils";

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

export const fetchMatchesByUser = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const matchedAt = await matchedAtUtils.getLatestMatchedAt(userId);

  if (!matchedAt) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  try {
    const matches = await matchesUtils.fetchMatchesByUser({
      userId,
      matchedAt,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(matches),
    };
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
});

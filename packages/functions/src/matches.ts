import { fetchAllUsers } from "../../utils/users";
import AWS from "aws-sdk";
import { ApiHandler } from "sst/node/api";
import { Queue } from "sst/node/queue";
import { fetchMatchesUtil } from "../../utils/matches";
import {
  getLatestMatchedAtUtil,
  setLatestMatchedAtUtil,
} from "../../utils/matchedAt";

const sqs = new AWS.SQS();

export async function main() {
  const users = await fetchAllUsers();

  users.forEach(async (userId) => {
    await sqs
      .sendMessage({
        QueueUrl: Queue.MatchingQueue.queueUrl,
        MessageBody: JSON.stringify({
          userId,
        }),
      })
      .promise();
  });

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

  const { matchedAt } = await getLatestMatchedAtUtil(userId);

  try {
    const matches = await fetchMatchesUtil({
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

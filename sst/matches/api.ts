import { Queue } from "sst/node/queue";
import { ApiHandler } from "sst/node/api";
import { sqs } from "../sqs/utils";
import { fetchMatchesByUser } from "./utils";
import { getLatestMatchedAt } from "../matchedAt/utils";
import { fetchAllUsers } from "../users/utils";

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

export const fetchMatchesByUserHandler = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  const matchedAt = await getLatestMatchedAt(userId);

  if (!matchedAt) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  try {
    const matches = await fetchMatchesByUser({
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

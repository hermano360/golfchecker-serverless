import { Queue } from "sst/node/queue";
import {
  SQSEvent,
  deleteSQSMessage,
  extendSQSMessageVisibility,
} from "../sqs/utils";
import { formatMatches, generateMatchesByUser } from "./utils";
import { writePutRequests } from "../dynamo/utils";
import { Table } from "sst/node/table";

export async function match(event: SQSEvent) {
  for (const record of event.Records) {
    await extendSQSMessageVisibility(
      Queue.MatchingQueue.queueUrl,
      record.receiptHandle,
      300
    );

    if (!record.body) {
      await deleteSQSMessage(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle
      );
    }

    const { userId } = JSON.parse(record.body);
    if (!userId) {
      await deleteSQSMessage(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle
      );
      return {};
    }

    try {
      const { matches, matchedAt } = await generateMatchesByUser(userId);

      const formattedMatches = formatMatches(userId, matches, matchedAt);

      await writePutRequests(Table.GolfChecker.tableName, formattedMatches);

      await deleteSQSMessage(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle
      );
    } catch (err) {
      console.log(err);
      console.log(
        `Had a problem fetching matches for user ${userId}. Trying again`
      );

      await extendSQSMessageVisibility(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle,
        0
      );
    }
  }

  return {};
}

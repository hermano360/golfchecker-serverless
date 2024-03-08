import { Queue } from "sst/node/queue";
import { SQSEvent } from "../sqs/utils";
import { Table } from "sst/node/table";
import * as utils from "../utils";

export async function match(event: SQSEvent) {
  for (const record of event.Records) {
    await utils.extendSQSMessageVisibility(
      Queue.MatchingQueue.queueUrl,
      record.receiptHandle,
      300
    );

    if (!record.body) {
      await utils.deleteSQSMessage(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle
      );
    }

    const { userId } = JSON.parse(record.body);
    if (!userId) {
      await utils.deleteSQSMessage(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle
      );
      return {};
    }

    try {
      const { matches, matchedAt } = await utils.generateMatchesByUser(userId);

      const formattedMatches = utils.formatMatches(userId, matches, matchedAt);

      await utils.writePutRequests(
        Table.GolfChecker.tableName,
        formattedMatches
      );

      await utils.deleteSQSMessage(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle
      );
    } catch (err) {
      console.log(err);
      console.log(
        `Had a problem fetching matches for user ${userId}. Trying again`
      );

      await utils.extendSQSMessageVisibility(
        Queue.MatchingQueue.queueUrl,
        record.receiptHandle,
        0
      );
    }
  }

  return {};
}

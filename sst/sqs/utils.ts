import AWS from "aws-sdk";

const sqs = new AWS.SQS();

export type SQSRecord = {
  messageId: string;
  receiptHandle: string;
  body: string;
};

export type SQSEvent = {
  Records: SQSRecord[];
};

export const deleteSQSMessage = async (
  queueUrl: string,
  receiptHandle: string
) => {
  return await sqs
    .deleteMessage({
      QueueUrl: queueUrl,
      ReceiptHandle: receiptHandle,
    })
    .promise();
};

export const extendSQSMessageVisibility = async (
  queueUrl: string,
  receiptHandle: string,
  extensionSeconds: number
) => {
  return await sqs
    .changeMessageVisibility({
      QueueUrl: queueUrl,
      ReceiptHandle: receiptHandle,
      VisibilityTimeout: extensionSeconds,
    })
    .promise();
};

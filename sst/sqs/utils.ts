import AWS from "aws-sdk";

export const sqs = new AWS.SQS();

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

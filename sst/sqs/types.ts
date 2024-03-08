export type SQSRecord = {
  messageId: string;
  receiptHandle: string;
  body: string;
};

export type SQSEvent = {
  Records: SQSRecord[];
};

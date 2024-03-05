import AWS from "aws-sdk";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const fetchAllUsers = async () => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": `userId`,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression: "id",
  };

  const itemsCollection = [];
  let isLastEvalutedKeyUndefined = false;
  let ExclusiveStartKey = undefined;
  let result;

  while (!isLastEvalutedKeyUndefined) {
    result = await dynamoDb.query({ ...params, ExclusiveStartKey }).promise();
    const { Items = [] } = result;
    itemsCollection.push(...Items.map(({ id }) => id));

    isLastEvalutedKeyUndefined = typeof result.LastEvaluatedKey === "undefined";
    ExclusiveStartKey = result.LastEvaluatedKey;
  }

  return itemsCollection;
};

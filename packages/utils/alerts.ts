import AWS from "aws-sdk";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const fetchAlertsByUser = async (userId) => {
  const params = {
    TableName: Table.GolfChecker.tableName,
    KeyConditionExpression: `PK = :PK`,
    ExpressionAttributeValues: {
      ":PK": `alert#userId#${userId}`,
    },
    Select: "SPECIFIC_ATTRIBUTES",
    ProjectionExpression:
      "startTime, endTime, endDate, userId, courseId, startDate, numPlayers, id",
  };

  const results = await dynamoDb.query(params).promise();

  const { Items = [] } = results;

  return Items;
};

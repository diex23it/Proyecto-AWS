const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.ORDERS_TABLE;

exports.putItem = async (item) => {
  await dynamodb.put({ TableName: TABLE_NAME, Item: item }).promise();
};

exports.getItem = async (id) => {
  const result = await dynamodb.get({
    TableName: TABLE_NAME,
    Key: { id }
  }).promise();
  return result.Item;
};
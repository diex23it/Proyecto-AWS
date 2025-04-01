const { getItem } = require('../utils/db');

exports.handler = async (event) => {
  const orderId = event.pathParameters.id;
  const order = await getItem(orderId);

  if (!order) {
    return { statusCode: 404, body: JSON.stringify({ message: "No encontrado" }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(order),
  };
};
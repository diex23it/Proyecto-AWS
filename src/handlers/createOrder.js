const { v4: uuidv4 } = require('uuid');
const { putItem } = require('../utils/db');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const orderId = uuidv4();

  const order = {
    id: orderId,
    customer: data.customer,
    items: data.items,
    total: data.total,
    createdAt: new Date().toISOString()
  };

  await putItem(order);

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Pedido creado", id: orderId }),
  };
};
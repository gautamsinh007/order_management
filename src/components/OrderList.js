import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.order_id} className="list-group-item">
            <strong>ID:</strong> {order.order_id} <br />
            <strong>Type:</strong> {order.order_type} <br />
            <strong>Quantity:</strong> {order.quantity} <br />
            <strong>Status:</strong> {order.status} <br />
            <strong>Date:</strong> {order.order_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;

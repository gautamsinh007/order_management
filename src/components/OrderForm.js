import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const OrderForm = ({ addOrder }) => {
  const [order, setOrder] = useState({
    order_id: '',
    order_type: 'pickup',
    quantity: 1,
    status: 'Open Transaction', // Initial status
    order_date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ ...order, order_id: uuidv4() });
    setOrder({
      order_id: '',
      order_type: 'pickup',
      quantity: 1,
      status: 'Open Transaction', // Reset to initial status
      order_date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <div className="backg">

   
    <form onSubmit={handleSubmit} className="form-group">
      <label>Order Type:</label>
      <select name="order_type" value={order.order_type} onChange={handleChange} className="form-control">
        <option value="pickup">Pickup</option>
        <option value="delivery">Delivery</option>
      </select>

      <label>Quantity:</label>
      <input type="number" name="quantity" value={order.quantity} onChange={handleChange} className="form-control" />

      <label>Order Date:</label>
      <input type="date" name="order_date" value={order.order_date} onChange={handleChange} className="form-control" />
        <br/>
      <button type="submit" className="btn btn-primary mt-3">Create Order</button>
    </form>
    </div>
  );
};

export default OrderForm;

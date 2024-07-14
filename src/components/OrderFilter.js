import React, { useState } from 'react';

const OrderFilter = ({ filterOrders }) => {
  const [filter, setFilter] = useState({
    order_type: '',
    status: '',
    order_date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterOrders(filter);
  };

  return (

    <div>
    <form onSubmit={handleSubmit} className="form-group filter-form">
      <label>Order Type:</label>
      <select name="order_type" value={filter.order_type} onChange={handleChange} className="form-control">
        <option value="">All</option>
        <option value="pickup">Pickup</option>
        <option value="delivery">Delivery</option>
      </select>

      <label>Status:</label>
      <select name="status" value={filter.status} onChange={handleChange} className="form-control">
        <option value="">All</option>
        <option value="Open Transaction">Open Transaction</option>
        <option value="Unassign">Unassign</option>
        <option value="Assign">Assign</option>
        <option value="Out For Delivery">Out For Delivery</option>
        <option value="Delivered">Delivered</option>
        <option value="Not Delivered">Not Delivered</option>
      </select>

      <label>Order Date:</label>
      <input type="date" name="order_date" value={filter.order_date} onChange={handleChange} className="form-control" />
        <br/>
      <button type="submit" className="btn btn-primary mt-3">Filter Orders</button>
    </form>
    </div>
  );
};

export default OrderFilter;

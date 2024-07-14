import React, { useState, useEffect } from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderFilter from './components/OrderFilter';
import './styles.css';

const App = () => {
  const [orders, setOrders] = useState([]);

  // Retrieve orders from local storage when the component mounts
  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  // Save orders to local storage whenever orders state changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const filterOrders = (filter) => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    const filteredOrders = storedOrders.filter((order) => {
      return (
        (filter.order_type === '' || order.order_type === filter.order_type) &&
        (filter.status === '' || order.status === filter.status) &&
        (filter.order_date === '' || order.order_date === filter.order_date)
      );
    });
    setOrders(filteredOrders);
  };

  return (
    <div className="App">
      <h1>Order Management</h1>
      <OrderForm addOrder={addOrder} />
      <OrderFilter filterOrders={filterOrders} />
      <OrderList orders={orders} />
    </div>
  );
};

export default App;

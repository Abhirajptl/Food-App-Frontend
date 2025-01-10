import  { useState, useEffect } from "react";
import API from "../services/api";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await API.get("/orders");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order #{order._id} - Total: ${order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
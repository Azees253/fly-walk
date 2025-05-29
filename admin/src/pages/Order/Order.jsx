import React from "react";
import "./Order.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import box from "../../assets/box.jpeg";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div className="order-item">
            <img src={box} alt="" style={{ width: "50px" }} />
            <p className="order-item-food">
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + "x" + item.quantity;
                } else {
                  return item.name + "x" + item.quantity;
                }
              })}
            </p>
            <p className="order-item-name">
              {order.address
                ? `${order.address.firstName} ${order.address.lastName}`
                : "No Name"}
            </p>
            <div className="order-item-address">
              <p>{order.address ? `${order.address.street}` : "No street"}</p>
              <p>
                {order.address
                  ? `${order.address.city},${order.address.state},${order.address.country},${order.address.zipcode}`
                  : "No city"}
              </p>
              <p className="order-item-phone">
                <p>{order.address ? `${order.address.phone}` : "No phone"}</p>
              </p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Processing This Items">
                Processing This Items
              </option>
              <option value="Shipping This Items">Shipping This Items</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivery This Items">Delivery This Items</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

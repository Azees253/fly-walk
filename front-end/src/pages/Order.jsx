import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Order.css";
import box from "../assets/box.jpeg";

const Order = ({ url, token }) => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <>
      <div className="my-orders">
        <h1>My Orders</h1>
        <div className="container">
          {data.map((order, index) => {
            return (
              <div key={index} className="my-orders-order">
                <img src={box} alt="" style={{ width: "50px" }} />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
                <p>Items:{order.items.length}</p>
                <p>
                  <span>&#x25cf;</span>
                  <b>{order.status}</b>
                </p>
                <button>Track Order</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-box-1">
            <h2 className="heading-text"> FLYWALK</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className="footer-icon-container">
              <i
                class="fa-brands fa-instagram"
                style={{ color: "#ffffff" }}
              ></i>
              <i class="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i>
              <i class="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i>
            </div>
          </div>
        </div>

        <p>@2025 FLYWALK</p>
      </div>
    </>
  );
};

export default Order;

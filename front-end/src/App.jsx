import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Navbar from "./Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Loginpopup from "./pages/Loginpopup";
import axios from "axios";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState("");
  const [CollectionItems, setCollectioItems] = useState([]);
  const [itemCount, setItemCount] = useState({});

  const url = "https://fly-walk-back-end.onrender.com";

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setItemCount(response.data.cartData);
  };

  const addTocart = async (itemId) => {
    if (!itemCount[itemId]) {
      setItemCount((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setItemCount((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setItemCount((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in itemCount) {
      if (itemCount[item] > 0) {
        let itemInfo = CollectionItems.find((product) => product._id === item);

        if (itemInfo) {
          totalAmount += itemInfo.price * itemCount[item];
        }
      }
    }
    return totalAmount;
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // const placeOrder = async (event) => {
  //   event.preventDefault();
  //   let orderItems = [];
  //   CollectionItems.map((item) => {
  //     if (itemCount[item._id] > 0) {
  //       let itemInfo = item;
  //       itemInfo["quantity"] = itemCount[item._id];
  //       orderItems.push(itemInfo);
  //     }
  //   });
  //   let orderData = {
  //     address: data,
  //     items: orderItems,
  //     amount: getTotalCartAmount() + 2,
  //   };
  //   let response = await axios.post(url + "/api/order/place", orderData, {
  //     headers: { token },
  //   });
  //   if (response.data.success) {
  //     const { session_url } = response.data;
  //     window.location.replace(session_url);
  //   } else {
  //     alert("Error");
  //   }
  // };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    CollectionItems.map((item) => {
      if (itemCount[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = itemCount[item._id];
        orderItems.push(itemInfo);
      }
    });

    try {
      let orderData = {
        items: orderItems,
        amount: getTotalCartAmount() + 2, // items total + delivery charges
        address: data, // Make sure to pass address from form
        userId: token, // or however you're storing user ID
      };

      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        // For COD, no need to redirect to payment gateway
        // Instead, redirect to order confirmation or success page
        alert("Order placed successfully!");

        // Clear cart or redirect to order confirmation page
        // Example: navigate to orders page or clear cart
        window.location.replace(`/order`); // or wherever you want to redirect
      } else {
        alert(
          "Error placing order: " + (response.data.message || "Unknown error")
        );
      }
    } catch (error) {
      console.log("Error creating order:", error);
      alert("Error placing order");
    }
  };

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/cart");
  //   } else if (getTotalCartAmount() === 0) {
  //     navigate("/cart");
  //   }
  // }, [token]);

  return (
    <div>
      {showLogin ? (
        <Loginpopup setToken={setToken} setShowLogin={setShowLogin} />
      ) : (
        <></>
      )}
      <Navbar
        token={token}
        setToken={setToken}
        setShowLogin={setShowLogin}
        setCollectioItems={setCollectioItems}
        loadCartData={loadCartData}
        getTotalCartAmount={getTotalCartAmount}
        CollectionItems={CollectionItems}
      />
      <Routes>
        <Route
          path="/"
          element={<Home token={token} CollectionItems={CollectionItems} />}
        />
        <Route
          path="/collection"
          element={
            <Collection
              token={token}
              itemCount={itemCount}
              setItemCount={setItemCount}
              addTocart={addTocart}
              removeFromCart={removeFromCart}
              CollectionItems={CollectionItems}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              getTotalCartAmount={getTotalCartAmount}
              onChangeHandler={onChangeHandler}
              data={data}
              placeOrder={placeOrder}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              itemCount={itemCount}
              CollectionItems={CollectionItems}
              removeFromCart={removeFromCart}
              getTotalCartAmount={getTotalCartAmount}
            />
          }
        />
        <Route path="/order" element={<Order url={url} token={token} />} />
      </Routes>
    </div>
  );
}

import React, { useState } from "react";
import "../styles/Loginpop.css";
import axios from "axios";

const Loginpopup = ({ setShowLogin, setToken }) => {
  const [current, setCurrent] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const url = "https://fly-walk-back-end.onrender.com";

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (current === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={onLogin} className="login-form">
        <div className="login-title">
          <h3>{current}</h3>
          <i class="fa-solid fa-xmark" onClick={() => setShowLogin(false)}></i>
        </div>
        <div className="login-input">
          {current === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="YourName"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="YourEmail"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">
          {current === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-para">
          {current === "Login" ? (
            <p>
              Create a New account{" "}
              <span onClick={() => setCurrent("Sign up")}> Login here</span>
            </p>
          ) : (
            <p>
              Already have a account{" "}
              <span onClick={() => setCurrent("Login")}>Click Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Loginpopup;

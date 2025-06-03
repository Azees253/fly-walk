import { Link, useNavigate } from "react-router-dom";
import { NavbarItems } from "./pages/NavbarItems";
import "./styles/NavbarStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar({
  setShowLogin,
  token,
  setToken,
  setCollectioItems,
  loadCartData,
  getTotalCartAmount,
}) {
  const [state, setState] = useState(false);

  function handleClick() {
    setState({ clicked: !state.clicked });
  }

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const url = "https://fly-walk-back-end.onrender.com";

  const fetchCollection = async () => {
    const response = await axios.get(url + "/api/collection/list");
    setCollectioItems(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchCollection();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  return (
    <div className="NavbarItems">
      <h1 className="navbar-logo">
        FAY<span className="w">W</span>
        <span className="a">ALKS</span>
      </h1>
      <div className="shopping">
        <Link to="/cart">
          <i
            class="fa-brands fa-shopify"
            style={{ fontSize: "30px", color: "white" }}
          ></i>
        </Link>
        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}
        ></i>
      </div>
      <u1 className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {NavbarItems.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            </>
          );
        })}
      </u1>
      <div className="nav-btn">
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <i class="fa-solid fa-circle-user" style={{ fontSize: "25px" }}></i>
            <ul className="nav-profile-dropdown">
              <li>
                <i class="fa-solid fa-bag-shopping"></i>
                <li onClick={() => navigate("/order")}>
                  <p>Order</p>
                </li>
              </li>
              <hr />
              <li onClick={Logout}>
                <i class="fa-solid fa-right-from-bracket"></i>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

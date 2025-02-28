import { Link } from "react-router-dom";
import { NavbarItems } from "./pages/NavbarItems";
import "./styles/NavbarStyles.css";
import { useState } from "react";

export default function Navbar() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState({ clicked: !state.clicked });
  }

  return (
    <div className="NavbarItems">
      <h1 className="navbar-logo">
        Fly<span className="w">W</span>
        <span className="a">alks</span>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}
        ></i>
      </div>
      <u1 className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </u1>
    </div>
  );
}

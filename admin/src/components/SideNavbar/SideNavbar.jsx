import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <i class="fa-solid fa-circle-plus"></i>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <i class="fa-solid fa-check"></i>
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <i class="fa-solid fa-check"></i>
          <p>order Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNavbar;

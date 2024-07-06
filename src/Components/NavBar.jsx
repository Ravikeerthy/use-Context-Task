import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Styles/NavBarStyle.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link">
            Product
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default NavBar;

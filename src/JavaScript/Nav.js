import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/#order">Order Online</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

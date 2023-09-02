import React from "react";
import { Link } from "react-router-dom";
import Resturant from "../images/restaurant.jpg";

function Footer() {
  return (
    <footer>
      <div className="footer-img">
        <img alt="footer" src={Resturant} />
      </div>
      <div className="footer-links">
        <h3>Navigation</h3>
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
      </div>

      <div className="footer-links">
        <h3>Contact</h3>
        <ul>
          <li>Phone Number</li>
          <li>Email</li>
          <li>Address</li>
        </ul>
      </div>

      <div className="footer-links">
        <h3>Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

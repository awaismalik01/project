import React from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
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

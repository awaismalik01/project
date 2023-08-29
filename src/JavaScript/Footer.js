import React from "react";
import Logo from "../images/Logo.svg";

function Footer() {
  return (
    <footer>
      <img alt="footer" src={Logo} />
      <div>
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

      <div>
        <h3>Contact</h3>
        <ul>
          <li>Phone Number</li>
          <li>Email</li>
          <li>Address</li>
        </ul>
      </div>

      <div>
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

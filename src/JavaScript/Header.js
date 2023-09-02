import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="body">
        <div className="heading">
          <h1>Little Lemon</h1>
          <h3>California</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={() => navigate("/booking")}>Reserve a Table</button>
        </div>

        <div className="image">
          <img src={require("../images/restauranfood.jpg")} alt="food" />
        </div>
      </div>
    </header>
  );
}

export default Header;

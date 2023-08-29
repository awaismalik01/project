import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1>Little Lemon</h1>
        <h3>California</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>

      <div>
        <img src={require("../images/restauranfood.jpg")} alt="food" />
      </div>
    </header>
  );
}

export default Header;

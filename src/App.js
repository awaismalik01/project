import React from "react";
import "./css/style.css";
import "./css/mobileStyle.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

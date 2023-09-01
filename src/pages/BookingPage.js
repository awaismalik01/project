import React, { useReducer, useState } from "react";
import Nav from "../JavaScript/Nav";
import Footer from "../JavaScript/Footer";
import BookingForm from "../JavaScript/BookingForm";

function BookingPage() {
  const initialTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const updateTimes = () => {
    return [...initialTimes()];
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

  return (
    <>
      <Nav />
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={dispatch}
      />
      <Footer />
    </>
  );
}

export default BookingPage;

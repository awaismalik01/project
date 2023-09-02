import React, { useReducer } from "react";
import Nav from "../JavaScript/Nav";
import Footer from "../JavaScript/Footer";
import BookingForm from "../JavaScript/BookingForm";
import { initialTimes, updateTimes } from "../utils/Utils";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes());

  return (
    <>
      <Nav />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
}

export default BookingPage;

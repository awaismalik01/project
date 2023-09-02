import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const bookingData = localStorage.getItem("Booking");
    if (!!bookingData) {
      setBooking(JSON.parse(bookingData));
    }
  }, []);

  useEffect(() => {
    console.log(booking);
  }, [booking]);

  return (
    <main>
      <div className="confirmation">
        <h1>Your Reservation is confirmed!</h1>
        <div className="details">
          <h2>Confirmation Details</h2>
          <p>
            <span>Occastion:</span> {booking?.occasion}
          </p>
          <p>
            <span>Guests:</span> {booking?.guests}
          </p>
          <p>
            <span>Date:</span> {booking?.date}
          </p>
          <p>
            <span>Time:</span> {booking?.time}
          </p>
        </div>

        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </main>
  );
}

export default ConfirmedBooking;

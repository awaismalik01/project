import React, { useEffect, useState } from "react";

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    setAvailableTimes();
    setTime("");
  }, [date, setAvailableTimes]);

  const makeReseration = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Book Now</h1>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={makeReseration}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          name="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          name="time"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes?.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;

import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { submitApi } from "../utils/Utils";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      time: availableTimes[0] || "",
      guests: 1,
      occasion: "Birthday",
    },
    onSubmit: (values) => {
      if (submitApi(values)) {
        localStorage.setItem("Booking", JSON.stringify(values));
        navigate("/confirmation");
      }
    },

    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().oneOf(availableTimes).required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be at most 10")
        .required("Number of guests is required"),
      occasion: Yup.string()
        .oneOf(["Birthday", "Anniversary"])
        .required("Occasion is required"),
    }),
  });

  useEffect(() => {
    dispatch({
      type: "UPDATE_TIME",
      date: new Date(formik.values.date),
    });
  }, [dispatch, formik.values.date]);

  return (
    <main>
      <div className="formGroup">
        <h1>Book Now</h1>
        <form data-testid="form" onSubmit={formik.handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            data-testid="res-date"
            id="res-date"
            {...formik.getFieldProps("date")}
          />
          <span data-testid="error-date">asv{formik.errors.date}</span>

          <label htmlFor="res-time">Choose time</label>
          <select
            data-testid="res-time"
            id="res-time"
            {...formik.getFieldProps("time")}
          >
            {availableTimes?.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <span data-testid="error-time">{formik.errors.time}</span>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            data-testid="guests"
            id="guests"
            {...formik.getFieldProps("guests")}
          />
          <span data-testid="error-guest">{formik.errors.guests}</span>

          <label htmlFor="occasion">Occasion</label>
          <select
            data-testid="occasion"
            id="occasion"
            {...formik.getFieldProps("occasion")}
          >
            <option value={"Birthday"}>Birthday</option>
            <option value={"Anniversary"}>Anniversary</option>
          </select>
          <span>{formik.errors.occasion}</span>

          <input
            type="submit"
            data-testid="make-reservation"
            value="Make Your reservation"
            disabled={
              !!formik.errors.occasion ||
              !!formik.errors.guests ||
              !!formik.errors.time ||
              !!formik.errors.date
            }
          />
        </form>
      </div>
    </main>
  );
}

export default BookingForm;

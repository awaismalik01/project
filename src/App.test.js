import { fireEvent, render, screen } from "@testing-library/react";
import { fetchAPI, initialTimes, submitApi, updateTimes } from "./utils/Utils";
import BookingForm from "./JavaScript/BookingForm";
import { MemoryRouter } from "react-router-dom";

describe("BookingForm", () => {
  test("Renders the BookingForm heading", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={initialTimes()}
          dispatch={jest.fn((action) => action)}
        />
      </MemoryRouter>
    );

    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();

    const chooseDateLabel = screen.getByText("Choose date");
    expect(chooseDateLabel).toBeInTheDocument();
    const chooseDateField = screen.getByTestId("res-date");
    expect(chooseDateField).toBeInTheDocument();

    const chooseTimeLabel = screen.getByText("Choose time");
    expect(chooseTimeLabel).toBeInTheDocument();
    const chooseTimeField = screen.getByTestId("res-time");
    expect(chooseTimeField).toBeInTheDocument();

    const chooseGuestsLabel = screen.getByText("Number of guests");
    expect(chooseGuestsLabel).toBeInTheDocument();
    const chooseGuestsField = screen.getByTestId("guests");
    expect(chooseGuestsField).toBeInTheDocument();

    const chooseOccasionLabel = screen.getByText("Occasion");
    expect(chooseOccasionLabel).toBeInTheDocument();
    const chooseOccasionField = screen.getByTestId("occasion");
    expect(chooseOccasionField).toBeInTheDocument();

    const submitBtn = screen.getByTestId("make-reservation");
    expect(submitBtn).toBeInTheDocument();
  });

  test("initializeTime Test", () => {
    const availableTimes = initialTimes();
    expect(availableTimes).toEqual(fetchAPI(new Date()));
  });

  test("updatedTime Test", () => {
    const state = initialTimes();
    const updatedTime = updateTimes(state, {
      type: "UPDATE_TIME",
      date: new Date(),
    });
    expect(updatedTime).toEqual(state);
  });

  test("submitAPI Test", () => {
    const formData = {
      date: "2022-10-12",
      time: "20:00",
      guests: 5,
      occasion: "Birthday",
    };

    const result = submitApi(formData);
    expect(result).toBe(true);
  });

  test("BookingForm Validation Test", async () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={initialTimes()}
          dispatch={jest.fn((action) => action)}
        />
      </MemoryRouter>
    );

    const chooseDateField = screen.getByTestId("res-date");
    fireEvent.change(chooseDateField, { target: { value: "2023-09-02" } });
    expect(chooseDateField.value).toBe("2023-09-02");

    const chooseTimeField = screen.getByTestId("res-time");
    fireEvent.change(chooseTimeField, { target: { value: "20:00" } });
    expect(chooseTimeField.value).toBe("20:00");

    const chooseGuestsField = screen.getByTestId("guests");
    fireEvent.change(chooseGuestsField, { target: { value: 5 } });
    expect(chooseGuestsField.value).toBe("5");

    const chooseOccasionField = screen.getByTestId("occasion");
    fireEvent.change(chooseOccasionField, { target: { value: "Anniversary" } });
    expect(chooseOccasionField.value).toBe("Anniversary");
  });

});

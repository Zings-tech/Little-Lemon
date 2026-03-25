import { useState } from "react";
import "../styles/BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(e.target.value);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  };

    const isFormValid = () => {
    return (
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== ""
    );
  };

    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!isFormValid()) return;

      const formData = {
        date,
        time,
        guests,
        occasion
      };

    submitForm(formData);

    };


  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={today}
        aria-label="Choose reservation date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-label="Choose reservation time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        aria-label="Choose number of guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Choose occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {!isFormValid() && (
        <p className="error-text">Please fill all fields correctly.</p>
      )}

      <button
        type="submit"
        className="submit-btn"
        aria-label="Submit reservation form"
        disabled={!isFormValid()}
        >Submit Reservation</button>
    </form>
  );
}


export default BookingForm;
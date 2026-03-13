import { useState } from "react";
import "../styles/BookingForm.css"
import { submitAPI } from '../utils/tempAPI.js';

function BookingForm({ availableTimes, dispatch }) {

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


    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        date,
        time,
        guests,
        occasion
      };

    const success = submitAPI(formData);
    if (success) {
        alert("Reservation confirmed!");
    }
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
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
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
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" className="submit-btn">Submit Reservation</button>
    </form>
  );
}


export default BookingForm;
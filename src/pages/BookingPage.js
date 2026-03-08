import BookingForm from "./BookingForm.js"

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}/>
    </section>
  );
}

export default BookingPage;
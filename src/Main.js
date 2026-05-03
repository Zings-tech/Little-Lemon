import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from './utils/timesReducer';
import ConfirmedBooking from './pages/ConfirmedBooking';
import { submitAPI } from './utils/tempAPI';
import { LoginPage } from './pages/LoginPage';

function Main() {

   const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

    const navigate = useNavigate();

    function submitForm(formData) {
      const result = submitAPI(formData);
      if (result) {
        navigate("/confirmed");
      }
  }


  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
         path="/booking"
         element={
           <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
           />
          }
         />
         <Route path="/confirmed" element={<ConfirmedBooking />} />
         <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </main>
  );
}

export default Main;
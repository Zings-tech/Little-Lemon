import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "./utils/timesReducer";

function Main() {

   const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );


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
           />
          }
         />
      </Routes>
    </main>
  );
}

export default Main;
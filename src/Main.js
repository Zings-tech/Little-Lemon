import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { useState, useReducer } from "react";


function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  return state;
}


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
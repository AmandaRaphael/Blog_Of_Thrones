import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HouseCardDetail from './components/HouseCardDetail/HouseCardDetail';
import NavBar from './components/Navigation/NavBar';
import HomePage from "./routes/HomePage/HomePage_Desktop/HomePage"
const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:houseName" element={<HouseCardDetail/>}/>
        {/* <Route exact path="/bookings" element={<Booking />}>
          <Route path="/bookings/:alliance" element={<List />} />
        </Route> */}
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


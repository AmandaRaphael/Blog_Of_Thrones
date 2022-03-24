import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HouseCardDetail from './components/HouseCardDetail/HouseCardDetail';
import HomePage from "./routes/HomePage/HomePage/HomePage"
import AboutPage from "./routes/AboutPage/AboutMe"
import "./App.css";
const App = () => {
 
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<HomePage />} >
        <Route path="/:houseName" element={ <HouseCardDetail/>}/>
        </Route>
        <Route path="/aboutMe" element={<AboutPage/>}></Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


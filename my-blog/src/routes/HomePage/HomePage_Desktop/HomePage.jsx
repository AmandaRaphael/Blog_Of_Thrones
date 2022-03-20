import React from "react";
import NavBar from "../../../components/Navigation/NavBar.jsx"
import FilterComponent from "../../../components/FilterComponent/FilterComponent";
import HouseCard from "../../../components/HouseCard/HouseCard";
import style from "./homePage.module.css";
import ControlButtons from "../../../components/paginationControlComponent/ControlButtons.jsx";
const HomePage = () => {
  return (
    <main className={style.mainContainer}>
       <NavBar/>
      <h1>Houses</h1>
      <div className={style.componentContainer}>
        <ControlButtons/>
        <FilterComponent />
        <HouseCard />
      </div>
    </main>
  );
};

export default HomePage;

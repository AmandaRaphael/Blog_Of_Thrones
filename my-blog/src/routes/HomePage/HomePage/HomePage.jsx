import React from "react";
import NavBar from "../../../components/Navigation/NavBar.jsx";
import FilterComponent from "../../../components/FilterComponent/FilterComponent";
import HouseCard from "../../../components/HouseCard/HouseCard";
import style from "./homePage.module.css";
import ControlButtons from "../../../components/paginationControlComponent/ControlButtons.jsx";

const HomePage = () => {
//  Documentation: HomePage is the root element that renders the following components.
  return (
    <main className={style.mainContainer}>
      <NavBar />
      <h1>Houses</h1>
      <div className={style.componentContainer}>
        <FilterComponent />
        <HouseCard />
        <ControlButtons />
      </div>
    </main>
  );
};

export default HomePage;

import React from "react";
import FilterComponent from "../../../components/FilterComponent/FilterComponent";
import HouseCard from "../../../components/HouseCard/HouseCard";
import style from "./homePage.module.css";
const HomePage = () => {
  return (
    <main className={style.mainContainer}>
      <h1>Welcome to Game of Thrones Blog</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        architecto in minima natus aut! Quibusdam obcaecati ea aperiam, porro
        corporis deserunt? Quaerat ullam laudantium repellendus ratione, eum
        nobis molestias minus!
      </p>
      <div className={style.componentContainer}>
        <FilterComponent />
        <HouseCard />
      </div>
    </main>
  );
};

export default HomePage;

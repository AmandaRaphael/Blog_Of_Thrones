import { useContext } from "react";
import { Outlet } from "react-router-dom";
import MyContext from "../../context/MyContext";
import LoadCard from "./LoadCard";
import { usePromiseTracker } from "react-promise-tracker";
import Spinner from "../Spinner/Spinner.js";

const HouseCard = () => {
  const { data } = useContext(MyContext);

  const { results } = data;

  const { promiseInProgress } = usePromiseTracker();
  

  return (
    <div>
      <Outlet />
      {promiseInProgress === true ? <Spinner /> : results ? <LoadCard /> : null}
    </div>
  );
};

export default HouseCard;

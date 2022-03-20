import { useContext } from "react";
import { Outlet } from "react-router-dom";
import MyContext from "../../context/MyContext";
import LoadCard from "./LoadCard";


const HouseCard = () => {
  
  
    const { data } = useContext(MyContext);
    
    const { results } = data;

      
  return (
    <div>
      <Outlet/>
      {results ? (
        <LoadCard/> 
      )
       : null}
    </div>
  );
};

export default HouseCard;

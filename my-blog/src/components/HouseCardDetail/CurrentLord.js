import{useContext} from 'react'
import {usePromiseTracker}  from "react-promise-tracker";
import Spinner from "../Spinner/Spinner.js";
import MyContext from "../../context/MyContext";

const CurrentLord = ({ renderCardInfo}) => {
  
    const {
      currentLord,
    
    } = useContext(MyContext);
  
  const { promiseInProgress } = usePromiseTracker();
  
    return (
      <div>
        {promiseInProgress === true ? (
          <div>
            <Spinner />
          </div>
        ) : currentLord ? (
          <div>{renderCardInfo(currentLord, "Current Lord")}</div>
        ) : null}

      </div>
    );
}

export default CurrentLord

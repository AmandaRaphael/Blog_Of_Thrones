import { useContext } from "react";
import style from "./houseCardDetail.module.css";
import MyContext from "../../context/MyContext";
import KnowCurrentLordButton from "./KnowCurrentLordButton";
import CurrentLord from "./CurrentLord";
import { usePromiseTracker } from "react-promise-tracker";
import Spinner from "../Spinner/Spinner";

const LeftCardDetails = ({ renderCardInfo, houseName }) => {
    
    const {
      data,
    cardInfo,
    showCurrentLordButton,
    showCurrentLord,
  } = useContext(MyContext);

    const { promiseInProgress } = usePromiseTracker();
    
    const { results } = data;

  //for h2 in the render
  const getHouseCardDetails = (name) => {
    return results.data.filter((house) => house.name === name);
  };
    
  return (
    <div className={style.leftCardDetails}>
      <h2>
        {results ? <p>{getHouseCardDetails(houseName)[0]?.name}</p> : null}
      </h2>
      <div>{renderCardInfo(cardInfo?.name, "House")}</div>
      <div>{renderCardInfo(cardInfo?.region, "Region")}</div>
      <div>{renderCardInfo(cardInfo?.founded, "Founded")}</div>
      {showCurrentLordButton && <KnowCurrentLordButton />}
      {promiseInProgress && <Spinner />}
      {showCurrentLord && <CurrentLord renderCardInfo={renderCardInfo} />}
    </div>
  );
};

export default LeftCardDetails;

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../../context/MyContext";
import style from "./houseCardDetail.module.css";
import { usePromiseTracker } from "react-promise-tracker";
import Spinner from "../Spinner/Spinner.js";

const HouseCardDetail = () => {
  const { houseName } = useParams();

  const { data, selectedCardUrl, getImageFilter } = useContext(MyContext);
  const { results } = data;

  const [cardInfo, setCardInfo] = useState(null);

  const [currentLord, setCurrentLord] = useState(null);

  const { promiseInProgress } = usePromiseTracker();

  //for h2 in the render
  const getHouseCardDetails = (name) => {
    return results.data.filter((house) => house.name === name);
  };

  //For fetching card details using state selectedCardUrl which updates listening to the click event of the card.

  const fetchSelectedCardDetails = () => {
    fetch(selectedCardUrl)
      .then((response) => response.json())
      .then((cardData) => {
        setCardInfo(cardData);
      });
  };

  useEffect(() => {
    setCurrentLord(null);
    fetchSelectedCardDetails();
  }, [selectedCardUrl]);

  //Function to render in card details section in a format
  const renderCardInfo = (value, label) => {
    if (!value) {
      return null;
    }

    return (
      <li className={style.labelValueList}>
        {label} : {value}
      </li>
    );
  };

  //check if there is a link and then fetch data from the link corresponding to currentlord
  
  const fetchCurrentLord = (url) => {
    if (!url) {
      setCurrentLord("Sorry, no information yet.")
      return
    }
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setCurrentLord(result.name);
      });
  };

  return (
    <div className={style.cardDetailsContainer}>
      {
        <div className={style.cardDetails}>
          <div className={style.leftCardDetails}>
            <h2>
              {results ? (
                <p>{getHouseCardDetails(houseName)[0]?.name}</p>
              ) : null}
            </h2>
            <div>{renderCardInfo(cardInfo?.name, "House")}</div>
            <div>{renderCardInfo(cardInfo?.region, "Region")}</div>
            <div>{renderCardInfo(cardInfo?.founded, "Founded")}</div>
            {promiseInProgress === true ? (
              <Spinner />
            ) : currentLord ? (
              <div>{renderCardInfo(currentLord, "Current Lord")}</div>
            ) : null}
            <div className={style.controls}>
              <button
                className={style.btn}
                onClick={() => fetchCurrentLord(cardInfo?.currentLord)}
              >
                Know Current Lord
              </button>
            </div>
          </div>

          <div className={style.rightCardDetails}>
            <img src={getImageFilter(cardInfo?.region)} alt="cardDetailImage" />
            <div className={style.info}>
              <h2> Description</h2>
              <ul>
                {renderCardInfo(cardInfo?.region, "Region")}
                {renderCardInfo(cardInfo?.coatOfArms, "Coat of Arms")}
                {renderCardInfo(cardInfo?.words, "Words")}{" "}
                {renderCardInfo(cardInfo?.founded, "Founded")}{" "}
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default HouseCardDetail;

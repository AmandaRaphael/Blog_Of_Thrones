import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../../context/MyContext";
import style from "./houseCardDetail.module.css";

const HouseCardDetail = () => {
  const { houseName } = useParams();
  const { data, selectedCardUrl } = useContext(MyContext);
  const { results } = data;
  const [cardInfo, setCardInfo] = useState(null);

  console.log("kk", houseName, selectedCardUrl);

  const getHouseCardDetails = (name) => {
    return results.data.filter((house) => house.name === name);
  };

  const fetchSelectedCardDetails = () => {
    fetch(selectedCardUrl)
      .then((response) => response.json())
      .then((cardData) => {
        console.log("ooooo", cardData);
        setCardInfo(cardData);
      });
  };

  useEffect(() => {
    fetchSelectedCardDetails();
  }, [selectedCardUrl]);

  const renderCardInfo = (value, label) => {
    if (!value) {
      return null;
    }

    return (
      <li>
        {label} : {value}
      </li>
    );
  };

  return (
    <div className={style.cardDetailsContainer}>
      {
        <div className={style.cardDetails}>
          {results ? (
            <p>House: {getHouseCardDetails(houseName)[0].name}</p>
          ) : null}
          {renderCardInfo(cardInfo?.region, "Region")}
          {renderCardInfo(cardInfo?.coatOfArms, "Coat of Arms")}
          {renderCardInfo(cardInfo?.words, "Words")}
          {/* {renderCardInfo(cardInfo?.currentLord, "Current Lord")} */}
          {renderCardInfo(cardInfo?.founded, "Founded")}
        </div>
      }
    </div>
  );
};

export default HouseCardDetail;

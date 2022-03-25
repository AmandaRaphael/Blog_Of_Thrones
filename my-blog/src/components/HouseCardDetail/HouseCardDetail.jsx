import { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import MyContext from "../../context/MyContext";
import style from "./houseCardDetail.module.css";
import RightCardDetails from "./RightCardDetails";
import LeftCardDetails from "./LeftCardDetails";

const HouseCardDetail = () => {

  //to display h2 immediately while api is fetches for card details
  const { houseName } = useParams();

  const {
    selectedCardUrl,
    setCardInfo,
    setCurrentLord,
    setShowCurrentLordButton,
  } = useContext(MyContext);


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
    setShowCurrentLordButton(true)
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

  return (
    <div className={style.cardDetailsContainer}>
      {
        <div className={style.cardDetails}>
          <LeftCardDetails renderCardInfo={renderCardInfo} houseName={houseName} />
          <RightCardDetails renderCardInfo={renderCardInfo} />
        </div>
      }
    </div>
  );
};

export default HouseCardDetail;

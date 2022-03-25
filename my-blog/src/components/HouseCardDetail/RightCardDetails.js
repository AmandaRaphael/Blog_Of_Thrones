import {useContext} from 'react'
import style from "./houseCardDetail.module.css";
import MyContext from "../../context/MyContext";

const RightCardDetails = ({ renderCardInfo }) => {
    
    const { getImageFilter, cardInfo } = useContext(MyContext);
    
    return (
      <div className={style.rightCardDetails}>
        <img src={getImageFilter(cardInfo?.region)} alt="cardDetailImage" />
        <div className={style.info}>
          <h2> Description</h2>
          <ul>
            {renderCardInfo(cardInfo?.region, "Region")}
            {renderCardInfo(cardInfo?.coatOfArms, "Coat of Arms")}
            {renderCardInfo(cardInfo?.words, "Words")}{" "}
          </ul>
        </div>
      </div>
    );
}

export default RightCardDetails

import {useContext} from 'react'
import style from "./houseCardDetail.module.css";
import MyContext from "../../context/MyContext";


const KnowCurrentLordButton = ({renderCardInfo}) => {
 
     
  const {
    cardInfo,
    setCurrentLord,
    setShowCurrentLord,
    setShowCurrentLordButton,
  } = useContext(MyContext);

  
  //check if there is a link and then fetch data from the link corresponding to currentlord

  const fetchCurrentLord = (url) => {
    if (!url) {
      setCurrentLord("Sorry, no information yet.");
      return;
    }
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCurrentLord(result.name);
        setShowCurrentLord(true)
      });
  };
    const handleClick = () => {
        fetchCurrentLord(cardInfo?.currentLord)
        setShowCurrentLordButton((prev) => !prev);
    }
  return (
    <div className={style.controls}>
      <button className={style.btn} onClick={() => handleClick()}>
        Know Current Lord
      </button>
    </div>
  );
}

export default KnowCurrentLordButton

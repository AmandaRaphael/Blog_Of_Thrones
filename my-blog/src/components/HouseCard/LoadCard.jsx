import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { Card } from "react-bootstrap";
import styles from "./loadCard.module.css";
import dummyPic from "../../assets/images/GAME-OF-THRONES.jpg";

const LoadCard = ({house,i}) => {
  const {
    setSelectedCardUrl,
    getImageFilter,
    setShowCurrentLord,
  } = useContext(MyContext);

 
  const handleCardClick = (house) => {
    window.scrollTo({
      top: 800,
      left: 100,
      behavior: "smooth",
    });
    setSelectedCardUrl(house.url);
    setShowCurrentLord(true);
  };

  return (
                <div>
                  <Link
                    className={styles.knowMoreLink}
                    to={`/${house.name}`}
                    onClick={() => handleCardClick(house)}
                  >
                    <Card className={styles.card}>
                      <Card.Img
                        variant="top"
                        src={
                          house.region ? getImageFilter(house.region) : dummyPic
                        }
                        className={styles.cardImg}
                      />
                      <Card.Body>
                        <Card.Title className={styles.height}>
                          <span>House : </span>
                          {house.name}
                        </Card.Title>
                        <Card.Text className={styles.height}>
                          <span>Region : </span>
                          {house.region}
                        </Card.Text>
                      </Card.Body>{" "}
                    </Card>
                  </Link>
                </div>
              );
};

export default LoadCard;

import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { Card } from "react-bootstrap";
import styles from "./loadCard.module.css";
import dummyPic from "../../assets/images/GAME-OF-THRONES.jpg";

const LoadCard = () => {
  const {
    data,
    setSelectedCardUrl,
    getImageFilter,
    getFilteredRegion,
    selectionState,
  } = useContext(MyContext);

  const { results } = data;

  // array which is used to map for rendering the cards
  let filteredArray = [];

  //maps through the state(selectionState) which has the initial value from  data.js in the assets folder.And then checks in the each data object whether selected key is true
  selectionState.forEach((region) => {
    if (region.selected) {
      filteredArray.push(...getFilteredRegion(region.name));
    }
  });

  filteredArray = filteredArray.length === 0 ? results.data : filteredArray;

  const handleCardClick = (house) => {
    window.scrollTo({
      top: 800,
      left: 100,
      behavior: "smooth",
    });
    setSelectedCardUrl(house.url);
  };

  return (
    <main>
      <div className={styles.cardContainer}>
        {filteredArray
          ? filteredArray.map((house, i) => {
              return (
                <div key={i}>
                  {" "}
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
            })
          : null}
      </div>
    </main>
  );
};

export default LoadCard;

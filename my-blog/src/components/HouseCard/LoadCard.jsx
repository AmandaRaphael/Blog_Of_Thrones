import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { Card } from "react-bootstrap";
import styles from "./loadCard.module.css";
import dummyPic from "../../assets/images/GAME-OF-THRONES.jpg";
import filterData from "../FilterComponent/filterData";

const LoadCard = () => {
  const {
    data,
    setSelectedCardUrl,
    getImageFilter,
    filterRegionState,
    getFilteredRegion,
  } = useContext(MyContext);

  const { results } = data;

 
  const {
    reach,
    north,
    westerlands,
    crownlands,
    vale,
    ironIslands,
    stormlands,
    dorne,
    riverlands,
    neck,
  } = filterRegionState;

  // const pushToFilteredArray = (houseName) => {
  //     console.log(filterData)
  //     const houseObject = filterData.filter((house) => house.name === houseName)
  //      console.log("xx",houseObject)
  //    return getFilteredRegion(houseObject.label);
  //  };

  let filteredArray = [];

  if (reach) {
    // filteredArray.push(...pushToFilteredArray(reach));
    filteredArray.push(...getFilteredRegion("The Reach"));
    console.log(filteredArray);
  }
  if (north) {
    filteredArray.push(...getFilteredRegion("The North"));
  }
  if (westerlands) {
    filteredArray.push(...getFilteredRegion("The Westerlands"));
  }
  if (vale) {
    filteredArray.push(...getFilteredRegion("The Vale"));
  }
  if (ironIslands) {
    filteredArray.push(...getFilteredRegion("Iron Islands"));
  }
  if (stormlands) {
    filteredArray.push(...getFilteredRegion("The Stormlands"));
  }
  if (dorne) {
    filteredArray.push(...getFilteredRegion("Dorne"));
  }
  if (westerlands) {
    filteredArray.push(...getFilteredRegion("The Westerlands"));
  }
  if (riverlands) {
    filteredArray.push(...getFilteredRegion("The Riverlands"));
  }
  if (neck) {
    filteredArray.push(...getFilteredRegion("The Neck"));
  }
  if (
    !(
      reach ||
      north ||
      westerlands ||
      crownlands ||
      vale ||
      ironIslands ||
      stormlands ||
      dorne ||
      riverlands ||
      neck
    )
  ) {
    filteredArray = results.data;
  }

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

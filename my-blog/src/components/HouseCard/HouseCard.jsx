import { useContext } from "react";
import { Outlet } from "react-router-dom";
import MyContext from "../../context/MyContext";
import LoadCard from "./LoadCard";
import styles from "./loadCard.module.css";


const HouseCard = () => {
  const { data, selectionState, getFilteredRegion } = useContext(MyContext);

  const { results } = data;

  

  // array which is used to map for rendering the cards
  let filteredArray = [];

  //maps through the state(selectionState) which has the initial value from  data.js in the assets folder.And then checks in the each data object whether selected key is true
  selectionState.forEach((region) => {
    if (region.selected) {
      filteredArray.push(...getFilteredRegion(region.name));
    }
  });
  //checks if any of the regions are selected
  const isSelected = selectionState.find((region) => region.selected === true);

  filteredArray = isSelected ? filteredArray : results?.data;

  return (
    <div>
      <Outlet />
      <main>
        <div className={styles.cardContainer}>
          {filteredArray
            ? filteredArray.map((house, i) => <LoadCard house={house} key={house.name} />)
            : null}
        </div>
      </main>
    </div>
  );
};

export default HouseCard;

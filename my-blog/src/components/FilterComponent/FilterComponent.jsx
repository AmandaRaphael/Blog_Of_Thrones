import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import style from "./filterComponent.module.css";
import filterData from "./filterData";

const FilterComponent = () => {

  const { selectionState, setSelectionState } = useContext(MyContext);

  const navigate = useNavigate();

  //to display houses with selected Regions
  const displaySelectedHouses = (e) => {
    const currentSelection = selectionState.find(
      (regions) => regions.region === e.target.name
    );

    if (currentSelection) {
      currentSelection.selected = e.target.checked;
    }
    setSelectionState([...selectionState]);

  };

  //checkboxes handle function to filter regions
  const handleChange = (e) => {
    //to exit if the user is in a nested route
    navigate("/");
    
    displaySelectedHouses(e);
  };

  return (
    <div className={style.checkbox}>
      <h2>Filter by Regions</h2>
      <div className={style.container}>
        <ul className={style.checkboxTags}>
          {filterData.map((houseName, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  id={`checkbox${i}`}
                  name={`${houseName.name}`}
                  onChange={handleChange}
                />
                <label htmlFor={`checkbox${i}`}>{`${houseName.label}`}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;

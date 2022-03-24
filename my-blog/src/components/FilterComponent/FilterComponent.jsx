import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import style from "./filterComponent.module.css";
import filterData from "./filterData";

const FilterComponent = () => {
  const { selectionState, setSelectionState } = useContext(MyContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate("/");
    const currentSelection = selectionState.find(
      (regions) => regions.region === e.target.name
    );

    if (currentSelection) {
      currentSelection.selected = e.target.checked;
    }
    setSelectionState([...selectionState]);
  };

  return (
    <div className={style.checkbox}>
      <h2>Filter by Regions</h2>

      <div className={style.container}>
        <ul class={style.checkboxTags}>
          {filterData.map((houseName, i) => {
            return (
              <li>
                <input
                  type="checkbox"
                  id={`checkbox${i}`}
                  name={`${houseName.name}`}
                  onChange={handleChange}
                />
                <label for={`checkbox${i}`}>{`${houseName.label}`}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;

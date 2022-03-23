import { useContext } from "react";
// import { Form } from "react-bootstrap";
import MyContext from "../../context/MyContext";
import style from "./filterComponent.module.css";
import filterData from "./filterData";

const FilterComponent = () => {
  const { filterRegionState, setFilterRegionState } = useContext(MyContext);

  const handleChange = (e) => {
    console.log("handlechange");
    setFilterRegionState({
      ...filterRegionState,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className={style.checkbox}>
      <h2>Filter by important Regions</h2>

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

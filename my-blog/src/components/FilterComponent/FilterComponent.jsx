import {useContext} from 'react'
import { Form } from "react-bootstrap";
import MyContext from '../../context/MyContext';
import style from "./filterComponent.module.css"
const FilterComponent = () => {
    const { filterRegionState, setFilterRegionState } = useContext(MyContext)
    
    const handleChange = (e) => {
        console.log("handlechange")
        setFilterRegionState({
          ...filterRegionState,
          [e.target.name]: e.target.checked,
        });
      };
    
    return (
      <div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label className={style.label}>Filter by Important Regions</Form.Label>
          <div className={style.checkbox}>
            {" "}
            <Form.Check
              type="checkbox"
              label="The Reach"
              onChange={handleChange}
              name="reach"
            />
            <Form.Check
              type="checkbox"
              label="The Westerlands"
              name="westerlands"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              label="The North"
              name="north"
              onChange={handleChange}
            />
          </div>
        </Form.Group>
      </div>
    );
}

export default FilterComponent

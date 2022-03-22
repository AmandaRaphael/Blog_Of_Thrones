import { useContext} from 'react'
import {useNavigate}from "react-router-dom"
import MyContext from "../../context/MyContext";
import style from "./controlButtons.module.css"

const ControlButtons = () => {
    const totalPages = 444/12;
  const { page, setPage } = useContext(MyContext);

  const navigate= useNavigate()
     const nextPage = () => {
       setPage((prev) => prev + 1);
       navigate("/")
     };
  
  const previousPage = () => {
      navigate("/");
      setPage((prevPage) => prevPage - 1);
   }
    return (
      <div className={style.controlButtons}>
        {page > 1 && (
          <button
            className={style.glowOnHover}
            onClick={previousPage}
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button className={style.glowOnHover} onClick={nextPage}>
            Next
          </button>
        )}

        {page < totalPages && (
          <span onClick={nextPage}>{totalPages - page} pages more</span>
        )}
      </div>
    );
}

export default ControlButtons

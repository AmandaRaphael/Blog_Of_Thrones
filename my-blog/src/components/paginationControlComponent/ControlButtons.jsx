import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import style from "./controlButtons.module.css";

const ControlButtons = () => {
  //From Provider
  const { page, setPage } = useContext(MyContext);

  const navigate = useNavigate();

  const totalPages = 444 / 12;

  //Function called when  control buttons are clicked
  const resetPagePosition = () => {
    navigate("/");
    window.scrollTo({
      top: 150,
      left: 100,
      behavior: "smooth",
    });
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
    resetPagePosition();
  };

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
    resetPagePosition();
  };

  return (
    <div className={style.controlButtons}>
      {page > 1 && (
        <button className={style.glowOnHover} onClick={previousPage}>
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
};

export default ControlButtons;

import { useContext } from "react";
import MyContext from "../../context/MyContext";
const HouseCard = () => {
  const { data } = useContext(MyContext);
  const { results } = data;

  return (
    <div>
      {results ? (
        results.data.map((ele, i) => {
          return (
            <div>
              {" "}
              <li key={ele.name}>{ele.name}</li>
            </div>
          );
        })
      ) : (
        <li>Sorry! No search results for</li>
      )}
    </div>
  );
};

export default HouseCard;

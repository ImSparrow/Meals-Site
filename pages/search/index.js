import { useContext } from "react";
import RandomFood from "../../components/Main/RandomFood";
import FoodContext from "../../store/api";
import classes from "./index.module.css";
const SearchResultPage = () => {
  const foodCtx = useContext(FoodContext);
  if (foodCtx.results !== null) {
    return (
      <div className={classes["result"]}>
        {foodCtx.results.map((result) => {
          return <RandomFood key={result.idMeal} meal={result}></RandomFood>;
        })}
      </div>
    );
  } else {
    return <div className={classes['notFound']}>No Meals Found</div>;
  }
};

export default SearchResultPage;

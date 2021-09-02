import { useContext, useEffect } from "react";
import FoodContext from "../../store/api";
import FavoriteItem from "./FavoriteItem";
import classes from "./Favorite.module.css";
const Favorite = () => {
  const foodCtx = useContext(FoodContext);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("FavoriteRecipes"));

    if (favorites !== null) {
      foodCtx.addAllFavorite(favorites);
    }
    
  }, []);

  if (foodCtx.favorite.length !== 0) {
    return (
      <div className={classes["favorite--container"]}>
        <h3>Favorites</h3>
        <div className={classes["favorite--container__food--container"]}>
          {foodCtx.favorite.map((meal) => {
            return <FavoriteItem key={meal.idMeal} item={meal}></FavoriteItem>;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes["empty"]}>
        <h3>Favorites</h3>
        <p>Favorites are empty</p>
      </div>
    );
  }
};

export default Favorite;

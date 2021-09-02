import Image from "next/image";
import classes from "./Favorite.module.css";
import FavoriteItemInfo from "./FavoriteItemInfo";
import { useState, useEffect, useContext } from "react";
import FoodContext from "../../store/api";
const FavoriteItem = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const foodCtx = useContext(FoodContext);
  const meal = props.item;
  useEffect(() => {
    localStorage.setItem("FavoriteRecipes", JSON.stringify(foodCtx.favorite));
  }, [foodCtx.favorite]);
  return (
    <>
      {showInfo && (
        <FavoriteItemInfo
          title={meal.strMeal}
          info={meal.strInstructions}
          image={meal.strMealThumb}
          meal={meal}
          onClose={() => {
            setShowInfo(false);
          }}
        ></FavoriteItemInfo>
      )}
      <div
        className={classes["food--image__container"]}
        onClick={() => {
          setShowInfo(true);
        }}
      >
        <div>
          <Image
            className={classes["food--image"]}
            src={meal.strMealThumb}
            alt="Favorite Image"
            width="250"
            height="250"
          ></Image>
        </div>
        <div>
          <p>{meal.strMeal}</p>
        </div>
      </div>
    </>
  );
};

export default FavoriteItem;

import Image from "next/image";
import classes from "./Favorite.module.css";
import FavoriteItemInfo from "./FavoriteItemInfo";
import { useState } from "react";
const FavoriteItem = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const meal = props.item;
  return (
    <>
      {showInfo && (
        <FavoriteItemInfo
          title={meal.strMeal}
          info={meal.strInstructions}
          image={meal.strMealThumb}
          meal={meal}
          onClose={()=>{setShowInfo(false)}}
        ></FavoriteItemInfo>
      )}
      <div className={classes["food--image__container"]} onClick={()=>{setShowInfo(true)}}>
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

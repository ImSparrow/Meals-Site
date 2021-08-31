// import Dummy from "../../public/random.json";
import Image from "next/image";
import FavoriteItemInfo from "./FavoriteItemInfo";
import classes from "./RandomFood.module.css";
import { useState } from "react";
const RandomFood = (props) => {
  const [isInfo, setIsInfo] = useState(false);
  const meal = props.meal;
  if (!meal || meal===null) {
    return <div></div>;
  }
  return (
    <>
      {isInfo && (
        <FavoriteItemInfo
          image={meal.strMealThumb}
          title={meal.strMeal}
          info={meal.strInstructions}
          meal={meal}
          onClose={() => {
            setIsInfo(false);
          }}
        ></FavoriteItemInfo>
      )}
      <div
        className={classes["randomfood--container"]}
        onClick={() => {
          setIsInfo(true);
        }}
      >
        <div className={classes["title"]}>
          <h2>{meal.strMeal}</h2>
        </div>
        <div className={classes["card"]}>
          <div className={classes["image--container"]}>
            <Image
              src={meal.strMealThumb}
              className={classes["image"]}
              alt="Random Image"
              width="300"
              height="300"
            ></Image>
          </div>
          <div className={classes["text--container"]}>
            <h1>{meal.strMeal}</h1>
            <p>{meal.strCategory}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomFood;

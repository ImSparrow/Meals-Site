import ReactDOM from "react-dom";
import classes from "./FavoriteItemInfo.module.css";
import Image from "next/image";
import FoodContext from "../../store/api";
import { useContext, useState, useEffect } from "react";
const FavoriteItemInfo = (props) => {
  const foodCtx = useContext(FoodContext);
  const [canAdd, setCanAdd] = useState(true);
  useEffect(() => {
    if (foodCtx.favorite.find((meal) => meal.idMeal === props.meal.idMeal)) {
      setCanAdd(false);
    } else {
      setCanAdd(true);
    }
    
    localStorage.setItem("FavoriteRecipes", JSON.stringify(foodCtx.favorite));
  }, [foodCtx.favorite]);

  const addHandler = async () => {
    foodCtx.addFavorite(props.meal);
  };
  const removeHandler = () => {
    foodCtx.removeFavorite(props.meal);
  };

  return ReactDOM.createPortal(
    <div className={classes["showinfo"]}>
      <div className={classes["showinfo--container"]}>
        <div
          className={classes["image--div"]}
          onClick={() => {
            window.open(props.image);
          }}
        >
          <Image
            className={classes["food--image"]}
            src={props.image}
            alt="Favorite Image"
            width="300"
            height="300"
          ></Image>
        </div>
        <div className={classes["title--container"]}>
          <h1>{props.title}</h1>
          {canAdd && (
            <Image
              src="/plus.svg"
              height={30}
              width={30}
              className={classes["add"]}
              onClick={addHandler}
            ></Image>
          )}
          {!canAdd && (
            <Image
              src="/minus.svg"
              height={30}
              width={30}
              className={classes["add"]}
              onClick={removeHandler}
            ></Image>
          )}
        </div>
        <div className={classes["text"]}>
          <p>{props.info}</p>
        </div>
      </div>
      <div className={classes["backdrop"]} onClick={props.onClose}></div>
    </div>,
    document.getElementById("info")
  );
};

export default FavoriteItemInfo;

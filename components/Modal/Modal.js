import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";
import { useRef, useContext } from "react";
import FoodContext from "../../store/api";
const Modal = (props) => {
  const router = useRouter();
  const searchRef = useRef();
  const foodCtx = useContext(FoodContext);
  const searchHandler = async (event) => {
    if (event.key === "Enter") {
      const search = searchRef.current.value;
      searchRef.current.value = "";
      try {
        const response = await fetch(`/api/food/${search}`);
        if (!response.ok) {
          throw new Error("Something went wrong while fetching");
        }
        const data = await response.json();
        foodCtx.addResult(data.data.meals);
        props.onClose();
        router.push("/search");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return ReactDOM.createPortal(
    <div className={classes["modal"]}>
      <div className={classes["search"]}>
        <input
          type="text"
          placeholder="Search..."
          onKeyPress={searchHandler}
          ref={searchRef}
          autoFocus
        ></input>
      </div>
      <div className={classes["backdrop"]} onClick={props.onClose}></div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;

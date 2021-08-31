import classes from "./Navigation.module.css";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState, useRef,useContext } from "react";
import { useRouter } from "next/router";
import FoodContext from "../../store/api";
const Navigation = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const router = useRouter();
  const searchRef = useRef();
  const foodCtx = useContext(FoodContext);
  const toggleHandler = () => {
    setSearchToggle((prev) => {
      return !prev;
    });
  };
  const searchHandler = async (event) => {
    if (event.key === "Enter") {
      const search = searchRef.current.value;
      searchRef.current.value = '';
      try {
        const response = await fetch(`/api/food/${search}`);
        if (!response.ok) {
          throw new Error("Something went wrong while fetching");
        }
        const data = await response.json();
        foodCtx.addResult(data.data.meals);
        router.push('/search');
      } catch (error) {
        console.log(error);
      }
    }
  };
  const iconHandler = ()=>{
    router.push('/');
  }
  return (
    <div className={classes["main--nav"]}>
      <div className={classes["main--nav__title"]}>
        <h1 onClick={iconHandler}>TheMealDB</h1>
      </div>{" "}
      <div
        className={classes["main--nav__search--icon"]}
        onClick={toggleHandler}
      >
        <Image src="/search.svg" height={30} width={30}></Image>
      </div>
      {searchToggle && (
        <Modal
          onClose={() => {
            setSearchToggle(false);
          }}
        ></Modal>
      )}
      <div className={classes["main--nav__search"]}>
        <input
          type="text"
          placeholder="Search..."
          ref={searchRef}
          onKeyPress={searchHandler}
          className={classes["main--nav__search--text"]}
        ></input>
      </div>
    </div>
  );
};

export default Navigation;

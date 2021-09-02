import Favorite from "../Main/Favorite";
import RandomFood from "../Main/RandomFood";
import { useEffect, useState,} from "react";
const Main = () => {
  const [initialMeal, setInitialMeal] = useState(null);



  // Use to get Random Recipes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/random");
        if (!response.ok) {
          throw new Error("Something Went Wrong Gathering Random");
        }
        const data = await response.json();
        setInitialMeal(data.data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Favorite></Favorite>
      {initialMeal && (
        <div>
          <div>
            <h2>Random Recipe</h2>
          </div>
          <RandomFood meal={initialMeal}></RandomFood>
        </div>
      )}
    </div>
  );
};

export default Main;

import React, { useState, useReducer } from "react";
const FoodContext = React.createContext({
  favorite: [],
  results: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  addResult: (results) => {},
  clearResult: () => {},
  addAllFavorite: () => {},
});

// const foodReducer = (state,action)=>{
//   if (action.type === 'AddResult'){

//   }
// }
export const FoodContextProvider = (props) => {
  const [resultsState, setResultsState] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const addFavorite = (meal) => {
    setFavorite((prev) => {
      return [...prev, meal];
    });
  };
  const removeFavorite = (mealRemoved) => {
    setFavorite((prev) => {
      return prev.filter((meal) => meal.idMeal !== mealRemoved.idMeal);
    });
  };
  const addResult = (results) => {
    setResultsState(results);
  };
  const clearResult = () => {
    setResultsState([]);
  };
  const addAllFavorite = (allFavorites) => {
    setFavorite((prev) => allFavorites);
  };

  const foodContext = {
    favorite: favorite,
    results: resultsState,
    addFavorite,
    removeFavorite,
    addResult,
    clearResult,
    addAllFavorite,
  };
  return (
    <FoodContext.Provider value={foodContext}>
      {props.children}
    </FoodContext.Provider>
  );
};
export default FoodContext;

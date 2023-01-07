import React from "react";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../utility/api";
const samples = require("../samples.json");

function RecipeList({ filterOptions = { options: "none" } }) {
  const [recipeItems, setRecipeItems] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await getFilteredRecipes(filterOptions);
      setRecipeItems(response);
      console.log(response);
    }

    // getRecipes();
  }, [filterOptions]);

  return (
    <div>
      <h3>Recipe List</h3>
    </div>
  );
}

export default RecipeList;

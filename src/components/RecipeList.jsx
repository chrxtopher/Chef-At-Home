import React from "react";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../utility/api";
import SmallRecipeItem from "./SmallRecipeItem";
const sample = require("../samples.json");

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
      <ul>
        {sample.results.map((recipe) => {
          return (
            <li>
              <SmallRecipeItem
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeList;

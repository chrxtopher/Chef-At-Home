import React from "react";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../utility/api";
import SmallRecipeItem from "./SmallRecipeItem";
import NoSearch from "./NoSearch";
import "../styles/recipeList.css";
// const sample = require("../samples.json");

function RecipeList({ filterOptions = { options: "none" } }) {
  const [recipeItems, setRecipeItems] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await getFilteredRecipes(filterOptions);
      setRecipeItems(response.results);
    }

    // getRecipes();
  }, [filterOptions]);

  return (
    <div className="recipe-list">
      {!filterOptions.submitted && <NoSearch />}
      {filterOptions.submitted && recipeItems.length > 0 && (
        <ul>
          {recipeItems.map((recipe) => {
            return (
              <li key={recipe.id}>
                <SmallRecipeItem
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;

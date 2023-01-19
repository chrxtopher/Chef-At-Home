import React from "react";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../utility/api";
import SmallRecipeItem from "./SmallRecipeItem";
import PromptCard from "./PromptCard";
import "../styles/recipeList.css";

const cardMessages = require("../utility/cardMessages.json");
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
      {!filterOptions.submitted && (
        <PromptCard
          cardTitle={cardMessages.noSearch.title}
          message={cardMessages.noSearch.message}
        />
      )}

      {filterOptions.submitted && recipeItems.length <= 0 && (
        <PromptCard
          cardTitle={cardMessages.noResults.title}
          message={cardMessages.noResults.message}
        />
      )}

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

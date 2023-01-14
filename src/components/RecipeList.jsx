import React from "react";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../utility/api";
import SmallRecipeItem from "./SmallRecipeItem";
import PromptCard from "./PromptCard";
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
      {!filterOptions.submitted && (
        <PromptCard
          cardTitle="Use The Filters Above"
          message="The filters above allow you to adjust recipe results to your liking. If you would like to spice things up and get a list of random recipes, simply leave the form blank and click search!"
        />
      )}

      {filterOptions.submitted && recipeItems.length <= 0 && (
        <PromptCard
          cardTitle="No Results"
          message="There was nothing on the menu that matched your filter options. Try adjusting your selections."
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

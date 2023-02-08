import React from "react";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../utility/api";
import Loader from "./Loader";
import SmallRecipeItem from "./SmallRecipeItem";
import PromptCard from "./PromptCard";
import "../styles/recipeList.css";

const cardMessages = require("../utility/cardMessages.json");
// const samples = require("../samples.json");

function RecipeList({ filterOptions = { options: "none" } }) {
  const [recipeItems, setRecipeItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRecipes() {
      setLoading(true);
      const response = await getFilteredRecipes(filterOptions);
      setRecipeItems(response.results);
      setLoading(false);
    }

    // getRecipes();
  }, [filterOptions]);

  return (
    <div className="recipe-list">
      {!filterOptions.submitted && !loading && (
        <PromptCard
          cardTitle={cardMessages.noSearch.title}
          message={cardMessages.noSearch.message}
        />
      )}

      {/* will render before user completes a search */}

      {filterOptions.submitted && !loading && recipeItems.length <= 0 && (
        <PromptCard
          cardTitle={cardMessages.noResults.title}
          message={cardMessages.noResults.message}
        />
      )}

      {/* will render after user searches & gets no results */}
      {filterOptions.submitted && !loading && recipeItems.length > 0 && (
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

      {loading && <Loader />}
    </div>
  );
}

export default RecipeList;

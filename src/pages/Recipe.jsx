import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";

import { getRecipe } from "../utility/api";
import Header from "../components/Header";
import LargeRecipeItem from "../components/LargeRecipeItem";

const samples = require("../samples.json");
const testRecipe = samples.results[0];

// http://localhost:3000/recipe/715415 - for testing

function Recipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(testRecipe);

  useEffect(() => {
    async function getFullRecipe(recipeId) {
      const response = await getRecipe(recipeId);
      setRecipe(response);
    }

    // getFullRecipe(recipeId);
  }, [recipeId]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>{recipe.title}</h2>
        <LargeRecipeItem recipe={recipe} />
      </m.div>
    </div>
  );
}

export default Recipe;

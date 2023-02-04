import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";

import { getRecipe } from "../utility/api";
import Header from "../components/Header";

function Recipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getFullRecipe(recipeId) {
      const response = await getRecipe(recipeId);
      setRecipe(response);
    }

    getFullRecipe(recipeId);
  }, [recipeId]);

  const handleTest = () => {
    console.log(recipe);
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <button onClick={handleTest}>TEST</button>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Recipe</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </m.div>
    </div>
  );
}

export default Recipe;

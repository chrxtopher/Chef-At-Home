import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneSimilarRecipe, getRecipe } from "../utility/api";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LargeRecipeItem from "../components/LargeRecipeItem";
import Loader from "../components/Loader";

function SimilarRecipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getSimilarRecipe(recipeId) {
      const response = await getOneSimilarRecipe(recipeId);
      const similarRecipe = await getRecipe(response.id);
      setRecipe(similarRecipe);
    }

    // getSimilarRecipe(recipeId);
  }, [recipeId]);

  return recipe.extendedIngredients ? (
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
      <div>
        <Footer />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default SimilarRecipe;

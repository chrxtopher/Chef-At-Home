import React from "react";
import { motion as m } from "framer-motion";
import "../styles/largeRecipeItem.css";

function LargeRecipeItem({ recipe }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="large-recipe-item"
    >
      <div className="large-recipe-info">
        <div className="large-recipe-img">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="large-recipe-information">
          <p>{`Ready In ${recipe.readyInMinutes} Minutes`}</p>
          <p>{`Preparation Time : ${recipe.preparationMinutes} Minutes`}</p>
          <p>{`${recipe.extendedIngredients.length} Total Ingredients`}</p>
          <p>{`Servings : ${recipe.servings}`}</p>
        </div>
      </div>
    </m.div>
  );
}

export default LargeRecipeItem;

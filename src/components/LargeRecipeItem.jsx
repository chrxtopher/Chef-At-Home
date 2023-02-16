import React from "react";
import { motion as m } from "framer-motion";
import "../styles/largeRecipeItem.css";
import NavButton from "./NavButton";
import Loader from "./Loader";

function LargeRecipeItem({ recipe }) {
  return recipe.extendedIngredients ? (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="large-recipe-item"
    >
      <div className="large-recipe-top">
        <div className="large-recipe-img">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="large-recipe-info">
          <p>{`Ready In ${recipe.readyInMinutes} Minutes | Prep Time : ${
            recipe.preparationMinutes > 0 ? recipe.preparationMinutes : 0
          } Minutes`}</p>
          <p>{`${recipe.servings} Servings | ${recipe.extendedIngredients.length} Total Ingredients`}</p>
        </div>
      </div>
      <div className="large-recipe-bottom">
        <div className="large-recipe-ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>
                  <p>{`| ${ingredient.amount} ${ingredient.unit} ${ingredient.nameClean} |`}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="large-recipe-instructions">
          <h3>Instructions</h3>
          <ul>
            {recipe.analyzedInstructions[0].steps.map((step) => {
              return (
                <li key={step.number}>
                  <p>{`${step.number}. ${step.step}`}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <NavButton
        name="Similar Recipe"
        active={false}
        pageUrl={`recipe/${recipe.id}/similar`}
      />
    </m.div>
  ) : (
    <div className="loader-div">
      <Loader />
    </div>
  );
}

export default LargeRecipeItem;

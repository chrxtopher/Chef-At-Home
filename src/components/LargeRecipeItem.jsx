import React from "react";
import { motion as m } from "framer-motion";

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
        <div className="large-recipe-information"></div>
      </div>
    </m.div>
  );
}

export default LargeRecipeItem;

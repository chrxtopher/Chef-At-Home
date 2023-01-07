import React from "react";

function SmallRecipeItem({ id, title = "title", image }) {
  return (
    <div className="small-recipe-item">
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
  );
}

export default SmallRecipeItem;

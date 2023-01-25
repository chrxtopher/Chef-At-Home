import React from "react";
import NavButton from "./NavButton";
import "../styles/smallRecipeItem.css";

function SmallRecipeItem({ id, title = "title", image }) {
  return (
    <div className="small-recipe-item">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <NavButton name="View" active={false} pageUrl={`recipe/${id}`} />
    </div>
  );
}

export default SmallRecipeItem;

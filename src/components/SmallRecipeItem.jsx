import React from "react";
import "../styles/smallRecipeItem.css";

function SmallRecipeItem({ id, title = "title", image }) {
  const handleViewButton = (event) => {
    event.preventDefault();
    console.log(`${title} -- ${id}`);
  };

  return (
    <div className="small-recipe-item">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <button onClick={handleViewButton} className="small-recipe-button">
        View
      </button>
    </div>
  );
}

export default SmallRecipeItem;

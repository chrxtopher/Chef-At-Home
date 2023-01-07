import React from "react";

function RecipeList({ filterOptions = { options: "none" } }) {
  const buttonClick = (event) => {
    event.preventDefault();
    console.log(filterOptions);
  };

  return (
    <div>
      <h3>Recipe List</h3>
      <button onClick={buttonClick}>Log Filters</button>
    </div>
  );
}

export default RecipeList;

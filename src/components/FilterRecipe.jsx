import React from "react";
import { useState } from "react";

import "../styles/filterForm.css";
import RecipeList from "./RecipeList";

function FilterRecipe({ dishType = ["main course"] }) {
  const defaultFilterObj = {
    vegan: false,
    vegetarian: false,
    ketogenic: false,
    glutenFree: false,
    dairyFree: false,
    protein: "",
    servSize: 1,
    dishType: dishType,
  };

  const [filterObj, setFilterObj] = useState(defaultFilterObj);

  //////////////////////////
  // EVENT HANDLERS BELOW //
  //////////////////////////

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(filterObj);
  };

  const handleCheckboxChange = (event) => {
    setFilterObj({
      ...filterObj,
      [event.target.value]: !filterObj[event.target.value],
    });
  };

  const handleProteinChange = (event) => {
    setFilterObj({
      ...filterObj,
      [event.target.name]: event.target.value,
    });
  };

  const handleServSizeChange = (event) => {
    setFilterObj({
      ...filterObj,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  /////////////////////////
  // FORM ELEMENTS BELOW //
  /////////////////////////

  return (
    <div>
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Vegan:
            <input
              type="checkbox"
              name="vegan"
              id="vegan"
              value="vegan"
              onChange={handleCheckboxChange}
            ></input>
          </label>
          <label>
            Vegetarian:
            <input
              type="checkbox"
              name="vegetarian"
              id="vegetarian"
              value="vegetarian"
              onChange={handleCheckboxChange}
            ></input>
          </label>
          <label>
            Keto Friendly:
            <input
              type="checkbox"
              name="ketogenic"
              id="keto"
              value="ketogenic"
              onChange={handleCheckboxChange}
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>
            Gluten Free:
            <input
              type="checkbox"
              name="glutenFree"
              id="glutenFree"
              value="glutenFree"
              onChange={handleCheckboxChange}
            ></input>
          </label>
          <label>
            Dairy Free:
            <input
              type="checkbox"
              name="dairyFree"
              id="dairyFree"
              value="dairyFree"
              onChange={handleCheckboxChange}
            ></input>
          </label>
        </div>
        <label>
          Protein:
          <select
            name="protein"
            onChange={handleProteinChange}
            disabled={filterObj.vegan || filterObj.vegetarian ? true : false}
          >
            <option value="">Select</option>
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="pork">Pork</option>
            <option value="shrimp">Shrimp</option>
            <option value="crab">Crab</option>
            <option value="tuna">Tuna</option>
            <option value="salmon">Salmon</option>
          </select>
        </label>

        <label>
          Serving Size:
          <input
            type="number"
            name="servSize"
            id="servSize"
            defaultValue="1"
            min="1"
            max="20"
            className="num-input"
            onChange={handleServSizeChange}
          ></input>
        </label>
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>

      <RecipeList filterOptions={filterObj} />
    </div>
  );
}

export default FilterRecipe;

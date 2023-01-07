import React from "react";
import { useState } from "react";

import "../styles/filterForm.css";
import RecipeList from "./RecipeList";

function FilterRecipe({ dishType = ["main course"] }) {
  const [filters, setFilters] = useState({
    diet: [],
    protein: "",
    servSize: 1,
    dishType: dishType,
  });
  const [filterObj, setFilterObj] = useState(filters);

  //////////////////////////
  // EVENT HANDLERS BELOW //
  //////////////////////////

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterObj(filters);
  };

  const handleCheckboxChange = (event) => {
    const dietArray = filters.diet;
    if (!filters.diet.includes(event.target.value)) {
      dietArray.push(event.target.value);
    } else {
      const index = dietArray.indexOf(event.target.value);
      dietArray.splice(index, 1);
    }
    setFilters({
      ...filters,
      diet: dietArray,
    });
  };

  const handleProteinChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleServSizeChange = (event) => {
    setFilters({
      ...filters,
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
            Ketogenic:
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
              name="glutenfree"
              id="glutenfree"
              value="glutenfree"
              onChange={handleCheckboxChange}
            ></input>
          </label>
          <label>
            Paleo:
            <input
              type="checkbox"
              name="paleo"
              id="paleo"
              value="paleo"
              onChange={handleCheckboxChange}
            ></input>
          </label>
          <label>
            Pescetarian:
            <input
              type="checkbox"
              name="pescetarian"
              id="pescetarian"
              value="pescetarian"
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

import React from "react";
import { useState } from "react";

import "../styles/filterForm.css";
import RecipeList from "./RecipeList";

function FilterRecipe({ dishType = ["main course"] }) {
  const [filters, setFilters] = useState({
    diet: [],
    protein: "",
    cuisine: "",
    dishType: dishType,
    submitted: false,
  });
  const [filterObj, setFilterObj] = useState(filters);

  //////////////////////////
  // EVENT HANDLERS BELOW //
  //////////////////////////

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterObj({
      ...filters,
      submitted: true,
    });
  };

  const handleReset = (event) => {
    setFilters({
      ...filters,
      diet: [],
      protein: "",
      cuisine: "",
      dishType: dishType,
      submitted: false,
    });
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

  const handleSelectChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
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
          <select name="protein" onChange={handleSelectChange}>
            <option value="">Any</option>
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="pork">Pork</option>
            <option value="shrimp">Shrimp</option>
            <option value="crab">Crab</option>
            <option value="tuna">Tuna</option>
            <option value="salmon">Salmon</option>
            <option value="tofu">Tofu</option>
            <option value="">None</option>
          </select>
        </label>

        <label>
          Cuisine:
          <select
            name="cuisine"
            onChange={handleSelectChange}
            className="cuisine-select"
          >
            <option value="">Any</option>
            <option value="african">African</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            <option value="caribbean">Caribbean</option>
            <option value="chinese">Chinese</option>
            <option value="european">European</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="irish">Irish</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="latinamerica">Latin America</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="middleeastern">Middle Eastern</option>
            <option value="southern">Southern</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
          </select>
        </label>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Search
          </button>
          <button type="reset" className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      <RecipeList filterOptions={filterObj} />
    </div>
  );
}

export default FilterRecipe;

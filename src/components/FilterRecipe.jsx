import React from "react";
import { useState } from "react";

import "../styles/filterForm.css";

function FilterRecipe() {
  const defaultFilterObj = {
    vegan: false,
    vegetarian: false,
    ketogenic: false,
    glutenFree: false,
    dairyFree: false,
    protein: "",
    servSize: 1,
  };

  const [filterObj, setFilterObj] = useState(defaultFilterObj);

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

  return (
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
            name="gluten_free"
            id="gluten_free"
            value="glutenFree"
            onChange={handleCheckboxChange}
          ></input>
        </label>
        <label>
          Dairy Free:
          <input
            type="checkbox"
            name="dairy_free"
            id="dairy_free"
            value="dairyFree"
            onChange={handleCheckboxChange}
          ></input>
        </label>
      </div>
      <label>
        Protein:
        <select name="protein" onChange={handleProteinChange} disabled={false}>
          <option value="none">Select</option>
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
  );
}

export default FilterRecipe;

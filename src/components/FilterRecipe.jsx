import React from "react";

function FilterRecipe() {
  return (
    <form className="filter-form">
      <div className="form-group">
        <label>
          Vegan:
          <input type="checkbox" name="vegan" id="vegan"></input>
        </label>
        <label>
          Vegetarian:
          <input type="checkbox" name="vegetarian" id="vegetarian"></input>
        </label>
        <label>
          Keto Friendly:
          <input type="checkbox" name="keto" id="keto"></input>
        </label>
      </div>
      <div className="form-group">
        <label>
          Gluten Free:
          <input type="checkbox" name="gluten_free" id="gluten_free"></input>
        </label>
        <label>
          Dairy Free:
          <input type="checkbox" name="dairy_free" id="dairy_free"></input>
        </label>
      </div>
      <select name="protein">
        <option value="none">Select</option>
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="pork">Pork</option>
        <option value="shrimp">Shrimp</option>
        <option value="crab">Crab</option>
        <option value="tuna">Tuna</option>
        <option value="salmon">Salmon</option>
      </select>
      <label>
        Serving Size:
        <input
          type="number"
          name="serv_size"
          id="serv_size"
          min="1"
          max="10"
        ></input>
      </label>
    </form>
  );
}

export default FilterRecipe;

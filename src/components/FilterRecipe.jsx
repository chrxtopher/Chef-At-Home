import React from "react";

function FilterRecipe() {
  return (
    <form>
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
    </form>
  );
}

export default FilterRecipe;

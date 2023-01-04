import React from "react";
import { useState } from "react";

import Header from "../components/Header";
import FilterRecipe from "../components/FilterRecipe";

function Meals() {
  return (
    <div>
      <Header />
      <h1>Meals</h1>
      <p>
        Whether you are cooking for one, impressing a date, or feeding the whole
        family, there is a recipe here for you! Use the filters below to help
        pin-point your next meal!
      </p>
      <FilterRecipe />
    </div>
  );
}

export default Meals;

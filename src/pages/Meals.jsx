import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import FilterRecipe from "../components/FilterRecipe";
import "../styles/mealsPage.css";

function Meals() {
  return (
    <div>
      <header>
        <Header active="meals" />
      </header>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Main Course Meals</h1>
        <p>
          Whether you are cooking for one, impressing a date, or feeding the
          whole family, there is a recipe here for you! Use the filters below to
          help pin-point your next meal!
        </p>
        <FilterRecipe
          dishType={["main course", "salad", "soup", "lunch", "dinner"]}
        />
      </m.div>
    </div>
  );
}

export default Meals;

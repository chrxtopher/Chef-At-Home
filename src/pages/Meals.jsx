import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterRecipe from "../components/FilterRecipe";
import "../styles/filterRecipesPage.css";

const cardMessages = require("../utility/cardMessages.json");

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
        <div className="meals-header">
          <h1 className="recipes-page-title">{cardMessages.meals.title}</h1>
          <p className="recipes-page-subtitle">{cardMessages.meals.subtitle}</p>
        </div>
        <FilterRecipe
          dishType={["main course", "salad", "soup", "lunch", "dinner"]}
        />
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Meals;

import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterRecipe from "../components/FilterRecipe";

const cardMessages = require("../utility/cardMessages.json");

function Desserts() {
  return (
    <div>
      <header>
        <Header active="desserts" />
      </header>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="desserts-header">
          <h1 className="recipes-page-title">{cardMessages.desserts.title}</h1>
          <p className="recipes-page-subtitle">
            {cardMessages.desserts.subtitle}
          </p>
        </div>

        <FilterRecipe dishType={["dessert"]} />
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Desserts;

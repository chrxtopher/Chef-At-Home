import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterRecipe from "../components/FilterRecipe";

const cardMessages = require("../utility/cardMessages.json");

function Bites() {
  return (
    <div>
      <header>
        <Header active="bites" />
      </header>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bites-header">
          <h1 className="recipes-page-title">{cardMessages.bites.title}</h1>
          <p className="recipes-page-subtitle">{cardMessages.bites.subtitle}</p>
        </div>

        <FilterRecipe dishType={["fingerfood", "snack"]} />
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Bites;

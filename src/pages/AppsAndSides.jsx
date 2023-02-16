import React from "react";
import { motion as m } from "framer-motion";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FilterRecipe from "../components/FilterRecipe";

const cardMessages = require("../utility/cardMessages.json");

function AppsAndSides() {
  return (
    <div>
      <header>
        <Header active="appsandsides" />
      </header>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="apps-header">
          <h1 className="recipes-page-title">
            {cardMessages.appsAndSides.title}
          </h1>
          <p className="recipes-page-subtitle">
            {cardMessages.appsAndSides.subtitle}
          </p>
        </div>

        <FilterRecipe dishType={["appetizer", "side dish"]} />
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AppsAndSides;

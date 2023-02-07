import React from "react";
import { motion as m } from "framer-motion";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FilterRecipe from "../components/FilterRecipe";

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
        <h1>Appetizers & Sides</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <FilterRecipe dishType={["appetizer", "side dish"]} />
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AppsAndSides;

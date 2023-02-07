import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterRecipe from "../components/FilterRecipe";

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
        <h1>Indulge in Sweetness</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <FilterRecipe dishType={["dessert"]} />
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Desserts;

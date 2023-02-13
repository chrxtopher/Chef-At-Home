import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterRecipe from "../components/FilterRecipe";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
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

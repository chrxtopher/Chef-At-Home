import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";

function SearchRecipe() {
  return (
    <div>
      <header>
        <Header active="search" />
      </header>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Search Page</h1>
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SearchRecipe;

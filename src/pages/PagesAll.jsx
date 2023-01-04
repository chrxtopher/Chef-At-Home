import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Meals from "./Meals";
import Bites from "./Bites";
import Desserts from "./Desserts";
import SearchRecipe from "./Search";

function PagesAll() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/bites" element={<Bites />} />
      <Route path="/desserts" element={<Desserts />} />
      <Route path="/search" element={<SearchRecipe />} />
    </Routes>
  );
}

export default PagesAll;

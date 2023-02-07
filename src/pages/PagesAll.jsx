import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Meals from "./Meals";
import Bites from "./Bites";
import Desserts from "./Desserts";
import AppsAndSides from "./AppsAndSides";
import SearchRecipe from "./Search";
import Recipe from "./Recipe";
import SimilarRecipe from "./SimilarRecipe";

function PagesAll() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/bites" element={<Bites />} />
      <Route path="/appsandsides" element={<AppsAndSides />} />
      <Route path="/desserts" element={<Desserts />} />
      <Route path="/search" element={<SearchRecipe />} />
      <Route path="/recipe/:recipeId" element={<Recipe />} />
      <Route path="/recipe/:recipeId/similar" element={<SimilarRecipe />} />
    </Routes>
  );
}

export default PagesAll;

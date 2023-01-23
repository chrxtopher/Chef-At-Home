import React from "react";
import { motion as m } from "framer-motion";

import Header from "../components/Header";

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
        <h1>Desserts Page</h1>
      </m.div>
    </div>
  );
}

export default Desserts;

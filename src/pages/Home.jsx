import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion as m } from "framer-motion";
import Aos from "aos";
import NavButton from "../components/NavButton";
import "aos/dist/aos.css";
import "../styles/homePage.css";
const cardMessages = require("../utility/cardMessages.json");

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <header>
        <Header active="home" />
      </header>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="home-page"
      >
        <div className="home-welcome">
          <h2>{cardMessages.home.title}</h2>
          <p>{cardMessages.home.description}</p>
        </div>
        <div className="home-section" data-aos="fade-right">
          <div className="home-section-title meals-title">
            <h3>{cardMessages.meals.title}</h3>
          </div>
          <div className="home-section-desc">
            <p>{cardMessages.meals.description}</p>
            <NavButton name="Browse" active={false} pageUrl="meals" />
          </div>
        </div>
        <div className="home-section" data-aos="fade-right">
          <div className="home-section-desc">
            <p>{cardMessages.bites.description}</p>
            <NavButton name="Browse" active={false} pageUrl="bites" />
          </div>
          <div className="home-section-title bites-title">
            <h3>{cardMessages.bites.title}</h3>
          </div>
        </div>
        <div className="home-section" data-aos="fade-right">
          <div className="home-section-title apps-title">
            <h3>{cardMessages.appsAndSides.title}</h3>
          </div>
          <div className="home-section-desc">
            <p>{cardMessages.appsAndSides.description}</p>
            <NavButton name="Browse" active={false} pageUrl="appsandsides" />
          </div>
        </div>
        <div className="home-section" data-aos="fade-right">
          <div className="home-section-desc">
            <p>{cardMessages.desserts.description}</p>
            <NavButton name="Browse" active={false} pageUrl="desserts" />
          </div>
          <div className="home-section-title desserts-title">
            <h3>{cardMessages.desserts.title}</h3>
          </div>
        </div>
      </m.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

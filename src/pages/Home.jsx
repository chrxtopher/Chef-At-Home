import Header from "../components/Header";
import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import Aos from "aos";
import NavButton from "../components/NavButton";
import "aos/dist/aos.css";
import "../styles/homePage.css";

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home-page"
    >
      <Header active="home" />
      <h1>Chef at Home</h1>
      <div className="home-welcome">
        <h2>Welcome to Chef at Home</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="home-section" data-aos="fade-right">
        <div className="home-section-title meals-title">
          <h3>Main Course Meals</h3>
        </div>
        <div className="home-section-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <NavButton name="Browse" active={false} pageUrl="meals" />
        </div>
      </div>
      <div className="home-section" data-aos="fade-right">
        <div className="home-section-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <NavButton name="Browse" active={false} pageUrl="bites" />
        </div>
        <div className="home-section-title bites-title">
          <h3>Bites For Everyone</h3>
        </div>
      </div>
      <div className="home-section" data-aos="fade-right">
        <div className="home-section-title desserts-title">
          <h3>Indulge in Sweetness</h3>
        </div>
        <div className="home-section-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <NavButton name="Browse" active={false} pageUrl="desserts" />
        </div>
      </div>
    </m.div>
  );
}

export default Home;

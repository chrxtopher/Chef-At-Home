import React from "react";
import NavButton from "./NavButton";
import "../styles/header.css";

function Header({ active = "none" }) {
  return (
    <nav>
      <NavButton
        name="Home"
        active={active === "home" ? true : false}
        pageUrl=""
      />

      <ul>
        <li>
          <NavButton name="Meals" active={active === "meals"} pageUrl="meals" />
        </li>
        <li>
          <NavButton name="Bites" active={active === "bites"} pageUrl="bites" />
        </li>
        <li>
          <NavButton
            name="Apps/Sides"
            active={active === "appsandsides"}
            pageUrl="appsandsides"
          />
        </li>
        <li>
          <NavButton
            name="Desserts"
            active={active === "desserts"}
            pageUrl="desserts"
          />
        </li>
        <li>
          <NavButton
            name="Search"
            active={active === "search"}
            pageUrl="search"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Header;

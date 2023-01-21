import React from "react";
import { Link } from "react-router-dom";

function NavButton({ name = "Click Me", active = false, pageUrl = "/" }) {
  return (
    <Link to={`/${pageUrl}`}>
      <button className={active ? "active-nav-button" : "inactive-nav-button"}>
        {name}
      </button>
    </Link>
  );
}

export default NavButton;

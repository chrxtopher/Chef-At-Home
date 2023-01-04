import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <nav>
      <Link to="/">
        <button className="nav-button">Home</button>
      </Link>

      <ul>
        <li>
          <Link to="/">
            <button className="nav-button">Meals</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="nav-button">Bites</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="nav-button">Desserts</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="nav-button">Search</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

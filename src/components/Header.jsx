import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <ul>
        <li>
          <Link to="/">
            <button>Meals</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button>Bites</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button>Desserts</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button>Search</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

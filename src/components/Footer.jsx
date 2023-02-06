import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <p>
        Feedback or feature requests?{" "}
        <a href="mailto: chrxtopherxddy@gmail.com">Email</a>
      </p>
      <p>
        All recipes and corresponding information provided by{" "}
        <a
          href="https://spoonacular.com/food-api"
          target="_blank"
          rel="noreferrer"
        >
          Spoonacular API
        </a>
      </p>
    </footer>
  );
}

export default Footer;

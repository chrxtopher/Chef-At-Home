import React from "react";
import "../styles/noSearch.css";

function NoSearch() {
  return (
    <div className="no-search">
      <p>
        Use the form above to filter recipes to your liking, or click the button
        below to get random recipes!
      </p>
      <button className="random-button">Randomize</button>
    </div>
  );
}

export default NoSearch;

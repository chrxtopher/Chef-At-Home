import React from "react";
import "../styles/promptCard.css";

function PromptCard({
  cardTitle = "Card Title",
  message = "This is a sample prompt message.",
}) {
  return (
    <div className="prompt-card">
      <h4>{cardTitle}</h4>
      <p>{message}</p>
    </div>
  );
}

export default PromptCard;

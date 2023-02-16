import React, { useEffect } from "react";
import NavButton from "./NavButton";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/smallRecipeItem.css";

function SmallRecipeItem({ id, title = "title", imageUrl }) {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="small-recipe-item" data-aos="zoom-in">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <NavButton name="View" active={false} pageUrl={`recipe/${id}`} />
    </div>
  );
}

export default SmallRecipeItem;

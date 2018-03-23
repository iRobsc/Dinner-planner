import React from "react";
import PropTypes from "prop-types";
import "../css/Recipes.scss";

function RecipeItem({ dish }) {
  return (
    <div className="recipe">
      <img src={`https://spoonacular.com/recipeImages/${dish.id}-480x360.jpg`} alt={dish.title} />
      <div>
        <h2>
          {dish.title}
        </h2>
        <div>
          {dish.instructions.split(".").map(line => <p key={line}>{line}</p>)}
        </div>
      </div>
    </div>
  );
}

RecipeItem.propTypes = {
  dish: PropTypes.object.isRequired,
};

export default RecipeItem;

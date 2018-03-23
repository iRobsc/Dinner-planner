import React from "react";
import PropTypes from "prop-types";
import DinnerButtonBack from "./DinnerButtonBack";
import Ingredientlist from "./Ingredientlist";
import "../css/DishContent.scss";

function DishDetails({ numberOfGuests, dish, addDishToMenu }) {
  return (
    <div id="dish-content">
      <div id="dish-object">
        <div id="dish-title">{dish.title}</div>
        <img id="dish-img" src={`https://spoonacular.com/recipeImages/${dish.id}-480x360.jpg`} alt={dish.title} />
        <DinnerButtonBack>Back to search</DinnerButtonBack>
      </div>
      <Ingredientlist
        numberOfGuests={numberOfGuests}
        dish={dish}
        addDishToMenu={addDishToMenu}
      />
      <div id="dish-preparation">
        <h2>Preparation</h2>
        <div>
          {
            dish.instructions.split(".").map(line => <p key={line}>{line}</p>)
          }
        </div>
      </div>
    </div>
  );
}

DishDetails.propTypes = {
  numberOfGuests: PropTypes.number.isRequired,
  dish: PropTypes.object.isRequired,
  addDishToMenu: PropTypes.func.isRequired,
};

export default DishDetails;

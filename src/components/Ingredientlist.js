import React from "react";
import PropTypes from "prop-types";
import DinnerButton from "./DinnerButton";

function Ingredientlist({ numberOfGuests, dish, addDishToMenu }) {
  const content = dish.extendedIngredients.map(ingredient => (
    <tr>
      <td>{Math.round(ingredient.amount) * numberOfGuests} {ingredient.unit}</td>
      <td>{ingredient.name}</td>
      <td>SEK</td>
      <td>{numberOfGuests}</td>
    </tr>
  ));

  const lastRow = (
    <tr className="last-row">
      <td>Total price</td>
      <td />
      <td>SEK</td>
      <td>{Math.round(dish.pricePerServing * numberOfGuests)}</td>
    </tr>
  );

  return (
    <div id="dish-ingredients">
      <div id="dish-ingredient-box">
        <div id="ingredients-title" >Ingredients for {numberOfGuests} people</div>
        <div id="dish-ingredient-content">
          <table id="dish-ingredient-table" >
            {content}
            {lastRow}
          </table>
        </div>
        <div id="dish-ingredient-add">
          <DinnerButton onClick={addDishToMenu}>Add to menu</DinnerButton>
          <div id="dish-ingredient-price" />
        </div>
      </div>
    </div>
  );
}

Ingredientlist.propTypes = {
  numberOfGuests: PropTypes.number.isRequired,
  dish: PropTypes.object.isRequired,
  addDishToMenu: PropTypes.func.isRequired,
};

export default Ingredientlist;

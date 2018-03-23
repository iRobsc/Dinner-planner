import React from "react";
import PropTypes from "prop-types";
import DinnerButton from "./DinnerButton";
import round from "../utils/round";
import "../css/Ingredientlist.scss";

function Ingredientlist({ numberOfGuests, dish, addDishToMenu }) {
  const onClick = () => {
    addDishToMenu(dish);
  };

  const content = dish.extendedIngredients.map(ingredient => (
    <tbody key={ingredient.id}>
      <tr>
        <td>{round(ingredient.amount * numberOfGuests)} {ingredient.unit}</td>
        <td>{ingredient.name}</td>
        <td>SEK</td>
        <td>{numberOfGuests}</td>
      </tr>
    </tbody>
  ));

  const lastRow = (
    <tbody>
      <tr className="last-row">
        <td>Total price</td>
        <td />
        <td>SEK</td>
        <td>{round(dish.pricePerServing * numberOfGuests)}</td>
      </tr>
    </tbody>
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
          <DinnerButton onClick={onClick}>Add to menu</DinnerButton>
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

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/FoodItem.scss";

function FoodItem({ title, id, to }) {
  const component = (
    <div className="food-item">
      <img src={`https://spoonacular.com/recipeImages/${id}-636x393.jpg`} alt={title} />
      <div className="title">{title}</div>
    </div>
  );

  if (to) {
    return (
      <Link className="food-item-link" to={to}>
        {component}
      </Link>
    );
  }

  return component;
}

FoodItem.defaultProps = {
  to: "",
};

FoodItem.propTypes = {
  /** Which text should be displayed on the card */
  title: PropTypes.string.isRequired,
  /** ID of the dish, needed for the image */
  id: PropTypes.string.isRequired,
  /** Optional, if present will change url when clicking */
  to: PropTypes.string,
};

export default FoodItem;

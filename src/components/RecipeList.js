import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

function RecipeList({ menu }) {
  const list = menu.map(dish => (
    <RecipeItem key={dish.id} dish={dish} />
  ));

  return (
    <div>
      {list}
    </div>
  );
}

RecipeList.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default RecipeList;

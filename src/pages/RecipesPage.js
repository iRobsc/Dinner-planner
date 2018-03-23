import React from "react";
import PropTypes from "prop-types";
import RecipeList from "../components/RecipeList";

function RecipesPage({ menu }) {
  return (
    <RecipeList menu={menu} />
  );
}

RecipesPage.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default RecipesPage;

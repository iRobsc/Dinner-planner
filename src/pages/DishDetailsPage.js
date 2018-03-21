import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import PropTypes from "prop-types";
import DishDetailsContainer from "../containers/DishDetailsContainer";

function DishDetailsPage({ match, numberOfGuests, addDishToMenu }) {
  const { id } = match.params;
  return (
    <DishDetailsContainer id={parseInt(id, 10)} numberOfGuests={numberOfGuests} addDishToMenu={addDishToMenu} />
  );
}

DishDetailsPage.propTypes = {
  match: ReactRouterPropTypes.match, // eslint-disable-line
  numberOfGuests: PropTypes.number.isRequired,
  addDishToMenu: PropTypes.func.isRequired,
};

export default DishDetailsPage;

import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

function DishDetails({ match }) {
  const { id } = match.params;
  return (
    <div>Dish details, dish ID: {id}</div>
  );
}

DishDetails.propTypes = {
  match: ReactRouterPropTypes.match, // eslint-disable-line
};

export default DishDetails;

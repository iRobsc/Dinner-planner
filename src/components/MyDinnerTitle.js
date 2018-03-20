import React from "react";
import PropTypes from "prop-types";
import DinnerButtonLink from "./DinnerButtonLink";
import "../css/MyDinnerTitle.scss";

function MyDinnerTitle({ numberOfGuests }) {
  return (
    <div id="title-bar">
      <h2 className="title">
        My Dinner for <span id="people">{numberOfGuests}</span> people
      </h2>
      <DinnerButtonLink to="/search">
        Go back and edit dinner
      </DinnerButtonLink>
    </div>
  );
}

MyDinnerTitle.propTypes = {
  numberOfGuests: PropTypes.number.isRequired,
};

export default MyDinnerTitle;

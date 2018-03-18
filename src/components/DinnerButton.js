import React from "react";
import PropTypes from "prop-types";
import "./../css/buttons.scss";

function DinnerButton({ children }) {
  return (
    <button className="dinner-btn">{children}</button>
  );
}

DinnerButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DinnerButton;

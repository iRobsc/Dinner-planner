import React from "react";
import PropTypes from "prop-types";
import "./../css/buttons.scss";

function DinnerButton({ children, onClick }) {
  return (
    <button className="dinner-btn" onClick={onClick}>{children}</button>
  );
}

DinnerButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DinnerButton;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./../css/buttons.scss";

function DinnerButtonLink({ to, children, disabled }) {
  let currentClass = "";

  if (disabled) {
    currentClass = "dinner-btn-disabled";
  } else {
    currentClass = "dinner-btn";
  }

  return (
    <Link className={currentClass} to={to}>{children}</Link>
  );
}

DinnerButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default DinnerButtonLink;

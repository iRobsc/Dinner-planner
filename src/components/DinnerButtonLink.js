import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./../css/buttons.scss";

function DinnerButtonLink({ to, children }) {
  return (
    <Link className="dinner-btn" to={to}>{children}</Link>
  );
}

DinnerButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DinnerButtonLink;

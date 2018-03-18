import React from "react";
import PropTypes from "prop-types";

function DinnerButtonLink({ to, children }) {
  return (
    <a className="dinner-btn" href={to}> {children} </a>
  );
}

DinnerButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default DinnerButtonLink;

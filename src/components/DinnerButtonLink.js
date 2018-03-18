import React from "react";
import PropTypes from "prop-types";
import "./../css/buttons.scss";

function DinnerButtonLink({ to, children, onClick }) {
  return (
    <a className="dinner-btn" href={to} onClick={onClick}>{children}</a>
  );
}

DinnerButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DinnerButtonLink;

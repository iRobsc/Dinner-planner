import React from "react";
import PropTypes from "prop-types";
import MyDinnerTitle from "../components/MyDinnerTitle";

function ResultLayout({ numberOfGuests, children }) {
  return (
    <div className="container-nogrid">
      <MyDinnerTitle numberOfGuests={numberOfGuests} />
      {children}
    </div>
  );
}

ResultLayout.propTypes = {
  numberOfGuests: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResultLayout;

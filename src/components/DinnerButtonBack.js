import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import DinnerButton from "./DinnerButton";

function DinnerButtonBack({ history, children }) {
  const onClick = () => {
    history.goBack();
  };

  return (
    <DinnerButton onClick={onClick}>
      {children}
    </DinnerButton>
  );
}

DinnerButtonBack.propTypes = {
  children: PropTypes.node.isRequired,
  history: ReactRouterPropTypes.history.isRequired, // eslint-disable-line react/no-typos
};

export default withRouter(DinnerButtonBack);

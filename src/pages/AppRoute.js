import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

function AppRoute({ component: Component, layout: Layout, componentProps, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout {...matchProps} {...componentProps}>
          <Component {...matchProps} {...componentProps} />
        </Layout>
      )}
    />
  );
}

AppRoute.defaultProps = {
  componentProps: {},
};

AppRoute.propTypes = {
  /** Which component to render, will get the match props from react-router */
  component: PropTypes.func.isRequired,
  /** Which layout component to use, will get the match props from react-router */
  layout: PropTypes.func.isRequired,
  /** Custom props to pass to the layout and component */
  componentProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default AppRoute;

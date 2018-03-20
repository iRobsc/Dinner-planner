import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

function AppRoute({ component: Component, layout: Layout, componentProps, layoutProps, ...rest }) {
  return (
    <Route
      {...rest}
      render={routerProps => (
        <Layout {...routerProps} {...layoutProps}>
          <Component {...routerProps} {...componentProps} />
        </Layout>
      )}
    />
  );
}

AppRoute.defaultProps = {
  componentProps: {},
  layoutProps: {},
};

AppRoute.propTypes = {
  /** Which component to render, will get the match props from react-router */
  component: PropTypes.func.isRequired,
  /** Which layout component to use, will get the match props from react-router */
  layout: PropTypes.func.isRequired,
  /** Custom props to pass to the component */
  componentProps: PropTypes.object,
  /** Custom props to pass to the layout component */
  layoutProps: PropTypes.object,
};

export default AppRoute;

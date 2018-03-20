import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import DishSearch from "../containers/DishSearch";

function SearchPage({ match }) {
  const { type, keywords, page } = match.params;
  const pageNumber = page ? parseInt(page, 10) : 0;
  return (
    <DishSearch type={type} keywords={keywords} page={pageNumber} />
  );
}

SearchPage.propTypes = {
  match: ReactRouterPropTypes.match, // eslint-disable-line
};

export default SearchPage;

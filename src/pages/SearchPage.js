import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

function SearchPage({ match }) {
  const { type, keywords, page } = match.params;
  return (
    <div>Search type {type}, keywords {keywords} page {page}</div>
  );
}

SearchPage.propTypes = {
  match: ReactRouterPropTypes.match, // eslint-disable-line
};

export default SearchPage;

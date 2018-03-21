import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import DishSearchContainer from "../containers/DishSearchContainer";

function SearchPage({ location, history }) {
  const url = new URLSearchParams(location.search);
  const type = url.get("type") || "";
  const keywords = url.get("keywords") || "";
  const page = url.get("page");
  const pageNumber = page ? parseInt(page, 10) : 0;

  return (
    <DishSearchContainer history={history} type={type} keywords={keywords} page={pageNumber} />
  );
}

SearchPage.propTypes = {
  location: ReactRouterPropTypes.location.isRequired, // eslint-disable-line react/no-typos
  history: ReactRouterPropTypes.history.isRequired, // eslint-disable-line react/no-typos
};

export default SearchPage;

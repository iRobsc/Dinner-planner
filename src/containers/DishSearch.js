import React, { Component } from "react";
import PropTypes from "prop-types";
import Searchbar from "../components/Searchbar";
import DinnerButtonLink from "../components/DinnerButtonLink";

class DishSearch extends Component {
  static propTypes = {
    type: PropTypes.string,
    keywords: PropTypes.string,
    page: PropTypes.number,
  }

  static defaultProps = {
    type: null,
    keywords: null,
    page: null,
  }

  state = {};

  getNextRoute() {
    const { type, keywords, page } = this.props;
    const nextPage = page + 1;
    const nextType = type ? `/${type}` : "";
    const nextKeywords = keywords ? `/${keywords}` : "";
    return `/search/${nextPage}${nextType}${nextKeywords}`;
  }

  getPrevRoute() {
    const { type, keywords, page } = this.props;
    const nextPage = page === 0 ? 0 : page - 1;
    const nextType = type ? `/${type}` : "";
    const nextKeywords = keywords ? `/${keywords}` : "";
    return `/search/${nextPage}${nextType}${nextKeywords}`;
  }

  render() {
    const nextTo = this.getNextRoute();
    const prevTo = this.getPrevRoute();

    return (
      <div>
        <Searchbar />
        <div id="food-grid">
          <div id="grid-container" />
          <div id="nav-buttons">
            <DinnerButtonLink to={prevTo}>
              &larr; Previous page
            </DinnerButtonLink>&nbsp;
            <DinnerButtonLink to={nextTo}>
              Next page &rarr;
            </DinnerButtonLink>
          </div>
        </div>
      </div>
    );
  }
}

export default DishSearch;

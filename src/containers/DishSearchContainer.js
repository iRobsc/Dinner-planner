import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";
import getAllDishes from "../utils/getAllDishes";
import DishSelect from "../components/DishSelect";

class DishSearch extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    history: ReactRouterPropTypes.history.isRequired, // eslint-disable-line react/no-typos
  }

  state = {
    searchResults: [],
    isLoading: false,
    error: false,
  };

  componentDidMount() {
    const { type, keywords, page } = this.props;
    this.search(type, keywords, page);
  }

  componentWillReceiveProps(newProps) {
    const { type, keywords, page } = this.props;
    const { type: newType, keywords: newKeywords, page: newPage } = newProps;

    // if any prop is different, do a new search
    if (newPage !== page || newType !== type || newKeywords !== keywords) {
      this.search(newType, newKeywords, newPage);
    }
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const inputs = event.target.elements;
    const typeElem = inputs["search-type"];
    const type = typeElem.options[typeElem.selectedIndex]
      .value
      .replace(/\s/g, "+")
      .toLowerCase();
    const keywords = inputs["search-text"]
      .value
      .trim()
      .replace(/\s/g, "+")
      .toLowerCase();

    const targetParams = `?type=${type}&keywords=${keywords}`;
    if (history.location.search === targetParams) {
      this.search(type, keywords, 0);
    } else {
      history.push(`/search${targetParams}`);
    }
  }

  getNextRoute() {
    const { type, keywords, page } = this.props;
    return `/search?type=${type}&keywords=${keywords}&page=${page + 1}`;
  }

  getPrevRoute() {
    const { type, keywords, page } = this.props;
    const destinationPage = (page - 1) < 0 ? 0 : (page - 1);
    return `/search?type=${type}&keywords=${keywords}&page=${destinationPage}`;
  }

  search(type, keywords, page) {
    this.setState({ isLoading: true, error: false });
    getAllDishes(type, keywords, page)
      .then((searchResults) => {
        this.setState({ searchResults, isLoading: false, error: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, error: true });
      });
  }

  render() {
    const nextTo = this.getNextRoute();
    const prevTo = this.getPrevRoute();
    return (
      <DishSelect
        nextTo={nextTo}
        prevTo={prevTo}
        onSearchSubmit={this.onSearchSubmit}
        {...this.props}
        {...this.state}
      />
    );
  }
}

export default DishSearch;

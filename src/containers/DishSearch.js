import React, { Component } from "react";
import PropTypes from "prop-types";
import Searchbar from "../components/Searchbar";
import DinnerButtonLink from "../components/DinnerButtonLink";
import FoodItem from "../components/FoodItem";
import getAllDishes from "../utils/getAllDishes";

class DishSearch extends Component {
  static propTypes = {
    type: PropTypes.string,
    keywords: PropTypes.string,
    page: PropTypes.number,
  }

  static defaultProps = {
    type: "",
    keywords: "",
    page: 0,
  }

  state = {
    searchResults: [],
  };

  componentDidMount() {
    const { type, keywords, page } = this.props;
    this.search(type, keywords, page);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.page !== this.props.page) {
      console.log("search");
      const { type, keywords, page } = newProps;
      this.search(type, keywords, page);
    }
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
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
    window.history.pushState(null, "", `/search?type=${type}&keywords=${keywords}`);
    this.search(type, keywords, 0);
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
    getAllDishes(type, keywords, page)
      .then((searchResults) => {
        this.setState({ searchResults });
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    const { keywords, type } = this.props;
    const { searchResults } = this.state;
    const nextTo = this.getNextRoute();
    const prevTo = this.getPrevRoute();

    const foodItems = searchResults.map(({ title, id }) =>
      <FoodItem key={id} title={title} id={id} to={`/dish/${id}`} />);

    const gridClass = foodItems.length < 4 ? "sparse-grid" : "responsive-grid";

    return (
      <div>
        <Searchbar
          defaultKeywords={keywords}
          defaultType={type}
          onSearchSubmit={this.onSearchSubmit}
        />
        <div id="food-grid">
          <div id="grid-container" className={gridClass}>
            {foodItems}
          </div>
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

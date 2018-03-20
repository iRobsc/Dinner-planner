import React from "react";
import PropTypes from "prop-types";
import "../css/Searchbar.scss";

function Searchbar({ onSearchSubmit }) {
  return (
    <div id="searchbar-container">
      <h2>Find a dish</h2>
      <form id="search" onSubmit={onSearchSubmit}>
        <div className="search-container">
          <i className="fa fa-search" />
          <input id="search-text" type="text" placeholder="Enter keywords" />
        </div>

        <div className="select-container">
          <select id="search-type">
            <option value="">All</option>
            <option value="main dish">Main Dish</option>
            <option value="dessert">Dessert</option>
            <option value="side dish">Side Dish</option>
            <option value="appertizer">Appertizer</option>
            <option value="salad">Salad</option>
            <option value="bread">Bread</option>
            <option value="breakfast">Breakfast</option>
            <option value="soup">Soup</option>
            <option value="beverage">Beverage</option>
            <option value="sauce">Sauce</option>
            <option value="drink">Drink</option>
          </select>
          <span className="arrow-container">
            <i className="fa fa-angle-down" />
          </span>
        </div>

        <button type="submit" className="dinner-btn">Search</button>
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  /** Event handler for the search form submit */
  onSearchSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

import React from "react";
import PropTypes from "prop-types";
import Searchbar from "../components/Searchbar";
import DinnerButtonLink from "../components/DinnerButtonLink";
import FoodItem from "../components/FoodItem";

function DishSelect({ keywords, type, onSearchSubmit, searchResults, isLoading, prevTo, nextTo }) {
  let gridContent;
  if (isLoading) {
    gridContent = [1, 2, 3, 4, 5, 6, 7, 8].map(index => <div key={index} className="loading" />);
  } else {
    gridContent = searchResults.map(({ title, id }) =>
      <FoodItem key={id} title={title} id={id} to={`/dish/${id}`} />);
  }

  const gridClass = gridContent.length < 4 ? "sparse-grid" : "responsive-grid";

  const resultComponent = (
    <div id="food-grid">
      <div id="grid-container" className={gridClass}>
        {gridContent}
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
  );

  return (
    <div>
      <Searchbar
        defaultKeywords={keywords}
        defaultType={type}
        onSearchSubmit={onSearchSubmit}
      />
      {(searchResults.length !== 0 || isLoading) ? resultComponent : "No results"}
    </div>
  );
}

DishSelect.propTypes = {
  type: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  prevTo: PropTypes.string.isRequired,
  nextTo: PropTypes.string.isRequired,
};

export default DishSelect;

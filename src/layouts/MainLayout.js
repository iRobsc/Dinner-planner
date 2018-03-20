import React from "react";
import PropTypes from "prop-types";

function MainLayout({ menu, numberOfGuests, children }) {
  return (
    <div id="container">
      <div className="sidebar">
        Sidebar goes here:
        numberOfGuests: {numberOfGuests}
        menu: {menu.map(dish => <div>{`${dish.title}${dish.price}`}</div>)}
      </div>
      {children}
    </div>
  );
}

MainLayout.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
  numberOfGuests: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainLayout;

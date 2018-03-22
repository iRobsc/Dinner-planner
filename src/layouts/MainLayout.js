import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar";

function MainLayout({ menu, numberOfGuests, setNumberOfGuests, children, deleteDishFromMenu }) {
  const onGuestChange = (event) => {
    let value = parseInt(event.target.value, 10);

    if (!value || value < 0) value = 0;

    setNumberOfGuests(value);
  };

  return (
    <div id="container">
      <Sidebar
        menu={menu}
        numberOfGuests={numberOfGuests}
        onGuestChange={onGuestChange}
        deleteDishFromMenu={deleteDishFromMenu}
      />
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
  setNumberOfGuests: PropTypes.func.isRequired,
  deleteDishFromMenu: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainLayout;

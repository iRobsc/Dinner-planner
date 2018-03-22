import React, { Component } from "react";
import PropTypes from "prop-types";
import DinnerButtonLink from "./DinnerButtonLink";
import SidebarItem from "./SidebarItem";
import getTotalMenuPrice from "../utils/getTotalMenuPrice";
import "../css/Sidebar.scss";

class Sidebar extends Component {
  static propTypes = {
    numberOfGuests: PropTypes.number.isRequired,
    menu: PropTypes.array.isRequired,
    onGuestChange: PropTypes.func.isRequired,
    deleteDishFromMenu: PropTypes.func.isRequired,
  }

  state = {
    open: false,
  };

  toggleSidebar = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { numberOfGuests, menu, onGuestChange, deleteDishFromMenu } = this.props;
    const { open } = this.state;

    let content;
    if (menu.length === 0) {
      content = "Your list is empty!";
    } else {
      content = menu.map(dish => (
        <SidebarItem
          key={dish.id}
          id={dish.id}
          title={dish.title}
          price={dish.pricePerServing}
          deleteDishFromMenu={deleteDishFromMenu}
        />
      ));
    }

    let disabled = false;
    if (numberOfGuests === 0 || menu.length === 0) {
      disabled = true;
    }

    const totalPrice = getTotalMenuPrice(menu, numberOfGuests);

    return (
      <div id="sidebar-container">
        <div id="sidebar">
          <div id="sidebar-accordion">
            <h2>My Dinner</h2>
            <div className="price">{totalPrice}</div>
            <button id="sidebar-toggle" onClick={this.toggleSidebar}>
              <i className="fa fa-bars" />
            </button>
          </div>
          <div id="sidebar-content" className={open ? "sidebar-show" : "sidebar-hide"}>
            <h2>My Dinner</h2>

            <div id="sidebar-inner-container">
              Number of people:{" "}
              <input
                value={numberOfGuests}
                onChange={onGuestChange}
                id="number-of-guests"
                type="number"
              />
              <br />

              <div id="sidebar-list">{content}</div>

              Total cost: <span className="price">{totalPrice} kr</span>
              <br />
              <DinnerButtonLink to="/mydinner" disabled={disabled}>
                Confirm Dinner <i className="fa fa-check-circle" />
              </DinnerButtonLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

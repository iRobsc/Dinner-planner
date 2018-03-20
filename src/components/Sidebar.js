import React, { Component } from "react";
import PropTypes from "prop-types";
import DinnerButtonLink from "./DinnerButtonLink";
import SidebarItem from "./SidebarItem";
import "../css/Sidebar.scss";

class Sidebar extends Component {
  state = {
    open: false,
  };

  toggleSidebar = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { numberOfGuests, menu, onGuestChange } = this.props;
    const { open } = this.state;

    let content;
    if (menu.length === 0) {
      content = "Your list is empty!";
    } else {
      content = menu.map(dish => <SidebarItem title={dish.title} price={dish.price} />);
    }

    let disabled = false;
    if (numberOfGuests === 0 || menu.length === 0) {
      disabled = true;
    }

    return (
      <div id="sidebar-container">
        <div id="sidebar">
          <div id="sidebar-accordion">
            <h2>My Dinner</h2>
            <div className="price">0kr</div>
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

              Total cost: <span className="price">0kr</span>
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

Sidebar.propTypes = {
  numberOfGuests: PropTypes.number.isRequired,
  menu: PropTypes.array.isRequired,
  onGuestChange: PropTypes.func.isRequired,
};

export default Sidebar;

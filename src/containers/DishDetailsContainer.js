import React, { Component } from "react";
import PropTypes from "prop-types";
import getDish from "../utils/getDish";
import DishDetails from "../components/DishDetails";
import SpinnerLoader from "../components/SpinnerLoader";

class DishDetailsContainer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    numberOfGuests: PropTypes.number.isRequired,
    addDishToMenu: PropTypes.func.isRequired,
  }

  state = { currentDish: null }

  componentDidMount() {
    getDish(this.props.id)
      .then((currentDish) => {
        this.setState({ currentDish });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.currentDish === null) {
      return <SpinnerLoader />;
    }
    return (
      <DishDetails
        numberOfGuests={this.props.numberOfGuests}
        dish={this.state.currentDish}
        addDishToMenu={this.props.addDishToMenu}
      />
    );
  }
}

export default DishDetailsContainer;

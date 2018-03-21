import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FoodItem from "../components/FoodItem";
import DinnerButtonLink from "../components/DinnerButtonLink";
import getTotalMenuPrice from "../utils/getTotalMenuPrice";
import round from "../utils/round";
import "../css/MyDinner.scss";

function MyDinnerPage({ menu, numberOfGuests }) {
  return (
    <Fragment>
      <div className="myDinner-dishes">
        {
          menu.map(({ title, id, pricePerServing }) => (
            <div>
              <FoodItem title={title} id={id} />
              <p className="price">{round(pricePerServing * numberOfGuests)} SEK</p>
            </div>
            ))
        }
        <p className="total-price">
          Total price: {getTotalMenuPrice(menu, numberOfGuests)} SEK
        </p>
      </div>
      <div className="myDinner-footer">
        <DinnerButtonLink to="/recipes">
          Print full recipe
        </DinnerButtonLink>
      </div>
    </Fragment>
  );
}

MyDinnerPage.propTypes = {
  menu: PropTypes.array.isRequired,
  numberOfGuests: PropTypes.number.isRequired,
};

export default MyDinnerPage;

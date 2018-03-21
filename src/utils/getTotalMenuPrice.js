import round from "./round";

/**
 * Returns the total price of the menu multiplied by number of guests
 *
 * @param {Array} menu
 * @param {Number} numberOfGuests
 * @returns {Number}
 */
export default function getTotalMenuPrice(menu, numberOfGuests) {
  return round(menu.reduce((total, dish) => total + dish.pricePerServing, 0) * numberOfGuests);
}

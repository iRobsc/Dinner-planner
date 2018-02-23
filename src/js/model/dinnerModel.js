import Observable from "./observable";
import Cache from "./cache";
import { API_KEY, URL } from "./APIkey";

// DinnerModel Object constructor
class DinnerModel {
  constructor() {
    this.numberOfGuests = 1;
    this.menu = [];
    this.cache = new Cache();

    this.guestChange = new Observable(this);
    this.menuChange = new Observable(this);
  }

  /**
   * Sets the number of guests
   *
   * @param {Number} num  non-negative number
   */
  setNumberOfGuests(num) {
    // verify input
    if (Number.isNaN(parseInt(num, 10)) || parseInt(num, 10) < 0) {
      this.guestChange.notifyAll(this.numberOfGuests);
      return;
    }
    this.numberOfGuests = num;
    this.guestChange.notifyAll(num);
  }

  /**
   * Get number of guests
   *
   * @returns {Number}
   */
  getNumberOfGuests() {
    return this.numberOfGuests;
  }

  /**
   * Returns all the dishes on the menu.
   *
   * @returns {Dish[]}
   * @memberof DinnerModel
   */
  getFullMenu() {
    return this.menu;
  }

  /**
   * Returns all ingredients for all the dishes on the menu
   *
   * @returns {Ingredient[]}
   */
  getAllIngredients() {
    return this.getFullMenu().reduce((res, dish) => res.concat(dish.ingredients), []);
  }

  /**
   * Returns the total price of the menu (all the ingredients multiplied by number of guests)
   *
   * @returns {Number}
   */
  getTotalMenuPrice() {
    return this.menu.reduce((total, dish) => total + dish.pricePerServing, 0) * this.numberOfGuests;
  }

  /**
   * Adds the passed dish to the menu. If the dish of that type already exists on the menu
   * it is removed from the menu and the new one added.
   *
   * Willy: if we want to add a new starter for example, delete the starter
   * that we already have, if there is one.
   *
   * @param {Object} dish
   */
  addDishToMenu(dish) {
    // don't add the dish more than once
    if (this.menu.indexOf(dish) !== -1) return;

    this.menu.push(dish);
    this.menuChange.notifyAll(this.menu);
  }

  /**
   * Removes dish from menu with the given id
   *
   * @param {Number} id
   */
  removeDishFromMenu(id) {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i] === id) {
        this.menu.splice(i, 1);
        return;
      }
    }
    this.menuChange.notifyAll(this.menu);
  }

  /**
   * function that returns all dishes of specific type
   * (i.e. "starter", "main dish" or "dessert") you can use the
   * filter argument to filter out the dish by name or ingredient (use for search)
   * if you don't pass any filter all the dishes will be returned
   *
   * @param {String} type
   * @param {String} [filter]
   * @returns {Dish[]}
   */
  getAllDishes(type, filter) {
    const cached = this.cache.getSearch(type, filter);

    // cache miss
    if (cached === -1) {
      const endPoint = `${URL}/recipes/search?type=${type}&query=${filter}&number=12`;
      return fetch(endPoint, {
        headers: {
          "X-Mashape-Key": API_KEY,
        },
      }).then(res => res.json())
        .then((json) => {
          this.cache.setSearch(type, filter, json.results);
          return json.results;
        });
    }

    // cache hit
    return new Promise((resolve) => {
      resolve(cached);
    });
  }

  /**
   * Function that returns a dish of specific ID
   *
   * @param {Number} id
   * @returns {Dish}
   */
  getDish(id) {
    const cached = this.cache.getDish(id);

    // cache miss
    if (cached === -1) {
      const endPoint = `${URL}/recipes/${id}/information`;
      return fetch(endPoint, {
        headers: {
          "X-Mashape-Key": API_KEY,
        },
      }).then(res => res.json())
        .then((json) => {
          this.cache.setDish(id, json);
          console.log(json);
          return json;
        });
    }

    // cache hit
    return new Promise((resolve) => {
      resolve(cached);
    });
  }

  /**
   * Takes a dish as parameter and returns its price
   *
   * @param {Dish} dish
   * @returns {Number}
   */
  getDishPrice(dish) {
    return dish.pricePerServing;
  }
}

export default DinnerModel;

import dishes from "./dishes";
import Observable from "./observable";
import Cache from "./cache";
import { API_KEY, URL } from "./APIkey";

/**
 * @typedef {Object} Dish
 * @property {Number} id
 * @property {String} name
 * @property {String} type
 * @property {String} image
 * @property {String} description
 * @property {Ingredient[]} ingredients
 */

/**
 * @typedef {Object} Ingredient
 * @property {String} name
 * @property {Number} quantity
 * @property {String} unit
 * @property {Number} price
 */

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
   * Returns the dish that is on the menu for selected type
   * Why does this need to exist??
   *
   * @param {String} type
   * @returns {-1 | Dish}
   */
  getSelectedDish(type) {
    const menu = this.getFullMenu();
    for (const dish of menu) {
      if (dish.type === type) return dish;
    }
    return -1;
  }

  /**
   * Returns all the dishes on the menu.
   *
   * @returns {Dish[]}
   * @memberof DinnerModel
   */
  getFullMenu() {
    return this.menu.map(id => this.getDish(id));
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
    const ingredients = this.getAllIngredients();
    return ingredients.reduce((total, ingr) => total + ingr.price, 0) * this.numberOfGuests;
  }

  /**
   * Adds the passed dish to the menu. If the dish of that type already exists on the menu
   * it is removed from the menu and the new one added.
   *
   * Willy: if we want to add a new starter for example, delete the starter
   * that we already have, if there is one.
   *
   * @param {Number} id
   */
  addDishToMenu(id) {
    const dishToAdd = this.getDish(id);

    // didn't find dish with matching id
    if (dishToAdd === -1) return;

    const storedDish = this.getSelectedDish(dishToAdd.type);

    // trying to add same dish, do nothing
    if (storedDish.id === id) return;

    // remove old dish of the same type
    if (storedDish !== -1) {
      this.removeDishFromMenu(storedDish.id);
    }

    this.menu.push(id);
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
      const endPoint = `${URL}/recipes/search?type=${type}&query=${filter}`;
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
    for (const key in dishes) {
      if (dishes[key].id === id) {
        return dishes[key];
      }
    }
    return -1;
  }

  /**
   * Takes a dish as parameter and returns its price
   *
   * @param {Dish} dish
   * @returns {Number}
   */
  getDishPrice(dish) {
    const { ingredients } = dish;
    return ingredients.reduce((total, ingr) => total + ingr.price, 0);
  }
}

export default DinnerModel;

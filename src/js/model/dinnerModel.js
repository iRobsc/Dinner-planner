import dishes from "./dishes";

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
    this.numberOfGuests = 3;
    this.menu = [1, 2, 100];
  }

  /**
   * Sets the number of guests
   *
   * @param {Number} num
   */
  setNumberOfGuests(num) {
    this.numberOfGuests = num;
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
    const storedDish = this.getSelectedDish(dishToAdd.type);
    if (storedDish !== -1) {
      this.removeDishFromMenu(storedDish.id);
    }
    this.menu.push(id);
  }

  /**
   * Removes dish from menu with the given id
   *
   * @param {Number} id
   */
  removeDishFromMenu(id) {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].id === id) {
        this.menu.splice(i, 1);
        return;
      }
    }
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
    return dishes.filter((dish) => {
      let found = true;
      if (filter) {
        found = false;
        dish.ingredients.forEach((ingredient) => {
          if (ingredient.name.indexOf(filter) !== -1) {
            found = true;
          }
        });
        if (dish.name.indexOf(filter) !== -1) {
          found = true;
        }
      }
      return dish.type === type && found;
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

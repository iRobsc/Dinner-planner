import dishes from "./dishes";

// DinnerModel Object constructor
class DinnerModel {
  constructor() {
    // TODO Lab 1 implement the data structure that will hold number of guest
    // and selected dishes for the dinner menu
    this.numberOfGuests = 3;
    this.menu = [1, 2, 100];
  }

  setNumberOfGuests(num) {
    this.numberOfGuests = num;
  }

  getNumberOfGuests() {
    return this.numberOfGuests;
  }

  // Returns the dish that is on the menu for selected type
  getSelectedDish(type) {
    for (const id of this.menu) {
      const dish = this.getDish(id);
      if (dish.type === type) return dish;
    }
    return -1;
  }

  // Returns all the dishes on the menu.
  getFullMenu() {
    return this.menu;
  }

  // Returns all ingredients for all the dishes on the menu.
  getAllIngredients() {
    let res = [];
    for (const id of this.menu) {
      const dish = this.getDish(id);
      res = res.concat(dish.ingredients);
    }
    return res;
  }

  // Returns the total price of the menu (all the ingredients multiplied by number of guests).
  getTotalMenuPrice() {
    return this.getAllIngredients()
      .reduce((total, ingr) => total + ingr.price, 0) * this.numberOfGuests;
  }

  // Adds the passed dish to the menu. If the dish of that type already exists on the menu
  // it is removed from the menu and the new one added.
  addDishToMenu(id) {
    this.removeDishFromMenu(id);
    this.menu.push(id);
  }

  // Removes dish from menu
  removeDishFromMenu(id) {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].id === id) {
        this.menu.splice(i, 1);
        return;
      }
    }
  }

  // function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  // you can use the filter argument to filter out the dish by name or ingredient (use for search)
  // if you don't pass any filter all the dishes will be returned
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

  // function that returns a dish of specific ID
  getDish(id) {
    for (const key in dishes) {
      if (dishes[key].id === id) {
        return dishes[key];
      }
    }
    return -1;
  }

  getDishPrice(dish) {
    const { ingredients } = dish;
    return ingredients.reduce((total, ingr) => total + ingr.price, 0);
  }
}

export default DinnerModel;

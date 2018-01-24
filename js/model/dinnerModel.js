import dishes from "./dishes";

// DinnerModel Object constructor
class DinnerModel {
  constructor() {
    // TODO Lab 1 implement the data structure that will hold number of guest
    // and selected dishes for the dinner menu
    this.numberOfGuests = 0;
    this.menu = [];
  }

  setNumberOfGuests(num) {
    this.numberOfGuests = num;
  }

  getNumberOfGuests() {
    return this.numberOfGuests;
  }

  // Returns the dish that is on the menu for selected type
  getSelectedDish(type) {
    const res = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].type === type) {
        res.push(this.menu[i]);
      }
    }
    return res;
  }

  // Returns all the dishes on the menu.
  getFullMenu() {
    return this.menu;
  }

  // Returns all ingredients for all the dishes on the menu.
  getAllIngredients() {
    let res = [];
    for (let i = 0; i < this.menu.length; i++) {
      res = res.concat(this.menu[i].ingredients);
    }
    return res;
  }

  // Returns the total price of the menu (all the ingredients multiplied by number of guests).
  getTotalMenuPrice() {
    let price = 0;
    const allIngredients = this.getAllIngredients();
    for (let i = 0; i < allIngredients.length; i++) {
      const current = allIngredients[i];
      price += current.price;
    }
    return price * this.numberOfGuests;
  }

  // Adds the passed dish to the menu. If the dish of that type already exists on the menu
  // it is removed from the menu and the new one added.
  addDishToMenu(id) {
    this.removeDishFromMenu(id);
    this.menu.push(this.getDish(id));
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
}

export default DinnerModel;

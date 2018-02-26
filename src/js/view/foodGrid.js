import FoodItem from "./foodItem";
import loadingFoodItem from "./loadingFoodItem";

class FoodGrid {
  /**
   * Creates an instance of FoodGrid.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show(type, keywords) {
    this.container.classList.remove("hideView");
    this.generateGrid(type, keywords);
  }

  generateGrid(type, keywords) {
    this.container.innerHTML = "";

    this.container.classList.add("responsive-grid");
    this.container.classList.remove("sparse-grid");
    for (let i = 0; i < 8; i++) {
      this.container.appendChild(loadingFoodItem());
    }

    this.model.getAllDishes(type, keywords)
      .then((dishes) => {
        this.container.innerHTML = "";

        if (dishes.length < 4) {
          this.container.classList.add("sparse-grid");
          this.container.classList.remove("responsive-grid");
        } else {
          this.container.classList.add("responsive-grid");
          this.container.classList.remove("sparse-grid");
        }
        const foodItems = dishes.map(dish => new FoodItem(dish).generate());
        for (let i = 0; i < foodItems.length; i++) {
          this.container.appendChild(foodItems[i]);
        }
      })
      .catch((error) => {
        console.error(error);
        this.container.innerHTML = "Couldn't fetch dishes, are you offline?";
      });
  }
}

export default FoodGrid;

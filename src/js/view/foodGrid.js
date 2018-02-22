import FoodItem from "./foodItem";

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
    this.model.getAllDishes(type, keywords)
      .then((dishes) => {
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
      .catch(console.log);
  }
}

export default FoodGrid;

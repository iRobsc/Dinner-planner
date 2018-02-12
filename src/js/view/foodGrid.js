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

    this.generateGrid();
  }

  generateGrid() {
    this.container.innerHTML = "";
    const dishes = this.model.getAllDishes("starter", null);
    const foodItems = dishes.map(dish => new FoodItem(dish).generate());
    for (let i = 0; i < foodItems.length; i++) {
      this.container.appendChild(foodItems[i]);
    }
  }
}

export default FoodGrid;

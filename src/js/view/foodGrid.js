import FoodItem from "./foodItem";

class FoodGrid {
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.generateGrid();
  }

  generateGrid() {
    const dishes = this.model.getAllDishes("starter", null);
    const foodItems = dishes.map(dish => new FoodItem(dish.name, dish.image).generate());
    for (let i = 0; i < foodItems.length; i++) {
      this.container.appendChild(foodItems[i]);
    }
  }
}

export default FoodGrid;

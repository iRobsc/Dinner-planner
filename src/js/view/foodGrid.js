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

    const parsedType = type.replace("_", " ");
    const parsedKeywords = keywords.replace("_", " ");
    this.generateGrid(parsedType, parsedKeywords);
  }

  generateGrid(type, keywords) {
    this.container.innerHTML = "";
    const dishes = this.model.getAllDishes(type, keywords);
    const foodItems = dishes.map(dish => new FoodItem(dish).generate());
    for (let i = 0; i < foodItems.length; i++) {
      this.container.appendChild(foodItems[i]);
    }
  }
}

export default FoodGrid;

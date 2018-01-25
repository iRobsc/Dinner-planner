import IngredientList from "./ingredientList";

class DishView {
  constructor(container, model, dishId) {
    this.container = container;
    this.model = model;
    this.dishId = dishId;

    this.ingredientList();
  }

  ingredientList() {
    const titleDiv = this.container.querySelector("#dish-title");
    titleDiv.textContent = `Ingredients for ${this.model.getNumberOfGuests()} people`;

    const table = this.container.querySelector("#dish-ingredient-table");
    new IngredientList(table, this.model, this.dishId);
  }
}

export default DishView;

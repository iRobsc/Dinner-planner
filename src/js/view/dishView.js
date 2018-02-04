import IngredientList from "./ingredientList";
import Images from "../../images/*"; // eslint-disable-line

class DishView {
  constructor(container, model, dishId) {
    this.container = container;
    this.model = model;
    this.dishId = dishId;
    this.dish = this.model.getDish(this.dishId);

    this.dishInfo();
    this.ingredientList();
  }

  dishInfo() {
    const dishTitle = this.container.querySelector("#dish-title");
    dishTitle.textContent = this.dish.name;

    const dishImg = this.container.querySelector("#dish-img");
    dishImg.src = Images[this.dish.image];

    const prepText = this.container.querySelector("#dish-prep-text");
    prepText.textContent = this.dish.description;
  }

  ingredientList() {
    const titleDiv = this.container.querySelector("#ingredients-title");
    titleDiv.textContent = `Ingredients for ${this.model.getNumberOfGuests()} people`;

    const table = this.container.querySelector("#dish-ingredient-table");
    new IngredientList(table, this.model, this.dishId);
  }
}

export default DishView;

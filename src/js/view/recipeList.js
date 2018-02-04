import Recipe from "./recipe";

class RecipeList {
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.createList();
  }

  createList() {
    const dishIds = this.model.getFullMenu();
    const dishes = dishIds.map(id => this.model.getDish(id));

    for (const dish of dishes) {
      const recipe = new Recipe(dish).generate();
      this.container.appendChild(recipe);
    }
  }
}

export default RecipeList;

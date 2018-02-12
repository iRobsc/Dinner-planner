import Recipe from "./recipe";

class RecipeList {
  /**
   * Creates an instance of RecipeList.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.createList();
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }

  createList() {
    this.container.innerHTML = "";
    const dishes = this.model.getFullMenu();
    for (const dish of dishes) {
      const recipe = new Recipe(dish).generate();
      this.container.appendChild(recipe);
    }
  }
}

export default RecipeList;

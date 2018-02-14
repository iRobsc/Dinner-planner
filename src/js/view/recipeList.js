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

    this.update = this.update.bind(this);
  }

  hide() {
    this.container.classList.add("hideView");
    this.model.menuChange.removeObserver(this.update);
    this.model.guestChange.removeObserver(this.update);
  }

  show() {
    this.container.classList.remove("hideView");
    this.model.menuChange.addObserver(this.update);
    this.model.guestChange.addObserver(this.update);
    this.update();
  }

  update() {
    this.createList();
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

class DishView {
  /**
   * Creates an instance of DishView.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dish = null;

    this.backBtn = this.container.querySelector("#dish-button-back");
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show(dishId) {
    this.container.classList.remove("hideView");
    this.model.getDish(dishId)
      .then((dish) => {
        this.dish = dish;
        this.dishInfo();
      });
  }

  dishInfo() {
    const dishTitle = this.container.querySelector("#dish-title");
    dishTitle.textContent = this.dish.title;

    const dishImg = this.container.querySelector("#dish-img");
    dishImg.src = `https://spoonacular.com/recipeImages/${this.dish.id}-480x360.jpg`;

    const prepText = this.container.querySelector("#dish-prep-text");
    prepText.textContent = this.dish.instructions;
  }
}

export default DishView;

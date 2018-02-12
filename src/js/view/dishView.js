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
    this.dish = this.model.getDish(dishId);
    this.container.classList.remove("hideView");
    this.dishInfo();
  }

  dishInfo() {
    const dishTitle = this.container.querySelector("#dish-title");
    dishTitle.textContent = this.dish.name;

    const dishImg = this.container.querySelector("#dish-img");
    dishImg.src = `images/${this.dish.image}`;

    const prepText = this.container.querySelector("#dish-prep-text");
    prepText.textContent = this.dish.description;
  }
}

export default DishView;

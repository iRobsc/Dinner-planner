// import Images from "../../images/*"; // eslint-disable-line

class DishView {
  /**
   * Creates an instance of DishView.
   * @param {Element} container
   * @param {dinnerModel} model
   * @param {Number} dishId
   */
  constructor(container, model, dishId) {
    this.container = container;
    this.model = model;
    this.dishId = dishId;
    this.dish = this.model.getDish(this.dishId);

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

import FoodItem from "./foodItem";

class MyDinner {
  /**
   * Creates an instance of MyDinner.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.fillGrid();
    this.addPrice();
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }

  fillGrid() {
    this.container.innerHTML = "";
    const noOfGuests = this.model.getNumberOfGuests();
    const menu = this.model.getFullMenu();
    for (const dish of menu) {
      const div = document.createElement("div");
      div.appendChild(new FoodItem(dish).generate());

      const priceElem = document.createElement("p");
      priceElem.classList.add("price");
      priceElem.textContent = `${this.model.getDishPrice(dish) * noOfGuests} SEK`;
      div.appendChild(priceElem);

      this.container.appendChild(div);
    }
  }

  addPrice() {
    const totalPrice = this.model.getTotalMenuPrice();
    const div = document.createElement("div");
    div.classList.add("total-price");
    div.textContent = `Total price: ${totalPrice} SEK`;
    this.container.appendChild(div);
  }
}

export default MyDinner;

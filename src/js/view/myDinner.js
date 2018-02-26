import FoodItem from "./foodItem";
import round from "../round";

class MyDinner {
  /**
   * Creates an instance of MyDinner.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.printBtn = this.container.querySelector("#mydinner-print-btn");

    this.fillGrid();
    this.addPrice();

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
    this.fillGrid();
    this.addPrice();
  }

  fillGrid() {
    const container = this.container.querySelector("#myDinner-dishes");

    container.innerHTML = "";
    const noOfGuests = this.model.getNumberOfGuests();
    const menu = this.model.getFullMenu();
    for (const dish of menu) {
      const div = document.createElement("div");
      div.appendChild(new FoodItem(dish).generate());

      const priceElem = document.createElement("p");
      priceElem.classList.add("price");
      priceElem.textContent = `${round(this.model.getDishPrice(dish)) * noOfGuests} SEK`;
      div.appendChild(priceElem);

      container.appendChild(div);
    }
  }

  addPrice() {
    const totalPrice = this.model.getTotalMenuPrice();
    const div = document.createElement("div");
    div.classList.add("total-price");
    div.textContent = `Total price: ${round(totalPrice)} SEK`;

    const container = this.container.querySelector("#myDinner-dishes");
    container.appendChild(div);
  }
}

export default MyDinner;

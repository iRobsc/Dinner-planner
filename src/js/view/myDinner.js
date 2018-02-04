import FoodItem from "./foodItem";

class MyDinner {
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.fillGrid();
    this.addPrice();
  }

  fillGrid() {
    const noOfGuests = this.model.getNumberOfGuests();
    const menu = this.model.getFullMenu();
    const dishes = menu.map(id => this.model.getDish(id));
    for (const dish of dishes) {
      const div = document.createElement("div");
      div.appendChild(new FoodItem(dish.name, dish.image).generate());

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

class IngredientList {
  /**
   * Creates an instance of IngredientList.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dish = null;

    this.addBtn = this.container.querySelector("#dish-ingredient-btn");

    this.update = this.update.bind(this);
  }

  hide() {
    this.container.classList.add("hideView");
    this.model.guestChange.removeObserver(this.update);
  }

  show(dish) {
    this.dish = dish;
    this.container.classList.remove("hideView");
    this.model.guestChange.addObserver(this.update);
    this.update();
  }

  update() {
    this.setInfo();
    this.getIngredients();
  }

  setInfo() {
    const titleDiv = this.container.querySelector("#ingredients-title");
    titleDiv.textContent = `Ingredients for ${this.model.getNumberOfGuests()} people`;
  }

  getIngredients() {
    const tableContainer = this.container.querySelector("#dish-ingredient-table");
    tableContainer.innerHTML = "";

    const { dish } = this;

    let totalPrice = 0;

    const { extendedIngredients } = dish;
    const ingredientTableRows = extendedIngredients.map((ingredient) => {
      const noOfGuests = this.model.getNumberOfGuests();
      const row = document.createElement("tr");

      const quantity = document.createElement("td");
      quantity.textContent = `${ingredient.amount * noOfGuests} ${ingredient.unit}`;
      row.appendChild(quantity);

      const name = document.createElement("td");
      name.textContent = ingredient.name;
      row.appendChild(name);

      const sek = document.createElement("td");
      sek.textContent = "SEK";
      row.appendChild(sek);

      const priceElem = document.createElement("td");
      const price = ingredient.price * noOfGuests;
      priceElem.textContent = price;
      totalPrice += price;
      row.appendChild(priceElem);

      return row;
    });

    const lastRow = document.createElement("tr");
    lastRow.classList.add("last-row");

    const total = document.createElement("td");
    total.textContent = "Total price";
    lastRow.appendChild(total);

    const empty = document.createElement("td");
    lastRow.appendChild(empty);

    const sek = document.createElement("td");
    sek.textContent = "SEK";
    lastRow.appendChild(sek);

    const price = document.createElement("td");
    price.textContent = totalPrice;
    lastRow.appendChild(price);

    for (const row of ingredientTableRows) {
      tableContainer.appendChild(row);
    }
    tableContainer.appendChild(lastRow);
  }
}

export default IngredientList;

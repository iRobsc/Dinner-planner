class IngredientList {
  /**
   * Creates an instance of IngredientList.
   * @param {Element} container
   * @param {dinnerModel} model
   * @param {Number} dishId
   */
  constructor(container, model, dishId) {
    this.container = container;
    this.model = model;
    this.dishId = dishId;

    this.addBtn = this.container.querySelector("#dish-ingredient-btn");
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
    this.setInfo();
    this.getIngredients();
  }

  setInfo() {
    const titleDiv = this.container.querySelector("#ingredients-title");
    titleDiv.textContent = `Ingredients for ${this.model.getNumberOfGuests()} people`;
  }

  getIngredients() {
    const tableContainer = this.container.querySelector("#dish-ingredient-table");
    const dish = this.model.getDish(this.dishId);
    if (dish === -1) {
      console.log("Couldn't find dish");
      return;
    }

    let totalPrice = 0;

    const { ingredients } = dish; // == const ingredients = dish.ingredients
    const ingredientTableRows = ingredients.map((ingredient) => {
      const noOfGuests = this.model.getNumberOfGuests();
      const row = document.createElement("tr");

      const quantity = document.createElement("td");
      quantity.textContent = `${ingredient.quantity * noOfGuests} ${ingredient.unit}`;
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

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
    const noOfGuests = this.model.getNumberOfGuests();
    const tableContainer = this.container.querySelector("#dish-ingredient-table");
    tableContainer.innerHTML = "";

    for (const ingredient of this.dish.extendedIngredients) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${ingredient.amount * noOfGuests} ${ingredient.unit}</td>
        <td>${ingredient.name}</td>
        <td>SEK</td>
        <td>${noOfGuests}</td>`;

      tableContainer.appendChild(row);
    }

    const lastRow = document.createElement("tr");
    lastRow.classList.add("last-row");

    lastRow.innerHTML = `
      <td>Total price</td>
      <td></td>
      <td>SEK</td>
      <td>${this.dish.pricePerServing * noOfGuests}</td>`;

    tableContainer.appendChild(lastRow);
  }
}

export default IngredientList;

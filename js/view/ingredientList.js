class IngredientList {
  constructor(container, model, dishId) {
    this.container = container;
    this.model = model;
    this.dishId = dishId;

    this.getIngredients();
  }

  getIngredients() {
    const dish = this.model.getDish(this.dishId);
    if (dish === -1) {
      console.log("Couldn't find dish");
      return;
    }

    const { ingredients } = dish;
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

      const price = document.createElement("td");
      price.textContent = ingredient.price * noOfGuests;
      row.appendChild(price);

      return row;
    });

    for (const row of ingredientTableRows) {
      this.container.appendChild(row);
    }
  }
}

export default IngredientList;

class FoodItem {
  /**
   * Creates an instance of FoodItem.
   * @param {Dish} dish
   * @memberof FoodItem
   */
  constructor(dish) {
    this.name = dish.name;
    this.image = dish.image;
    this.id = dish.id;
  }

  generate() {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    foodItem.dataset.dishid = this.id;

    const img = document.createElement("img");
    img.src = `images/${this.image}`;
    foodItem.appendChild(img);

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = this.name;
    foodItem.appendChild(name);

    return foodItem;
  }
}

export default FoodItem;

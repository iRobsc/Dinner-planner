class FoodItem {
  /**
   * Creates an instance of FoodItem.
   * @param {Dish} dish
   * @memberof FoodItem
   */
  constructor(dish) {
    this.title = dish.title;
    this.id = dish.id;
  }

  generate() {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    foodItem.dataset.dishid = this.id;

    const img = document.createElement("img");
    img.src = `https://spoonacular.com/recipeImages/${this.id}-636x393.jpg`;
    foodItem.appendChild(img);

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = this.title;
    foodItem.appendChild(title);

    return foodItem;
  }
}

export default FoodItem;

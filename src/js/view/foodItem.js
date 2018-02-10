class FoodItem {
  /**
   * Creates an instance of FoodItem.
   * @param {String} name Which name to display
   * @param {String} image Filename of image
   * @memberof FoodItem
   */
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  generate() {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");

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

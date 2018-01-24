import Images from "../../images/*"; // eslint-disable-line

class FoodItem {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  generate() {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");

    const img = document.createElement("img");
    img.src = Images[this.image];
    foodItem.appendChild(img);

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = this.name;
    foodItem.appendChild(name);

    return foodItem;
  }
}

export default FoodItem;

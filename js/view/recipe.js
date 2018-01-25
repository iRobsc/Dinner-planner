import Images from "../../images/*"; // eslint-disable-line

class Recipes {
  constructor(dish) {
    this.dish = dish;
  }

  generate() {
    const div = document.createElement("div");
    div.classList.add("recipe");

    const img = document.createElement("img");
    img.src = Images[this.dish.image];
    div.appendChild(img);

    const desc = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = this.dish.name;
    desc.appendChild(h2);
    const text = document.createElement("p");
    text.textContent = "Lorem Ipsum";
    desc.appendChild(text);
    div.appendChild(desc);

    const prep = document.createElement("div");
    prep.textContent = this.dish.description;
    div.appendChild(prep);

    return div;
  }
}

export default Recipes;

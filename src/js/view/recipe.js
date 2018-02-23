class Recipes {
  /**
   * Creates an instance of Recipes.
   * @param {Dish} dish
   */
  constructor(dish) {
    this.dish = dish;
  }

  generate() {
    const div = document.createElement("div");
    div.classList.add("recipe");

    const img = document.createElement("img");
    img.src = `https://spoonacular.com/recipeImages/${this.dish.id}-636x393.jpg`;
    div.appendChild(img);

    const desc = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = this.dish.title;
    desc.appendChild(h2);
    const prep = document.createElement("div");
    prep.textContent = this.dish.instructions;
    desc.appendChild(prep);
    div.appendChild(desc);

    return div;
  }
}

export default Recipes;

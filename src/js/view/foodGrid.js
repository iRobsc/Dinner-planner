import FoodItem from "./foodItem";
import loadingFoodItem from "./loadingFoodItem";

class FoodGrid {
  /**
   * Creates an instance of FoodGrid.
   * @param {Element} container
   * @param {dinnerModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.page = 0;
    this.type = "";
    this.keywords = "";
    this.prevBtn = this.container.querySelector("#prev-btn");
    this.nextBtn = this.container.querySelector("#next-btn");
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show(type, keywords, page) {
    this.container.classList.remove("hideView");

    this.type = type;
    this.keywords = keywords;
    this.page = page;

    this.generateGrid(type, keywords, page);
  }

  generateGrid(type, keywords, page) {
    const gridContainer = this.container.querySelector("#grid-container");
    gridContainer.innerHTML = "";

    gridContainer.classList.add("responsive-grid");
    gridContainer.classList.remove("sparse-grid");
    for (let i = 0; i < 8; i++) {
      gridContainer.appendChild(loadingFoodItem());
    }

    this.model.getAllDishes(type, keywords, page)
      .then((dishes) => {
        gridContainer.innerHTML = "";

        if (dishes.length < 4) {
          gridContainer.classList.add("sparse-grid");
          gridContainer.classList.remove("responsive-grid");
        } else {
          gridContainer.classList.add("responsive-grid");
          gridContainer.classList.remove("sparse-grid");
        }
        const foodItems = dishes.map(dish => new FoodItem(dish).generate());
        for (let i = 0; i < foodItems.length; i++) {
          gridContainer.appendChild(foodItems[i]);
        }
      })
      .catch((error) => {
        console.error(error.message);
        this.container.innerHTML = "Couldn't fetch dishes, are you offline?";
      });
  }
}

export default FoodGrid;

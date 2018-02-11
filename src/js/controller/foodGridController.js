class FoodGridController {
  /**
   * Creates an instance of FoodGridController.
   * @param {any} view
   */
  constructor(view) {
    this.view = view;
  }

  init() {
    /** @type {Element} */
    const grid = this.view.container;
    grid.addEventListener("click", (e) => {
      /** @type {Element} */
      const clicked = e.target;
      if (clicked.classList.contains("food-item")) {
        const { dishid } = clicked.dataset;

        // temporary until router is implemented
        window.history.pushState(null, null, `/dish?id=${dishid}`);
      }
    });
  }
}

export default FoodGridController;

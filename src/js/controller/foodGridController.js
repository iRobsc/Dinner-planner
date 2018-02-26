import Router from "../router";

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

        Router.goTo(`/dish?id=${dishid}`);
      }
    });

    const {
      nextBtn,
      prevBtn,
    } = this.view;

    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const {
        type,
        keywords,
        page,
      } = this.view;

      Router.goTo(`/search?type=${type}&keywords=${keywords}&page=${page + 1}`);
    });

    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const {
        type,
        keywords,
        page,
      } = this.view;

      const destinationPage = (page - 1) < 0 ? 0 : (page - 1);

      Router.goTo(`/search?type=${type}&keywords=${keywords}&page=${destinationPage}`);
    });
  }
}

export default FoodGridController;

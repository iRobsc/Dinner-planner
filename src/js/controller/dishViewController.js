import Router from "../router";

class DishViewController {
  /**
   * Creates an instance of DishViewController.
   * @param {any} view
   */
  constructor(view) {
    this.view = view;
  }

  init() {
    this.view.backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Router.goTo("/search");
    });
  }
}

export default DishViewController;

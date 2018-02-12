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

      // temporary until router is implemented
      window.history.back();
    });
  }
}

export default DishViewController;

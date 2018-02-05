class IngrListController {
  /**
   * Creates an instance of IngrListController.
   * @param {any} view
   * @param {dinnerModel} model
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    const { addBtn, dishId } = this.view;
    addBtn.addEventListener("click", () => {
      this.model.addDishToMenu(dishId);
    });
  }
}

export default IngrListController;

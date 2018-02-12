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
    const { addBtn } = this.view;
    addBtn.addEventListener("click", () => {
      const { dishId } = this.view;
      this.model.addDishToMenu(dishId);
    });
  }
}

export default IngrListController;

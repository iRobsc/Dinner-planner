class DishViewLoading {
  /**
   * Creates an instance of DishViewLoading.
   * @param {Element} container
   */
  constructor(container) {
    this.container = container;
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }
}

export default DishViewLoading;

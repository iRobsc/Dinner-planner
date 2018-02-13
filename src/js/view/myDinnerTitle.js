class MyDinnerTitle {
  /**
   * Creates an instance of MyDinnerTitle.
   * @param {Element} container
   * @param {dinenrModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.backBtn = this.container.querySelector("#mydinner-back-btn");
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }
}

export default MyDinnerTitle;

class MyDinnerTitle {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }
}

export default MyDinnerTitle;

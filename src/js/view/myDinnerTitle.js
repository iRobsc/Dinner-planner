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

    this.update = this.update.bind(this);
  }

  hide() {
    this.container.classList.add("hideView");
    this.model.guestChange.removeObserver(this.update);
  }

  show() {
    this.container.classList.remove("hideView");
    this.model.guestChange.addObserver(this.update);
    this.update();
  }

  update() {
    this.setPeopleAmount();
  }

  setPeopleAmount() {
    const noOfGuests = this.model.getNumberOfGuests();
    document.getElementById("people").innerHTML = noOfGuests;
  }
}

export default MyDinnerTitle;

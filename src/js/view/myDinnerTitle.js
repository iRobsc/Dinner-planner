class MyDinnerTitle {
  /**
   * Creates an instance of MyDinnerTitle.
   * @param {Element} container
   * @param {dinenrModel} model
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.setPeopleAmount();

    this.backBtn = this.container.querySelector("#mydinner-back-btn");
    this.model.guestChange.addObserver(this.update.bind(this));
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
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

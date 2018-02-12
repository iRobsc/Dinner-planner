class WelcomeScreen {
  /**
   * Create an instance of WelcomeScreen-
   * @param {Element} container
   */
  constructor(container) {
    this.container = container;
    this.btn = this.container.querySelector("#welcome-btn");
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }
}

export default WelcomeScreen;

import Router from "../router";

class WelcomeScreenController {
  constructor(view) {
    this.view = view;
  }

  init() {
    const { btn } = this.view;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      Router.goTo("/search");
    });
  }
}

export default WelcomeScreenController;

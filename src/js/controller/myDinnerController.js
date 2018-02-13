import Router from "../router";

class MyDinnerController {
  constructor(view) {
    this.view = view;
  }

  init() {
    const { printBtn } = this.view;
    printBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Router.goTo("/recipes");
    });
  }
}

export default MyDinnerController;

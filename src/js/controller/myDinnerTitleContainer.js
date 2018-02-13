import Router from "../router";

class MyDinnerTitleContainer {
  constructor(view) {
    this.view = view;
  }

  init() {
    const { backBtn } = this.view;
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Router.goBack();
    });
  }
}

export default MyDinnerTitleContainer;

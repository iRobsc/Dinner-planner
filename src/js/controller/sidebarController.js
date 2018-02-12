import Router from "../router";

class SidebarController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.menuBtn();
    this.setValue();
  }

  menuBtn() {
    this.view.menuBtn.addEventListener("click", () => {
      this.view.sidebarContent.classList.toggle("sidebar-hide");
      this.view.sidebarContent.classList.toggle("sidebar-show");
    });
  }

  setValue() {
    const { guestElem, confirmBtn } = this.view;
    guestElem.addEventListener("input", () => {
      if (guestElem.value !== "") this.model.setNumberOfGuests(parseInt(guestElem.value, 10));
    });
    guestElem.addEventListener("blur", () => {
      this.model.setNumberOfGuests(parseInt(guestElem.value, 10));
    });

    confirmBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Router.goTo("/mydinner");
    });
  }
}

export default SidebarController;

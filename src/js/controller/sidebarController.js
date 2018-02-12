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
    const input = this.view.guestElem;
    input.addEventListener("input", () => {
      if (input.value !== "") this.model.setNumberOfGuests(parseInt(input.value, 10));
    });
    input.addEventListener("blur", () => {
      this.model.setNumberOfGuests(parseInt(input.value, 10));
    });
  }
}

export default SidebarController;

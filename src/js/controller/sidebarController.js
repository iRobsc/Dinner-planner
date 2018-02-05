class SidebarController {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.setValue();
  }

  setValue() {
    const input = this.view.guestElem;
    input.addEventListener("input", () => {
      if (!input.value || parseInt(input.value, 10) < 0) return; // do nothing if invalid input
      this.model.setNumberOfGuests(parseInt(input.value, 10));
    });
    input.addEventListener("blur", () => {
      if (Number.isNaN(parseInt(input.value, 10)) || parseInt(input.value, 10) < 0) {
        input.value = 0;
        this.model.setNumberOfGuests(0);
      }
    });
  }
}

export default SidebarController;

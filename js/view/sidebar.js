class Sidebar {
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.menuBtn();
    this.numberOfGuests();
  }

  menuBtn() {
    const menuBtn = this.container.querySelector("#sidebar-accordion");
    const sidebarContent = this.container.querySelector("#sidebar-content");

    menuBtn.addEventListener("click", () => {
      sidebarContent.classList.toggle("sidebar-hide");
      sidebarContent.classList.toggle("sidebar-show");
    });
  }

  numberOfGuests() {
    const numberOfGuests = this.model.getNumberOfGuests();
    const guestElem = this.container.querySelector("#number-of-guests");
    guestElem.textContent = numberOfGuests;
  }
}

export default Sidebar;

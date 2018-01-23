class Sidebar {
  constructor(container, model) {
    const menuBtn = container.querySelector("#sidebar-accordion");
    const sidebarContent = container.querySelector("#sidebar-content");

    menuBtn.addEventListener("click", () => {
      sidebarContent.classList.toggle("sidebar-hide");
      sidebarContent.classList.toggle("sidebar-show");
    });

    const numberOfGuests = model.getNumberOfGuests();
    const guestElem = container.querySelector("#number-of-guests");
    guestElem.textContent = numberOfGuests;
  }
}

export default Sidebar;

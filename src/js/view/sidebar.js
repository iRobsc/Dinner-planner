import SidebarItem from "./sidebarItem";

class Sidebar {
  /**
   * Creates an instance of Sidebar.
   * @param {Element} container
   * @param {DinnerModel} model
   * @memberof Sidebar
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.confirmBtn = this.container.querySelector("#sidebar-confirm-btn");
    this.guestElem = this.container.querySelector("#number-of-guests");
    this.menuBtn = this.container.querySelector("#sidebar-accordion");
    this.sidebarContent = this.container.querySelector("#sidebar-content");

    this.update = this.update.bind(this);
  }

  hide() {
    this.container.classList.add("hideView");
    this.model.menuChange.removeObserver(this.update);
    this.model.guestChange.removeObserver(this.update);
  }

  show() {
    this.container.classList.remove("hideView");
    this.model.menuChange.addObserver(this.update);
    this.model.guestChange.addObserver(this.update);
    this.update();
  }

  update() {
    this.numberOfGuests();
    this.menuList();
    this.fetchPrice();
    this.setConfirmBtn();
  }

  setConfirmBtn() {
    const numberOfGuests = this.model.getNumberOfGuests();
    const menu = this.model.getFullMenu();

    if (numberOfGuests === 0 || menu.length === 0) {
      this.confirmBtn.classList.remove("dinner-btn");
      this.confirmBtn.classList.add("dinner-btn-disabled");
    } else {
      this.confirmBtn.classList.add("dinner-btn");
      this.confirmBtn.classList.remove("dinner-btn-disabled");
    }
  }

  numberOfGuests() {
    const numberOfGuests = this.model.getNumberOfGuests();
    this.guestElem.value = numberOfGuests;
  }

  menuList() {
    const listContainer = this.container.querySelector("#sidebar-list");
    listContainer.innerHTML = "";

    const menu = this.model.getFullMenu();

    if (menu.length === 0) {
      listContainer.textContent = "Your list is empty!";
      return;
    }

    for (const dish of menu) {
      const noOfGuests = this.model.getNumberOfGuests();
      const price = this.model.getDishPrice(dish) * noOfGuests;

      listContainer.appendChild(new SidebarItem(dish.name, price).generate());
    }
  }

  fetchPrice() {
    const priceElems = this.container.querySelectorAll(".price");
    const price = this.model.getTotalMenuPrice();
    for (const elem of priceElems) {
      elem.textContent = `${price} kr`;
    }
  }
}

export default Sidebar;

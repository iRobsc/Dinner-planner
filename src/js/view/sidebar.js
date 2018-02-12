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

    this.guestElem = this.container.querySelector("#number-of-guests");
    this.menuBtn = this.container.querySelector("#sidebar-accordion");
    this.sidebarContent = this.container.querySelector("#sidebar-content");

    this.numberOfGuests();
    this.menuList();
    this.fetchPrice();
    
    this.model.guestChange.addObserver(this.update.bind(this));
    this.model.menuChange.addObserver(this.update.bind(this));
  }

  hide() {
    this.container.classList.add(".hideView");
  }

  show() {
    this.container.classList.remove(".hideView");
    this.menuBtn();
    this.numberOfGuests();
    this.menuList();
    this.fetchPrice();
  }

  menuBtn() {
    const menuBtn = this.container.querySelector("#sidebar-accordion");
    const sidebarContent = this.container.querySelector("#sidebar-content");
  }

  update() {
    this.numberOfGuests();
    this.menuList();
    this.fetchPrice();
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

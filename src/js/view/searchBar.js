class searchBar {
  constructor() {
    this.searchButton;
    this.dropDown;
    this.searchField;
  }

  hide() {
    this.container.classList.add(".hideView");
  }

  show() {
    this.container.classList.remove(".hideView");
  }
}
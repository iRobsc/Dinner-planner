class SearchBar {
  constructor(container, model) {
    /*
    this.searchButton;
    this.dropDown;
    this.searchField;
    */
    this.container = container;
    this.model = model;
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }
}

export default SearchBar;

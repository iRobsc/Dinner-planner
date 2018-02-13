class SearchBar {
  /**
   * Creates an instance of SearchBar.
   * @param {Element} container
   * @param {dinnerModel} model
   * @memberof SearchBar
   */
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.searchForm = this.container.querySelector("#search");
  }

  hide() {
    this.container.classList.add("hideView");
  }

  show() {
    this.container.classList.remove("hideView");
  }
}

export default SearchBar;

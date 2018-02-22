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

  show(type, keywords) {
    this.container.classList.remove("hideView");
    const searchbar = this.container.querySelector("#search-text");
    searchbar.value = keywords;
    const dropdown = this.container.querySelector("#search-type");
    dropdown.value = type;
  }
}

export default SearchBar;

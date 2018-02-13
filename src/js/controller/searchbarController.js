import Router from "../router";

class SearchbarController {
  /**
   * Creates an instance of SearchbarController.
   * @param {Searchbar} view
   * @param {dinnerModel} model
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  init() {
    this.view.searchForm.addEventListener("submit", this.onSearchSubmit);
  }

  /**
   * What happens when the search form is submitted
   *
   * @param {Event} e
   */
  onSearchSubmit(e) {
    e.preventDefault();
    const inputs = this.view.searchForm.elements;
    const typeElem = inputs["search-type"];
    const selectedType = typeElem.options[typeElem.selectedIndex]
      .value
      .replace(/\s/g, "_")
      .toLowerCase();
    const keywords = inputs["search-text"]
      .value
      .trim()
      .replace(/\s/g, "_")
      .toLowerCase();
    Router.goTo(`/search?type=${selectedType}&keywords=${keywords}`);
  }
}

export default SearchbarController;

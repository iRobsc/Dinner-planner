import DinnerModel from "./model/dinnerModel";
import Sidebar from "./view/sidebar";

(function main() {
  // We instantiate our model
  const model = new DinnerModel();

  // And create the instance of ExampleView
  new Sidebar(document.getElementById("sidebar"), model);

  /**
  * IMPORTANT: app.js is the only place where you are allowed to
  * use the $('someSelector') to search for elements in the whole HTML.
  * In other places you should limit the search only to the children
  * of the specific view you're working with (see exampleView.js).
  */
}());

// reload instead of hot module replacement with parcel-bundler
if (module.hot) {
  module.hot.accept(() => {
    window.location.reload();
  });
}

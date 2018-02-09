import DinnerModel from "./model/dinnerModel";
import Sidebar from "./view/sidebar";
import FoodGrid from "./view/foodGrid";
import DishView from "./view/dishView";
import MyDinner from "./view/myDinner";
import RecipeList from "./view/recipeList";
import recipe from "./view/recipe";
import ingredientList from "./view/ingredientList";
import SearchBar from "./view/searchBar";
import MyDinnerTitle from "./view/myDinnerTitle";

(function main() {
  // We instantiate our model
  const model = new DinnerModel();

  const sidebarContainer = document.getElementById("sidebar");
  const foodGridContainer = document.getElementById("food-grid");
  const dishContainer = document.getElementById("dish-content");
  const myDinnerContainer = document.getElementById("myDinner-dishes");
  const recipeContainer = document.getElementById("myDinner-recipes");
  const searchBarContainer = document.getElementById("search");
  const MyDinnerTitleContainer = document.getElementById("title-bar");

  let viewState = 0;
  let sideBar;
  let foodGrid;
  let dishView;
  let myDinner;
  let recipeList;
  let searchBar;

  // And create the instance of ExampleView
  if (sidebarContainer) sideBar = new Sidebar(sidebarContainer, model);

  if (foodGridContainer) foodGrid = new FoodGrid(foodGridContainer, model);

  if (dishContainer) dishView = new DishView(dishContainer, model, 1);

  if (myDinnerContainer) myDinner = new MyDinner(myDinnerContainer, model);

  if (recipeContainer) recipeList = new RecipeList(recipeContainer, model);
  
  if (searchBarContainer) searchBar = new SearchBar(searchBarContainer, model);

  if (MyDinnerTitleContainer) myDinnerTitle = new MyDinnerTitle(searchBarContainer, model);

  function showAppScreen() {
    sideBar.show();
    searchBar.show();
    foodGrid.show();
    dishView.hide();
    recipeList.hide();
    ingredientList.hide();
    myDinner.hide();
    myDinnerTitle.hide();
  }

  function showDishDetailsScreen() {
    sideBar.show();
    searchBar.hide();
    foodGrid.hide();
    dishView.show();
    recipeList.hide();
    ingredientList.show();
    myDinner.hide();
    myDinnerTitle.hide();
  }

  function showMyDinnerScreen() {
    sideBar.hide();
    searchBar.hide();
    foodGrid.hide();
    dishView.hide();
    recipeList.hide();
    ingredientList.hide();
    myDinner.show();
    myDinnerTitle.show();
  }

  function showRecipeScreen() {
    sideBar.hide();
    searchBar.hide();
    foodGrid.hide();
    dishView.hide();
    recipeList.show();
    ingredientList.hide();
    myDinner.hide();
    myDinnerTitle.show();
  }

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

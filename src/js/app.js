import DinnerModel from "./model/dinnerModel";
import Sidebar from "./view/sidebar";
import FoodGrid from "./view/foodGrid";
import DishView from "./view/dishView";
import IngredientList from "./view/ingredientList";
import MyDinner from "./view/myDinner";
import RecipeList from "./view/recipeList";
import SearchBar from "./view/searchBar";
import MyDinnerTitle from "./view/myDinnerTitle";
import FoodGridController from "./controller/foodGridController";
import SidebarController from "./controller/sidebarController";
import DishViewController from "./controller/dishViewController";
import IngrListController from "./controller/ingrListController";
import "../css/index.css";
import "../css/responsive.css";

(function main() {
  // We instantiate our model
  const model = new DinnerModel();
  
  const sidebarContainer = document.getElementById("sidebar-container");
  const foodGridContainer = document.getElementById("food-grid");
  const dishContainer = document.getElementById("dish-content");
  const ingredientContainer = document.getElementById("dish-ingredients");
  const myDinnerContainer = document.getElementById("myDinner-dishes");
  const recipeContainer = document.getElementById("myDinner-recipes");
  const searchBarContainer = document.getElementById("search");
  const MyDinnerTitleContainer = document.getElementById("title-bar");

  let viewState = 0;
  
  const sidebar = new Sidebar(sidebarContainer, model);
  const sidebarController = new SidebarController(sidebar, model);
  sidebarController.init();
  
  const foodGrid = new FoodGrid(foodGridContainer, model);
  const foodGridController = new FoodGridController(foodGrid);
  foodGridController.init();
  
  const dishView = new DishView(dishContainer, model, 103);
  const dishViewController = new DishViewController(dishView);
  dishViewController.init();

  const myDinner = new MyDinner(myDinnerContainer, model);
  const recipeList = new RecipeList(recipeContainer, model);
  const searchBar = new SearchBar(searchBarContainer, model);
  const myDinnerTitle = new MyDinnerTitle(searchBarContainer, model);
  
  const ingredientList = new IngredientList(ingredientContainer, model, 103);
  ingredientList.show();
  const ingrListController = new IngrListController(ingredientList, model);
  ingrListController.init();

  function showAppScreen() {
    sidebar.show();
    searchBar.show();
    foodGrid.show();
    dishView.hide();
    recipeList.hide();
    ingredientList.hide();
    myDinner.hide();
    myDinnerTitle.hide();
  }

  function showDishDetailsScreen() {
    sidebar.show();
    searchBar.hide();
    foodGrid.hide();
    dishView.show();
    recipeList.hide();
    ingredientList.show();
    myDinner.hide();
    myDinnerTitle.hide();
  }

  function showMyDinnerScreen() {
    sidebar.hide();
    searchBar.hide();
    foodGrid.hide();
    dishView.hide();
    recipeList.hide();
    ingredientList.hide();
    myDinner.show();
    myDinnerTitle.show();
  }

  function showRecipeScreen() {
    sidebar.hide();
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

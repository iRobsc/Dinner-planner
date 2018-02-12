import Router from "./router";
import DinnerModel from "./model/dinnerModel";
import WelcomeScreen from "./view/welcomeScreen";
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

  const welcomeScreenContainer = document.getElementById("welcome-box");
  const sidebarContainer = document.getElementById("sidebar-container");
  const foodGridContainer = document.getElementById("food-grid");
  const dishContainer = document.getElementById("dish-content");
  const ingredientContainer = document.getElementById("dish-ingredients");
  const myDinnerContainer = document.getElementById("myDinner-container");
  const recipeContainer = document.getElementById("myDinner-recipes");
  const searchBarContainer = document.getElementById("searchbar-container");
  const myDinnerTitleContainer = document.getElementById("title-bar");

  // let viewState = 0;

  const views = {
    welcomeScreen: new WelcomeScreen(welcomeScreenContainer),
    sidebar: new Sidebar(sidebarContainer, model),
    foodGrid: new FoodGrid(foodGridContainer, model),
    dishView: new DishView(dishContainer, model),
    myDinner: new MyDinner(myDinnerContainer, model),
    recipeList: new RecipeList(recipeContainer, model),
    searchBar: new SearchBar(searchBarContainer, model),
    ingredientList: new IngredientList(ingredientContainer, model, 103),
    myDinnerTitle: new MyDinnerTitle(myDinnerTitleContainer, model),
  };

  const controllers = {
    sidebarController: new SidebarController(views.sidebar, model),
    foodGridController: new FoodGridController(views.foodGrid),
    dishViewController: new DishViewController(views.dishView),
    ingrListController: new IngrListController(views.ingredientList, model),
  };

  Object.values(controllers).forEach((controller) => {
    controller.init();
  });

  function hideAllViews() {
    Object.values(views).forEach((view) => {
      view.hide();
    });
  }

  function showWelcomeScreen() {
    hideAllViews();
    views.welcomeScreen.show();
  }

  function showAppScreen() {
    hideAllViews();
    views.sidebar.show();
    views.searchBar.show();
    views.foodGrid.show();
  }

  function showDishDetailsScreen(dishId) {
    hideAllViews();
    views.sidebar.show();
    views.dishView.show(dishId);
    views.ingredientList.show(dishId);
  }

  function showMyDinnerScreen() {
    hideAllViews();
    views.myDinner.show();
    views.myDinnerTitle.show();
  }

  function showRecipeScreen() {
    hideAllViews();
    views.recipeList.show();
    views.myDinnerTitle.show();
  }

  Router.on("/", () => {
    showWelcomeScreen();
  });
  Router.on("/search", () => {
    showAppScreen();
  });
  Router.on("/dish", (params) => {
    // params.id is a string
    showDishDetailsScreen(parseInt(params.id, 10));
  });
  Router.on("/mydinner", () => {
    showMyDinnerScreen();
  });
  Router.on("/recipes", () => {
    showRecipeScreen();
  });
  Router.listen();

  /**
  * IMPORTANT: app.js is the only place where you are allowed to
  * use the $('someSelector') to search for elements in the whole HTML.
  * In other places you should limit the search only to the children
  * of the specific view you're working with (see exampleView.js).
  */
}());

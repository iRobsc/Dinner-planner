import Router from "./router";
import DinnerModel from "./model/dinnerModel";
import WelcomeScreen from "./view/welcomeScreen";
import Sidebar from "./view/sidebar";
import FoodGrid from "./view/foodGrid";
import DishView from "./view/dishView";
import DishViewLoading from "./view/dishViewLoading";
import IngredientList from "./view/ingredientList";
import MyDinner from "./view/myDinner";
import RecipeList from "./view/recipeList";
import SearchBar from "./view/searchBar";
import MyDinnerTitle from "./view/myDinnerTitle";
import WelcomeScreenController from "./controller/welcomeScreenController";
import FoodGridController from "./controller/foodGridController";
import SidebarController from "./controller/sidebarController";
import DishViewController from "./controller/dishViewController";
import IngrListController from "./controller/ingrListController";
import MyDinnerTitleController from "./controller/myDinnerTitleContainer";
import MyDinnerController from "./controller/myDinnerController";
import SearchbarController from "./controller/searchbarController";
import "../css/index.scss";
import "../css/responsive.scss";

(function main() {
  // We instantiate our model
  const model = new DinnerModel();

  const welcomeScreenContainer = document.getElementById("welcome-box");
  const sidebarContainer = document.getElementById("sidebar-container");
  const foodGridContainer = document.getElementById("food-grid");
  const dishContainer = document.getElementById("dish-content");
  const dishViewLoadingContainer = document.getElementById("dish-view-loading");
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
    dishViewLoading: new DishViewLoading(dishViewLoadingContainer),
    myDinner: new MyDinner(myDinnerContainer, model),
    recipeList: new RecipeList(recipeContainer, model),
    searchBar: new SearchBar(searchBarContainer, model),
    ingredientList: new IngredientList(ingredientContainer, model),
    myDinnerTitle: new MyDinnerTitle(myDinnerTitleContainer, model),
  };

  const controllers = {
    welcomeScreenController: new WelcomeScreenController(views.welcomeScreen),
    sidebarController: new SidebarController(views.sidebar, model),
    foodGridController: new FoodGridController(views.foodGrid),
    dishViewController: new DishViewController(views.dishView),
    ingrListController: new IngrListController(views.ingredientList, model),
    myDinnerTitleController: new MyDinnerTitleController(views.myDinnerTitle),
    myDinnerController: new MyDinnerController(views.myDinner),
    searchbarController: new SearchbarController(views.searchBar, model),
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

  function showAppScreen(type, keywords) {
    hideAllViews();
    views.sidebar.show();
    views.searchBar.show(type, keywords);
    views.foodGrid.show(type, keywords);
  }

  function showDishDetailsScreen(dishId) {
    hideAllViews();
    views.sidebar.show();
    views.dishViewLoading.show();
    model.getDish(dishId)
      .then((dish) => {
        views.dishViewLoading.hide();
        views.dishView.show(dish);
        views.ingredientList.show(dish);
      })
      .catch((error) => {
        views.dishViewLoading.hide();
        console.error(error);
      });
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
  Router.on("/search", (params) => {
    const type = params.type || "starter";
    const keywords = params.keywords || "";
    showAppScreen(type, keywords);
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

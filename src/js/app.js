import DinnerModel from "./model/dinnerModel";
import Sidebar from "./view/sidebar";
import FoodGrid from "./view/foodGrid";
import DishView from "./view/dishView";
import IngredientList from "./view/ingredientList";
import MyDinner from "./view/myDinner";
import RecipeList from "./view/recipeList";
import FoodGridController from "./controller/foodGridController";
import SidebarController from "./controller/sidebarController";
import IngrListController from "./controller/ingrListController";
import "../css/index.css";
import "../css/responsive.css";

(function main() {
  // We instantiate our model
  const model = new DinnerModel();

  const sidebarContainer = document.getElementById("sidebar-container");
  const foodGridContainer = document.getElementById("food-grid");
  const dishContainer = document.getElementById("dish-content");
  const ingrContainer = document.getElementById("dish-ingredients");
  const myDinnerContainer = document.getElementById("myDinner-dishes");
  const recipeContainer = document.getElementById("myDinner-recipes");

  // And create the instance of ExampleView
  if (sidebarContainer) {
    const sidebar = new Sidebar(sidebarContainer, model);
    const sidebarController = new SidebarController(sidebar, model);
    sidebarController.init();
  }

  if (foodGridContainer) {
    const foodGrid = new FoodGrid(foodGridContainer, model);
    const foodGridController = new FoodGridController(foodGrid, model);
    foodGridController.init();
  }

  if (dishContainer) new DishView(dishContainer, model, 103);

  if (ingrContainer) {
    const ingrListView = new IngredientList(ingrContainer, model, 103);
    ingrListView.show();
    const ingrListController = new IngrListController(ingrListView, model);
    ingrListController.init();
  }

  if (myDinnerContainer) new MyDinner(myDinnerContainer, model);

  if (recipeContainer) new RecipeList(recipeContainer, model);

  /**
  * IMPORTANT: app.js is the only place where you are allowed to
  * use the $('someSelector') to search for elements in the whole HTML.
  * In other places you should limit the search only to the children
  * of the specific view you're working with (see exampleView.js).
  */
}());

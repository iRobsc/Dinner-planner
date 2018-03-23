import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cache from "../utils/cache";
import ScrollToTop from "../pages/ScrollToTop";
import AppRoute from "../pages/AppRoute";
import MainLayout from "../layouts/MainLayout";
import ResultLayout from "../layouts/ResultLayout";
import Welcome from "../components/Welcome";
import SearchPage from "../pages/SearchPage";
import DishDetailsPage from "../pages/DishDetailsPage";
import MyDinnerPage from "../pages/MyDinnerPage";
import RecipesPage from "../pages/RecipesPage";
import NoMatchPage from "../pages/NoMatchPage";

class App extends Component {
  state = {
    menu: [],
    numberOfGuests: 1,
  };

  componentWillMount() {
    const state = Cache.getState();
    if (state === -1) return;
    this.setState(state);
  }

  componentDidUpdate() {
    Cache.setState(this.state);
  }

  setNumberOfGuests = (numberOfGuests) => {
    this.setState({ numberOfGuests });
  }

  addDishToMenu = (newDish) => {
    const { menu } = this.state;
    if (menu.some(dish => dish.id === newDish.id)) {
      // already added a dish with this id
      return;
    }
    this.setState({ menu: [...menu, newDish] });
  }

  deleteDishFromMenu = (deleteId) => {
    const newMenu = this.state.menu.filter(dish => dish.id !== deleteId);
    this.setState({ menu: newMenu });
  }

  render() {
    const { numberOfGuests, menu } = this.state;
    const { setNumberOfGuests, addDishToMenu, deleteDishFromMenu } = this;
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <AppRoute
              path="/search"
              component={SearchPage}
              layout={MainLayout}
              layoutProps={{ numberOfGuests, menu, setNumberOfGuests, deleteDishFromMenu }}
            />
            <AppRoute
              path="/dish/:id"
              component={DishDetailsPage}
              componentProps={{ numberOfGuests, addDishToMenu }}
              layout={MainLayout}
              layoutProps={{ numberOfGuests, menu, setNumberOfGuests, deleteDishFromMenu }}
            />
            <AppRoute
              path="/mydinner"
              component={MyDinnerPage}
              layout={ResultLayout}
              layoutProps={{ numberOfGuests }}
              componentProps={{ menu, numberOfGuests }}
            />
            <AppRoute
              path="/recipes"
              component={RecipesPage}
              layout={ResultLayout}
              layoutProps={{ numberOfGuests }}
              componentProps={{ menu }}
            />
            <Route component={NoMatchPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import SearchPage from "../pages/SearchPage";
import DishDetailsPage from "../pages/DishDetailsPage";
import MyDinnerPage from "../pages/MyDinnerPage";
import RecipesPage from "../pages/RecipesPage";
import NoMatchPage from "../pages/NoMatchPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/search/:type/:keywords/:page" component={SearchPage} />
          <Route path="/dish/:id" component={DishDetailsPage} />
          <Route path="/mydinner" component={MyDinnerPage} />
          <Route path="/recipes" component={RecipesPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

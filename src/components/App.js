import React, { Component } from "react";
import DinnerButton from "./DinnerButton";
import DinnerButtonLink from "./DinnerButtonLink";
import Welcome from "./Welcome";
import "../css/index.scss";

class App extends Component {
  render() {
    return (
      <div> <Welcome /> </div>
    );
  }
}

export default App;

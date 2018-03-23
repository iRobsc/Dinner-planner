import React from "react";
import DinnerButtonLink from "../components/DinnerButtonLink";
import "../css/NoMatch.scss";

function NoMatchPage() {
  return (
    <div className="error">
      <div>404, the page you were looking for does not exist</div>
      <DinnerButtonLink to="/"> Go back to home </DinnerButtonLink>
    </div>
  );
}

export default NoMatchPage;

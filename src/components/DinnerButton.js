import React from "react";
import "./../css/buttons.scss";

function DinnerButton({ children }) {
  return (
    <button className="dinner-btn">{children}</button>
  );
}

export default DinnerButton;

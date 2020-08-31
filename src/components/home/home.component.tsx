import React from "react";
const godzilla = require("../../assets/img/godzilla.jpg");
const classes = require("./home.component.style.scss");

export const HomeComponent: React.FC = () => {
  return (
    <div>
      <img src={godzilla} alt="" />
      <span className={classes["result-background"]}>
        Hello from Home Component
      </span>
    </div>
  );
};

import React from "react";
const godzilla = require("../../assets/img/hokusai.jpg");
const classes = require("./login.component.style.scss");

export const LoginComponent: React.FC = () => {
  return (
    <div>
      <img src={godzilla} alt="" />
      <span className={classes["result-background"]}>
        Hello from Login Component
      </span>
    </div>
  );
};

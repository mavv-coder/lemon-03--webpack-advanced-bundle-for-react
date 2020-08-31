import React from "react";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
const godzilla = require("../../assets/img/godzilla.jpg");
const classes = require("./home.component.style.scss");

export const HomeComponent: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <div className={classes["main-container"]}>
        <h1 className={classes["main-title"]}>Hello from Home Component</h1>
        <img src={godzilla} alt="" />
      </div>
    </>
  );
};

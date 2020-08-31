import React from "react";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
const godzilla = require("../../assets/img/godzilla.jpg");
const classes = require("./home.component.style.scss");

export const HomeComponent: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <div className={classes.mainContainer}>
        <h1 className={classes.mainTitle}>Hello from Home Component</h1>
        <img src={godzilla} alt="" />
      </div>
    </>
  );
};

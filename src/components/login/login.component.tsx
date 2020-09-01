import React from "react";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
const hokusai = require("../../assets/img/hokusai.jpg");
const classes = require("./login.style.scss");

export const LoginComponent: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <div className={classes.mainContainer}>
        <h1 className={classes.mainTitle}>Hello from Login Component</h1>
        <img src={hokusai} alt="" />
      </div>
    </>
  );
};

import React from "react";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
const hokusai = require("../../assets/img/hokusai.jpg");
const classes = require("./login.component.style.scss");

export const LoginComponent: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <div className={classes["main-container"]}>
        <h1 className={classes["main-title"]}>Hello from Login Component</h1>
        <img src={hokusai} alt="" />
      </div>
    </>
  );
};

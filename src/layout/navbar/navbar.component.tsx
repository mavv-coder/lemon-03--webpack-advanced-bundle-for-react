import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "router/index"; // Using alias
const classes = require("./navbar.component.style.scss");

export const NavbarComponent: React.FC = () => {
  return (
    <ul className={classes["list"]}>
      <li>
        <Link to={switchRoutes.home} className={classes["link"]}>
          Home
        </Link>
      </li>
      <li>
        <Link to={switchRoutes.login} className={classes["link"]}>
          {" "}
          Login
        </Link>
      </li>
    </ul>
  );
};

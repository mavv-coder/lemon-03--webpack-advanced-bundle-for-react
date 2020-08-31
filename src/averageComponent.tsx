import React from "react";
import { getAvg } from "./averageService";
const godzilla = require("./assets/img/godzilla.jpg");
const classes = require("./averageComponentStyles.scss");

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <h1>image</h1>
      <img src={godzilla} alt="" />
      <span className={classes["result-background"]}>
        Students average: {average}
      </span>
    </div>
  );
};

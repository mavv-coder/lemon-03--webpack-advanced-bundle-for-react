import { getAvg } from "./averageService";
import godzillaImg from "./assets/img/godzilla.jpg";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);

const img = document.createElement("img");
img.src = godzillaImg;
document.getElementById("imgContainer").appendChild(img);

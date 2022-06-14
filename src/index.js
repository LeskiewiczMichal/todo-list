import "./style.css"
import { loadMainPage } from "./functions/mainPage";
import { homeButton, newProject } from "./functions/projectButtons";

// Cache DOM
homeButton();

loadMainPage();

document.querySelector('#newProjectBtn').addEventListener('click', newProject);

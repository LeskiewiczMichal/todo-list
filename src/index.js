import "./style.css"
import { loadMainPage } from "./functions/mainPage";
import { homeButton, newProject } from "./functions/projectButtons";
import { renderProjectButton } from "./functions/renderProject";

// Cache DOM
homeButton();

loadMainPage();

document.querySelector('#newProjectBtn').addEventListener('click', newProject);
document.querySelector('#newProjectBtn').addEventListener('click', renderProjectButton);

const newbtn = document.querySelector('button');
newbtn.textContent = 'hit'
newbtn.addEventListener('click', () => {
    localStorage.clear();
})
document.querySelector('#menu').appendChild(newbtn)
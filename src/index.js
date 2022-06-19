import "./style.css"
import { loadHomePage } from "./functions/mainPage";
import { createProjectForm } from "./functions/UI"

// Cache DOM
// homeButton();

// loadMainPage();

// document.querySelector('#newProjectBtn').addEventListener('click', newProject);
// document.querySelector('#newProjectBtn').addEventListener('click', renderProjectButton);

// bind events

document.querySelector('#newProjectBtn').addEventListener('click', () => {
    createProjectForm();
})
document.querySelector('#home').addEventListener('click', loadHomePage);


loadHomePage();
import "./style.css"
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


import "./style.css"
import { loadHomePage } from "./functions/mainPage";
import { createProjectForm, renderProjects } from "./functions/UI"

// bind events
document.querySelector('#newProjectBtn').addEventListener('click', () => {
    createProjectForm();
})
document.querySelector('#home').addEventListener('click', loadHomePage);

// initial loading
loadHomePage();
renderProjects()
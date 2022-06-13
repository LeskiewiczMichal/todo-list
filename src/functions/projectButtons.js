import { loadMainPage } from "./mainPage";
import { Project } from "./newProject";

const homeButton = () => {
    const btn = document.querySelector('#home');

    btn.addEventListener('click', loadMainPage);
}

const newProject = () => {
    const btn = document.querySelector('#newProjectBtn');

    
}

export { homeButton, newProject };
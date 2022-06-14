import { loadMainPage } from "./mainPage";
import { Project } from "./newProject";

const homeButton = () => {
    const btn = document.querySelector('#home');

    btn.addEventListener('click', loadMainPage);
}

const newProject = () => {

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'projectname');
    nameInput.setAttribute('placeholder', 'Project Name');

    const confirmButton = document.createElement('button');
    confirmButton.innerText = 'confirm';
    confirmButton.addEventListener('click', () => {
        const project = Project(nameInput.value);
        document.querySelector('#inputDiv').remove();
    })

    const inputDiv = document.createElement('div');
    inputDiv.setAttribute('id', 'inputDiv');
    inputDiv.appendChild(nameInput);
    inputDiv.appendChild(confirmButton);

    document.querySelector('#layout').appendChild(inputDiv);
};

export { homeButton, newProject };
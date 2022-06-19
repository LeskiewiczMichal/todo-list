import { loadMainPage } from "./mainPage";
import { Project } from "./newProject";
import { renderProjects } from "./renderProject";

// home project button
const homeButton = () => {
    const btn = document.querySelector('#home');

    btn.addEventListener('click', loadMainPage);
}

let projects = [];

const getProjects = () => projects;

// new project button
// const newProject = () => {
//     const mainDiv = document.querySelector('#main');
//     const menuDiv = document.querySelector('#menu');

//     // make other elements unclickable 
//     menuDiv.classList.add('unclickable');
//     mainDiv.classList.add('unclickable');


//     const nameInput = document.createElement('input');
//     nameInput.setAttribute('type', 'text');
//     nameInput.setAttribute('name', 'projectname');
//     nameInput.setAttribute('placeholder', 'Project Name');

//     const confirmButton = document.createElement('button');
//     confirmButton.innerText = 'confirm';
//     confirmButton.addEventListener('click', () => {
//         const project = Project(nameInput.value);
//         projects.push(project);
//         document.querySelector('#inputDiv').remove();
//         renderProjects(projects)
//         // make other elements clickable
//         menuDiv.classList.remove('unclickable');
//         mainDiv.classList.remove('unclickable');
//     })
    
//     const exitButton = document.createElement('button');
//     exitButton.innerText = 'X';
//     exitButton.setAttribute('id', 'exitProjectForm');
//     exitButton.addEventListener('click', (e) => {
//         // remove the form
//         e.target.parentNode.remove();

//         // make other elements clickable
//         menuDiv.classList.remove('unclickable');
//         mainDiv.classList.remove('unclickable');
//     })

//     // create and append form into layout
//     const inputDiv = document.createElement('div');
//     inputDiv.setAttribute('id', 'inputDiv');
//     inputDiv.appendChild(exitButton)
//     inputDiv.appendChild(nameInput);
//     inputDiv.appendChild(confirmButton);

//     document.querySelector('#layout').appendChild(inputDiv);
// };


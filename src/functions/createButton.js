import Project from './createProject';

const newButton = (projectName) => {

    const menu = document.querySelector('#menu');

    const button = document.createElement('button');
    button.innerHTML = projectName;

    const newProject = Project(projectName);
    const loadProject = 

    button.addEventListener('click', loadProject());
    menu.appendChild(button);
}

export default newButton
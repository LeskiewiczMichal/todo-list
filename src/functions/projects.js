const { saveProjects, getProjects } = require("./storage");

const Project = (name) => {
    const todoList = [];

    // const name = name;

    return { name, todoList }
};

const newProject = () => {
    // create new project
    const project = Project(document.querySelector('#projectName').value);

    // get project list and add new project
    const projectList = getProjects();
    projectList.push(project);

    // delete project creation form
    document.querySelector('#inputDiv').remove();

    // save new project to the list
    saveProjects(projectList);

    // make other elements clickable
    document.querySelector('#menu').classList.remove('unclickable');
    document.querySelector('#main').classList.remove('unclickable');
};

export { newProject }
const { saveProjects, getProjects } = require("./storage");

const Project = (name) => {
    const todoList = [];

    const projectName = name;

    return { projectName, todoList }
};

const newProject = () => {
    // create new project
    const project = Project(document.querySelector('#projectName').value);

    // get project list and push new project
    const projectList = getProjects();
    projectList.push(project);

    // removes the form for creating project
    document.querySelector('#inputDiv').remove();

    // save new project in local storage
    saveProjects(projectList);
    
    // make other elements clickable
    document.querySelector('#menu').classList.remove('unclickable');
    document.querySelector('#main').classList.remove('unclickable');
};

export { newProject }
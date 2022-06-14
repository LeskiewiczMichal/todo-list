import { renderProject } from "./renderProject";

const Project = (name) => {
    const todoList = [];

    const projectName = name;

    const getTodoList = () => todoList;

    const selectProject = document.createElement('button');
    selectProject.innerText = name;
    selectProject.addEventListener('click', () => {
        renderProject(todoList);
    });

    document.querySelector('#projectList').appendChild(selectProject);

    return { getTodoList }
}

export { Project };
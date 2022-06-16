import { renderProject } from "./renderProject";
import { removeTodo } from "./removeTodo";
import { renderTodos } from "./renderTodo";

// create new project
const Project = (name) => {
    const todoList = [];

    const projectName = name;

    const getTodoList = () => todoList;

    // create button to select the project in menu 
    const selectProject = document.createElement('button');
    selectProject.innerText = name;
    selectProject.addEventListener('click', (e) => {
        const selecProjectBtn = e.target;
        renderProject(todoList, selecProjectBtn);
    });


    document.querySelector('#projectList').appendChild(selectProject);

    return { getTodoList }
}

export { Project };
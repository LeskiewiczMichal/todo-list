import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";
import { createRemoveProjectButton } from "./removeProjectButton";
// import { renderProject } from "./renderProject";
import { getProjects } from "./projectButtons";


const renderProject = (todoList, selecProjectBtn) => {
    createAddButton(todoList);
    createRemoveProjectButton(selecProjectBtn);
    renderTodos(todoList);
};

const renderProjects = (projects) => {

    projects.forEach(project => {
        // const projectList = document.querySelector('#projectList');
        // for (let i = projectList.length; i > 1; i--) {
        //     projectList[i].remove();
        // }
        
        const selectProject = document.createElement('button');
        selectProject.innerText = project.getProjectName();
        selectProject.addEventListener('click', (e) => {
            const selecProjectBtn = e.target;
            const todoList = project.getTodoList();
            renderProject(todoList, selecProjectBtn);
        }); 
        document.querySelector('#projectList').appendChild(selectProject)
    });
}

export { renderProject, renderProjects }
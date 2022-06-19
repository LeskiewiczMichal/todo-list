import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";
import { createRemoveProjectButton } from "./removeProjectButton";
// import { renderProject } from "./renderProject";
// import { getProjects } from "./projectButtons";
import { loadMainPage } from "./mainPage";


const renderProject = (todoList, selecProjectBtn) => {
    createAddButton(todoList);
    createRemoveProjectButton(selecProjectBtn);
    renderTodos(todoList);
};

const renderProjects = (projects) => {

    // if (document.querySelector('#projectList').childNodes.length > 1) {
    //     document.querySelector('#projectList').lastChild.remove();
    // } else {
    //     return
    // }

    document.querySelector('#projectList').innerHTML = '';

    const homeButton = document.createElement('button');
        homeButton.setAttribute('id', 'home');
        homeButton.innerText = 'Home';
        homeButton.addEventListener('click', loadMainPage);
    
        document.querySelector('#projectList').appendChild(homeButton);


    projects.forEach(project => {
        // const projectList = document.querySelector('#projectList');
        // for (let i = projectList.length; i > 1; i--) {
        //     projectList[i].remove();
        // }

        // $('#projectList').children(':not(#home)').remove();

        // if (document.querySelector('#projectList').childNodes.length > 1) {
        //     document.querySelector('#projectList').lastChild.remove();
        // } else {
        //     return
        // }

        
        
        
        const selectProject = document.createElement('button');
        selectProject.innerText = project.projectName;
        selectProject.addEventListener('click', (e) => {
            const selecProjectBtn = e.target;
            const todoList = project.todoList;
            renderProject(todoList, selecProjectBtn);
        }); 

        // document.querySelector('#projectList').appendChild(homeButton);
        document.querySelector('#projectList').appendChild(selectProject)
    });
}

export { renderProject, renderProjects }
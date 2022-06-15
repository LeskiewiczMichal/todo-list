import { renderProject } from "./renderProject";
import { removeTodo } from "./removeTodo";
import { renderTodos } from "./renderTodo";

const Project = (name) => {
    const todoList = [];

    const projectName = name;

    const getTodoList = () => todoList;

    const selectProject = document.createElement('button');
    selectProject.innerText = name;
    selectProject.addEventListener('click', () => {
        renderProject(todoList);
    });

    // const renderedTodos = document.querySelectorAll('.Todo');
    // renderedTodos.forEach(todo => {
    //     const removeButton = document.createElement('button');
    //     removeButton.addEventListener('click', () => {
    //         removeTodo(todoList, todo);
    //         renderTodos(todoList);
    //     })

    //     todo.parentNode.insertBefore(removeButton, todo.nextSibling)
    // });

    document.querySelector('#projectList').appendChild(selectProject);

    return { getTodoList }
}

export { Project };
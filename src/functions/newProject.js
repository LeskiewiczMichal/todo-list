import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";

const Project = (name) => {
    const todoList = [];

    const projectName = name;

    // const getProjectName = () => projectName

    const loadProjectPage = () => {
        document.querySelector('#toDoName').value = '';
        createAddButton(todoList);
        renderTodos(todoList);
    }

    return {loadProjectPage}
}

export { Project };
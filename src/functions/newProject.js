import { renderProject } from "./renderProject";
import { removeTodo } from "./removeTodo";
import { renderTodos } from "./renderTodo";

// create new project
const Project = (name) => {
    const todoList = [];

    const projectName = name;

    return { projectName, todoList }
}


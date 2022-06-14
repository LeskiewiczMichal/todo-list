import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";

const renderProject = (todoList) => {
    // document.querySelector('#toDoName').value = '';
    createAddButton(todoList);
    renderTodos(todoList);
};

export { renderProject }
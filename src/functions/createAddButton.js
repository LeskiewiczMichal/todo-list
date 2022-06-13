import {renderTodos} from "./renderTodo";
import { addNewToDo } from "./addNewTodoButton";

const todoDiv = document.querySelector('#inputForTodo');

const createAddButton = (todoList) => {
    todoDiv.removeChild(todoDiv.lastChild);
    const newBtn = document.createElement('button');
    newBtn.innerText = '+';
    newBtn.addEventListener('click', () => {
        addNewToDo(todoList);
        renderTodos(todoList);
    })
    todoDiv.appendChild(newBtn);
}

export { createAddButton }
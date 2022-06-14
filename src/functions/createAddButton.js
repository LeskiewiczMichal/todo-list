import {renderTodos} from "./renderTodo";
import { addNewToDo } from "./addNewTodoButton";

const main = document.querySelector('#main');

const createAddButton = (todoList) => {
    main.removeChild(main.firstChild);
    const newBtn = document.createElement('button');
    newBtn.innerText = 'Add new todo';
    newBtn.addEventListener('click', () => {
        addNewToDo(todoList);
        renderTodos(todoList);
    })
    main.insertBefore(newBtn, main.firstChild);
}

export { createAddButton }
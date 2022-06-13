import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";


// Array for todos
const todoList = [];

const loadMainPage = () => {
    // addTodoButton.replaceWith(addTodoButton.clone());    
    document.querySelector('#toDoName').value = '';
    createAddButton(todoList);
    renderTodos(todoList);
}

export {loadMainPage};
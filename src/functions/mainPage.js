import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";


// Array for todos
const todoList = [];

const loadMainPage = () => {
    // addTodoButton.replaceWith(addTodoButton.clone());    
    createAddButton(todoList);
    renderTodos(todoList);
}

export {loadMainPage};
import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";
import { getHomeTodoList } from "./storage";


// Array for todos
const todoList = getHomeTodoList;

const loadHomePage = () => {
    // addTodoButton.replaceWith(addTodoButton.clone());  
    if (document.querySelector('#removeProjectBtn')) {
        document.querySelector('#removeProjectBtn').remove(); 
    } 
    
    // createAddButton(todoList);
    // renderTodos(todoList);
}

export {loadHomePage};
import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";


// Array for todos
const todoList = [];

const loadMainPage = () => {
    // addTodoButton.replaceWith(addTodoButton.clone());  
    if (document.querySelector('#removeProjectBtn')) {
        document.querySelector('#removeProjectBtn').remove(); 
    } 
    
    
}

const homeButton = () => {
    document.querySelector('#home').addEventListener('click', loadMainPage);
}

export {loadMainPage, homeButton};
import { getHomeTodoList } from "./storage";
import { createAddTodoButton, renderTodos } from "./UI";

// Array for todos
// const todoList = getHomeTodoList;



const loadHomePage = () => {
    // addTodoButton.replaceWith(addTodoButton.clone());  
    if (document.querySelector('#removeProjectBtn')) {
        document.querySelector('#removeProjectBtn').remove(); 
    } 
    
    createAddTodoButton('homePage');
    // createAddButton(todoList);
    renderTodos('homePage');
}

export {loadHomePage};
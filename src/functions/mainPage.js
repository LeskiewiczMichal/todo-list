import { createAddTodoButton, renderTodos } from "./UI";



// function making home page
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
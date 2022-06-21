import { getTodoList, saveTodoList } from "./storage";
import { renderTodos } from "./UI";

const Todo = (todoProject) => {
    const title = document.querySelector('#todoName').value;
    const description = document.querySelector('#todoDescription').value;
    const dueDate = document.querySelector('#todoDate').value;
    let priority;
    if (todoPriorityLow.checked) {
        priority = 'Low';
    }   else if (todoPriorityMedium.checked) {
        priority = 'Medium';
    }   else if (todoPriorityHigh.checked) {
        priority = 'High';
    };
    // needed to check if todo should be rendered for currently selected project
    const belongsTo = todoProject;

    return {title, description, dueDate, priority, belongsTo}
};


// funcion used by button in ui UI
const addNewToDo = (todoProject) => {
        // crate todo from factory function passing input values, push to the list taken from localStorage,
        //  save the list to localStorage and render list from localStorage
        const newTodo = Todo(todoProject);
        const todoList = getTodoList();
        todoList.push(newTodo);
        saveTodoList(todoList);
        renderTodos(todoProject);
        // removes form for creating todo
        document.querySelector('#todoInputDiv').remove();

        // make other elements clickable
        document.querySelector('#menu').classList.remove('unclickable');
        document.querySelector('#main').classList.remove('unclickable');
};

export { addNewToDo }
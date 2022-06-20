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
    }
    const belongsTo = todoProject;

    return {title, description, dueDate, priority, belongsTo}
};


// funcion used by button in UI todo form
const addNewToDo = (todoProject) => {
        // crate todo from factory function passing input values, push to the list and render list
        const newTodo = Todo(todoProject);
        const todoList = getTodoList();
        todoList.push(newTodo);
        saveTodoList(todoList);
        renderTodos(todoProject)
        document.querySelector('#todoInputDiv').remove();

        // make other elements clickable
        document.querySelector('#menu').classList.remove('unclickable');
        document.querySelector('#main').classList.remove('unclickable');
}

// const removeTodo = (todoList, Todo) => {
//     const indexOfTodo = todoList.findIndex(todo => {
//         return todo.getTitle() === Todo.getTitle();
//     });
//     todoList.splice(indexOfTodo, 1);
//     renderTodos(todoList)
// };

export { addNewToDo }
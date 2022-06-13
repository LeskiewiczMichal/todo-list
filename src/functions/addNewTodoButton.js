import {Todo} from "./todo-item-factory" 

const addNewToDo = (todoList) => {
    const newTodo = Todo();
    todoList.push(newTodo);
    document.querySelector('#toDoName').value = '';
    // renderTodos(todoList);
}

export {addNewToDo};
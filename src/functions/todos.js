
const Todo = () => {
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
    

    return {title, description, dueDate, priority}
};



const addNewToDo = () => {
        // crate todo from factory function passing input values, push to the list and render list
        newTodo = Todo();
        todoList.push(newTodo);
        renderTodos(todoList)
        inputDiv.remove();

        // make other elements clickable
        document.querySelector('#menu').classList.remove('unclickable');
        document.querySelector('#main'.classList.remove('unclickable');
}

const removeTodo = (todoList, Todo) => {
    const indexOfTodo = todoList.findIndex(todo => {
        return todo.getTitle() === Todo.getTitle();
    });
    todoList.splice(indexOfTodo, 1);
    renderTodos(todoList)
};

export { addNewToDo }
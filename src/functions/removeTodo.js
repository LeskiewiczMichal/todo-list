const removeTodo = (todoList, Todo) => {
    const indexOfTodo = todoList.findIndex(todo => {
        return todo.getTitle() === Todo.getTitle();
    });
    todoList.splice(indexOfTodo, 1);
    renderTodos(todoList)
};

export { removeTodo }
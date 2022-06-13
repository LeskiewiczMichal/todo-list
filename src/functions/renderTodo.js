
const renderTodos = (todoList) => {
    const DOMList = document.querySelector('#toDoList');
    DOMList.innerHTML = '';

    todoList.forEach(Todo => {
        const listElement = document.createElement('li');
        listElement.innerText = Todo.getTitle();

        DOMList.appendChild(listElement);
    })
}

export {renderTodos};

const renderTodos = (todoList) => {
    const DOMList = document.querySelector('#toDoList');
    DOMList.innerHTML = '';

    todoList.forEach(Todo => {
        const listElement = document.createElement('li');

        const title = document.createElement('p');
        title.innerText = Todo.getTitle();
        
        const description = document.createElement('p');
        description.innerText = Todo.getDescription();
        
        const dueDate = document.createElement('p');
        dueDate.innerText = Todo.getDueDate();

        const priority = document.createElement('p');
        priority.innerText = Todo.getPriority();


        const seeMore = document.createElement('button');
        
        
        listElement.appendChild(title);
        // listElement.appendChild(description);
        listElement.appendChild(dueDate);
        // listElement.appendChild(priority);

        DOMList.appendChild(listElement);
    })
}

export {renderTodos};
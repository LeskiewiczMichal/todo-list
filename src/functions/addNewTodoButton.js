import { renderTodos } from "./renderTodo";
import {Todo} from "./todo-item-factory" 

const addNewToDo = (todoList) => {
    let newTodo;

    const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'todoName');
        nameInput.setAttribute('placeholder', 'Todo Name');
        nameInput.setAttribute('id', 'todoName');
    
    const descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('name', 'todoDescription');
        descriptionInput.setAttribute('placeholder', 'Todo Description');
        descriptionInput.setAttribute('id', 'todoDescription');

    const timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'date');
    timeInput.setAttribute('name', 'todoDate');
    timeInput.setAttribute('placeholder', 'Todo Date');
    timeInput.setAttribute('id', 'todoDate');

    const priorityInputLow = document.createElement('input');
    priorityInputLow.setAttribute('type', 'radio');
    priorityInputLow.setAttribute('name', 'todoPriority');
    priorityInputLow.setAttribute('id', 'todoPriorityLow');
    const priorityLabelLow = document.createElement('label');
    priorityLabelLow.setAttribute('for', 'todoPriorityLow');
    priorityLabelLow.innerText = 'Low priority';
    priorityLabelLow.appendChild(priorityInputLow);

    const priorityInputMedium = document.createElement('input');
    priorityInputMedium.setAttribute('type', 'radio');
    priorityInputMedium.setAttribute('name', 'todoPriority');
    priorityInputMedium.setAttribute('id', 'todoPriorityMedium');
    const priorityLabelMedium = document.createElement('label');
    priorityLabelMedium.setAttribute('for', 'todoPriorityMedium');
    priorityLabelMedium.innerText = 'Medium priority';
    priorityLabelMedium.appendChild(priorityInputMedium);

    const priorityInputHigh = document.createElement('input');
    priorityInputHigh.setAttribute('type', 'radio');
    priorityInputHigh.setAttribute('name', 'todoPriority');
    priorityInputHigh.setAttribute('id', 'todoPriorityHigh');
    const priorityLabelHigh = document.createElement('label');
    priorityLabelHigh.setAttribute('for', 'todoPriorityHigh');
    priorityLabelHigh.innerText = 'High priority';
    priorityLabelHigh.appendChild(priorityInputHigh);

    const priorityWraper = document.createElement('div');
    priorityWraper.setAttribute('id', 'priorityWraper')
    priorityWraper.appendChild(priorityLabelLow);
    priorityWraper.appendChild(priorityLabelMedium);
    priorityWraper.appendChild(priorityLabelHigh);

    const createTodoButton = document.createElement('button');
    createTodoButton.setAttribute('id', 'createTodoButton')
    createTodoButton.textContent = 'Create';
    createTodoButton.addEventListener('click', () => {
        newTodo = Todo();
        todoList.push(newTodo);
        renderTodos(todoList)
        inputDiv.remove();
    })
        
    
    const inputDiv = document.createElement('div');
    inputDiv.setAttribute('id', 'todoInputDiv');
    inputDiv.appendChild(nameInput);
    inputDiv.appendChild(descriptionInput);
    inputDiv.appendChild(timeInput);
    inputDiv.appendChild(priorityWraper);
    inputDiv.appendChild(createTodoButton);


    document.querySelector('#layout').appendChild(inputDiv);

    // document.querySelector('#toDoName').value = '';
    // renderTodos(todoList);
}

export {addNewToDo};
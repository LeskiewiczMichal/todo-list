import { renderTodos } from "./renderTodo";

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

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;


    const addDescription = () => {
        const descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('name', 'todoDescription');
        descriptionInput.setAttribute('placeholder', 'Todo Description');
    
        const confirmButton = document.createElement('button');
        confirmButton.innerText = 'confirm';
        confirmButton.addEventListener('click', () => {
            description = descriptionInput.value;
            
            document.querySelector('#inputDiv').remove();
        })
    
        const inputDiv = document.createElement('div');
        inputDiv.setAttribute('id', 'inputDiv');
        inputDiv.appendChild(descriptionInput);
        inputDiv.appendChild(confirmButton);
    
        document.querySelector('#layout').appendChild(inputDiv);
    };

    
    


    return {getTitle, addDescription, getDescription, getDueDate, getPriority}
};


export {Todo} ;

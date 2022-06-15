import { removeTodo } from "./removeTodo";

const renderTodos = (todoList) => {
    const DOMList = document.querySelector('#toDoList');
    DOMList.innerHTML = '';

    todoList.forEach(Todo => {
        const listElement = document.createElement('li');

        const title = document.createElement('p');
        title.innerText = Todo.getTitle();
        const titleInfo = document.createElement('p');
        titleInfo.textContent = 'Title:';
        const titleDiv = document.createElement('div');
        titleDiv.appendChild(titleInfo);
        titleDiv.appendChild(title);
        
        const description = document.createElement('p');
        description.innerText = Todo.getDescription();
        const descriptionInfo = document.createElement('p');
        descriptionInfo.textContent = 'Description:';
        const descriptionDiv = document.createElement('div');
        descriptionDiv.appendChild(descriptionInfo);
        descriptionDiv.appendChild(description);
        
        const dueDate = document.createElement('p');
        dueDate.innerText = Todo.getDueDate();
        const dateInfo = document.createElement('p');
        dateInfo.textContent = 'Date:';
        const dateDiv = document.createElement('div');
        dateDiv.appendChild(dateInfo);
        dateDiv.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.innerText = Todo.getPriority();
        const priorityInfo = document.createElement('p');
        priorityInfo.textContent = 'Priority:';
        const priorityDiv = document.createElement('div');
        priorityDiv.appendChild(priorityInfo);
        priorityDiv.appendChild(priority);

        const seeLess = document.createElement('button');
        seeLess.textContent = 'See less';
        seeLess.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.classList.remove('seeDetails');
            document.querySelector('#moreInformationDiv').remove();
            seeLess.replaceWith(seeMore);
        })

        const seeMore = document.createElement('button');
        seeMore.textContent = 'Details';
        seeMore.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.className = 'seeDetails';
            e.target.parentNode.parentNode.appendChild(moreInformationDiv);
            seeMore.replaceWith(seeLess);

        })

        const removeTodo = document.createElement('button');
        removeTodo.textContent = 'Remove todo';
        removeTodo.setAttribute('id', 'removeTodoBtn');
        removeTodo.addEventListener('click', (e) => {
            const indexOfTodo = todoList.findIndex(todo => {
                return todo.getTitle() === Todo.getTitle();
            });
            todoList.splice(indexOfTodo, 1);
            e.target.parentNode.parentNode.remove()
            })

        const basicInformationDiv = document.createElement('div');
        basicInformationDiv.setAttribute('id', 'basicInformationDiv');
        basicInformationDiv.appendChild(titleDiv);
        basicInformationDiv.appendChild(dateDiv);
        basicInformationDiv.appendChild(seeMore);

        const moreInformationDiv = document.createElement('div');
        moreInformationDiv.setAttribute('id', 'moreInformationDiv');
        moreInformationDiv.appendChild(descriptionDiv);
        moreInformationDiv.appendChild(priorityDiv);
        moreInformationDiv.appendChild(removeTodo)

       
        
        listElement.appendChild(basicInformationDiv);
        // listElement.appendChild(description);
        // listElement.appendChild(priority);

        DOMList.appendChild(listElement);
    })
}


export {renderTodos};
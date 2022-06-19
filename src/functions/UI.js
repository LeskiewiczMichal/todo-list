const { newProject } = require("./projects");

const createAddTodoButton = (todoList) => {
    const main = document.querySelector('#main');
    main.removeChild(main.firstChild);
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id', 'addNewTodoBtn')
    newBtn.innerText = 'Add new todo';
    newBtn.addEventListener('click', () => {
        addNewToDo(todoList);
        renderTodos(todoList);
    })
    main.insertBefore(newBtn, main.firstChild);
}

const createRemoveProjectButton = (selectProjectButton) => {
    // if already have one btn remove it from dom
    if (document.querySelector('#removeProjectBtn')) {
        document.querySelector('#removeProjectBtn').remove();
    }
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id', 'removeProjectBtn')
    newBtn.innerText = 'Remove Project';
    newBtn.addEventListener('click', () => {
        // remove button selecting project, remove self and load to main page 
        selectProjectButton.remove();
        newBtn.remove();
        loadMainPage();
    })
    document.querySelector('#main').appendChild(newBtn);
};

const renderProjects = (projects) => {

    document.querySelector('#projectList').innerHTML = '';

    const homeButton = document.createElement('button');
        homeButton.setAttribute('id', 'home');
        homeButton.innerText = 'Home';
        homeButton.addEventListener('click', loadMainPage);
    
        document.querySelector('#projectList').appendChild(homeButton);


    projects.forEach(project => {
        const selectProject = document.createElement('button');
        selectProject.innerText = project.getProjectName();
        selectProject.addEventListener('click', (e) => {
            const selecProjectBtn = e.target;
            const todoList = project.getTodoList();
            createAddButton(todoList);
            createRemoveProjectButton(selecProjectBtn);
            renderTodos(todoList);        }); 

        // document.querySelector('#projectList').appendChild(homeButton);
        document.querySelector('#projectList').appendChild(selectProject)
    });
}

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

function createProjectForm() {
    const mainDiv = document.querySelector('#main');
    const menuDiv = document.querySelector('#menu');

    // make other elements unclickable 
    menuDiv.classList.add('unclickable');
    mainDiv.classList.add('unclickable');


    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'projectName');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'projectname');
    nameInput.setAttribute('placeholder', 'Project Name');

    const confirmButton = document.createElement('button');
    confirmButton.innerText = 'confirm';
    confirmButton.setAttribute('id', 'confirmProjectCreation');
    confirmButton.addEventListener('click', newProject)

    const exitButton = document.createElement('button');
    exitButton.innerText = 'X';
    exitButton.setAttribute('id', 'exitProjectForm');
    exitButton.addEventListener('click', (e) => {
        // remove the form
        e.target.parentNode.remove();

        // make other elements clickable
        menuDiv.classList.remove('unclickable');
        mainDiv.classList.remove('unclickable');
    })

    // create and append form into layout
    const inputDiv = document.createElement('div');
    inputDiv.setAttribute('id', 'inputDiv');
    inputDiv.appendChild(exitButton)
    inputDiv.appendChild(nameInput);
    inputDiv.appendChild(confirmButton);

    document.querySelector('#layout').appendChild(inputDiv);
};

export { createProjectForm }


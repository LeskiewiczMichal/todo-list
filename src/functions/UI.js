// const { newProject } = require("./projects");
import { getProjects, getTodoList, saveProjects } from "./storage";
import { newProject } from "./projects"
import { addNewToDo } from "./todos";
import { loadHomePage } from "./mainPage";

function createTodoForm(todoProject) {
    const mainDiv = document.querySelector('#main');
    const menuDiv = document.querySelector('#menu');

    // make other elements unclickable 
    menuDiv.classList.add('unclickable');
    mainDiv.classList.add('unclickable');

    // input form
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

    // confirms todo
    const createTodoButton = document.createElement('button');
    createTodoButton.setAttribute('id', 'createTodoButton')
    createTodoButton.textContent = 'Create';
    createTodoButton.addEventListener('click', () => {
        addNewToDo(todoProject)
    });

    const exitButton = document.createElement('button');
    exitButton.setAttribute('id', 'exitTodoForm')
    exitButton.innerText = 'X';
    exitButton.addEventListener('click', (e) => {
        // remove the form
        e.target.parentNode.remove();

        // make other elements clickable
        menuDiv.classList.remove('unclickable');
        mainDiv.classList.remove('unclickable');
    })
        
    // create and append input form
    const inputDiv = document.createElement('div');
    inputDiv.setAttribute('id', 'todoInputDiv');
    inputDiv.appendChild(exitButton);
    inputDiv.appendChild(nameInput);
    inputDiv.appendChild(descriptionInput);
    inputDiv.appendChild(timeInput);
    inputDiv.appendChild(priorityWraper);
    inputDiv.appendChild(createTodoButton);


    document.querySelector('#layout').appendChild(inputDiv);
}

const createAddTodoButton = (todoProject) => {
    const main = document.querySelector('#main');
    main.removeChild(main.firstChild);
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id', 'addNewTodoBtn')
    newBtn.innerText = 'Add new todo';
    newBtn.addEventListener('click', () => {
        // addNewToDo()
        createTodoForm(todoProject);
        // renderTodos();
    })
    main.insertBefore(newBtn, main.firstChild);
}

const createRemoveProjectButton = (selectProjectButton, todoProject) => {
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
        const projectList = getProjects();
        projectList.forEach(project => {
            if (project.name === todoProject) {
                const projectIndex = projectList.indexOf(project);
                projectList.splice(projectIndex, 1);
                saveProjects(projectList);
            }
        });
        loadMainPage();
    })
    document.querySelector('#main').appendChild(newBtn);
};

const renderProjects = () => {
    let projects = getProjects();
    console.log(projects);
    document.querySelector('#projectList').innerHTML = '';

    const homeButton = document.createElement('button');
        homeButton.setAttribute('id', 'home');
        homeButton.innerText = 'Home';
        // homeButton.addEventListener('click', loadHomePage);
    
        document.querySelector('#projectList').appendChild(homeButton);


    projects.forEach(project => {
        const selectProject = document.createElement('button');
        selectProject.innerText = project.name;
        selectProject.addEventListener('click', (e) => {
            const selecProjectBtn = e.target;
            const todoProject = project.name;
            createAddTodoButton(todoProject);
            createRemoveProjectButton(selecProjectBtn, todoProject);
            renderTodos(todoProject);        
        }); 

        // document.querySelector('#projectList').appendChild(homeButton);
        document.querySelector('#projectList').appendChild(selectProject)
    });
}

const renderTodos = (todoProject) => {
    const todoList = getTodoList();
    const DOMList = document.querySelector('#toDoList');
    DOMList.innerHTML = '';

    todoList.forEach(Todo => {
        if (Todo.belongsTo === todoProject) {
            const listElement = document.createElement('li');

            const title = document.createElement('p');
            title.innerText = Todo.title;
            const titleInfo = document.createElement('p');
            titleInfo.textContent = 'Title:';
            const titleDiv = document.createElement('div');
            titleDiv.appendChild(titleInfo);
            titleDiv.appendChild(title);
            
            const description = document.createElement('p');
            description.innerText = Todo.description;
            const descriptionInfo = document.createElement('p');
            descriptionInfo.textContent = 'Description:';
            const descriptionDiv = document.createElement('div');
            descriptionDiv.appendChild(descriptionInfo);
            descriptionDiv.appendChild(description);
            
            const dueDate = document.createElement('p');
            dueDate.innerText = Todo.dueDate;
            const dateInfo = document.createElement('p');
            dateInfo.textContent = 'Date:';
            const dateDiv = document.createElement('div');
            dateDiv.appendChild(dateInfo);
            dateDiv.appendChild(dueDate);

            const priority = document.createElement('p');
            priority.innerText = Todo.priority;
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
                    return todo.title === Todo.title;
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
            };
        });
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
    confirmButton.addEventListener('click', () => {
        newProject();
        renderProjects();
    })

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

export { createProjectForm, renderProjects, renderTodos }


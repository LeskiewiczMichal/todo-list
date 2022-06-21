// const { newProject } = require("./projects");
import { getProjects, getTodoList, saveProjects, saveTodoList } from "./storage";
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

    // exit form
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

// creates "add new todo" for each project render in menu;
const createAddTodoButton = (todoProject) => {
    const main = document.querySelector('#main');
    main.removeChild(main.firstChild);
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id', 'addNewTodoBtn')
    newBtn.innerText = 'Add new todo';
    newBtn.addEventListener('click', () => {
        createTodoForm(todoProject);
    })
    main.insertBefore(newBtn, main.firstChild);
}

// creates remove project button for each project rendered in menu
const createRemoveProjectButton = (selectProjectButton, todoProject) => {
    // if already have one btn remove it from dom
    if (document.querySelector('#removeProjectBtn')) {
        document.querySelector('#removeProjectBtn').remove();
    }
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id', 'removeProjectBtn')
    newBtn.innerText = 'Remove Project';
    newBtn.addEventListener('click', () => {
        // remove button selecting project, remove self, remove project from localStorage and load to main page 
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
        loadHomePage();
    })
    document.querySelector('#main').appendChild(newBtn);
};

const renderProjects = () => {
    // gets projects from localstorage
    let projects = getProjects();
    // removes every rendered projects in menu
    document.querySelector('#projectList').innerHTML = '';

    // creates button for home project
    const homeButton = document.createElement('button');
        homeButton.setAttribute('id', 'home');
        homeButton.innerText = 'Home';
        homeButton.addEventListener('click', loadHomePage);
    
        document.querySelector('#projectList').appendChild(homeButton);

    // creates button in menu for every project
    projects.forEach(project => {
        const selectProject = document.createElement('button');
        selectProject.innerText = project.name;
        selectProject.addEventListener('click', (e) => {
            // selectprojectbtn is neened to make removeprojectbutton remove rendered button from the list
            const selectProjectBtn = e.target;
            // todoProject is needed in createaddtodobutton to add a "belongsTo" in each todo so later rendertodos can check
            //  if todo belongs to rendered project so it can be rendered
            const todoProject = project.name;
            createAddTodoButton(todoProject);
            createRemoveProjectButton(selectProjectBtn, todoProject);
            renderTodos(todoProject);        
        }); 
        // appends every project button in list
        document.querySelector('#projectList').appendChild(selectProject)
    });
}

const renderTodos = (todoProject) => {
    // gets todoList from localStorage
    const todoList = getTodoList();
    // removes every rendered todo
    const DOMList = document.querySelector('#toDoList');
    DOMList.innerHTML = '';

    todoList.forEach(Todo => {
        // if (todo was created in currently rendered project)
        if (Todo.belongsTo === todoProject) {
            // creating how todo will be seen
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

            // button that hides details about todo (available if todo details are rendered)
            const seeLess = document.createElement('button');
            seeLess.textContent = 'See less';
            seeLess.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.classList.remove('seeDetails');
                document.querySelector('#moreInformationDiv').remove();
                seeLess.replaceWith(seeMore);
            })

            // button that shows details about todo (available if todo details aren't rendered)
            const seeMore = document.createElement('button');
            seeMore.textContent = 'Details';
            seeMore.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.className = 'seeDetails';
                e.target.parentNode.parentNode.appendChild(moreInformationDiv);
                seeMore.replaceWith(seeLess);

            })

            // removes rendered todo as well as removes it from the todoList in localstorage
            const removeTodo = document.createElement('button');
            removeTodo.textContent = 'Remove todo';
            removeTodo.setAttribute('id', 'removeTodoBtn');
            removeTodo.addEventListener('click', (e) => {
                const indexOfTodo = todoList.findIndex(todo => {
                    return todo.title === Todo.title;
                });
                todoList.splice(indexOfTodo, 1);
                saveTodoList(todoList)
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
        // creates project from the form, appends it to localStorage and renders every project in localStorage
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

export { createProjectForm, renderProjects, renderTodos, createAddTodoButton }


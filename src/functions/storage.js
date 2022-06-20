const saveProjects = (data) => {
    localStorage.setItem('projects', JSON.stringify(data));
};

const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    return projects;
};

const saveHomeTodoList = () => {
    localStorage.setItem('homeTodos', JSON.stringify(data));
};

const getHomeTodoList = () => {
    const todoList = JSON.parse(localStorage.getItem('homeTodos'));
}

const saveTodoList = (data) => {
    localStorage.setItem('todoList', JSON.stringify(data));
};

const getTodoList = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    return todoList
}

export { saveProjects, getProjects, saveHomeTodoList, getHomeTodoList, saveTodoList, getTodoList }
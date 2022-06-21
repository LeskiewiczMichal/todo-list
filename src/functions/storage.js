const saveProjects = (data) => {
    localStorage.setItem('projects', JSON.stringify(data));
};

const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    return projects;
};

const saveTodoList = (data) => {
    localStorage.setItem('todoList', JSON.stringify(data));
};

const getTodoList = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    return todoList
}

export { saveProjects, getProjects, saveTodoList, getTodoList }
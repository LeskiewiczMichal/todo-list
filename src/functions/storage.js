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

export { saveProjects, getProjects, saveHomeTodoList, getHomeTodoList }
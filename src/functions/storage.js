
const saveProjects = (data) => {
    localStorage.setItem('projects', JSON.stringify(data))
};

const getProjects = () => {
    const todoList = JSON.parse(localStorage.getItem('projects') || '[]');
    return todoList;
}

export {saveProjects, getProjects};
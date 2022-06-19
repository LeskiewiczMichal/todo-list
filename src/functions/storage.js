const saveProjects = (data) => {
    localStorage.setItem('projects', JSON.stringify(data));
};

const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
}

export { saveProjects, getProjects }
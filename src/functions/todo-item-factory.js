const Todo = () => {
    const title = document.querySelector('#toDoName').value;
    const getTitle = () => title;
    // const getDescription = () => description;
    // const getDueDate = () => dueDate;
    // const getPriority = () => priority;

    return {getTitle}
};


export {Todo} ;

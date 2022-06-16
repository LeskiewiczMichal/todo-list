import { loadMainPage } from "./mainPage";

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

export { createRemoveProjectButton }
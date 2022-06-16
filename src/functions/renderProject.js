import {renderTodos} from "./renderTodo";
import { createAddButton } from "./createAddButton";
import { createRemoveProjectButton } from "./removeProjectButton";

const renderProject = (todoList, selecProjectBtn) => {
    createAddButton(todoList);
    createRemoveProjectButton(selecProjectBtn);
    renderTodos(todoList);
};

export { renderProject }
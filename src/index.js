import "./styles.css";
import store from './redux';
import actions from './redux/actions/task';
import { saveState } from './redux/localStorage';

const selectors = {
    taskInput: '.taskInput',
    taskSubmit: '.taskSubmit',
    taskList: '.taskList',
    taskItem: '.taskItem',
    taskRemove: '.taskRemove',
    taskStatus: '.taskStatus'
};

const renderTasks = (state) => {
    document.querySelector(selectors.taskList).innerHTML = state.map((task, index) => {
        return `<div class="panel-block taskItem">
            <div class="is-pulled-right"><a href="#" class="taskRemove" data-id="${index}">Remover</a></div>
            <input type="checkbox" class="taskStatus" data-id="${index}" ${task.isDone ? 'checked' : ''}>
            ${task.title}
        </div>`
    }).join('');
};

const addTaskItemListeners = () => {
    Array.from(
        document.querySelectorAll(selectors.taskItem)
    ).map(task => {
        task.querySelector(selectors.taskStatus).addEventListener('change', (e) => {
            const id = e.target.getAttribute('data-id');
            if (e.target.checked) {
                store.dispatch(actions.markTodoAsDone(id));
            } else {
                store.dispatch(actions.unmarkTodoAsDone(id));
            }
        });
        task.querySelector(selectors.taskRemove).addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            if (window.confirm('Deseja realmente remover esta tarefa?')) {
                store.dispatch(actions.removeTodo(id));
            }
        });
    });
};

document.querySelector(selectors.taskSubmit).addEventListener('click', () => {
    const task = document.querySelector(selectors.taskInput).value;
    document.querySelector(selectors.taskInput).value = '';
    store.dispatch(actions.addTodo(task));
});

renderTasks(store.getState());
addTaskItemListeners();

store.subscribe(() => {
    renderTasks(store.getState());
    addTaskItemListeners();
    saveState(store.getState());
});
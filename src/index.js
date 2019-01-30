import "./styles.css";
import store from './redux';

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
        });
        task.querySelector(selectors.taskRemove).addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
        });
    });
};

document.querySelector(selectors.taskSubmit).addEventListener('click', () => {
    const task = document.querySelector(selectors.taskInput).value;
    document.querySelector(selectors.taskInput).value = '';
});

renderTasks(store.getState());
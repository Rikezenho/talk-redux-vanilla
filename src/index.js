import "./styles.css";

const selectors = {
    taskInput: '.taskInput',
    taskSubmit: '.taskSubmit',
    taskList: '.taskList',
    taskItem: '.taskItem',
    taskRemove: '.taskRemove',
    taskStatus: '.taskStatus'
};

const renderTasks = (state) => {

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

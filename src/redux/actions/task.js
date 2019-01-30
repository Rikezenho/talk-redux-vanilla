const addTodo = (task) => ({
    type: 'ADD_TODO',
    payload: task
});

const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: id
});

const markTodoAsDone = (id) => ({
    type: 'MARK_TODO_AS_DONE',
    payload: id
});

const unmarkTodoAsDone = (id) => ({
    type: 'UNMARK_TODO_AS_DONE',
    payload: id
});

export default {
    addTodo,
    removeTodo,
    markTodoAsDone,
    unmarkTodoAsDone
}
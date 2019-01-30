const initialState = [
    {
        title: 'Comprar leite',
        isDone: false
    },
    {
        title: 'Comprar pão',
        isDone: false
    }
];

export default (state = initialState, action) => {
    const scopedState = state;
    switch (action.type) {
        case 'ADD_TODO':
            return [].concat(state, [{
                title: action.payload,
                isDone: false
            }]);

        case 'REMOVE_TODO':
            scopedState.splice(action.payload, 1);
            return [].concat(scopedState);

        case 'MARK_TODO_AS_DONE':
            scopedState[action.payload].isDone = true;
            return [].concat(scopedState);

        case 'UNMARK_TODO_AS_DONE':
            scopedState[action.payload].isDone = false;
            return [].concat(scopedState);

        default:
            return state;
    }
}
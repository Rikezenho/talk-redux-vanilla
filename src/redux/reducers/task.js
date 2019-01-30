const initialState = [{
    {
        title: 'Comprar leite',
        isDone: false
    },
    {
        title: 'Comprar pão',
        isDone: false
    }
}];

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
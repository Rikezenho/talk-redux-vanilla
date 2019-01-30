import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import tasksReducer from './reducers/task';

export default createStore(tasksReducer, devToolsEnhancer());
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/task';

export default applyMiddleware(thunk)(createStore)(tasksReducer, devToolsEnhancer());
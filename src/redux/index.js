import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/task';
import { loadState } from './localStorage';

const persistedState = loadState();

export default applyMiddleware(thunk)(createStore)(tasksReducer, persistedState, devToolsEnhancer());
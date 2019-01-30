import { createStore } from 'redux';
import tasksReducer from './reducers/task';

export default createStore(tasksReducer);
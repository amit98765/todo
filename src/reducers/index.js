// this file will combine all the reducers

import combineReducers from 'redux';
import todos from './todos';
import filter from './filter';

export default combineReducers({ todos, filter });

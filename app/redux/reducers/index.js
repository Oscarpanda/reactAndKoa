import home from './home';
import list from './list';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import {
  combineReducers
} from 'redux';

// 其实就是把分散的reducers给合并了
export default combineReducers({
  home,
  list,
  todos,
  // visibilityFilter,
})
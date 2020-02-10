import {
  createStore
} from 'redux';
import reducers from './reducers';
let store = createStore(reducers);
store.dispatch({
    type: "ADD_TODO",
    id: 2,
    text: "test"
})
let storeState = store.getState();

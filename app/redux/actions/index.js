import axios from "axios";
import uuid from "uuid/v1"
import http from "./../../utils/http.js"
export const addTodo = (text, id, name = "test" ) => {
  return {
    type: "ADD_TODO",
    text,
    name,
    id
  }
}
export const addTodoToDB = (text, name = "test") => {
  let id = uuid()
  const datas = {
    name,
    ListContent: text,
    id
  };
  return function (dispatch) {
    return http("api/todoList/addList", datas).then((data) => {
      dispatch(addTodo(text, id, name));
    })
  }
}
export const displayTodo = list => {
  return {
    type: "DISPLAY_TODO",
    list
  }
}
export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  }
}
export const deleteTodoDB = id => {
  const datas = {
    id
  }
  return (dispatch) => {
    return http("api/todoList/deleteListByID", datas
    ).then((data) => {
      dispatch(deleteTodo(id));
    })

  }
}
export const setVisibilityFilter = (filter, name) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
    name,
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export const setTodoState = (id, state, name) => {
  return {
    type: 'SET_TODO_STATE',
    id,
    state,
    name
  }
}
export const setTodoStateDB = (id, state) => {
  const datas = {
    id,
    completed: state
  }
  return (dispatch) => {
    return http("api/todoList/listcompleted", datas
    ).then((data) => {
      dispatch(setTodoState(id, state));
    })
  }
}
export const HomeAction = () => {
  return {
    type: 'INIT_HOME',
  }
}
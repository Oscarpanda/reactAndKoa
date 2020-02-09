import axios from "axios";
import uuid from "uuid/v1"
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
  return function (dispatch) {
    return axios({
      method: "post",
      url: "http://localhost:9000/api/todoList/addList",
      data: {
        name,
        ListContent: text,
        id
      },
    }).then((data) => {
      console.log("axios", data);
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
  return (dispatch) => {
    return axios({
      method: "post",
      url: "http://localhost:9000/api/todoList/deleteListByID",
      data: {
        id
      },
    }).then((data) => {
      console.log("axios", data);
      dispatch(deleteTodo(id));
    })

  }
}
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export const HomeAction = () => {
  return {
    type: 'INIT_HOME',
  }
}
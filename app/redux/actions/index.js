let nextTodoId = 0;
import axios from "axios";
export const addTodo = (text, id, name = "test" ) => {
  return {
    type: "ADD_TODO",
    text,
    name,
    _id: id
  }
}
export const addTodoToDB = (text, name = "test") => {
  return function (dispatch) {
    return axios({
      method: "post",
      url: "http://localhost:9000/api/todoList/addList",
      data: {
        name,
        ListContent: text,
      },
    }).then((data) => {
      console.log("axios", data);
      dispatch(addTodo(text, data.data.id, name));
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
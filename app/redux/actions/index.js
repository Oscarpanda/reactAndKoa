let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
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
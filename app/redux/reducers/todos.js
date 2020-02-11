const todos = (state = {}, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      state[action.name].visible = action.filter
      return Object.assign({},state);
      console.log('dsfa');
    case "DISPLAY_TODO":
      return action.list
    case "DELETE_TODO":
      for (let i in state) {
        state[i].data = state[i].data.filter(item => item.id !== action.id)
      }
      return {...state};
    case "ADD_TODO":
      state[action.name].data.unshift(
        {
          id: action.id,
          ListContent: action.text,
          completed: false
        },
      )
      return Object.assign({}, state)
    case "TOGGLE_TODO":
      return state.map(todo =>
        (todo.id === action.id) ?
        {...todo, completed: !todo.completed} : todo
      )
    case "SET_TODO_STATE":
      for (let i in state) {
        state[i].data = state[i].data.map((todo) => (todo.id === action.id) ? {
        ...todo,
        completed: action.state
        } : todo)
      }
      return Object.assign({}, state)

    default:
      return state
  }
}
export default todos
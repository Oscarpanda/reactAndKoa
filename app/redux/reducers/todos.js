const todos = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_TODO":
      return action.list
    case "DELETE_TODO":
      return state.filter(item => item._id !== action.id);
    case "ADD_TODO":
      return [
        ...state,
        {
          _id: action._id,
          ListContent: action.text,
          completed: false
        }
      ]
    case "TOGGLE_TODO":
      return state.map(todo =>
        (todo._id === action.id) ?
        {...todo, completed: !todo.completed} : todo
      )

    default:
      return state
  }
}
export default todos
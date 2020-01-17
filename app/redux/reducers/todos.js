const todos = (state = [], action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return state.filter(item => item.id !== action.id);
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case "TOGGLE_TODO":
      return state.map(todo =>
        (todo.id === action.id) ?
        {...todo, completed: !todo.completed} : todo
      )

    default:
      return state
  }
}
export default todos
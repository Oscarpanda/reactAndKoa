import { connect } from "react-redux";
import { setTodoStateDB,  deleteTodoDB } from "../redux/actions"
import TodoList from "../components/TodoList"
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter( t => t.completed)
    case "SHOW_ACTIVE":
      return todos.filter( t => !t.completed)
    case "SHOW_ALL":
      return [...todos]
    default:
      return todos

  }
}
const mapStateToProps = (state, ownprops) => {
  return {
    todos: getVisibleTodos(state.todos[ownprops.name].data, state.todos[ownprops.name].visible)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id, state) => {
      dispatch(setTodoStateDB(id, !state))
    },
    onCancelClick: id => {
      dispatch(deleteTodoDB(id))
    }

  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
) (TodoList)
export default VisibleTodoList;
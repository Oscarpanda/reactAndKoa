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
    default:
      return todos

  }
}
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
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
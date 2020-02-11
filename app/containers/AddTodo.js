import React from "react";
import {connect} from "react-redux";
import {addTodoToDB} from "../redux/actions"
let AddTodo = (props) => {
  const {dispatch, name} = props
  let input
  return (
    <div>
      <form
        onSubmit={
          e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodoToDB(input.value, name))
            input.value = ""
          }
        }
      >
      <input
        ref={node => {
          input = node
        }}
      />
      <button type="submit">
      add todo
      </button>
      </form>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter, ownProps.name))
    }
  }
}
AddTodo = connect(mapStateToProps)(AddTodo)
export default AddTodo;
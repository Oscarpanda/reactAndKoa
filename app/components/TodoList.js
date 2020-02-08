import React from 'react';
import Todo from "./Todo";
const TodoList = ({ todos, onTodoClick , onCancelClick}) => (
  <ul>
    {
      todos.map( todo => (
        <Todo key = {todo._id} {...todo} onClick = {() =>
          onTodoClick(todo._id)
        } CancelClick={() => onCancelClick(todo._id)}/>
      ))
    }
  </ul>
)
export default TodoList
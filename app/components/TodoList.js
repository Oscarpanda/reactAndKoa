import React from 'react';
import Todo from "./Todo";
const TodoList = ({ todos, onTodoClick , onCancelClick}) => (
  <ul>
    {
      todos.map( todo => (
        <Todo key = {todo.id} {...todo} onClick = {() =>
          onTodoClick(todo.id)
        } CancelClick={() => onCancelClick(todo.id)}/>
      ))
    }
  </ul>
)
export default TodoList
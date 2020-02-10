import React from 'react';
import Todo from "./Todo";
const TodoList = ({ todos, onTodoClick , onCancelClick}) => (
  <ul>
    {
      todos.map( todo => (
        <Todo key = {todo.id} {...todo} onClick = {() =>
          onTodoClick(todo.id, todo.completed)
        } CancelClick={() => onCancelClick(todo.id)}/>
      ))
    }
  </ul>
)
export default TodoList
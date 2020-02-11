import React from "react";
import style from './../style/todo.css';
const Todo = ({ onClick, completed, ListContent, CancelClick, name}) =>(
  <div className={style.todo}>
    <li
      onClick = {onClick}
      style = {
        {textDecoration : completed ? 'line-through' : 'none',
         display: 'inline-block',
       }
      }
    >{name}:{ListContent}</li>
    <span onClick={CancelClick}> x</span>

  </div>
);
export default Todo;


import React from "react";
const Todo = ({ onClick, completed, text, CancelClick}) =>(
  <div>
    <li
      onClick = {onClick}
      style = {
        {textDecoration : completed ? 'line-through' : 'none',
         display: 'inline-block',
         marginLeft: "30px",
       }
      }
    >{text}</li>
    <span onClick={CancelClick}> x</span>

  </div>
);
export default Todo;


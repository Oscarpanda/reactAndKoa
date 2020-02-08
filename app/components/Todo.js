import React from "react";
const Todo = ({ onClick, completed, ListContent, CancelClick}) =>(
  <div>
    <li
      onClick = {onClick}
      style = {
        {textDecoration : completed ? 'line-through' : 'none',
         display: 'inline-block',
         marginLeft: "30px",
       }
      }
    >{ListContent}</li>
    <span onClick={CancelClick}> x</span>

  </div>
);
export default Todo;


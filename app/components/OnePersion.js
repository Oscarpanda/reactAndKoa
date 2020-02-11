
import React from 'react';
import Footer from "../components/Footer"
import AddTodo from  "../containers/AddTodo";
import VisibleTodoList from  "../containers/VisibleTodoList";
import Hello from "./hello";


export default function OnePerson(props) {
  return (
    <div>
      <Hello name={props.name}/>
      <AddTodo name={props.name}/>
      <VisibleTodoList name={props.name}/>
      <Footer name={props.name}/>
    </div>
  )
}
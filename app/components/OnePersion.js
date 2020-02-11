
import React from 'react';
import Footer from "../components/Footer"
import AddTodo from  "../containers/AddTodo";
import VisibleTodoList from  "../containers/VisibleTodoList";


export default function OnePerson(props) {
  return (
    <div>
      <AddTodo name={props.name}/>
      <VisibleTodoList name={props.name}/>
      <Footer name={props.name}/>
    </div>
  )
}
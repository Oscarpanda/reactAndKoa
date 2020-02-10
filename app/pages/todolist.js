import React from 'react';
import Footer from "../components/Footer"
import AddTodo from  "../containers/AddTodo";
import VisibleTodoList from  "../containers/VisibleTodoList";
import { render } from 'react-dom';
import axios from "axios";
import {displayTodo} from "../redux/actions"
import http from "./../utils/http.js"
import Hello from "./../components/hello";


class TodoLists extends React.Component{
  constructor() {
    super();
  }
  static asyncData(store) {
    return http("api/todoList/findListByName", {name: "test"}).then((data) => {
      store.dispatch(displayTodo(data.data));
    })
  }
  render() {
    return (
      <div>
        <Hello/>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}


export default TodoLists;
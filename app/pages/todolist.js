import React from 'react';
import Footer from "../components/Footer"
import AddTodo from  "../containers/AddTodo";
import VisibleTodoList from  "../containers/VisibleTodoList";
import { render } from 'react-dom';
import axios from "axios";
import {displayTodo} from "../redux/actions"
import http from "./../utils/http.js"
import Hello from "./../components/hello";
import OnePerson from "./../components/OnePersion";

class TodoLists extends React.Component{
  constructor() {
    super();
  }
  static asyncData(store) {
    let user1 = http("api/todoList/findListByName", {name: "yilei"}).then((data) => {
      return {
        "yilei": {
          visible: "SHOW_ACTIVE",
          data: data.data
        }
      }
    })
    let user2 = http("api/todoList/findListByName", {name: "gaoxiong"}).then((data) => {
      return {
        "gaoxiong": {
          visible: "SHOW_ACTIVE",
          data: data.data
        }
      }
    })
    return Promise.all([user1, user2]).then((data) => {
      console.log(data, "data");
      store.dispatch(displayTodo(Object.assign({}, data[0], data[1])));
    })
  }
  render() {
    return (
      <div>
        <Hello/>

        <OnePerson name="gaoxiong"/>
        <OnePerson name="yilei"/>
      </div>
    )
  }
}


export default TodoLists;
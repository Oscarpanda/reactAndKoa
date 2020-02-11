import React from 'react';
import Footer from "../components/Footer"
import AddTodo from  "../containers/AddTodo";
import VisibleTodoList from  "../containers/VisibleTodoList";
import { render } from 'react-dom';
import axios from "axios";
import {displayTodo} from "../redux/actions"
import http from "./../utils/http.js"
import OnePerson from "./../components/OnePersion";
import style from './../style/todo.css';

class TodoLists extends React.Component{
  constructor() {
    super();
  }
  static asyncData(store) {
    let user1 = http("api/todoList/findListByName", {name: "艺蕾"}).then((data) => {
      return {
        "艺蕾": {
          visible: "SHOW_ACTIVE",
          data: data.data
        }
      }
    })
    let user2 = http("api/todoList/findListByName", {name: "高雄"}).then((data) => {
      return {
        "高雄": {
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
      <div className={style.todo}>

        <OnePerson name="艺蕾"/>
        <OnePerson name="高雄"/>
      </div>
    )
  }
}


export default TodoLists;
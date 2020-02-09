import React from 'react';
import Footer from "../components/Footer"
import AddTodo from  "../containers/AddTodo";
import VisibleTodoList from  "../containers/VisibleTodoList";
import { render } from 'react-dom';
import axios from "axios";
import {displayTodo} from "../redux/actions"


class TodoLists extends React.Component{
  constructor() {
    super();
  }
  static asyncData(store) {
    console.log('asyncData');
    return axios({
      method: "post",
      url: "http://127.0.0.1:9000/api/todoList/findListByName",
      data: {
        name: "test"
      }
    }).then((data) => {
      console.log("axios", data);
      store.dispatch(displayTodo(data.data));
    })
  }
  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}


export default TodoLists;
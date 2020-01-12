import {Link, Switch, Route } from "react-router-dom";
import React from "react";
import Home from './pages/home';
import List from './pages/list';
import ToDoList from './pages/todolist';
export default () => (

  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/list" component={List}></Route>
    <Route exact path="/todolist" component={ToDoList}></Route>
  </Switch>
)

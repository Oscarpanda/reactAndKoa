import {Link, Switch, Route } from "react-router-dom";
import React from "react";
import Home from './pages/home';
import List from './pages/list';
import BindThis from './pages/bindthis';
import ToDoList from './pages/todolist';
export default [
  {
    path: "/",
    component: BindThis,
    exact: true,
  },
  {
    path: "/Home",
    component: Home,
    exact: true,
  },
  {
    path: "/list",
    component: List,
    exact: true,
  },
]

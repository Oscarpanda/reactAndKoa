import {Link, Switch, Route } from "react-router-dom";
import React from "react";
import Home from './pages/home';
import List from './pages/list';
import ToDoList from './pages/todolist';
export default [
  {
    path: "/",
    component: Home,
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

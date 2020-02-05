import {Link, Switch, Route } from "react-router-dom";
import React from "react";
import Home from './pages/home';
import List from './pages/list';
import BindThis from './pages/hookdemo/bindthis';
import ToDoList from './pages/todolist';
import Parent from './pages/hookdemo/useState';
import conter2 from './pages/hookdemo/useLayoutEffect';
export default [
  {
    path: "/",
    component: conter2,
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

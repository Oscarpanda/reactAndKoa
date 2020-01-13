import React from 'react';
import {
  Provider
} from 'react-redux';
import createStore from './redux/store/create';
const defaultStore =window.__STORE__ || {};
const store = createStore(defaultStore);


import {
  render
} from 'react-dom';
import './style/index.less';
import { BrowserRouter } from "react-router-dom";
import logo from './static/timg.png'
import  Router  from "./router";


render(
    <Provider store={store}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'));



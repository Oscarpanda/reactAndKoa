import React from 'react';
import {
  Provider
} from 'react-redux';
import createStore from './redux/store/create';
const defaultStore =window.__STORE__ || {};
console.log(defaultStore, "defaultStore");
const store = createStore(defaultStore);


import {
  render
} from 'react-dom';
import './style/index.less';
import { BrowserRouter } from "react-router-dom";
import logo from './static/timg.png'
import  Router  from "./router";
import routerconfig from "./routerconfig";
import { renderRoutes } from "react-router-config";


render(
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routerconfig)}
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'));



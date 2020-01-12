import React from 'react';
import {
  render
} from 'react-dom';
import './style/index.less';
import { BrowserRouter } from "react-router-dom";
import logo from './static/timg.png'
import  Router  from "./router";


render(
    <BrowserRouter>
      <Router/>
    </BrowserRouter>,
    document.getElementById('app'));



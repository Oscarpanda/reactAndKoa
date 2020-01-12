import React from 'react';
import {
  render
} from 'react-dom';
import './style/index.less';
import logo from './static/timg.png'

function App() {
  return <div >
    <h1>Hello  Koas
    </h1>
    <img src={logo} className="logo"/>
    </div>


}

render( < App / > , document.getElementById('app'));


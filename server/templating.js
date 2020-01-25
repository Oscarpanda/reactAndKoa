import fs from 'fs';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import RouterConfig from '../app/router'
import React from 'react';
import path from 'path';
import { Provider } from 'react-redux';

import createStore from '../app/redux/store/create';
import { renderRoutes, matchRoutes } from "react-router-config";
import RouterConfigs from '../app/routerconfig'


// 匹配模板中的<!-- -->
function templating(template) {
  return props => template.replace(/<!--([\s\S]*?)-->/g, (_, key) => props[key.trim()]);
}

export default function (ctx, serverBundle,  template) {
  try {
      const store = createStore();
      const render = templating(template)
      const jsx = serverBundle(ctx);
      const html = renderToString(jsx);
      console.log(store.getState());
      const body = render({
        html,
        store: `<script>window.__STORE__ = ${JSON.stringify(store.getState())}</script>`
      });
      ctx.body = body;
  } catch (err) {
    ctx.body = err.message;
  }
  ctx.type = 'text/html';
  // 这里必须是return next() 不然异步路由是404
}
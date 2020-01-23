import fs from 'fs';
import {
  renderToString
} from 'react-dom/server'
import {
  StaticRouter
} from 'react-router-dom'
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

export default function (ctx, template) {
  try {
      const store = createStore();
      const routes = matchRoutes(RouterConfigs, ctx.url);
      const promises = routes
        .filter(item => item.route.component.asyncData) // 过滤掉没有asyncData的组件
        .map(item => {
          return
          item.route.component.asyncData(store, item.match)
        }); // 调用组件内部的asyncData,这里就修改了store
      const render = templating(template)
      const html = renderToString(
        <Provider store = {store}>
          <StaticRouter location = {ctx.url} context={ctx}>
            {renderRoutes(RouterConfigs)}
            <RouterConfig/>
          </StaticRouter>
        </Provider>);
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
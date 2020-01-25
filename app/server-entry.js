import { StaticRouter } from 'react-router-dom'
import React from 'react';
import { Provider } from 'react-redux';
import createApp from './createApp';
import { renderRoutes, matchRoutes } from "react-router-config";
export default ctx => {
  return new Promise((resolve, reject) => {
    const { router, store, routerconfig }  = createApp();
    const routes = matchRoutes(RouterConfigs, ctx.url);
    if (routes.length === 0) {
      return reject({
        code: 404, message: "NOT PAGE",
      })
    }
    const promises = routes.filter(item => item.route.component.asyncData) // 过滤掉没有asyncData的组件
      .map(item => {
        return item.route.component.asyncData(store, item.match)
    }); // 调用组件内部的asyncData,这里就修改了store
    ctx.store = store;
    resolve(
      <Provider store = {store}>
        <StaticRouter location = {ctx.url} context={ctx}>
          { router }
        </StaticRouter>
      </Provider>
    )
  }).catch(reject)
}
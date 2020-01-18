import Router from 'koa-router';
import RouterConfig from '../../app/router';
import {
  StaticRouter
} from 'react-router-dom';
import {
  renderToString
} from "react-dom/server";
import React from 'react';
import api from './api/index'

const routes = new Router();

routes.get('/', (ctx, next) => {
  ctx.render({
    home: {
      title: '我是从node中获取的数据'
    }
  })
  next();
})

routes.get('/list', (ctx, next) => {
  ctx.render({
      list: {
        list: [
          '我是从node中获取的数据',
          '感觉还不错',
          '测试成功',
        ]
      }
  })
  next();
})
routes.use("/api", api.routes(), api.allowedMethods())

export default routes;

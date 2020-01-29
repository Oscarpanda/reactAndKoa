const Router = require( 'koa-router');
const { StaticRoute } = require('react-router-dom');
const { renderToString } = require("react-dom/server");
const React = require('react');
const api = require('./api/index');
const render = require("./../templating");
const fs = require('fs');
const path = require('path');
const serverBundle = require("../../dist/bundle.js")

const routes = new Router();

// routes.get('/', (ctx, next) => {
//   ctx.render({
//     home: {
//       title: '我是从node中获取的数据'
//     }
//   })
//   next();
// })

// routes.get('/list', (ctx, next) => {
//   ctx.render({
//       list: {
//         list: [
//           '我是从node中获取的数据',
//           '感觉还不错',
//           '测试成功',
//         ]
//       }
//   })
//   next();
// })
routes.use("/api", api.routes(), api.allowedMethods())
routes.get('*', (ctx, next) => {
  const template = fs.readFileSync(path.join(__dirname, './../../dist/index.html'), 'utf-8');
  render(ctx, serverBundle.default,template);
  console.log('*');
  next();
})

module.exports =  routes;

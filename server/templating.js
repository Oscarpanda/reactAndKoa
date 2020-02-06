const fs = require( 'fs');
const { renderToString } = require( 'react-dom/server')
const { StaticRouter } = require( 'react-router-dom')
const React = require( 'react');
const path = require( 'path');
const { Provider } = require( 'react-redux');

const { renderRoutes, matchRoutes } = require( "react-router-config");


// 匹配模板中的<!-- -->
function templating(template) {
  return props => template.replace(/<!--([\s\S]*?)-->/g, (_, key) => props[key.trim()]);
}

module.exports = async function (ctx, serverBundle,  template) {
  try {
      const render = templating(template)
      const startTime = new Date();
      const jsx = await serverBundle(ctx);
      console.log("jsx", jsx, new Date() - startTime);
      const html = renderToString(jsx);
      console.log(ctx.store.getState());
      const body = render({
        html,
        store: `<script>window.__STORE__ = ${JSON.stringify(ctx.store.getState())}</script>`
      });
      console.log('body');
      ctx.body = body;

  } catch (err) {
    ctx.body = err.message;
  }
  ctx.type = 'text/html';
  // 这里必须是return next() 不然异步路由是404
}
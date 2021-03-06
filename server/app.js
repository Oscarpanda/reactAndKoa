const React = require('react');
const Koa = require('koa');
const routes = require("./router");
const todoList = require("./db/todoList");
const path = require("path");
const render = require("./templating");
const fs = require('fs');
const bodyParser = require( 'koa-bodyparser');
const devHelper = require("../build/dev-server");

const app = new Koa();
const env = process.env.NODE_ENV;
const isPro = env === "production";

let template;
let serverBundle;
let readyPromise;
if (isPro) {
  template = fs.readFileSync(path.join(__dirname, './../dist/template.html'), 'utf-8');
  serverBundle = require("../dist/js/bundle.js").default;
} else {
  devHelper.startDev(app, path.join(__dirname, "./../app/template/app.html"))
}
routes.get('*', async (ctx, next) => {
  console.log("*url", ctx.url)
  if (isPro) {
    await render(ctx, serverBundle, template);

  } else {
    const { bundle, clientHtml } = devHelper.getBundleAndClientHtml();
    await render(ctx, bundle, clientHtml);
  }
  console.log('*');
  next();
})
app.use(bodyParser());
app.use(require('koa-static')(path.join(__dirname, '../dist')));
app.use(
  routes.routes(), routes.allowedMethods()
);

app.listen(9000, () => {
  console.log(`node服务已经启动, 请访问localhost:9000`)
})

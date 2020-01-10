const config = require("./../config");
const koaRouter = require("koa-router");
const routers = require("./router/index");
const koa = require("koa");
const app = new koa();
app.use(routers.routes()).use(routers.allowedMethods())
app.listen(config.port);
console.log(config, app)
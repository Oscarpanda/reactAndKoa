const api = require("./api/index");
const koaRouter = require("koa-router");
const home = new koaRouter()
home.get("/", async (ctx) =>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html

})
const routers = new koaRouter(); 
routers.use("/api", api.routes())
routers.use("/", home.routes())
module.exports = routers;
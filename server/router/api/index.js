const koaRouter = require("koa-router");
const api = new koaRouter()
api.get("/test", async (ctx) =>{
  ctx.body = "test";
})
api.post("/testPost", async (ctx) =>{
  ctx.body = "test";
})
module.exports = api;
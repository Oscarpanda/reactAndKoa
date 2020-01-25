const Router = require("koa-router");
const todoList = require("./todolist");

const api = new Router();
api.get("/test", (ctx) =>{
  ctx.body = "test";
});
api.post("/testPost", (ctx) =>{
  ctx.body = "test";
});
api.use("/todoList", todoList.routes(), todoList.allowedMethods())
module.exports = api;
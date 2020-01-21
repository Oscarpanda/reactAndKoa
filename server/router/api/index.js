import Router from "koa-router";
import todoList from "./todolist";

const api = new Router();
api.get("/test", (ctx) =>{
  ctx.body = "test";
});
api.post("/testPost", (ctx) =>{
  ctx.body = "test";
});
api.use("/todoList", todoList.routes(), todoList.allowedMethods())
export default api;
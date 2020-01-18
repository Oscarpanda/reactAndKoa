import Router from "koa-router";

const api = new Router();
api.get("/test", (ctx) =>{
  ctx.body = "test";
});
api.post("/testPost", (ctx) =>{
  ctx.body = "test";
});
export default api;
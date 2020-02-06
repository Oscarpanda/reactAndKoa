const  Router = require("koa-router");
const  todoListModel = require("./../../db/todoList");
const todoList = new Router();
todoList.post("/findListByName", async (ctx) => {
  let name = ctx.request.body.name;
  let result = await todoListModel.find({name})
  console.log("result");
  ctx.body = result;
})
module.exports =  todoList;
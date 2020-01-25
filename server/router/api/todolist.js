const  Router = require("koa-router");
const  todoListModel = require("./../../db/todoList");
const todoList = new Router();
todoList.post("/findListByName", (ctx) => {
  let name = ctx.request.body.name;
  let result = todoListModel.find({name})
  // let result = todoListModel.find({name}).then(result => {
  //   let res = result.map(item => item.ListContent);
  //   ctx.body = res;
  // })
  ctx.body = result;
})
todoList.get("/findListByName", (ctx) => {
  ctx.body = "todolist";
})
module.exports =  todoList;
import Router from "koa-router";
import todoListModel from "./../../db/todoList";
const todoList = new Router();
todoList.post("/findListByName", async (ctx) => {
  let name = ctx.request.body.name;
  let result = await todoListModel.find({name})
  // let result = todoListModel.find({name}).then(result => {
  //   let res = result.map(item => item.ListContent);
  //   ctx.body = res;
  // })
  ctx.body = result;
})
todoList.get("/findListByName", (ctx) => {
  ctx.body = "todolist";
})
export default todoList;
const  Router = require("koa-router");
const  todoListModel = require("./../../db/todoList");
const todoList = new Router();
todoList.post("/findListByName", async (ctx) => {
  let name = ctx.request.body.name;
  let result = await todoListModel.find({name})
  console.log("result");
  ctx.body = result;
})
todoList.post("/addList", async (ctx) => {
  let name = ctx.request.body.name;
  let  ListContent = ctx.request.body.ListContent ;
  let testData = new todoListModel({name, ListContent});
  let result = await testData.save();
  if (result) {
    ctx.body = {
      code: 0,
      msg: "success"
    };
  } else {
    ctx.body = {
      code: -1,
      msg: "fail"
    };
  }
})
module.exports =  todoList;
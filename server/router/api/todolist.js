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
  let  id = ctx.request.body.id;
  let testData = new todoListModel({name, ListContent, id});
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
todoList.post("/deleteListByID", async (ctx) => {
  let id = ctx.request.body.id;
  let result = await todoListModel.remove({id});
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
todoList.post("/listcompleted", async (ctx) => {
  let completed = ctx.request.body.completed;
  let id = ctx.request.body.id;
  let result = await todoListModel.update({id}, {completed});
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
import React from 'react';
import Koa from 'koa';
import routes from "./router";
import templating from "./templating"
import todoList from "./db/todoList";
import {
  renderToString
} from "react-dom/server";
import bodyParser from 'koa-bodyparser';

const app = new Koa();

let testData = new todoList({name: "test", ListContent: "1"});
testData.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log("储存成功");
});
app.use(bodyParser());
app.use(templating);
app.use(
  routes.routes(), routes.allowedMethods()
);

app.listen(9000, () => {
  console.log(`node服务已经启动, 请访问localhost:9000`)
})

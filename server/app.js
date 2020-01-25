const React = require('react');
const Koa = require('koa');
const routes = require("./router");
const templating = require("./templating")
const todoList = require("./db/todoList");
const {
  renderToString
} = require( "react-dom/server");
const bodyParser = require( 'koa-bodyparser');

const app = new Koa();

let testData = new todoList({name: "test", ListContent: "1"});
testData.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log("储存成功");
});
app.use(bodyParser());
app.use(
  routes.routes(), routes.allowedMethods()
);

app.listen(9000, () => {
  console.log(`node服务已经启动, 请访问localhost:9000`)
})

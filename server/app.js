import React from 'react';
import Koa from 'koa';
import routes from "./router";
import templating from "./templating"
import {
  renderToString
} from "react-dom/server";

const app = new Koa();

app.use(templating);
app.use(
  routes.routes(), routes.allowedMethods()
);

app.listen(9000, () => {
  console.log(`node服务已经启动, 请访问localhost:9000`)
})

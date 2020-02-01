const Router = require( 'koa-router');
const { StaticRoute } = require('react-router-dom');
const { renderToString } = require("react-dom/server");
const React = require('react');
const api = require('./api/index');

const routes = new Router();

routes.use("/api", api.routes(), api.allowedMethods())

module.exports =  routes;

const fs = require("fs");
const path = require("path");
const MFS = require("memory-fs");
const webpack = require("webpack");
const chokidar = require("chokidar");
const clientConfig = require("./webpack.client.config");
const serverConfig = require("./webpack.server.config");

const readFile = (fs, file) => {
  return fs.readFileSync(path.join(clientConfig.output.path, file), "utf-8");
}
let bundle  = 1;
let template;
let clientHtml;
function startDev (app, templatePath) {
  template = fs.readFileSync(templatePath, "utf-8");
  chokidar.watch(templatePath).on("change", () => {
    template = fs.readFileSync(templatePath, "utf-8");
    console.log('index.html updated');
  });
  let appEntry = clientConfig.entry;
  clientConfig.entry = {};
  clientConfig.entry.app = ["webpack-hot-middleware/client?noInfo=true&reload=true", appEntry]
  clientConfig.output.filename = "[name].js";
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  const clientCompiler = webpack(clientConfig);
  const devMiddleware = require("koa-webpack-dev-middleware")(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    noInfo: true
  });
  app.use(devMiddleware);
  clientCompiler.hooks.done.tap("devPlugin", (state) => {
    state = state.toJson();
    state.errors.forEach((err) => console.error(err));
    state.warnings.forEach((err) => console.error(err));
    if (state.errors.length ) return
    clientHtml =readFile(
      devMiddleware.fileSystem,
      "index.html"
    )
  })
  app.use(require("koa-webpack-hot-middleware")(clientCompiler));
  const serverCompiler = webpack(serverConfig);
  const mfs = new MFS();
  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, (err, states) => {
    if (err) throw err;
    if (states.toJson().errors.length) return
    let bundleString = readFile(mfs, "bundle.js")
    bundle = eval(bundleString).default
  })
}
function getBundleAndClientHtml() {
  return {
    bundle, clientHtml
  }
}
module.exports = { getBundleAndClientHtml, startDev }
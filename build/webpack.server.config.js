const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const config = require("./config")[process.env.NODE_ENV];
module.exports = merge(baseConfig, {
  target: "node",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "..", "app/server-entry.js"),
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "js/bundle.js",
    libraryTarget: "commonjs2",
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),

      }
    })
  ],

})
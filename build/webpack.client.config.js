const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = merge(baseConfig, {
  devtool: "inline-source-map",
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),

      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "..", "app/template/app.html")
    })
  ],

})
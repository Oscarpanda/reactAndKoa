const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const config = require("./config")[process.env.NODE_ENV];
console.log("config", config);
const clientConfig = merge(baseConfig, {
  devtool: config.devtool,
  mode: config.env,
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),

      }
    }),
    new HtmlWebpackPlugin({
      filename: "template.html",
      template: path.join(__dirname, "..", "app/template/app.html")
    })
  ],

})
if (process.env.NODE_ENV === 'production') {
  clientConfig.optimization.splitChunks = {
    chunks: 'initial',
    minSize: 0,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        name: 'vendor',
        minChunks: 1,
        priority: 10
      }
    }
  };

  clientConfig.optimization.runtimeChunk = {
    name: 'manifest',
  };
}
module.exports = clientConfig;
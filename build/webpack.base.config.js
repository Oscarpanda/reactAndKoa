const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const config = require("./config")[process.env.NODE_ENV];
module.exports = {
  entry: path.join(__dirname, "..", "app/main.js"),
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: config.noHash ? "js/[name].js" : "js/[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, "..", "app"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          }

        }
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, "..", "app"),
        loader: "html-loader",
      },
      {
        test: /\.css/,
        include: path.join(__dirname, "..", "app"),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true, // 开启css module
            },
          },
        ]
      },
      {
        test: /\.less/,
        include: path.join(__dirname, "..", "app"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader?limit=1000"
      },
      {
        test: /\.(woff2|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
  ],
  optimization: {
    // // 压缩css，由于配置css的压缩会覆盖默认的js压缩，所以js压缩也需要手动配置下
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true // set to true if you want JS source maps
    //   }),
    //   new OptimizeCSSAssetsPlugin({})
    // ]
  }

}
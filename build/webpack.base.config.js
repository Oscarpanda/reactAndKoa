const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: path.join(__dirname, "..", "app/main.js"),
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "index.js",
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
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "..", "app/template/app.html")
    })
  ]

}
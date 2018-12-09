var pkg = require("./package.json");
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.tsx"),
    // 将 第三方依赖(node_modules中的) 单独打包
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js"
  },
  resolve: {
    extensions: ["*",".js", ".jsx",".ts",".tsx"]
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude:/node_modules/
      }
    ]
  },
  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by wangfupeng1988@github.com."),
    new CleanWebpackPlugin(["build"]),
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + "/dist/index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

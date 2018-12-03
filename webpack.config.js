const webpack = require("webpack");
const path = require('path')
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve('dist'),
    publicPath: "dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", "ts", "tsx"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: "127.0.0.1",
    port: 4207,
    open: true,
    contentBase: "./dist",
    hot: true
  }
};

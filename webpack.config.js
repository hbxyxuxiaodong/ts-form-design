const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }, 
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css|scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: `[path][name]-[local]`
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx",".json"]
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname+'/dist/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: "127.0.0.1",
    port: 4200,
    open: true,
    contentBase: "./dist",
    hot: true
  }
};

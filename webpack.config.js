const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "reborn-plugin.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
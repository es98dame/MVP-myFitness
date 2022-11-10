const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const prod = process.env.NODE_ENV === 'production';


module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
   watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  // 적용할 플러그인 목록
  plugins: [
    new HtmlWebpackPlugin({ template: `./public/index.html` }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: './public/css/pico.css' }),
    new Dotenv()
  ],
};
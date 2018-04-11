const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './index.jsx',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: path.join(__dirname, '..', 'node_modules'),
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};

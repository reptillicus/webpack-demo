// webpack plugins
const webpack = require('webpack');
const path = require('path');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use:'css-loader'})
      },
    ]
  },
  plugins: [
    new ngAnnotatePlugin({add:true}),

    // new LiveReloadPlugin(),
    new ExtractTextPlugin('bundle.css')

  ],

  externals: {
    angular: 'angular',
  }
};

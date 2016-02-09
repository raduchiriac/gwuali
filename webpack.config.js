var webpack = require('webpack');

var path = require('path');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app/');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build/');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: APP_PATH
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: APP_PATH
    }]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Gwuli'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}

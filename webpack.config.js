var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var entryConfig = require('./src/config/entry-config.js');

// 环境变量 dev / test / prod
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

var config = {
  
  entry: entryConfig,

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: 'js/[name].js'
  },
  module: {
    loaders: [

      // 处理 css
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },

      // 处理图片
      { test: /\.(gif|png|jpg|jpeg)\??.*$/, loader: 'url-loader?limit=100&name=resoure/[name].[ext]' }

    ]
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      // 公共模块提取
        name : 'common',
        filename : 'js/base.js'
    }),

    // 把css单独打包到文件里
    new ExtractTextPlugin("css/[name].css"),

    // html 模板处理
    new HtmlWebpackPlugin(getHtmlConfig('index'))
  ]
};

module.exports = config;
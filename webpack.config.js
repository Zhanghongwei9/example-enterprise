var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// 环境变量 dev / test / prod
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var publicPath = 'http://localhost:9090/';

// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name){
  return {
      template    : './src/view/' + name + '.html',
      filename    : 'view/' + name + '.html',
      inject      : true,
      hash        : true,
      chunks      : ['common', name]
  };
};

var config = {
  
  entry: {
    'common':[
      './src/common/request.js', 
      './src/common/hogan.utils.js',
      './src/page/main.js'
    ],
    'index':['./src/page/index/index.js', hotMiddlewareScript],
    'brief':['./src/page/brief/index.js', hotMiddlewareScript],
    'product-list':['./src/page/product-list/index.js', hotMiddlewareScript]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [

      // 处理 css
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },

      // 处理图片
      { test: /\.(gif|png|jpg|jpeg)\??.*$/, loader: 'url-loader?limit=100&name=resoure/[name].[ext]' },

      {
        test: /\.string$/, 
        loader: 'html-loader',
        query : {
            minimize : true,
            removeAttributeQuotes : false
        }
      }
    ]
  },
  plugins: [

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      // 公共模块提取
        name : 'common',
        filename : 'js/base.js'
    }),

    // 把css单独打包到文件里
    new ExtractTextPlugin("css/[name].css"),

    // html 模板处理
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('brief')),
    new HtmlWebpackPlugin(getHtmlConfig('product-list'))
  ]
};

if (WEBPACK_ENV !== 'dev') {
  config.plugins.push(new CleanWebpackPlugin(['dist']));
}

module.exports = config;
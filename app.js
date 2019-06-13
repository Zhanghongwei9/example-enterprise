/*
 * @Author: ZhangHongwei
 * @Date: 2019-05-21 10:15:58
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-06-02 02:04:01
 */
'use strict'

var express = require('express'),
  path = require('path');

var webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  webpackDevConfig = require('./webpack.config.js');

var compiler = webpack(webpackDevConfig);

var port = 8081;

var app = express();

var hotMiddleware = webpackHotMiddleware(compiler);
var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
})

app.use(devMiddleware);
app.use(hotMiddleware);

// 路由
app.get('/:viewname?', function (req, res, next) {

  var viewname = req.params.viewname
    ? req.params.viewname + '.html'
    : 'index.html';

  var filepath = path.join(compiler.outputPath + '/view/', viewname);

  compiler.outputFileSystem.readFile(filepath, function (err, result) {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

var bs = require('browser-sync').create();

app.listen(port, function () {
  bs.init({
    open: false,
    ui: false,
    notify: false,
    proxy: 'http://localhost:8080',
    files: ['./src/view'],
    port: port
  });
});

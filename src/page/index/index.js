/* * @Author: ZhangHongwei
 * @Date: 2019-04-14 17:22:46
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-04-14 18:05:30
  */
'use strict'

require('./index.css');

var _hogan = require('../../common/hogan-utils.js')

console.log('hello webpack-1.x/framework')

var data = {
  framework: 'webpack-1.x-framework'
}

var html = '<h1>{{framework}}</h1>'

console.log(_hogan.renderHtml(html, data));

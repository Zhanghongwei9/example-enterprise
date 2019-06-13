/*
 * @Author: ZhangHongwei
 * @Date: 2019-05-09 16:02:28
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-05-12 00:44:25
 */
'use strict'

var _request = require('../common/request.js');

var _product = {
  // 获取产品列表
  getProducts: function(success, error){
    _request.http({
      url: 'http://api.example.com/getProducts',
      method: 'get',
      success: success,
      error: error
    });
  }
}

module.exports = _product;
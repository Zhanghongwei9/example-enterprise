/*
 * @Author: ZhangHongwei
 * @Date: 2019-04-29 21:51:25
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-05-16 16:40:46
 */
'use strict'

var _request = require('../common/request.js');

var _index = {
  // 获取首页数据
  getIndexData: function(success, error) {
    _request.http({
      url: 'http://api.example.com/getIndex',
      method: 'get',
      success: success,
      error: error
    });
  },
  // 获取轮播图
  getRotation: function(success, error){
    _request.http({
      url: 'http://api.example.com/getRotation',
      method: 'get',
      success: success,
      error: error
    });
  },
  // 获取热门商品
  getPopulars: function(success, error){
    _request.http({
      url: 'http://api.example.com/getPopulars',
      method: 'get',
      success: success,
      error: error
    });
  }
}

module.exports = _index;
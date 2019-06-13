/*
 * @Author: ZhangHongwei
 * @Date: 2019-05-14 10:37:53
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-05-21 16:19:20
 */
'use strict'

require('../../assets/css/reset.css');
require('../share/menu.css');
require('./index.css');
require('../../mock/index.js');

var _index = require('../../service/index-service.js');
var _animate = require('../../common/animate.utils.js')
var _hogan = require('../../common/hogan.utils.js');

// 模板
var template = require('./product.string');
// 轮播图下标
var rotationIndex = 0;
var rotationCount = 0;
// 热门商品
var populars = [];

// 渲染轮播图
_index.getRotation(response => {
  $('.rotation-img').html('');
  rotationCount = response.length;
  response.forEach(item => {
    $('.rotation-img').append('<img src="'+ item.imageUrl +'">');
    $('.rotation-cut').append('<li></li>');
  });
  $('.rotation-cut li:first-child').addClass('rotation-cut-curr');
}, response => {
  console.error(response);
});

// 轮播图切换,5秒执行一次
setInterval(function () {
  rotationIndex++;
  if (rotationIndex > rotationCount - 1) {
    rotationIndex = 0;
  }
  var $first = $('.rotation-img img:first-child');
  $('.rotation-img').append($first);
  // 选中
  $('.rotation-cut-curr').removeClass('rotation-cut-curr');
  $($('.rotation-cut li')[rotationIndex]).addClass('rotation-cut-curr');
}, 5000);

// 渲染热门商品
_index.getPopulars(response => {
  populars = response;
  var $listProduct = $('.content-product');
  var listHtml = _hogan.renderHtml(template, { list: response} );
  $listProduct.html(listHtml);
  // 选择默认
  $('.operation-title').html(populars[0].title);
  // 绑定事件
  // 热门商品切换
  $('.product-item').click(function(){
    cutAnimation();
  });
}, response => {
  console.error(response);
});

// 切换动画
function cutAnimation(){
  var $products = $('.product-item');
  $('.content-product ul').append($products[0]);
}

$('#go-list').click(function(){
  window.location = "/product-list";
});
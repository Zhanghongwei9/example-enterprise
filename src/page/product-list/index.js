/*
 * @Author: ZhangHongwei
 * @Date: 2019-05-06 14:22:40
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-05-21 13:56:58
 */
'use strict'

require('../../assets/css/reset.css');
require('../share/menu.css');
require('./index.css');
require('../../mock/index.js');

var _hogan = require('../../common/hogan.utils.js');
var _product = require('../../service/product-service.js');
var _scroll = require('../../common/scroll.utils.js');
// html 模板
var template = require('./index.string');

var isloading = false;

// 菜单显示
$('.screen-category').click(function(){
  $('.category-menu').show();
});
$('.screen-category').mouseleave(function(){
  $('.category-menu').hide();
});

// 查询商品
function getProducts() {
  _product.getProducts(response => {
    // 渲染列表
    var $listGroup = $('.list-content');
    var listHtml = _hogan.renderHtml(template, { list: response} );
    $listGroup.append(listHtml);
    isloading = false;
  }, response => {
    console.error(response);
  });
}

// 滚动到底部加载
window.onscroll = function () {
  // 滚动条当前位置
  let topHeight = _scroll.getScrollTop() + window.innerHeight;
  let loadingHeight = $('.loading').offset().top;
  if (topHeight == loadingHeight) {
    if (!isloading) {
      isloading = true;
      setTimeout(function() {
        getProducts();
      }, 1000);
    }
  }
}

// 执行
$(function(){
  getProducts();
});

/* * @Author: ZhangHongwei
 * @Date: 2019-04-14 17:22:46
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-05-21 13:56:50
  */
'use strict'
require('../../assets/css/reset.css');
require('./transition.css');
require('../share/menu.css');
require('./index.css');
require('../../mock/index.js');

var _scroll = require('../../common/scroll.utils.js');
var _marked = require('marked');
var _transition = require('./transition.js');
var _indexService = require('../../service/index-service.js');

var modules = _transition.modules;
var productList = [];
var categorys = [];
var currProduct = 0;
var currCategory = 1;
// 当前模块下标
var currModuleIndex = 0;
var moduleLoad = false;

$(function() {
  // 加载首页数据
  _indexService.getIndexData(response => {
    $('.show-content h1').html(response.index.title);
    $('.show-card p').html(response.index.content);
    $('.describe-item').html(_marked(response.brief.describe));
    $('.brief-detail p').html(response.brief.content);
    // 渲染产品列表
    productList = response.products;
    productList.forEach((product, index) => {
      $('.product-list ul').append('<li product-index="' + index + '">' + product.name + '</li>');
    });
    // 默认选中
    $($('.product-list ul>li')[0]).addClass('product-list-curr');
    $('.product-detail-item').html(_marked(productList[currProduct].content));
    // 绑定事件
    $('.product-list li').click(function() {
      currProduct = $(this).attr("product-index");
      $('.product-list-curr').removeClass('product-list-curr');
      $(this).addClass('product-list-curr');
      $('.product-detail-item').html(_marked(productList[currProduct].content));
    });
    // 渲染产品分类
    categorys = response.categorys;
    for (let index = 0; index < 3; index++) {
      $('.bottom-category').append('<li category-index="' + index + '">' + categorys[index].name + '</li>');
    }
    // 默认选中
    $('.bottom-content').html(categorys[currCategory].content);
    // 绑定事件
    $('.bottom-category li').bind('click', categoryNext);
  }, response => {
    console.error(response);
  });
});

function categoryNext(){
  currCategory++;
  if (currCategory >= categorys.length - 1) {
    currCategory = 0;
    $('.bottom-category').append('<li category-index="' + currCategory + '">' + categorys[currCategory].name + '</li>');
  } else {
    $('.bottom-category').append('<li category-index="' + currCategory + '">' + categorys[currCategory + 1].name + '</li>');
  }
  $('.bottom-content').html(categorys[currCategory].content);
  _transition.nextMenu(function() {
    // 清除事件
    $(".bottom-category li").unbind();
    // 绑定事件
    $('.bottom-category li').bind('click', categoryNext);
  });
}

$('.cut-menu-up').click(function(){
  if (currModuleIndex < 1) {
    return false;
  }
  currModuleIndex--;
  // 锁定滚动条
  _scroll.prohibit();
  // 获取当前模块
  var currModule = modules[currModuleIndex + 1];
  // 出场动画
  currModule.outAnimation(function() {
    // 显示上一个模块
    _transition.lastModule(function () {
      var lastModule = modules[currModuleIndex];
      // 入场动画
      lastModule.enterAnimation(function() {
        _scroll.enable();
        currModule.completion();
      });
    });
  }, 0.5);
});

$('.cut-menu-down').click(function(){
  if (currModuleIndex >= modules.length - 1) {
    return false;
  }
  currModuleIndex++;
  moduleLoad = true;
  // 锁定滚动条
  _scroll.prohibit();
  // 获取当前模块
  var currModule = modules[currModuleIndex - 1];
  // 出场动画
  currModule.outAnimation(function() {
    // 显示下一个模块
    _transition.nextModule(function () {
      // 执行回调函数
      let nextModule = modules[currModuleIndex];
      nextModule.enterAnimation(function() {
        _scroll.enable();
        currModule.completion();
      });
    });
  }, 0.5);
});
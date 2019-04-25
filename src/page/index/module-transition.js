/*
 * @Author: ZhangHongwei
 * @Date: 2019-04-22 16:59:04
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-04-25 14:27:36
 */
'use strict'

var _animate = require('../../common/animate.utils.js')

// 获取当前 body 高度
var bodyHeight = $('body').height();
var currHeight = 0;
var runSecond = 500;
var moduleRunSecond = 700;

// 下一个模块
var nextModule = function(backFunction, advance) {
  currHeight -= bodyHeight;
  $('.content-wrapper').animate({ top: currHeight + 'px'}, moduleRunSecond);
  // 显示菜单
  if (currHeight == -bodyHeight) {
    $('.menu-bar').animate({ top: '0px'}, 600);
  }
  // 动画执行完成后，回调
  setTimeout(backFunction, moduleRunSecond * (advance || 1));
}

// 上一个模块
var lastModule = function(backFunction, advance) {
  currHeight += bodyHeight;
  $('.content-wrapper').animate({ top: currHeight + 'px'}, moduleRunSecond);
  if (currHeight == 0) {
    // 隐藏菜单
    $('.menu-bar').animate({ top: '-120px'}, 600);
  }
  // 动画执行完成后，回调
  setTimeout(backFunction, moduleRunSecond * (advance || 1));
}

// 所有模块元素
var modules = [
  {
    enterAnimation: function(backFunction, advance) {
      _animate.animateCss($('.header'), 'down-slide', runSecond, 0, 'forwards');
      // 动画执行完成后，回调
      setTimeout(backFunction, runSecond * (advance || 1));
    },
    outAnimation: function (backFunction, advance){
      _animate.animateCss($('.header'), 'up-slide', runSecond, 0, 'forwards');
      // 动画执行完成后，回调
      setTimeout(backFunction, runSecond * (advance || 1));
    }
  },
  {
    className: '.brief-wrapper',
    enterAnimation: function(backFunction, advance) {
      $('.brief-image').removeClass('brief-image-mask')
        .addClass('brief-image-transition');
      // 动画执行完成后，回调
      setTimeout(backFunction, runSecond * (advance || 1));
    },
    outAnimation: function(backFunction, advance) {
      $('.brief-image').removeClass('brief-image-transition')
      .addClass('brief-image-mask');
      // 动画执行完成后，回调
      setTimeout(backFunction, 0);
    }
  },
  {
    className: '.product-wrapper',
    enterAnimation: function(backFunction) {
      // 动画执行完成后，回调
      setTimeout(backFunction, 0);
    },
    outAnimation: function(backFunction) {
      // 动画执行完成后，回调
      setTimeout(backFunction, 0);
    }
  },
  {
    className: '.bottom-wrapper',
    enterAnimation: function(backFunction) {
      // 动画执行完成后，回调
      setTimeout(backFunction, 0);
    },
    outAnimation: function(backFunction) {
      // 动画执行完成后，回调
      setTimeout(backFunction, 0);
    }
  }
];

module.exports = { modules, nextModule, lastModule };

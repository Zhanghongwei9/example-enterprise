/*
 * @Author: ZhangHongwei
 * @Date: 2019-04-23 16:48:28
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-04-26 10:23:09
 */
'use strict'

var _scroll = require('../../common/scroll.utils.js');
var _transition = require('./module-transition.js');

var modules = _transition.modules;

// 滚动条原始位置
var defaultPosition = 0;

// 创建加载状态
var loadingState = true;

// 当前模块下标
var currModuleIndex = 0;

// 初始化
function init() {
  // 滚动条默认高度
  defaultPosition = window.innerHeight * 0.3;
  _scroll.setScrollTopY(defaultPosition);
}

// 重置滚动条高度
function reset() {
  _scroll.setScrollTopY(defaultPosition);
}

// 监听滚动条事件
function monitor() {
  window.onscroll = function () {
    // 滚动条当前位置
    let topHeight = _scroll.getScrollTop();
    // 判断是否需要执行切换模块
    let changeHeight = topHeight - defaultPosition;
    // 上一个模块
    if (changeHeight < (defaultPosition * -0.6) && currModuleIndex > 0) {
      lastPage();
    }
    // 下一个模块
    if (changeHeight > (defaultPosition * 0.6) && currModuleIndex < (modules.length - 1)) {
      nextPage();
    }
    if (changeHeight < (defaultPosition * -0.9) || changeHeight > (defaultPosition * 0.9)) {
      reset();
    }
  }
}

// 上一个模块
function lastPage() {
  // 锁定滚动条
  _scroll.prohibit();
  // 获取当前模块
  var currModule = modules[currModuleIndex];
  // 出场动画
  currModule.outAnimation(function() {
    // 显示上一个模块
    _transition.lastModule(function () {
      currModuleIndex--;
      var lastModule = modules[currModuleIndex];
      // 入场动画
      lastModule.enterAnimation(function() {
        // 重置滚动条位置
        _scroll.enable();
        reset();
        currModule.completion()
      });
    });
  }, 0.5);
}

// 下一个模块
function nextPage() {
  // 锁定滚动条
  _scroll.prohibit();
  // 获取当前模块
  var currModule = modules[currModuleIndex];
  // 出场动画
  currModule.outAnimation(function() {
    // 显示下一个模块
    _transition.nextModule(function () {
      // 执行回调函数
      currModuleIndex++;
      let nextModule = modules[currModuleIndex];
      nextModule.enterAnimation(function() {
        _scroll.enable();
        // 重置滚动条位置
        reset();
        currModule.completion()
      });
    });
  }, 0.5);
}

module.exports = { init, monitor };

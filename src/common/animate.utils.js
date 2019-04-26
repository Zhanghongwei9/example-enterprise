/*
 * @Author: ZhangHongwei
 * @Date: 2019-04-24 16:34:53
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-04-25 17:29:44
 */
'use strict'

// 添加元素 animate 动画
var animateCss = function($item, name, duration, delay, fillMode) {
  $item.css({
    'animation-name': name,
    'animation-duration': (duration * 0.001) + 's',
    'animation-delay': (delay * 0.001) + 's',
    'animation-fill-mode': fillMode
  });
};

// 删除元素 animate 动画
var removeCss = function($items) {
  $items.forEach(item => {
    item.css({
      'animation-name': '',
      'animation-duration': '',
      'animation-delay': '',
      'animation-fill-mode': ''
    });
  });
}

module.exports = { animateCss, removeCss };

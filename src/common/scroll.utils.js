/*
 * @Author: ZhangHongwei
 * @Date: 2019-04-22 14:49:13
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-04-25 09:48:12
 */
'use strict'

var _scroll = {
  // 滚动条距离文档顶部距离
  getScrollTop: function() {
    var scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
  },
  // 设置 Y轴 滚动条距离文档顶部高度
  setScrollTopY: function(top) {
    document.documentElement.scrollTop = top
  },
  // 禁用滚动条
  prohibit: function() {
    document.body.parentNode.style.overflow = 'hidden';
  },
  // 启用滚动条
  enable: function () {
    document.body.parentNode.style.overflow = 'auto';
  }
}

module.exports = _scroll;
/* * @Author: ZhangHongwei
 * @Date: 2019-04-14 13:04:49
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-04-14 17:28:49
  */
'use strict'

var Hogan = require('hogan.js');

var _hogan = {
  // 渲染html模板
  renderHtml(htmlTemplate, data) {
    var template = Hogan.compile(htmlTemplate),
      result = template.render(data);
    return result;
  }
}

module.exports = _hogan;
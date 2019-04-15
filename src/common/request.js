/*
 * @Author: ZhangHongwei 
 * @Date: 2019-04-13 18:23:35 
 * @Last Modified by: ZhangHongwei
 * @Last Modified time: 2019-04-13 21:08:50
 */

'use strict'

var _request = {
  // http 请求
  http: function (params) {
    $.ajax({
      type: params.method || 'get',
      url: params.url || '',
      dataType: params.dataType || 'json',
      data: params.data || '',
      success: function(response) {
        
        // 请求成功
        if (0 == response.code) {
          typeof params.success == 'function' && params.success(response.data);
        }

      },
      error: function (response) {
        typeof params.error == 'function' && params.error(response.data);
      }
    })
  }
}

module.exports = _request;
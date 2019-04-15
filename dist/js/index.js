webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* * @Author: ZhangHongwei
	 * @Date: 2019-04-14 17:22:46
	 * @Last Modified by: ZhangHongwei
	 * @Last Modified time: 2019-04-14 18:05:30
	  */
	'use strict'

	__webpack_require__(7);

	var _hogan = __webpack_require__(2)

	console.log('hello webpack-1.x/framework')

	var data = {
	  framework: 'webpack-1.x-framework'
	}

	var html = '<h1>{{framework}}</h1>'

	console.log(_hogan.renderHtml(html, data));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
]);
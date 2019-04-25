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
	 * @Last Modified time: 2019-04-24 14:31:43
	  */
	'use strict'
	__webpack_require__(7);
	__webpack_require__(12);

	var _module = __webpack_require__(16);

	_module.init();
	_module.monitor();



/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: ZhangHongwei
	 * @Date: 2019-04-23 16:48:28
	 * @Last Modified by: ZhangHongwei
	 * @Last Modified time: 2019-04-24 16:05:45
	 */
	'use strict'

	var _scroll = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../common/scroll.utils.js/index.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var _transition = __webpack_require__(17);

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
	    // 判断是否加载完成
	    if (loadingState) {
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
	    } else {
	      // 重置滚动条位置
	      reset();
	    }
	  }
	}

	// 上一个模块
	function lastPage() {
	  // if (condition) {
	  //   return false;
	  // }
	  // 重置滚动条位置
	  reset();
	  // 锁定滚动条
	  loadingState = false;
	  _transition.lastModule(function () {
	    // 获取当前模块
	    let currModule = modules[currModuleIndex];
	    // 出场动画
	    currModule.outAnimation(function () {
	      // 显示下一个模块
	      currModuleIndex--;
	      currModule = modules[currModuleIndex];
	      currModule.enterAnimation(function () {
	        loadingState = true;
	      });
	    });
	  });
	}

	// 下一个模块
	function nextPage() {
	  // 重置滚动条位置
	  reset();
	  // 锁定滚动条
	  loadingState = false;
	  _transition.nextModule(function () {
	    // 获取当前模块
	    let currModule = modules[currModuleIndex];
	    // 出场动画
	    currModule.outAnimation(function () {
	      // 显示下一个模块
	      currModuleIndex++;
	      currModule = modules[currModuleIndex];
	      currModule.enterAnimation(function () {
	        loadingState = true;
	      });
	    });
	  });
	}

	module.exports = { init, monitor };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: ZhangHongwei
	 * @Date: 2019-04-22 16:59:04
	 * @Last Modified by: ZhangHongwei
	 * @Last Modified time: 2019-04-24 16:25:04
	 */
	'use strict'
	__webpack_require__(18);
	__webpack_require__(19);

	// 获取当前 body 高度
	var bodyHeight = $('body').height();
	var currHeight = 0;
	var runSecond = 0;

	// 下一个模块
	var nextModule = function(backFunction) {
	  currHeight -= bodyHeight;
	  $('.content-wrapper').animate({ top: currHeight + 'px'}, 700);
	  // 显示菜单
	  if (currHeight == -bodyHeight) {
	    $('.menu-bar').animate({ top: '0px'}, 600);
	  }
	  // 动画执行完成后，回调
	  setTimeout(backFunction, 700);
	}

	// 上一个模块
	var lastModule = function(backFunction) {
	  currHeight += bodyHeight;
	  $('.content-wrapper').animate({ top: currHeight + 'px'}, 700);
	  if (currHeight == 0) {
	    // 隐藏菜单
	    $('.menu-bar').animate({ top: '-120px'}, 600);
	  }
	  // 动画执行完成后，回调
	  setTimeout(backFunction, 700);
	}

	// 所有模块元素
	var modules = [
	  {
	    className: '.banner-wrapper',
	    enterAnimation: function(backFunction) {
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    },
	    outAnimation: function (backFunction){
	      $('.header').animateCss('up-slide');
	      $('.show-conten-item');
	      $('.show-card-item');
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    }
	  },
	  {
	    className: '.brief-wrapper',
	    enterAnimation: function(backFunction) {
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    },
	    outAnimation: function(backFunction) {
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    }
	  },
	  {
	    className: '.product-wrapper',
	    enterAnimation: function(backFunction) {
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    },
	    outAnimation: function(backFunction) {
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    }
	  },
	  {
	    className: '.bottom-wrapper',
	    enterAnimation: function(backFunction) {
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    },
	    outAnimation: function(backFunction) {
	      // 动画执行完成后，回调
	      setTimeout(backFunction, runSecond);
	    }
	  }
	];

	module.exports = { modules, nextModule, lastModule };


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	(function($){
	  $.fn.extend({
	  animateCss: function (animationName) {
	      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	      $(this).addClass('animated ' + animationName).one(animationEnd, function() {
	          $(this).removeClass('animated ' + animationName);
	      });
	  }
	  });
	})(jQuery);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
]);
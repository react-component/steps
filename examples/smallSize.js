webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(6);
	
	var React = __webpack_require__(10);
	var Steps = __webpack_require__(11);
	
	var container = document.getElementById('__react-content');
	
	var steps = [{
	  status: 'finish',
	  title: '已完成'
	}, {
	  status: 'process',
	  title: '进行中'
	}, {
	  status: 'wait',
	  title: '待运行'
	}, {
	  status: 'wait',
	  title: '待运行'
	}].map(function (s, i) {
	  return React.createElement(Steps.Step, {
	    key: i,
	    status: s.status,
	    title: s.title
	  });
	});
	
	React.render(React.createElement(
	  Steps,
	  { size: 'small' },
	  steps
	), container);

/***/ }

});
//# sourceMappingURL=smallSize.js.map
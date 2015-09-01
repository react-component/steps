webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(6);
	
	var React = __webpack_require__(8);
	var Steps = __webpack_require__(9);
	
	var container = document.getElementById('__react-content');
	
	var steps = [{
	  status: 'finish',
	  title: '已完成',
	  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
	}, {
	  status: 'process',
	  title: '进行中',
	  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
	}, {
	  status: 'wait',
	  title: '待运行',
	  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
	}].map(function (s, i) {
	  return React.createElement(Steps.Step, {
	    key: i,
	    status: s.status,
	    title: s.title,
	    description: s.description
	  });
	});
	
	React.render(React.createElement(
	  Steps,
	  { direction: 'vertical' },
	  steps
	), container);

/***/ }

});
//# sourceMappingURL=vertical.js.map
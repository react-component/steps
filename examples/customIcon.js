webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(2);
	
	var React = __webpack_require__(3);
	var Steps = __webpack_require__(4);
	
	var container = document.getElementById('__react-content');
	
	React.render(React.createElement(
	  Steps,
	  null,
	  React.createElement(Steps.Step, { status: 'finish', title: '步骤1', icon: 'cloud' }),
	  React.createElement(Steps.Step, { status: 'process', title: '步骤2', icon: 'apple' }),
	  React.createElement(Steps.Step, { status: 'wait', title: '步骤3', icon: 'github' })
	), container);

/***/ }
]);
//# sourceMappingURL=customIcon.js.map
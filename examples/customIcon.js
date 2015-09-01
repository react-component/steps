webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(6);
	
	var React = __webpack_require__(8);
	var Steps = __webpack_require__(9);
	
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
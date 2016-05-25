webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(177);


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(3);
	
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(36);
	var Steps = __webpack_require__(171);
	
	var container = document.getElementById('__react-content');
	
	ReactDOM.render(React.createElement(
	  Steps,
	  null,
	  React.createElement(Steps.Step, { status: 'finish', title: '步骤1', icon: 'cloud' }),
	  React.createElement(Steps.Step, { status: 'process', title: '步骤2', icon: 'apple' }),
	  React.createElement(Steps.Step, { status: 'wait', title: '步骤3', icon: 'github' })
	), container);

/***/ }

});
//# sourceMappingURL=customIcon.js.map
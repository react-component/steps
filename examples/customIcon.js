webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(194);


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcSteps = __webpack_require__(185);
	
	var _rcSteps2 = _interopRequireDefault(_rcSteps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Icon = function Icon(_ref) {
	  var type = _ref.type;
	  return _react2.default.createElement('i', { className: 'rcicon rcicon-' + type });
	};
	
	_reactDom2.default.render(_react2.default.createElement(
	  _rcSteps2.default,
	  { current: 1 },
	  _react2.default.createElement(_rcSteps.Step, { title: '\u6B65\u9AA41', icon: _react2.default.createElement(Icon, { type: 'cloud' }) }),
	  _react2.default.createElement(_rcSteps.Step, { title: '\u6B65\u9AA42', icon: 'apple' }),
	  _react2.default.createElement(_rcSteps.Step, { title: '\u6B65\u9AA43', icon: 'github' })
	), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=customIcon.js.map
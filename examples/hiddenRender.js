webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(199);


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcSteps = __webpack_require__(187);
	
	var _rcSteps2 = _interopRequireDefault(_rcSteps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var container = document.getElementById('__react-content');
	
	var data = [{
	  title: '已完成',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
	}, {
	  title: '进行中',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
	}, {
	  title: '待运行',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
	}, {
	  title: '待运行',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
	}];
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, App);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      hidden: true
	    }, _this.toggle = function (e) {
	      _this.setState({
	        hidden: !e.target.checked
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'label',
	        null,
	        _react2.default.createElement('input', { type: 'checkbox', onChange: this.toggle }),
	        ' \u663E\u793A\u6B65\u9AA4\u6761'
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        'div',
	        { className: this.state.hidden ? 'hidden' : '' },
	        _react2.default.createElement(StepDemo, null)
	      )
	    );
	  };
	
	  return App;
	}(_react2.default.Component);
	
	var StepDemo = function StepDemo() {
	  var steps = data.map(function (s, i) {
	    return _react2.default.createElement(_rcSteps.Step, {
	      key: i,
	      status: s.status,
	      title: s.title,
	      description: s.description
	    });
	  });
	  return _react2.default.createElement(
	    _rcSteps2.default,
	    null,
	    steps
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(App, null), container);

/***/ })

});
//# sourceMappingURL=hiddenRender.js.map
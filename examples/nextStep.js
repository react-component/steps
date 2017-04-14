webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186);


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(187);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcSteps = __webpack_require__(175);
	
	var _rcSteps2 = _interopRequireDefault(_rcSteps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var container = document.getElementById('__react-content');
	
	function generateRandomSteps() {
	  var n = Math.floor(Math.random() * 3) + 3;
	  var arr = [];
	  for (var i = 0; i < n; i++) {
	    arr.push({
	      title: '步骤' + (i + 1)
	    });
	  }
	  return arr;
	}
	var steps = generateRandomSteps();
	
	var MyForm = function (_React$Component) {
	  _inherits(MyForm, _React$Component);
	
	  function MyForm() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MyForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      currentStep: Math.floor(Math.random() * steps.length)
	    }, _this.nextStep = function () {
	      var s = _this.state.currentStep + 1;
	      if (s === steps.length) {
	        s = 0;
	      }
	      _this.setState({
	        currentStep: s
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	  /*
	  componentDidMount() {
	    // You can dynamically set tail's left position based on main's width for each step.
	    this.stepsRefs.forEach(s => {
	      if (s.refs.tail) {
	        s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
	      }
	    });
	  }
	  */
	
	
	  MyForm.prototype.render = function render() {
	    var _this2 = this;
	
	    var cs = this.state.currentStep;
	    this.stepsRefs = [];
	    return _react2.default.createElement(
	      'form',
	      { className: 'my-step-form' },
	      _react2.default.createElement(
	        'div',
	        null,
	        '这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        '当前正在执行第',
	        cs + 1,
	        '步'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'my-step-container' },
	        _react2.default.createElement(
	          _rcSteps2.default,
	          { current: cs },
	          steps.map(function (s, i) {
	            return _react2.default.createElement(_rcSteps.Step, { ref: function ref(c) {
	                return _this2.stepsRefs[i] = c;
	              },
	              key: i,
	              title: s.title
	            });
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { type: 'button', onClick: this.nextStep },
	          '下一步'
	        )
	      )
	    );
	  };
	
	  return MyForm;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(MyForm, null), container);

/***/ },

/***/ 187:
2

});
//# sourceMappingURL=nextStep.js.map
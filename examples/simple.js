webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Steps = __webpack_require__(3);
	
	var container = document.getElementById('__react-content');
	//var eles = [];
	//for (var i=0;i<10;i++) {
	//  eles.push(document.createElement('div'));
	//  container.appendChild(eles[i]);
	//}
	
	React.render(React.createElement(
	  Steps,
	  null,
	  React.createElement(Steps.Step, { status: 'finish', title: '己完成' }),
	  React.createElement(Steps.Step, { status: 'process', title: '正在进行' }),
	  React.createElement(Steps.Step, { status: 'waiting', title: '待完成' }),
	  React.createElement(Steps.Step, { status: 'waiting', title: '待完成' })
	), container);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Steps = __webpack_require__(4);
	Steps.Step = __webpack_require__(5);
	
	module.exports = Steps;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	
	var Steps = React.createClass({
	  displayName: 'Steps',
	
	  render: function render() {
	    var props = this.props;
	    var children = props.children;
	    var len = children.length - 1;
	    var isCol = [1, 2, 3, 4, 6, 8, 12].indexOf(len) >= 0;
	
	    function _make(ele, idx) {
	      var np = {};
	      if (!ele.props.stepNumber) {
	        np.stepNumber = '' + (idx + 1);
	      }
	      if (isCol && idx !== len) {
	        np.stepColClass = 'col-' + (24 / len).toFixed(0) + ' ';
	      } else if (idx !== len) {
	        np.stepColStyles = {
	          width: (100 / len).toFixed(4) + '%'
	        };
	      }
	      return React.cloneElement(ele, np);
	    }
	
	    return React.createElement('div', { className: 'rc-steps row-flex' }, React.createElement('div', { className: 'rc-steps-start' }, React.Children.map(props.children.slice(0, len), _make)), React.createElement('div', { className: 'rc-steps-end' }, _make(props.children[len], len)));
	  }
	});
	
	module.exports = Steps;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	
	var Step = React.createClass({
	  displayName: 'Step',
	
	  getInitialState: function getInitialState() {
	    return {
	      status: this.props.status ? this.props.status : 'waiting'
	    };
	  },
	  render: function render() {
	    var props = this.props;
	    var cls = 'border'; // fill / none
	    return React.createElement('li', { className: (props.stepColClass ? props.stepColClass : '') + 'rc-steps-item', style: props.stepColStyles }, React.createElement('span', { className: 'rc-steps-icon ' + cls + ' ' + this.state.status }, React.createElement('span', { className: 'num' }, props.stepIndex), React.createElement('i', { icon: props.icon })), React.createElement('span', { className: 'rc-steps-title' }, props.title), props.description && React.createElement('span', { className: 'rc-steps-description' }, props.description));
	  }
	});
	
	module.exports = Step;

/***/ }
]);
//# sourceMappingURL=simple.js.map
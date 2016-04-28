webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(168);


/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	__webpack_require__(2);
	__webpack_require__(3);
	
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(161);
	var Steps = __webpack_require__(162);
	var Step = Steps.Step;
	
	var App = React.createClass({
	  displayName: 'App',
	  getInitialState: function getInitialState() {
	    return {
	      steps: [{
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
	      }]
	    };
	  },
	  addStep: function addStep() {
	    var steps = this.state.steps;
	    steps.push({
	      title: '待运行',
	      description: '新的节点'
	    });
	    this.setState({ steps: steps });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'button',
	        { onClick: this.addStep },
	        'Add new step'
	      ),
	      React.createElement(
	        Steps,
	        null,
	        this.state.steps.map(function (step, i) {
	          return React.createElement(Step, _extends({ key: i }, step));
	        })
	      )
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=dynamic.js.map
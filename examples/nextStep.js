webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(167);


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(168);
	
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(161);
	var Steps = __webpack_require__(162);
	
	var container = document.getElementById('__react-content');
	var steps = (function generateRandomSteps() {
	  var n = Math.floor(Math.random() * 3) + 3;
	  var arr = [];
	  for (var i = 0; i < n; i++) {
	    arr.push({
	      title: '步骤' + (i + 1)
	    });
	  }
	  return arr;
	})();
	
	var MyForm = React.createClass({
	  displayName: 'MyForm',
	
	  getInitialState: function getInitialState() {
	    return {
	      currentStep: Math.floor(Math.random() * steps.length)
	    };
	  },
	  nextStep: function nextStep() {
	    var s = this.state.currentStep + 1;
	    if (s === steps.length) {
	      s = 0;
	    }
	    this.setState({
	      currentStep: s
	    });
	  },
	  render: function render() {
	    var cs = this.state.currentStep;
	    return React.createElement(
	      'form',
	      { className: 'my-step-form' },
	      React.createElement(
	        'div',
	        null,
	        '这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤'
	      ),
	      React.createElement(
	        'div',
	        null,
	        '当前正在执行第',
	        cs + 1,
	        '步'
	      ),
	      React.createElement(
	        'div',
	        { className: 'my-step-container' },
	        React.createElement(
	          Steps,
	          { current: cs },
	          steps.map(function (s, i) {
	            return React.createElement(Steps.Step, {
	              key: i,
	              title: s.title
	            });
	          })
	        )
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'button',
	          { type: 'button', onClick: this.nextStep },
	          '下一步'
	        )
	      )
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(MyForm, null), container);

/***/ },

/***/ 168:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=nextStep.js.map
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(14);
	
	var React = __webpack_require__(8);
	var Steps = __webpack_require__(9);
	
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
	          null,
	          steps.map(function (s, i) {
	            return React.createElement(Steps.Step, {
	              key: i,
	              status: cs === i ? 'process' : cs > i ? 'finish' : 'wait',
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
	
	React.render(React.createElement(MyForm, null), container);

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/diwei/steps/node_modules/rc-tools/node_modules/css-loader/index.js?sourceMap!/Users/diwei/steps/examples/nextStep.css", function() {
			var newContent = require("!!/Users/diwei/steps/node_modules/rc-tools/node_modules/css-loader/index.js?sourceMap!/Users/diwei/steps/examples/nextStep.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, ".my-step-form {\n  width: 100%;\n}\n.my-step-form > div {\n  margin-bottom: 20px;\n}\n.my-step-container {\n  width: 100%;\n}", "", {"version":3,"sources":["/Users/diwei/steps/examples/nextStep.css"],"names":[],"mappings":"AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA","file":"/Users/diwei/steps/node_modules/rc-tools/node_modules/css-loader/index.js?sourceMap!/Users/diwei/steps/examples/nextStep.css","sourcesContent":[".my-step-form {\n  width: 100%;\n}\n.my-step-form > div {\n  margin-bottom: 20px;\n}\n.my-step-container {\n  width: 100%;\n}"]}]);

/***/ }

});
//# sourceMappingURL=nextStep.js.map
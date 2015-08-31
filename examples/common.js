/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		6:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"customIcon","1":"nextStep","2":"simple","3":"smallSize","4":"vertical","5":"verticalSmall"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(5);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Steps = __webpack_require__(6);
	Steps.Step = __webpack_require__(7);
	
	module.exports = Steps;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	
	var Steps = React.createClass({
	  displayName: 'Steps',
	
	  _previousStepsWidth: 0,
	  _itemsWidth: [],
	  getInitialState: function getInitialState() {
	    return {
	      init: false,
	      tailWidth: 0
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-steps',
	      iconPrefix: 'rc',
	      maxDescriptionWidth: 120
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var $dom = React.findDOMNode(this);
	    var len = $dom.children.length - 1;
	    var i;
	    this._itemsWidth = new Array(len + 1);
	
	    for (i = 0; i <= len - 1; i++) {
	      var $item = $dom.children[i].children;
	      this._itemsWidth[i] = Math.ceil($item[0].offsetWidth + $item[1].children[0].offsetWidth);
	    }
	    this._itemsWidth[i] = Math.ceil($dom.children[len].offsetWidth);
	    this._previousStepsWidth = Math.floor(React.findDOMNode(this).offsetWidth);
	    this._update();
	
	    /*
	     * 下面的代码是为了兼容window系统下滚动条出现后会占用宽度的问题。
	     * componentDidMount时滚动条还不一定出现了，这时候获取的宽度可能不是最终宽度。
	     * 对于滚动条不占用宽度的浏览器，下面的代码也不二次render，_resize里面会判断要不要更新。
	     */
	    var me = this;
	    setTimeout(function () {
	      me._resize();
	    });
	
	    if (window.attachEvent) {
	      window.attachEvent('onresize', this._resize);
	    } else {
	      window.addEventListener('resize', this._resize);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (window.attachEvent) {
	      window.detachEvent('onresize', this._resize);
	    } else {
	      window.removeEventListener('resize', this._resize);
	    }
	  },
	  _resize: function _resize() {
	    var w = Math.floor(React.findDOMNode(this).offsetWidth);
	    if (this._previousStepsWidth === w) {
	      return;
	    }
	    this._previousStepsWidth = w;
	    this._update();
	  },
	  _update: function _update() {
	    var len = this.props.children.length - 1;
	    var tw = 0;
	    this._itemsWidth.forEach(function (w) {
	      tw += w;
	    });
	    var dw = Math.floor((this._previousStepsWidth - tw) / len) - 1;
	    if (dw <= 0) {
	      return;
	    }
	    this.setState({
	      init: true,
	      tailWidth: dw
	    });
	  },
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var children = props.children;
	    var maxDescriptionWidth = props.direction === 'vertical' ? 'auto' : props.maxDescriptionWidth;
	    var iconPrefix = props.iconPrefix;
	    var len = children.length - 1;
	    var iws = this._itemsWidth;
	    var clsName = prefixCls;
	    clsName += props.size === 'small' ? ' ' + prefixCls + '-small' : '';
	    clsName += props.direction === 'vertical' ? ' ' + prefixCls + '-vertical' : '';
	
	    return React.createElement(
	      'div',
	      { className: clsName },
	      React.Children.map(children, function (ele, idx) {
	        var np = {
	          stepNumber: (idx + 1).toString(),
	          stepLast: idx === len,
	          tailWidth: iws.length === 0 || idx === len ? 'auto' : iws[idx] + this.state.tailWidth,
	          prefixCls: prefixCls,
	          iconPrefix: iconPrefix,
	          maxDescriptionWidth: maxDescriptionWidth
	        };
	        return React.cloneElement(ele, np);
	      }, this)
	    );
	  }
	});
	
	module.exports = Steps;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	
	var Step = React.createClass({
	  displayName: 'Step',
	
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var iconPrefix = props.iconPrefix;
	    var maxWidth = props.maxDescriptionWidth;
	    var iconName = props.icon ? props.icon : 'check';
	    var icon = !props.icon && props.status !== 'finish' ? React.createElement(
	      'span',
	      { className: prefixCls + '-icon' },
	      props.stepNumber
	    ) : React.createElement('span', { className: prefixCls + '-icon ' + iconPrefix + 'icon ' + iconPrefix + 'icon-' + iconName });
	    return React.createElement(
	      'div',
	      { className: prefixCls + '-item ' + (props.stepLast ? prefixCls + '-item-last ' : '') + prefixCls + '-status-' + props.status + (props.icon ? ' ' + prefixCls + '-custom' : ''), style: { width: props.tailWidth } },
	      !props.stepLast ? React.createElement(
	        'div',
	        { className: prefixCls + '-tail' },
	        React.createElement('i', null)
	      ) : '',
	      React.createElement(
	        'div',
	        { className: prefixCls + '-head' },
	        React.createElement(
	          'div',
	          { className: prefixCls + '-head-inner' },
	          icon
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: prefixCls + '-main', style: { maxWidth: maxWidth } },
	        React.createElement(
	          'div',
	          { className: prefixCls + '-title' },
	          props.title
	        ),
	        props.description ? React.createElement(
	          'div',
	          { className: prefixCls + '-description' },
	          props.description
	        ) : ''
	      )
	    );
	  }
	});
	
	module.exports = Step;

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map
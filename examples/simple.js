webpackJsonp([4],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_steps_assets_index_less__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_steps_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_steps_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_steps_assets_iconfont_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_steps_assets_iconfont_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rc_steps_assets_iconfont_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_steps__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_steps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rc_steps__);






var container = document.getElementById('__react-content');
var description = '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

var ControlSteps = function ControlSteps() {
  var _React$useState = __WEBPACK_IMPORTED_MODULE_2_react___default.a.useState(0),
      current = _React$useState[0],
      setCurrent = _React$useState[1];

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_rc_steps___default.a,
    {
      current: current,
      onChange: function onChange(val) {
        setCurrent(val);
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5DF2\u5B8C\u6210' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u8FDB\u884C\u4E2D' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C', description: 'Hello World!' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C' })
  );
};

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_rc_steps___default.a,
    { current: 1 },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5DF2\u5B8C\u6210' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u8FDB\u884C\u4E2D' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C' })
  ),
  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_rc_steps___default.a,
    { current: 1, style: { marginTop: 40 } },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5DF2\u5B8C\u6210', description: description }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u8FDB\u884C\u4E2D', description: description }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C', description: description }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C', description: description })
  ),
  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_rc_steps___default.a,
    { current: 1, style: { marginTop: 40 }, status: 'error' },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5DF2\u5B8C\u6210', description: description }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u8FDB\u884C\u4E2D', description: description }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C', description: description }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_steps__["Step"], { title: '\u5F85\u8FD0\u884C', description: description })
  ),
  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(ControlSteps, null)
), container);

/***/ })

},[143]);
//# sourceMappingURL=simple.js.map
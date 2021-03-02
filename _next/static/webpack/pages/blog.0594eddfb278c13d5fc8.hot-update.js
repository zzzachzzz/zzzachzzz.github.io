webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Link */ "./components/Link.tsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navigation */ "./components/Navigation.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ "./lib/utils.ts");


var _jsxFileName = "/home/zach/github/zzzachzzz.github.io/pages/blog/index.tsx",
    _this2 = undefined;







var _StyledH = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("h1").withConfig({
  displayName: "blog___StyledH",
  componentId: "gs9s1w-0"
})(["text-align:center;"]);

var _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv",
  componentId: "gs9s1w-1"
})(["flex-direction:column;display:flex;max-width:1200px;margin:0 auto;"]);

var __N_SSG = true;
function BlogList(_ref) {
  var _this = this;

  var allPosts = _ref.allPosts;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Web Dev Blog - zzzachzzz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "JavaScript, TypeScript, and React by example with code."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledH, {
      children: "Recent Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv, {
      children: allPosts.map(function (post, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogPreview, {
          title: post.title,
          slug: post.slug,
          date: post.date
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = BlogList;

var _StyledDiv2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv2",
  componentId: "gs9s1w-2"
})(["display:flex;align-items:center;"]);

var _StyledSpan = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("span").withConfig({
  displayName: "blog___StyledSpan",
  componentId: "gs9s1w-3"
})(["margin:1em;text-align:center;display:flex;align-items:center;"]);

var _StyledSpan2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("span").withConfig({
  displayName: "blog___StyledSpan2",
  componentId: "gs9s1w-4"
})(["font-size:0.75em;"]);

var _StyledDiv3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv3",
  componentId: "gs9s1w-5"
})(["display:flex;align-items:center;"]);

var BlogPreview = function BlogPreview(_ref2) {
  var title = _ref2.title,
      slug = _ref2.slug,
      date = _ref2.date;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogLink, {
    href: "/blog/".concat(slug),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv2, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Brace, {
        color: "prismRed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Brace, {
        color: "prismBlue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Brace, {
        color: "prismGreen"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSpan, {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSpan2, {
        children: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(date)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv3, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Brace, {
        color: "prismGreen",
        close: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Brace, {
        color: "prismBlue",
        close: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Brace, {
        color: "prismRed",
        close: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, _this2)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this2);
};

_c2 = BlogPreview;

var _StyledSpan3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("span").withConfig({
  displayName: "blog___StyledSpan3",
  componentId: "gs9s1w-6"
})(["", ""], function (p) {
  return p._css2;
});

var Brace = function Brace(_ref3) {
  var color = _ref3.color,
      _ref3$close = _ref3.close,
      close = _ref3$close === void 0 ? false : _ref3$close;

  var _css = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:", ";"], function (_ref4) {
    var theme = _ref4.theme;
    return theme[color];
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSpan3, {
    _css2: _css,
    children: close ? '}' : '{'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this2);
};

_c3 = Brace;
var BlogLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "blog__BlogLink",
  componentId: "gs9s1w-7"
})(["min-height:60px;background:#272822;border-radius:0.3em;margin:1.5em;padding:1.1em;font-size:1.1em;color:white;&:hover{color:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.prismPurple;
});
_c4 = BlogLink;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "BlogList");
$RefreshReg$(_c2, "BlogPreview");
$RefreshReg$(_c3, "Brace");
$RefreshReg$(_c4, "BlogLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3giXSwibmFtZXMiOlsiQmxvZ0xpc3QiLCJhbGxQb3N0cyIsIm1hcCIsInBvc3QiLCJpIiwidGl0bGUiLCJzbHVnIiwiZGF0ZSIsIkJsb2dQcmV2aWV3IiwiZm9ybWF0RGF0ZSIsIkJyYWNlIiwiY29sb3IiLCJjbG9zZSIsIl9jc3MiLCJjc3MiLCJ0aGVtZSIsIkJsb2dMaW5rIiwic3R5bGVkIiwiTGluayIsInByaXNtUHVycGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFLZSxTQUFTQSxRQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUNwRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUU7QUFBQSxnQkFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNEJBQ1oscUVBQUMsV0FBRDtBQUFhLGVBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUF6QjtBQUFnQyxjQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFBM0M7QUFBaUQsY0FBSSxFQUFFSCxJQUFJLENBQUNJO0FBQTVELFdBQXVFSCxDQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDtLQW5CdUJKLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnhCLElBQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsTUFBZ0JDLElBQWhCLFNBQWdCQSxJQUFoQjtBQUFBLHNCQUNsQixxRUFBQyxRQUFEO0FBQVUsUUFBSSxrQkFBV0QsSUFBWCxDQUFkO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLDhCQUNFO0FBQUEsa0JBQWtGRDtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxrQkFBZ0NJLDZEQUFVLENBQUNGLElBQUQ7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVVFO0FBQUEsOEJBQ0UscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQyxZQUFiO0FBQTBCLGFBQUs7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUMsV0FBYjtBQUF5QixhQUFLO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDLFVBQWI7QUFBd0IsYUFBSztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURrQjtBQUFBLENBQXBCOztNQUFNQyxXOzs7Ozs7Ozs7QUF3Qk4sSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBMEM7QUFBQSxNQUF2Q0MsS0FBdUMsU0FBdkNBLEtBQXVDO0FBQUEsMEJBQWhDQyxLQUFnQztBQUFBLE1BQWhDQSxLQUFnQyw0QkFBeEIsS0FBd0I7O0FBQ3RELE1BQU1DLElBQUksR0FBR0MsNkRBQUgsa0JBQWdCO0FBQUEsUUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsV0FBZUEsS0FBSyxDQUFDSixLQUFELENBQXBCO0FBQUEsR0FBaEIsQ0FBVjs7QUFDQSxzQkFDRTtBQUFBLFdBQVdFLElBQVg7QUFBQSxjQUNHRCxLQUFLLEdBQUcsR0FBSCxHQUFTO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtELENBUEQ7O01BQU1GLEs7QUFTTixJQUFNTSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLHdEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMklBVUQ7QUFBQSxNQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNJLFdBQXJCO0FBQUEsQ0FWQyxDQUFkO01BQU1ILFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4wNTk0ZWRkZmIyNzhjMTNkNWZjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICdAL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJ0AvbGliL2FwaSc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0J1xuXG50eXBlIFByb3BzID0gSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0xpc3QoeyBhbGxQb3N0cyB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldlYiBEZXYgQmxvZyAtIHp6emFjaHp6ejwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiSmF2YVNjcmlwdCwgVHlwZVNjcmlwdCwgYW5kIFJlYWN0IGJ5IGV4YW1wbGUgd2l0aCBjb2RlLlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPGgxIGNzcz1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5SZWNlbnQgUG9zdHM8L2gxPlxuICAgICAgPGRpdiBjc3M9XCJmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBkaXNwbGF5OiBmbGV4OyBtYXgtd2lkdGg6IDEyMDBweDsgbWFyZ2luOiAwIGF1dG87XCI+XG4gICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGkpID0+XG4gICAgICAgICAgPEJsb2dQcmV2aWV3IHRpdGxlPXtwb3N0LnRpdGxlfSBzbHVnPXtwb3N0LnNsdWd9IGRhdGU9e3Bvc3QuZGF0ZX0ga2V5PXtpfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IEJsb2dQcmV2aWV3ID0gKHsgdGl0bGUsIHNsdWcsIGRhdGUgfTogUHJvcHNbJ2FsbFBvc3RzJ11bbnVtYmVyXSkgPT4gKFxuICA8QmxvZ0xpbmsgaHJlZj17YC9ibG9nLyR7c2x1Z31gfT5cbiAgICA8ZGl2IGNzcz1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbVJlZFwiIC8+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbUJsdWVcIiAvPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21HcmVlblwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNzcz1cIm1hcmdpbjogMWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNzcz1cImZvbnQtc2l6ZTogMC43NWVtO1wiPntmb3JtYXREYXRlKGRhdGUpfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNzcz1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbUdyZWVuXCIgY2xvc2UgLz5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtQmx1ZVwiIGNsb3NlIC8+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbVJlZFwiIGNsb3NlIC8+XG4gICAgPC9kaXY+XG4gIDwvQmxvZ0xpbms+XG4pO1xuXG50eXBlIEJyYWNlUHJvcHMgPSB7XG4gIGNvbG9yOiAncHJpc21SZWQnIHwgJ3ByaXNtQmx1ZScgfCAncHJpc21HcmVlbic7XG4gIGNsb3NlPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IEJyYWNlID0gKHsgY29sb3IsIGNsb3NlID0gZmFsc2UgfTogQnJhY2VQcm9wcykgPT4ge1xuICBjb25zdCBfY3NzID0gY3NzYGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lW2NvbG9yXX07YDtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjc3M9e19jc3N9PlxuICAgICAge2Nsb3NlID8gJ30nIDogJ3snfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IEJsb2dMaW5rID0gc3R5bGVkKExpbmspYFxuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMjcyODIyO1xuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgbWFyZ2luOiAxLjVlbTtcbiAgcGFkZGluZzogMS4xZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmlzbVB1cnBsZX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH1cbiAgfTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
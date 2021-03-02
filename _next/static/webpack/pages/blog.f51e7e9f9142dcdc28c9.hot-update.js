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

var _StyledDiv3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv3",
  componentId: "gs9s1w-3"
})(["margin:1em;text-align:center;"]);

var _StyledSpan = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("span").withConfig({
  displayName: "blog___StyledSpan",
  componentId: "gs9s1w-4"
})(["font-size:0.75em;"]);

var _StyledDiv4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv4",
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
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv3, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSpan, {
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
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv4, {
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

var _StyledSpan2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("span").withConfig({
  displayName: "blog___StyledSpan2",
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSpan2, {
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
})(["min-height:60px;background:#272822;border-radius:0.3em;margin:1.5em;padding:1.1em;display:flex;flex-direction:row;justify-content:space-between;font-size:1.1em;color:white;&:hover{color:", ";}"], function (_ref5) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3giXSwibmFtZXMiOlsiQmxvZ0xpc3QiLCJhbGxQb3N0cyIsIm1hcCIsInBvc3QiLCJpIiwidGl0bGUiLCJzbHVnIiwiZGF0ZSIsIkJsb2dQcmV2aWV3IiwiZm9ybWF0RGF0ZSIsIkJyYWNlIiwiY29sb3IiLCJjbG9zZSIsIl9jc3MiLCJjc3MiLCJ0aGVtZSIsIkJsb2dMaW5rIiwic3R5bGVkIiwiTGluayIsInByaXNtUHVycGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFLZSxTQUFTQSxRQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUNwRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUU7QUFBQSxnQkFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNEJBQ1oscUVBQUMsV0FBRDtBQUFhLGVBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUF6QjtBQUFnQyxjQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFBM0M7QUFBaUQsY0FBSSxFQUFFSCxJQUFJLENBQUNJO0FBQTVELFdBQXVFSCxDQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDtLQW5CdUJKLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnhCLElBQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsTUFBZ0JDLElBQWhCLFNBQWdCQSxJQUFoQjtBQUFBLHNCQUNsQixxRUFBQyxRQUFEO0FBQVUsUUFBSSxrQkFBV0QsSUFBWCxDQUFkO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLDhCQUNFO0FBQUEsa0JBQU9EO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsa0JBQWdDSSw2REFBVSxDQUFDRixJQUFEO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFVRTtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUMsWUFBYjtBQUEwQixhQUFLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDLFdBQWI7QUFBeUIsYUFBSztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQyxVQUFiO0FBQXdCLGFBQUs7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEa0I7QUFBQSxDQUFwQjs7TUFBTUMsVzs7Ozs7Ozs7O0FBd0JOLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLFFBQTBDO0FBQUEsTUFBdkNDLEtBQXVDLFNBQXZDQSxLQUF1QztBQUFBLDBCQUFoQ0MsS0FBZ0M7QUFBQSxNQUFoQ0EsS0FBZ0MsNEJBQXhCLEtBQXdCOztBQUN0RCxNQUFNQyxJQUFJLEdBQUdDLDZEQUFILGtCQUFnQjtBQUFBLFFBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWVBLEtBQUssQ0FBQ0osS0FBRCxDQUFwQjtBQUFBLEdBQWhCLENBQVY7O0FBQ0Esc0JBQ0U7QUFBQSxXQUFXRSxJQUFYO0FBQUEsY0FDR0QsS0FBSyxHQUFHLEdBQUgsR0FBUztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRCxDQVBEOztNQUFNRixLO0FBU04sSUFBTU0sUUFBUSxHQUFHQyxpRUFBTSxDQUFDQyx3REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHlNQWFEO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSxXQUFyQjtBQUFBLENBYkMsQ0FBZDtNQUFNSCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZjUxZTdlOWY5MTQyZGNkYzI4YzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnQC9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICdAL2xpYi9hcGknO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0AvbGliL3V0aWxzJztcbmltcG9ydCB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCdcblxudHlwZSBQcm9wcyA9IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dMaXN0KHsgYWxsUG9zdHMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZWIgRGV2IEJsb2cgLSB6enphY2h6eno8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkphdmFTY3JpcHQsIFR5cGVTY3JpcHQsIGFuZCBSZWFjdCBieSBleGFtcGxlIHdpdGggY29kZS5cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxoMSBjc3M9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+UmVjZW50IFBvc3RzPC9oMT5cbiAgICAgIDxkaXYgY3NzPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZGlzcGxheTogZmxleDsgbWF4LXdpZHRoOiAxMjAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPlxuICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpKSA9PlxuICAgICAgICAgIDxCbG9nUHJldmlldyB0aXRsZT17cG9zdC50aXRsZX0gc2x1Zz17cG9zdC5zbHVnfSBkYXRlPXtwb3N0LmRhdGV9IGtleT17aX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBCbG9nUHJldmlldyA9ICh7IHRpdGxlLCBzbHVnLCBkYXRlIH06IFByb3BzWydhbGxQb3N0cyddW251bWJlcl0pID0+IChcbiAgPEJsb2dMaW5rIGhyZWY9e2AvYmxvZy8ke3NsdWd9YH0+XG4gICAgPGRpdiBjc3M9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21SZWRcIiAvPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21CbHVlXCIgLz5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtR3JlZW5cIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY3NzPVwibWFyZ2luOiAxZW07IHRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICA8c3BhbiBjc3M9XCJmb250LXNpemU6IDAuNzVlbTtcIj57Zm9ybWF0RGF0ZShkYXRlKX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjc3M9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21HcmVlblwiIGNsb3NlIC8+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbUJsdWVcIiBjbG9zZSAvPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21SZWRcIiBjbG9zZSAvPlxuICAgIDwvZGl2PlxuICA8L0Jsb2dMaW5rPlxuKTtcblxudHlwZSBCcmFjZVByb3BzID0ge1xuICBjb2xvcjogJ3ByaXNtUmVkJyB8ICdwcmlzbUJsdWUnIHwgJ3ByaXNtR3JlZW4nO1xuICBjbG9zZT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBCcmFjZSA9ICh7IGNvbG9yLCBjbG9zZSA9IGZhbHNlIH06IEJyYWNlUHJvcHMpID0+IHtcbiAgY29uc3QgX2NzcyA9IGNzc2Bjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZVtjb2xvcl19O2A7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY3NzPXtfY3NzfT5cbiAgICAgIHtjbG9zZSA/ICd9JyA6ICd7J31cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCBCbG9nTGluayA9IHN0eWxlZChMaW5rKWBcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzI3MjgyMjtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIG1hcmdpbjogMS41ZW07XG4gIHBhZGRpbmc6IDEuMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmlzbVB1cnBsZX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH1cbiAgfTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
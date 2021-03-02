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
})(["display:flex;align-items:center;font-size:1.1em;"]);

var _StyledDiv3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv3",
  componentId: "gs9s1w-3"
})(["margin:0.4em;text-align:center;"]);

var _StyledDiv4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv4",
  componentId: "gs9s1w-4"
})(["margin-bottom:0.7em;"]);

var _StyledDiv5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv5",
  componentId: "gs9s1w-5"
})(["font-size:0.8em;"]);

var _StyledDiv6 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("div").withConfig({
  displayName: "blog___StyledDiv6",
  componentId: "gs9s1w-6"
})(["display:flex;align-items:center;font-size:1.1em;"]);

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv4, {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv5, {
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
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledDiv6, {
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

var _StyledSpan = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("span").withConfig({
  displayName: "blog___StyledSpan",
  componentId: "gs9s1w-7"
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSpan, {
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
  componentId: "gs9s1w-8"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3giXSwibmFtZXMiOlsiQmxvZ0xpc3QiLCJhbGxQb3N0cyIsIm1hcCIsInBvc3QiLCJpIiwidGl0bGUiLCJzbHVnIiwiZGF0ZSIsIkJsb2dQcmV2aWV3IiwiZm9ybWF0RGF0ZSIsIkJyYWNlIiwiY29sb3IiLCJjbG9zZSIsIl9jc3MiLCJjc3MiLCJ0aGVtZSIsIkJsb2dMaW5rIiwic3R5bGVkIiwiTGluayIsInByaXNtUHVycGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFLZSxTQUFTQSxRQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUNwRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUU7QUFBQSxnQkFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNEJBQ1oscUVBQUMsV0FBRDtBQUFhLGVBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUF6QjtBQUFnQyxjQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFBM0M7QUFBaUQsY0FBSSxFQUFFSCxJQUFJLENBQUNJO0FBQTVELFdBQXVFSCxDQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDtLQW5CdUJKLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCeEIsSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxJQUFWLFNBQVVBLElBQVY7QUFBQSxNQUFnQkMsSUFBaEIsU0FBZ0JBLElBQWhCO0FBQUEsc0JBQ2xCLHFFQUFDLFFBQUQ7QUFBVSxRQUFJLGtCQUFXRCxJQUFYLENBQWQ7QUFBQSw0QkFDRTtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsOEJBQ0U7QUFBQSxrQkFBa0NEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLGtCQUE4QkksNkRBQVUsQ0FBQ0YsSUFBRDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBVUU7QUFBQSw4QkFDRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDLFlBQWI7QUFBMEIsYUFBSztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQyxXQUFiO0FBQXlCLGFBQUs7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUMsVUFBYjtBQUF3QixhQUFLO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGtCO0FBQUEsQ0FBcEI7O01BQU1DLFc7Ozs7Ozs7OztBQXdCTixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUEwQztBQUFBLE1BQXZDQyxLQUF1QyxTQUF2Q0EsS0FBdUM7QUFBQSwwQkFBaENDLEtBQWdDO0FBQUEsTUFBaENBLEtBQWdDLDRCQUF4QixLQUF3Qjs7QUFDdEQsTUFBTUMsSUFBSSxHQUFHQyw2REFBSCxrQkFBZ0I7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFlQSxLQUFLLENBQUNKLEtBQUQsQ0FBcEI7QUFBQSxHQUFoQixDQUFWOztBQUNBLHNCQUNFO0FBQUEsV0FBV0UsSUFBWDtBQUFBLGNBQ0dELEtBQUssR0FBRyxHQUFILEdBQVM7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0QsQ0FQRDs7TUFBTUYsSztBQVNOLElBQU1NLFFBQVEsR0FBR0MsaUVBQU0sQ0FBQ0Msd0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx5TUFhRDtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksV0FBckI7QUFBQSxDQWJDLENBQWQ7TUFBTUgsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmUxZTJiMmQ2NDBiYjk3ZGI2MjVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ0AvY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnQC9saWIvYXBpJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAL2xpYi91dGlscyc7XG5pbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gJ25leHQnXG5cbnR5cGUgUHJvcHMgPSBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nTGlzdCh7IGFsbFBvc3RzIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2ViIERldiBCbG9nIC0genp6YWNoenp6PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJKYXZhU2NyaXB0LCBUeXBlU2NyaXB0LCBhbmQgUmVhY3QgYnkgZXhhbXBsZSB3aXRoIGNvZGUuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8aDEgY3NzPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlJlY2VudCBQb3N0czwvaDE+XG4gICAgICA8ZGl2IGNzcz1cImZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGRpc3BsYXk6IGZsZXg7IG1heC13aWR0aDogMTIwMHB4OyBtYXJnaW46IDAgYXV0bztcIj5cbiAgICAgICAge2FsbFBvc3RzLm1hcCgocG9zdCwgaSkgPT5cbiAgICAgICAgICA8QmxvZ1ByZXZpZXcgdGl0bGU9e3Bvc3QudGl0bGV9IHNsdWc9e3Bvc3Quc2x1Z30gZGF0ZT17cG9zdC5kYXRlfSBrZXk9e2l9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQmxvZ1ByZXZpZXcgPSAoeyB0aXRsZSwgc2x1ZywgZGF0ZSB9OiBQcm9wc1snYWxsUG9zdHMnXVtudW1iZXJdKSA9PiAoXG4gIDxCbG9nTGluayBocmVmPXtgL2Jsb2cvJHtzbHVnfWB9PlxuICAgIDxkaXYgY3NzPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1zaXplOiAxLjFlbTtcIj5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtUmVkXCIgLz5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtQmx1ZVwiIC8+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbUdyZWVuXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNzcz1cIm1hcmdpbjogMC40ZW07IHRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgIDxkaXYgY3NzPVwibWFyZ2luLWJvdHRvbTogMC43ZW07XCI+e3RpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjc3M9XCJmb250LXNpemU6IDAuOGVtO1wiPntmb3JtYXREYXRlKGRhdGUpfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY3NzPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1zaXplOiAxLjFlbTtcIj5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtR3JlZW5cIiBjbG9zZSAvPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21CbHVlXCIgY2xvc2UgLz5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtUmVkXCIgY2xvc2UgLz5cbiAgICA8L2Rpdj5cbiAgPC9CbG9nTGluaz5cbik7XG5cbnR5cGUgQnJhY2VQcm9wcyA9IHtcbiAgY29sb3I6ICdwcmlzbVJlZCcgfCAncHJpc21CbHVlJyB8ICdwcmlzbUdyZWVuJztcbiAgY2xvc2U/OiBib29sZWFuO1xufTtcblxuY29uc3QgQnJhY2UgPSAoeyBjb2xvciwgY2xvc2UgPSBmYWxzZSB9OiBCcmFjZVByb3BzKSA9PiB7XG4gIGNvbnN0IF9jc3MgPSBjc3NgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWVbY29sb3JdfTtgO1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNzcz17X2Nzc30+XG4gICAgICB7Y2xvc2UgPyAnfScgOiAneyd9XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuY29uc3QgQmxvZ0xpbmsgPSBzdHlsZWQoTGluaylgXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICMyNzI4MjI7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICBtYXJnaW46IDEuNWVtO1xuICBwYWRkaW5nOiAxLjFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpc21QdXJwbGV9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9XG4gIH07XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=
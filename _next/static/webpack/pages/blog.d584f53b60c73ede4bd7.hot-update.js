webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.tsx");






var _jsxFileName = "/home/zach/github/zzzachzzz.github.io/components/Navigation.tsx",
    _this = undefined;





var _StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Navigation___StyledLink",
  componentId: "sc-10fffhi-0"
})(["margin:5px;"]);

var _StyledLink2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Navigation___StyledLink2",
  componentId: "sc-10fffhi-1"
})(["margin:5px;"]);

var _StyledLink3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Navigation___StyledLink3",
  componentId: "sc-10fffhi-2"
})(["margin:5px;"]);

function Navigation(_ref) {
  var postSlug = _ref.postSlug;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledLink, {
      href: "/",
      children: "/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Arrow, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledLink2, {
      href: "/blog",
      children: "blog"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), postSlug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Arrow, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 20
    }, this), postSlug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledLink3, {
      href: "/blog/".concat(postSlug),
      children: postSlug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Navigation;
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Navigation__Nav",
  componentId: "sc-10fffhi-3"
})(["display:flex;flex-direction:row;align-items:flex-start;font-size:1.2em;text-decoration:none;"]);
_c2 = Nav;

var _StyledSpan = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])("span").withConfig({
  displayName: "Navigation___StyledSpan",
  componentId: "sc-10fffhi-4"
})(["margin:5px;color:white;font-weight:500;line-height:1;"]);

var Arrow = function Arrow() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledSpan, {
    children: ">"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, _this);
};

_c3 = Arrow;

var _c, _c2, _c3;

$RefreshReg$(_c, "Navigation");
$RefreshReg$(_c2, "Nav");
$RefreshReg$(_c3, "Arrow");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwicG9zdFNsdWciLCJOYXYiLCJzdHlsZWQiLCJuYXYiLCJBcnJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUllLFNBQVNBLFVBQVQsT0FBeUM7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQ3RELHNCQUNFLHFFQUFDLEdBQUQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlHQSxRQUFRLGlCQUFJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpmLEVBS0dBLFFBQVEsaUJBQ1A7QUFBTSxVQUFJLGtCQUFXQSxRQUFYLENBQVY7QUFBQSxnQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtLQWR1QkQsVTtBQWdCeEIsSUFBTUUsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9HQUFUO01BQU1GLEc7Ozs7Ozs7QUFRTixJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLHNCQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztNQUFNQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZDU4NGY1M2I2MGM3M2VkZTRiZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcblxudHlwZSBQcm9wcyA9IHsgcG9zdFNsdWc/OiBzdHJpbmc7IH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oeyBwb3N0U2x1ZyB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxOYXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGNzcz1cIm1hcmdpbjogNXB4O1wiPi88L0xpbms+XG4gICAgICA8QXJyb3cgLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIGNzcz1cIm1hcmdpbjogNXB4O1wiPmJsb2c8L0xpbms+XG4gICAgICB7cG9zdFNsdWcgJiYgPEFycm93IC8+fVxuICAgICAge3Bvc3RTbHVnICYmXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3RTbHVnfWB9IGNzcz1cIm1hcmdpbjogNXB4O1wiPlxuICAgICAgICAgIHtwb3N0U2x1Z31cbiAgICAgICAgPC9MaW5rPlxuICAgICAgfVxuICAgIDwvTmF2PlxuICApO1xufVxuXG5jb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuY29uc3QgQXJyb3cgPSAoKSA9PiAoXG4gIDxzcGFuIGNzcz1cIm1hcmdpbjogNXB4OyBjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiA1MDA7IGxpbmUtaGVpZ2h0OiAxO1wiPiZndDs8L3NwYW4+XG4pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9
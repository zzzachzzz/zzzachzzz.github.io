webpackHotUpdate_N_E("pages/blog/[slug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwicG9zdFNsdWciLCJOYXYiLCJzdHlsZWQiLCJuYXYiLCJBcnJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUllLFNBQVNBLFVBQVQsT0FBeUM7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQ3RELHNCQUNFLHFFQUFDLEdBQUQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlHQSxRQUFRLGlCQUFJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpmLEVBS0dBLFFBQVEsaUJBQ1A7QUFBTSxVQUFJLGtCQUFXQSxRQUFYLENBQVY7QUFBQSxnQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtLQWR1QkQsVTtBQWdCeEIsSUFBTUUsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9HQUFUO01BQU1GLEc7Ozs7Ozs7QUFRTixJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLHNCQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztNQUFNQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvW3NsdWddLmQ1ODRmNTNiNjBjNzNlZGU0YmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XG5cbnR5cGUgUHJvcHMgPSB7IHBvc3RTbHVnPzogc3RyaW5nOyB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgcG9zdFNsdWcgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TmF2PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBjc3M9XCJtYXJnaW46IDVweDtcIj4vPC9MaW5rPlxuICAgICAgPEFycm93IC8+XG4gICAgICA8TGluayBocmVmPVwiL2Jsb2dcIiBjc3M9XCJtYXJnaW46IDVweDtcIj5ibG9nPC9MaW5rPlxuICAgICAge3Bvc3RTbHVnICYmIDxBcnJvdyAvPn1cbiAgICAgIHtwb3N0U2x1ZyAmJlxuICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtwb3N0U2x1Z31gfSBjc3M9XCJtYXJnaW46IDVweDtcIj5cbiAgICAgICAgICB7cG9zdFNsdWd9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIH1cbiAgICA8L05hdj5cbiAgKTtcbn1cblxuY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmA7XG5cbmNvbnN0IEFycm93ID0gKCkgPT4gKFxuICA8c3BhbiBjc3M9XCJtYXJnaW46IDVweDsgY29sb3I6IHdoaXRlOyBmb250LXdlaWdodDogNTAwOyBsaW5lLWhlaWdodDogMTtcIj4mZ3Q7PC9zcGFuPlxuKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPost; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remark_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-emoji */ "./node_modules/remark-emoji/index.js");
/* harmony import */ var remark_emoji__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remark_emoji__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Navigation */ "./components/Navigation.tsx");
/* harmony import */ var _components_TreeToJSX__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/TreeToJSX */ "./components/TreeToJSX.tsx");
/* harmony import */ var _components_SaveOrEditIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/SaveOrEditIcon */ "./components/SaveOrEditIcon.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/lib/utils */ "./lib/utils.ts");


var _jsxFileName = "/home/zach/github/zzzachzzz.github.io/pages/blog/[slug].tsx",
    _s = $RefreshSig$(),
    _this = undefined;













var _StyledH = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])("h1").withConfig({
  displayName: "slug___StyledH",
  componentId: "sc-8mhdoa-0"
})(["text-align:center;margin:2em;margin-bottom:0.2em;"]);

var _StyledP = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])("p").withConfig({
  displayName: "slug___StyledP",
  componentId: "sc-8mhdoa-1"
})(["font-size:0.9em;text-align:center;font-weight:400;"]);

var __N_SSG = true;
function BlogPost(_ref) {
  _s();

  var post = _ref.post;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this),  true && router.pathname.split('/')[2] !== 'edit' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SaveOrEditIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      icon: "edit",
      onClick: function onClick() {
        return router.push("/blog/edit/".concat(router.query.slug));
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postSlug: post.slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledH, {
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledP, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            dateTime: post.date,
            children: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["formatDate"])(post.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogContent, {
          content: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
} // TODO Verify this is only run once for this static page

_s(BlogPost, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = BlogPost;

var BlogContent = function BlogContent(_ref2) {
  var content = _ref2.content;
  var tree = unified__WEBPACK_IMPORTED_MODULE_5___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_6___default.a).parse(content);
  tree = unified__WEBPACK_IMPORTED_MODULE_5___default()().use(remark_emoji__WEBPACK_IMPORTED_MODULE_7___default.a).runSync(tree);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogContentContainer, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TreeToJSX__WEBPACK_IMPORTED_MODULE_9__["default"], {
      tree: tree
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_c2 = BlogContent;
var BlogContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "slug__BlogContentContainer",
  componentId: "sc-8mhdoa-2"
})(["font-size:1.2em;line-height:1.4em;letter-spacing:0.01em;overflow-wrap:break-word;padding:1.1em;margin:0 auto;& > *:not(pre){max-width:850px;margin-left:auto;margin-right:auto;}& > pre{width:90vw;max-width:1100px;}"]);
_c3 = BlogContentContainer;

var _c, _c2, _c3;

$RefreshReg$(_c, "BlogPost");
$RefreshReg$(_c2, "BlogContent");
$RefreshReg$(_c3, "BlogContentContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIkJsb2dQb3N0IiwicG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInRpdGxlIiwicGF0aG5hbWUiLCJzcGxpdCIsInB1c2giLCJxdWVyeSIsInNsdWciLCJkYXRlIiwiZm9ybWF0RGF0ZSIsImNvbnRlbnQiLCJCbG9nQ29udGVudCIsInRyZWUiLCJ1bmlmaWVkIiwidXNlIiwibWFya2Rvd25QYXJzZXIiLCJwYXJzZSIsImVtb2ppVHJhbnNmb3JtIiwicnVuU3luYyIsIkJsb2dDb250ZW50Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFXZSxTQUFTQSxRQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUUYsSUFBSSxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRyxTQUEwQ0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixNQUFrQyxNQUE1RSxpQkFDQyxxRUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUosTUFBTSxDQUFDSyxJQUFQLHNCQUEwQkwsTUFBTSxDQUFDTSxLQUFQLENBQWFDLElBQXZDLEVBQU47QUFBQTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQVVFLHFFQUFDLDhEQUFEO0FBQVksY0FBUSxFQUFFUixJQUFJLENBQUNRO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFrRVIsSUFBSSxDQUFDRztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxpQ0FDRTtBQUFNLG9CQUFRLEVBQUVILElBQUksQ0FBQ1MsSUFBckI7QUFBQSxzQkFBNEJDLDhEQUFVLENBQUNWLElBQUksQ0FBQ1MsSUFBTjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUEsK0JBQ0UscUVBQUMsV0FBRDtBQUFhLGlCQUFPLEVBQUVULElBQUksQ0FBQ1c7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRCxDLENBRUQ7O0dBOUJ3QlosUTtVQUNQRyxxRDs7O0tBRE9ILFE7O0FBK0J4QixJQUFNYSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQUF1QztBQUFBLE1BQXBDRCxPQUFvQyxTQUFwQ0EsT0FBb0M7QUFDekQsTUFBSUUsSUFBSSxHQUFHQyw4Q0FBTyxHQUFHQyxHQUFWLENBQWNDLG1EQUFkLEVBQThCQyxLQUE5QixDQUFvQ04sT0FBcEMsQ0FBWDtBQUNBRSxNQUFJLEdBQUdDLDhDQUFPLEdBQUdDLEdBQVYsQ0FBY0csbURBQWQsRUFBOEJDLE9BQTlCLENBQXNDTixJQUF0QyxDQUFQO0FBRUEsc0JBQ0UscUVBQUMsb0JBQUQ7QUFBQSwyQkFDRSxxRUFBQyw2REFBRDtBQUFXLFVBQUksRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBVEQ7O01BQU1ELFc7QUFXTixJQUFNUSxvQkFBb0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2TkFBMUI7TUFBTUYsb0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9bc2x1Z10uNmE1OWRiMDM3MDc3OGUyNDRlZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHVuaWZpZWQgZnJvbSAndW5pZmllZCc7XG5pbXBvcnQgbWFya2Rvd25QYXJzZXIgZnJvbSAncmVtYXJrLXBhcnNlJztcbmltcG9ydCBlbW9qaVRyYW5zZm9ybSBmcm9tICdyZW1hcmstZW1vamknO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgVHJlZVRvSlNYIGZyb20gJ0AvY29tcG9uZW50cy9UcmVlVG9KU1gnO1xuaW1wb3J0IFNhdmVPckVkaXRJY29uIGZyb20gJ0AvY29tcG9uZW50cy9TYXZlT3JFZGl0SWNvbic7XG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gJ0AvbGliL2FwaSc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIHNsdWc6IHN0cmluZztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3QoeyBwb3N0IH06IFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiByb3V0ZXIucGF0aG5hbWUuc3BsaXQoJy8nKVsyXSAhPT0gJ2VkaXQnICYmIChcbiAgICAgICAgPFNhdmVPckVkaXRJY29uXG4gICAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYmxvZy9lZGl0LyR7cm91dGVyLnF1ZXJ5LnNsdWd9YCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPE5hdmlnYXRpb24gcG9zdFNsdWc9e3Bvc3Quc2x1Z30gLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMSBjc3M9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMmVtOyBtYXJnaW4tYm90dG9tOiAwLjJlbTtcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNzcz1cImZvbnQtc2l6ZTogMC45ZW07IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC13ZWlnaHQ6IDQwMDtcIj5cbiAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtwb3N0LmRhdGV9Pntmb3JtYXREYXRlKHBvc3QuZGF0ZSl9PC90aW1lPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxCbG9nQ29udGVudCBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVE9ETyBWZXJpZnkgdGhpcyBpcyBvbmx5IHJ1biBvbmNlIGZvciB0aGlzIHN0YXRpYyBwYWdlXG5jb25zdCBCbG9nQ29udGVudCA9ICh7IGNvbnRlbnQgfTogeyBjb250ZW50OiBzdHJpbmc7IH0pID0+IHtcbiAgbGV0IHRyZWUgPSB1bmlmaWVkKCkudXNlKG1hcmtkb3duUGFyc2VyKS5wYXJzZShjb250ZW50KTtcbiAgdHJlZSA9IHVuaWZpZWQoKS51c2UoZW1vamlUcmFuc2Zvcm0pLnJ1blN5bmModHJlZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QmxvZ0NvbnRlbnRDb250YWluZXI+XG4gICAgICA8VHJlZVRvSlNYIHRyZWU9e3RyZWV9IC8+XG4gICAgPC9CbG9nQ29udGVudENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IEJsb2dDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBwYWRkaW5nOiAxLjFlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gICYgPiAqOm5vdChwcmUpIHtcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAmID4gcHJlIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgfVxuYDtcblxudHlwZSBQYXJhbXMgPSB7IHNsdWc6IHN0cmluZzsgfTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxQcm9wcywgUGFyYW1zPiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbJ3RpdGxlJywgJ2RhdGUnLCAnY29udGVudCcsICdzbHVnJ10pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPFBhcmFtcz4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoWydzbHVnJ10pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKHBvc3QgPT4gKHtcbiAgICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWcgfVxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=
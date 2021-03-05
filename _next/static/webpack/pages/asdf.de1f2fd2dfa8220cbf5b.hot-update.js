webpackHotUpdate_N_E("pages/asdf",{

/***/ "./pages/asdf.js":
/*!***********************!*\
  !*** ./pages/asdf.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodosWrapper; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var _jsxFileName = "/home/zach/github/zzzachzzz.github.io/pages/asdf.js",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();



function TodosWrapper() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](0),
      _React$useState2 = Object(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    name: '1',
    status: 'completed'
  }, {
    name: '2',
    status: 'completed'
  }, {
    name: '3',
    status: 'completed'
  }]),
      todos = _useState[0],
      setTodos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('completed'),
      filterBy = _useState2[0],
      setFilterBy = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return setCount(function (c) {
          return c + 1;
        });
      },
      children: "Trigger rerender bro"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return setTodos(function (t) {
          return [].concat(Object(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(t.slice(0, 2)), [{
            name: '3',
            status: 'in-progress'
          }]);
        });
      },
      children: "set in-progress"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return setTodos(function (t) {
          return [].concat(Object(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(t.slice(0, 2)), [{
            name: '3',
            status: 'completed'
          }]);
        });
      },
      children: "set completed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Todos, {
      todos: todos,
      filterByStatus: filterBy
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), ";"]
  }, void 0, true);
}

_s(TodosWrapper, "KcQ/C2eVVF1kBZHQRTWV49TU6to=");

_c = TodosWrapper;
var Todos = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["memo"](_c2 = _s2(function (_ref) {
  _s2();

  var todos = _ref.todos,
      filterByStatus = _ref.filterByStatus;
  console.log('-- Todos --');
  var filteredTodos = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    console.log('-- useMemo --');
    return todos.filter(function (todo) {
      return todo.status === filterByStatus;
    });
  }, [todos, filterByStatus]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: filteredTodos.map(function (todo, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: todo.name
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 39
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
}, "e2z2V3ZuqUioMmeQR+5qJf6rjPE="));
_c3 = Todos;

var _c, _c2, _c3;

$RefreshReg$(_c, "TodosWrapper");
$RefreshReg$(_c2, "Todos$React.memo");
$RefreshReg$(_c3, "Todos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNkZi5qcyJdLCJuYW1lcyI6WyJUb2Rvc1dyYXBwZXIiLCJSZWFjdCIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdGF0dXMiLCJ0b2RvcyIsInNldFRvZG9zIiwiZmlsdGVyQnkiLCJzZXRGaWx0ZXJCeSIsImMiLCJ0Iiwic2xpY2UiLCJUb2RvcyIsImZpbHRlckJ5U3RhdHVzIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkVG9kb3MiLCJ1c2VNZW1vIiwiZmlsdGVyIiwidG9kbyIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLHdCQUNYQyw4Q0FBQSxDQUFlLENBQWYsQ0FEVztBQUFBO0FBQUEsTUFDOUJDLEtBRDhCO0FBQUEsTUFDdkJDLFFBRHVCOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDLENBQ2pDO0FBQUVDLFFBQUksRUFBRSxHQUFSO0FBQWFDLFVBQU0sRUFBRTtBQUFyQixHQURpQyxFQUVqQztBQUFFRCxRQUFJLEVBQUUsR0FBUjtBQUFhQyxVQUFNLEVBQUU7QUFBckIsR0FGaUMsRUFHakM7QUFBRUQsUUFBSSxFQUFFLEdBQVI7QUFBYUMsVUFBTSxFQUFFO0FBQXJCLEdBSGlDLENBQUQsQ0FGRztBQUFBLE1BRTlCQyxLQUY4QjtBQUFBLE1BRXZCQyxRQUZ1Qjs7QUFBQSxtQkFPTEosc0RBQVEsQ0FBQyxXQUFELENBUEg7QUFBQSxNQU85QkssUUFQOEI7QUFBQSxNQU9wQkMsV0FQb0I7O0FBU3JDLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNUCxRQUFRLENBQUMsVUFBQVEsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLEdBQUcsQ0FBUjtBQUFBLFNBQUYsQ0FBZDtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1ILFFBQVEsQ0FBQyxVQUFBSSxDQUFDO0FBQUEsMEtBQVFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRLENBQVIsRUFBVyxDQUFYLENBQVIsSUFBdUI7QUFBRVIsZ0JBQUksRUFBRSxHQUFSO0FBQWFDLGtCQUFNLEVBQUU7QUFBckIsV0FBdkI7QUFBQSxTQUFGLENBQWQ7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNRSxRQUFRLENBQUMsVUFBQUksQ0FBQztBQUFBLDBLQUFRQSxDQUFDLENBQUNDLEtBQUYsQ0FBUSxDQUFSLEVBQVcsQ0FBWCxDQUFSLElBQXVCO0FBQUVSLGdCQUFJLEVBQUUsR0FBUjtBQUFhQyxrQkFBTSxFQUFFO0FBQXJCLFdBQXZCO0FBQUEsU0FBRixDQUFkO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLHFFQUFDLEtBQUQ7QUFBTyxXQUFLLEVBQUVDLEtBQWQ7QUFBcUIsb0JBQWMsRUFBRUU7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFRRDs7R0FqQnVCVCxZOztLQUFBQSxZO0FBbUJ4QixJQUFNYyxLQUFLLGdCQUFHYiwwQ0FBQSxXQUFXLGdCQUErQjtBQUFBOztBQUFBLE1BQTVCTSxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQlEsY0FBcUIsUUFBckJBLGNBQXFCO0FBQ3REQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyxxREFBTyxDQUFDLFlBQU07QUFDbENILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSxXQUFPVixLQUFLLENBQUNhLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDZixNQUFMLEtBQWdCUyxjQUFwQjtBQUFBLEtBQWpCLENBQVA7QUFDRCxHQUg0QixFQUcxQixDQUFDUixLQUFELEVBQVFRLGNBQVIsQ0FIMEIsQ0FBN0I7QUFLQSxzQkFDRTtBQUFBLGNBQ0dHLGFBQWEsQ0FBQ0ksR0FBZCxDQUFrQixVQUFDRCxJQUFELEVBQU9FLENBQVA7QUFBQSwwQkFBYTtBQUFBLGtCQUFhRixJQUFJLENBQUNoQjtBQUFsQixTQUFTa0IsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWI7QUFBQSxLQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBWmEsa0NBQWQ7TUFBTVQsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hc2RmLmRlMWYyZmQyZGZhODIyMGNiZjViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb3NXcmFwcGVyKCkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtcbiAgICB7IG5hbWU6ICcxJywgc3RhdHVzOiAnY29tcGxldGVkJyB9LFxuICAgIHsgbmFtZTogJzInLCBzdGF0dXM6ICdjb21wbGV0ZWQnIH0sXG4gICAgeyBuYW1lOiAnMycsIHN0YXR1czogJ2NvbXBsZXRlZCcgfSxcbiAgXSk7XG4gIGNvbnN0IFtmaWx0ZXJCeSwgc2V0RmlsdGVyQnldID0gdXNlU3RhdGUoJ2NvbXBsZXRlZCcpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoYyA9PiBjICsgMSl9PlRyaWdnZXIgcmVyZW5kZXIgYnJvPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRvZG9zKHQgPT4gWy4uLnQuc2xpY2UoMCwgMiksIHsgbmFtZTogJzMnLCBzdGF0dXM6ICdpbi1wcm9ncmVzcycgfSBdKX0+c2V0IGluLXByb2dyZXNzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRvZG9zKHQgPT4gWy4uLnQuc2xpY2UoMCwgMiksIHsgbmFtZTogJzMnLCBzdGF0dXM6ICdjb21wbGV0ZWQnIH0gXSl9PnNldCBjb21wbGV0ZWQ8L2J1dHRvbj5cbiAgICAgIDxUb2RvcyB0b2Rvcz17dG9kb3N9IGZpbHRlckJ5U3RhdHVzPXtmaWx0ZXJCeX0gLz47XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IFRvZG9zID0gUmVhY3QubWVtbygoeyB0b2RvcywgZmlsdGVyQnlTdGF0dXMgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnLS0gVG9kb3MgLS0nKTtcbiAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCctLSB1c2VNZW1vIC0tJyk7XG4gICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uc3RhdHVzID09PSBmaWx0ZXJCeVN0YXR1cyk7XG4gIH0sIFt0b2RvcywgZmlsdGVyQnlTdGF0dXNdKTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtmaWx0ZXJlZFRvZG9zLm1hcCgodG9kbywgaSkgPT4gPGxpIGtleT17aX0+e3RvZG8ubmFtZX08L2xpPil9XG4gICAgPC91bD5cbiAgKTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9
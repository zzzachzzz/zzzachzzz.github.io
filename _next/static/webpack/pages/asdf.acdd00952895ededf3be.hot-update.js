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

function Todos(_ref) {
  _s2();

  var _this = this;

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
  }, this);
}

_s2(Todos, "e2z2V3ZuqUioMmeQR+5qJf6rjPE=");

_c2 = Todos;

var _c, _c2;

$RefreshReg$(_c, "TodosWrapper");
$RefreshReg$(_c2, "Todos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNkZi5qcyJdLCJuYW1lcyI6WyJUb2Rvc1dyYXBwZXIiLCJSZWFjdCIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdGF0dXMiLCJ0b2RvcyIsInNldFRvZG9zIiwiZmlsdGVyQnkiLCJzZXRGaWx0ZXJCeSIsImMiLCJ0Iiwic2xpY2UiLCJUb2RvcyIsImZpbHRlckJ5U3RhdHVzIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkVG9kb3MiLCJ1c2VNZW1vIiwiZmlsdGVyIiwidG9kbyIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsd0JBQ1hDLDhDQUFBLENBQWUsQ0FBZixDQURXO0FBQUE7QUFBQSxNQUM5QkMsS0FEOEI7QUFBQSxNQUN2QkMsUUFEdUI7O0FBQUEsa0JBRVhDLHNEQUFRLENBQUMsQ0FDakM7QUFBRUMsUUFBSSxFQUFFLEdBQVI7QUFBYUMsVUFBTSxFQUFFO0FBQXJCLEdBRGlDLEVBRWpDO0FBQUVELFFBQUksRUFBRSxHQUFSO0FBQWFDLFVBQU0sRUFBRTtBQUFyQixHQUZpQyxFQUdqQztBQUFFRCxRQUFJLEVBQUUsR0FBUjtBQUFhQyxVQUFNLEVBQUU7QUFBckIsR0FIaUMsQ0FBRCxDQUZHO0FBQUEsTUFFOUJDLEtBRjhCO0FBQUEsTUFFdkJDLFFBRnVCOztBQUFBLG1CQU9MSixzREFBUSxDQUFDLFdBQUQsQ0FQSDtBQUFBLE1BTzlCSyxRQVA4QjtBQUFBLE1BT3BCQyxXQVBvQjs7QUFTckMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1QLFFBQVEsQ0FBQyxVQUFBUSxDQUFDO0FBQUEsaUJBQUlBLENBQUMsR0FBRyxDQUFSO0FBQUEsU0FBRixDQUFkO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUgsUUFBUSxDQUFDLFVBQUFJLENBQUM7QUFBQSwwS0FBUUEsQ0FBQyxDQUFDQyxLQUFGLENBQVEsQ0FBUixFQUFXLENBQVgsQ0FBUixJQUF1QjtBQUFFUixnQkFBSSxFQUFFLEdBQVI7QUFBYUMsa0JBQU0sRUFBRTtBQUFyQixXQUF2QjtBQUFBLFNBQUYsQ0FBZDtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1FLFFBQVEsQ0FBQyxVQUFBSSxDQUFDO0FBQUEsMEtBQVFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRLENBQVIsRUFBVyxDQUFYLENBQVIsSUFBdUI7QUFBRVIsZ0JBQUksRUFBRSxHQUFSO0FBQWFDLGtCQUFNLEVBQUU7QUFBckIsV0FBdkI7QUFBQSxTQUFGLENBQWQ7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMsS0FBRDtBQUFPLFdBQUssRUFBRUMsS0FBZDtBQUFxQixvQkFBYyxFQUFFRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQVFEOztHQWpCdUJULFk7O0tBQUFBLFk7O0FBbUJ4QixTQUFTYyxLQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEsTUFBekJQLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUFBLE1BQWxCUSxjQUFrQixRQUFsQkEsY0FBa0I7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSxNQUFNQyxhQUFhLEdBQUdDLHFEQUFPLENBQUMsWUFBTTtBQUNsQ0gsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLFdBQU9WLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNmLE1BQUwsS0FBZ0JTLGNBQXBCO0FBQUEsS0FBakIsQ0FBUDtBQUNELEdBSDRCLEVBRzFCLENBQUNSLEtBQUQsRUFBUVEsY0FBUixDQUgwQixDQUE3QjtBQUtBLHNCQUNFO0FBQUEsY0FDR0csYUFBYSxDQUFDSSxHQUFkLENBQWtCLFVBQUNELElBQUQsRUFBT0UsQ0FBUDtBQUFBLDBCQUFhO0FBQUEsa0JBQWFGLElBQUksQ0FBQ2hCO0FBQWxCLFNBQVNrQixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBYjtBQUFBLEtBQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0lBWlFULEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXNkZi5hY2RkMDA5NTI4OTVlZGVkZjNiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zV3JhcHBlcigpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXG4gICAgeyBuYW1lOiAnMScsIHN0YXR1czogJ2NvbXBsZXRlZCcgfSxcbiAgICB7IG5hbWU6ICcyJywgc3RhdHVzOiAnY29tcGxldGVkJyB9LFxuICAgIHsgbmFtZTogJzMnLCBzdGF0dXM6ICdjb21wbGV0ZWQnIH0sXG4gIF0pO1xuICBjb25zdCBbZmlsdGVyQnksIHNldEZpbHRlckJ5XSA9IHVzZVN0YXRlKCdjb21wbGV0ZWQnKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGMgPT4gYyArIDEpfT5UcmlnZ2VyIHJlcmVuZGVyIGJybzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUb2Rvcyh0ID0+IFsuLi50LnNsaWNlKDAsIDIpLCB7IG5hbWU6ICczJywgc3RhdHVzOiAnaW4tcHJvZ3Jlc3MnIH0gXSl9PnNldCBpbi1wcm9ncmVzczwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUb2Rvcyh0ID0+IFsuLi50LnNsaWNlKDAsIDIpLCB7IG5hbWU6ICczJywgc3RhdHVzOiAnY29tcGxldGVkJyB9IF0pfT5zZXQgY29tcGxldGVkPC9idXR0b24+XG4gICAgICA8VG9kb3MgdG9kb3M9e3RvZG9zfSBmaWx0ZXJCeVN0YXR1cz17ZmlsdGVyQnl9IC8+O1xuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBUb2Rvcyh7IHRvZG9zLCBmaWx0ZXJCeVN0YXR1cyB9KSB7XG4gIGNvbnNvbGUubG9nKCctLSBUb2RvcyAtLScpO1xuICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJy0tIHVzZU1lbW8gLS0nKTtcbiAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5zdGF0dXMgPT09IGZpbHRlckJ5U3RhdHVzKTtcbiAgfSwgW3RvZG9zLCBmaWx0ZXJCeVN0YXR1c10pO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2ZpbHRlcmVkVG9kb3MubWFwKCh0b2RvLCBpKSA9PiA8bGkga2V5PXtpfT57dG9kby5uYW1lfTwvbGk+KX1cbiAgICA8L3VsPlxuICApO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9
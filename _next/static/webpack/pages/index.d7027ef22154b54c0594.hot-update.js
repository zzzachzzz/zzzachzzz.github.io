webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Typer.tsx":
/*!******************************!*\
  !*** ./components/Typer.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Typer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Statement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Statement */ "./components/Statement.tsx");






var _jsxFileName = "/home/zach/github/zzzachzzz.github.io/components/Typer.tsx",
    _s = $RefreshSig$();




function Typer() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(['']),
      currentInputLines = _useState[0],
      setCurrentInputLines = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      currentReturnLines = _useState2[0],
      setCurrentReturnLines = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      currentStatementIndex = _useState3[0],
      setCurrentStatementIndex = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var timeout;

    var handleTyping = /*#__PURE__*/function () {
      var _ref = Object(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var sleep, statementsLength, i, j;
        return _home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sleep = function sleep(ms) {
                  return new Promise(function (resolve) {
                    timeout = window.setTimeout(resolve, ms);
                  });
                };

                _context.next = 3;
                return sleep(1000);

              case 3:
                // Initial wait on page load
                statementsLength = Object.keys(inputLines).length;
                i = 0;

              case 5:
                if (!(i < statementsLength)) {
                  _context.next = 24;
                  break;
                }

                setCurrentStatementIndex(i);
                _context.next = 9;
                return sleep(550);

              case 9:
                j = 0;

              case 10:
                if (!(j < inputLines[i].length)) {
                  _context.next = 17;
                  break;
                }

                setCurrentInputLines([].concat(Object(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputLines.slice(0, i)), [inputLines[i].substring(0, j + 1)]));
                _context.next = 14;
                return sleep(30);

              case 14:
                j++;
                _context.next = 10;
                break;

              case 17:
                _context.next = 19;
                return sleep(200);

              case 19:
                // Delay 'hitting Enter' after typing statement
                setCurrentReturnLines(returnLines.slice(0, i + 1));

                if (i === statementsLength - 1) {
                  setCurrentInputLines(Object(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputLines.slice(0, i + 1)));
                } else {
                  // '' to begin next input statement, so prefix and cursor render immediately
                  setCurrentInputLines([].concat(Object(_home_zach_github_zzzachzzz_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputLines.slice(0, i + 1)), ['']));
                }

              case 21:
                i++;
                _context.next = 5;
                break;

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleTyping() {
        return _ref.apply(this, arguments);
      };
    }();

    handleTyping();
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: currentInputLines.map(function (_, i) {
      var _currentInputLines$i, _currentReturnLines$i;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Statement__WEBPACK_IMPORTED_MODULE_6__["default"], {
        inputStatement: (_currentInputLines$i = currentInputLines[i]) !== null && _currentInputLines$i !== void 0 ? _currentInputLines$i : '',
        returnStatement: (_currentReturnLines$i = currentReturnLines[i]) !== null && _currentReturnLines$i !== void 0 ? _currentReturnLines$i : '',
        showCursorHere: currentStatementIndex === i,
        statementPrefix: i === 0 || i === 8 ? linuxPrefix : '>>> '
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false);
}

_s(Typer, "HfGyQ4ZAXR0a3wn3mGnmnnKPyXs=");

_c = Typer;

var linuxPrefix = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    style: {
      color: 'mediumspringgreen'
    },
    children: "zach@penguin"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined), ":", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    style: {
      color: 'cyan'
    },
    children: "~"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 68
  }, undefined), "$\xA0"]
}, void 0, true);

var TerminalLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.attrs(function () {
  return {
    target: '_blank',
    rel: 'noopener noreferrer'
  };
}).withConfig({
  displayName: "Typer__TerminalLink",
  componentId: "sc-8dvtak-0"
})(["text-decoration-line:none;color:DodgerBlue;"]);
_c2 = TerminalLink;
var inputLines = ["python3", "import zach", "zach.full_name", "zach.current_location", "zach.skills", "zach.resume", "zach.links", "exit()", ""];
var returnLines = ["Python 3.7.6", "", "'Zachary Rosenberger'", "'Boise, ID'", "['TypeScript', 'React', 'Redux', 'Express', 'Python', 'Git']", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: ["'", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TerminalLink, {
    href: "https://drive.google.com/open?id=1bQ3qTFrOGzH0jDxaLVAibP99uRxwepbh",
    children: "zRosenbergerResume.pdf"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 6
  }, undefined), "'"]
}, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: ["['", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TerminalLink, {
    href: "https://github.com/zzzachzzz",
    children: "github.com/zzzachzzz"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 7
  }, undefined), "',", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 94
  }, undefined), "\xA0'", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TerminalLink, {
    href: "mailto:zach1rosen@gmail.com",
    children: "zach1rosen@gmail.com"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 12
  }, undefined), "',", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 98
  }, undefined), "\xA0'", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TerminalLink, {
    href: "https://www.linkedin.com/in/zach-rosenberger-36884ab1",
    children: "linkedin.com/in/zach-rosenberger"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 12
  }, undefined), "']"]
}, void 0, true), "", ""];

var _c, _c2;

$RefreshReg$(_c, "Typer");
$RefreshReg$(_c2, "TerminalLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UeXBlci50c3giXSwibmFtZXMiOlsiVHlwZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbnB1dExpbmVzIiwic2V0Q3VycmVudElucHV0TGluZXMiLCJjdXJyZW50UmV0dXJuTGluZXMiLCJzZXRDdXJyZW50UmV0dXJuTGluZXMiLCJjdXJyZW50U3RhdGVtZW50SW5kZXgiLCJzZXRDdXJyZW50U3RhdGVtZW50SW5kZXgiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0IiwiaGFuZGxlVHlwaW5nIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwid2luZG93Iiwic2V0VGltZW91dCIsInN0YXRlbWVudHNMZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiaW5wdXRMaW5lcyIsImxlbmd0aCIsImkiLCJqIiwic2xpY2UiLCJzdWJzdHJpbmciLCJyZXR1cm5MaW5lcyIsImNsZWFyVGltZW91dCIsIm1hcCIsIl8iLCJsaW51eFByZWZpeCIsImNvbG9yIiwiVGVybWluYWxMaW5rIiwic3R5bGVkIiwiYSIsImF0dHJzIiwidGFyZ2V0IiwicmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQUQ1QjtBQUFBLE1BQ3ZCQyxpQkFEdUI7QUFBQSxNQUNKQyxvQkFESTs7QUFBQSxtQkFFc0JGLHNEQUFRLENBQUMsRUFBRCxDQUY5QjtBQUFBLE1BRXZCRyxrQkFGdUI7QUFBQSxNQUVIQyxxQkFGRzs7QUFBQSxtQkFHNEJKLHNEQUFRLENBQUMsQ0FBRCxDQUhwQztBQUFBLE1BR3ZCSyxxQkFIdUI7QUFBQSxNQUdBQyx3QkFIQTs7QUFLOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE9BQUo7O0FBQ0EsUUFBTUMsWUFBWTtBQUFB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RlQscUJBRStGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGL0Ysd0JBR1MscUVBQUMsWUFBRDtBQUFjLFFBQUksRUFBQyx1REFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIVDtBQUFBLGdCQVhrQixFQWtCbEIsRUFsQmtCLEVBbUJsQixFQW5Ca0IsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDcwMjdlZjIyMTU0YjU0YzA1OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUeXBlcigpIHtcbiAgY29uc3QgW2N1cnJlbnRJbnB1dExpbmVzLCBzZXRDdXJyZW50SW5wdXRMaW5lc10gPSB1c2VTdGF0ZShbJyddKTtcbiAgY29uc3QgW2N1cnJlbnRSZXR1cm5MaW5lcywgc2V0Q3VycmVudFJldHVybkxpbmVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRTdGF0ZW1lbnRJbmRleCwgc2V0Q3VycmVudFN0YXRlbWVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQ6IG51bWJlcjtcbiAgICBjb25zdCBoYW5kbGVUeXBpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBzbGVlcCA9IChtczogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBhd2FpdCBzbGVlcCgxMDAwKTsgLy8gSW5pdGlhbCB3YWl0IG9uIHBhZ2UgbG9hZFxuICAgICAgY29uc3Qgc3RhdGVtZW50c0xlbmd0aCA9IE9iamVjdC5rZXlzKGlucHV0TGluZXMpLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldEN1cnJlbnRTdGF0ZW1lbnRJbmRleChpKTtcbiAgICAgICAgYXdhaXQgc2xlZXAoNTUwKTsgIC8vIERlbGF5IGJlZm9yZSB0eXBpbmcgbmV4dCBpbnB1dCBzdGF0ZW1lbnRcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbnB1dExpbmVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2V0Q3VycmVudElucHV0TGluZXMoWy4uLmlucHV0TGluZXMuc2xpY2UoMCwgaSksIGlucHV0TGluZXNbaV0uc3Vic3RyaW5nKDAsIGorMSldKTtcbiAgICAgICAgICBhd2FpdCBzbGVlcCgzMCk7ICAvLyBEZWxheSBiZXR3ZWVuIGNoYXJhY3RlcnNcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzbGVlcCgyMDApOyAgLy8gRGVsYXkgJ2hpdHRpbmcgRW50ZXInIGFmdGVyIHR5cGluZyBzdGF0ZW1lbnRcbiAgICAgICAgc2V0Q3VycmVudFJldHVybkxpbmVzKHJldHVybkxpbmVzLnNsaWNlKDAsIGkrMSkpO1xuICAgICAgICBpZiAoaSA9PT0gc3RhdGVtZW50c0xlbmd0aC0xKSB7XG4gICAgICAgICAgc2V0Q3VycmVudElucHV0TGluZXMoWy4uLmlucHV0TGluZXMuc2xpY2UoMCwgaSsxKV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gJycgdG8gYmVnaW4gbmV4dCBpbnB1dCBzdGF0ZW1lbnQsIHNvIHByZWZpeCBhbmQgY3Vyc29yIHJlbmRlciBpbW1lZGlhdGVseVxuICAgICAgICAgIHNldEN1cnJlbnRJbnB1dExpbmVzKFsuLi5pbnB1dExpbmVzLnNsaWNlKDAsIGkrMSksICcnXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaGFuZGxlVHlwaW5nKCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjdXJyZW50SW5wdXRMaW5lcy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgPFN0YXRlbWVudCBpbnB1dFN0YXRlbWVudD17Y3VycmVudElucHV0TGluZXNbaV0gPz8gJyd9XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuU3RhdGVtZW50PXtjdXJyZW50UmV0dXJuTGluZXNbaV0gPz8gJyd9XG4gICAgICAgICAgICAgICAgICAgc2hvd0N1cnNvckhlcmU9e2N1cnJlbnRTdGF0ZW1lbnRJbmRleCA9PT0gaX1cbiAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRQcmVmaXg9e2kgPT09IDAgfHwgaSA9PT0gOCA/IGxpbnV4UHJlZml4IDogJz4+PiAnfVxuICAgICAgICAgICAgICAgICAgIGtleT17aX0gLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBsaW51eFByZWZpeCA9IChcbiAgPD5cbiAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiAnbWVkaXVtc3ByaW5nZ3JlZW4nfX0+emFjaEBwZW5ndWluPC9zcGFuPjo8c3BhbiBzdHlsZT17e2NvbG9yOiAnY3lhbid9fT5+PC9zcGFuPiQmbmJzcDtcbiAgPC8+XG4pO1xuXG5cbmNvbnN0IFRlcm1pbmFsTGluayA9IHN0eWxlZC5hLmF0dHJzKCgpID0+ICh7XG4gIHRhcmdldDogJ19ibGFuaycsXG4gIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLFxufSkpYFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgY29sb3I6IERvZGdlckJsdWU7XG5gO1xuXG5jb25zdCBpbnB1dExpbmVzID0gW1xuICBcInB5dGhvbjNcIixcbiAgXCJpbXBvcnQgemFjaFwiLFxuICBcInphY2guZnVsbF9uYW1lXCIsXG4gIFwiemFjaC5jdXJyZW50X2xvY2F0aW9uXCIsXG4gIFwiemFjaC5za2lsbHNcIixcbiAgXCJ6YWNoLnJlc3VtZVwiLFxuICBcInphY2gubGlua3NcIixcbiAgXCJleGl0KClcIixcbiAgXCJcIixcbl07XG5cbmNvbnN0IHJldHVybkxpbmVzID0gW1xuICBcIlB5dGhvbiAzLjcuNlwiLFxuICBcIlwiLFxuICBcIidaYWNoYXJ5IFJvc2VuYmVyZ2VyJ1wiLFxuICBcIidCb2lzZSwgSUQnXCIsXG4gIFwiWydUeXBlU2NyaXB0JywgJ1JlYWN0JywgJ1JlZHV4JywgJ0V4cHJlc3MnLCAnUHl0aG9uJywgJ0dpdCddXCIsXG4gIDw+XG4gICAgJzxUZXJtaW5hbExpbmtcbiAgICAgICBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL29wZW4/aWQ9MWJRM3FURnJPR3pIMGpEeGFMVkFpYlA5OXVSeHdlcGJoXCI+XG4gICAgICAgelJvc2VuYmVyZ2VyUmVzdW1lLnBkZjwvVGVybWluYWxMaW5rPidcbiAgPC8+LFxuICA8PlxuICAgIFsnPFRlcm1pbmFsTGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3p6emFjaHp6elwiPmdpdGh1Yi5jb20venp6YWNoenp6PC9UZXJtaW5hbExpbms+Jyw8YnIvPlxuICAgICZuYnNwOyc8VGVybWluYWxMaW5rIGhyZWY9XCJtYWlsdG86emFjaDFyb3NlbkBnbWFpbC5jb21cIj56YWNoMXJvc2VuQGdtYWlsLmNvbTwvVGVybWluYWxMaW5rPicsPGJyLz5cbiAgICAmbmJzcDsnPFRlcm1pbmFsTGluayBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3phY2gtcm9zZW5iZXJnZXItMzY4ODRhYjFcIj5cbiAgICAgIGxpbmtlZGluLmNvbS9pbi96YWNoLXJvc2VuYmVyZ2VyXG4gICAgPC9UZXJtaW5hbExpbms+J11cbiAgPC8+LFxuICBcIlwiLFxuICBcIlwiLFxuXTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/stock.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/stock.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar Stock = function Stock(props) {\n\n    return React.createElement(\n        'a',\n        { href: '#' },\n        React.createElement(\n            'div',\n            null,\n            React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'p',\n                    null,\n                    React.createElement(\n                        'strong',\n                        null,\n                        'Apple '\n                    )\n                )\n            ),\n            React.createElement(\n                'div',\n                { id: 'analystRating' },\n                React.createElement(\n                    'div',\n                    { id: 'tag' },\n                    React.createElement(\n                        'svg',\n                        { width: '20', height: '20', viewBox: '0 0 20 20' },\n                        React.createElement(\n                            'g',\n                            { fillRule: 'evenodd', transform: 'translate(-4 -4)' },\n                            React.createElement('path', { id: 'tagA', d: 'M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4' })\n                        )\n                    )\n                ),\n                React.createElement(\n                    'div',\n                    { id: 'percent' },\n                    React.createElement(\n                        'h6',\n                        null,\n                        ' 60 % '\n                    )\n                )\n            ),\n            React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'h2',\n                    null,\n                    ' $192.20 '\n                ),\n                React.createElement(\n                    'span',\n                    null,\n                    ' + ',\n                    React.createElement(\n                        'span',\n                        null,\n                        ' 0.95% '\n                    ),\n                    ' '\n                )\n            )\n        )\n    );\n};\n\nexports.default = Stock;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3RvY2suanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9zdG9jay5qc3g/ZTJkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RvY2sgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+QXBwbGUgPC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdhbmFseXN0UmF0aW5nJz4gXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ndGFnJz5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgZmlsbFJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00IC00KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJ0YWdBXCIgZD1cIk0yMC45OTk3NSw4IEMyMC40NDc3NSw4IDE5Ljk5OTc1LDcuNTUyIDE5Ljk5OTc1LDcgQzE5Ljk5OTc1LDYuNDQ4IDIwLjQ0Nzc1LDYgMjAuOTk5NzUsNiBDMjEuNTUxNzUsNiAyMS45OTk3NSw2LjQ0OCAyMS45OTk3NSw3IEMyMS45OTk3NSw3LjU1MiAyMS41NTE3NSw4IDIwLjk5OTc1LDggTTIxLjk5OTc1LDQgTDE0LjgyNzc1LDQgQzE0LjI5Nzc1LDQgMTMuNzg4NzUsNC4yMSAxMy40MTM3NSw0LjU4NSBMNC41ODU3NSwxMy40MTQgQzMuODA0NzUsMTQuMTk1IDMuODA0NzUsMTUuNDYxIDQuNTg1NzUsMTYuMjQyIEwxMS43NTY3NSwyMy40MTQgQzEyLjUzNzc1LDI0LjE5NSAxMy44MDQ3NSwyNC4xOTUgMTQuNTg1NzUsMjMuNDE0IEwyMy40MTM3NSwxNC41ODYgQzIzLjc4ODc1LDE0LjIxMSAyMy45OTk3NSwxMy43MDIgMjMuOTk5NzUsMTMuMTcyIEwyMy45OTk3NSw2IEMyMy45OTk3NSw0Ljg5NiAyMy4xMDM3NSw0IDIxLjk5OTc1LDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3BlcmNlbnQnPlxuICAgICAgICAgICAgICAgICAgICA8aDY+IDYwICUgPC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+ICQxOTIuMjAgPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gKyA8c3Bhbj4gMC45NSUgPC9zcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICApXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTdG9jazsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFUQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFqQkE7QUFEQTtBQTBCQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/stock.jsx\n");

/***/ }),

/***/ "./client/src/components/stockList.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/stockList.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _stock = __webpack_require__(/*! ./stock.jsx */ \"./client/src/components/stock.jsx\");\n\nvar _stock2 = _interopRequireDefault(_stock);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StockList = function (_React$Component) {\n    _inherits(StockList, _React$Component);\n\n    function StockList(props) {\n        _classCallCheck(this, StockList);\n\n        var _this = _possibleConstructorReturn(this, (StockList.__proto__ || Object.getPrototypeOf(StockList)).call(this, props));\n\n        _this.state = {\n            pixel: 0,\n            count: 1\n        };\n        return _this;\n    }\n\n    _createClass(StockList, [{\n        key: 'populateCarousel',\n        value: function populateCarousel(string) {\n            var carousel = [];\n\n            for (var i = 1; i <= 12; i++) {\n                carousel.push(React.createElement(\n                    'div',\n                    { className: 'stocks' },\n                    React.createElement(_stock2.default, null),\n                    i + string\n                ));\n            }\n\n            return carousel;\n        }\n    }, {\n        key: 'movingRight',\n        value: function movingRight() {\n            var current = this.state.pixel;\n            current += 350;\n\n            this.setState({\n                pixel: current,\n                count: this.state.count + 1\n            });\n        }\n    }, {\n        key: 'movingLeft',\n        value: function movingLeft() {\n            var current = this.state.pixel;\n            current -= 350;\n\n            this.setState({\n                pixel: current,\n                count: this.state.count - 1\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'section',\n                { className: 'carousel' },\n                React.createElement(\n                    'div',\n                    { className: 'left' },\n                    this.state.count === 2 || this.state.count === 3 ? React.createElement(\n                        'a',\n                        { href: '#', onClick: this.movingLeft.bind(this) },\n                        ' ',\n                        React.createElement(\n                            'svg',\n                            { width: '11', height: '17', viewBox: '0 0 11 17' },\n                            React.createElement(\n                                'g',\n                                { 'fill-rule': 'evenodd', transform: 'rotate(45 1.243 3)' },\n                                React.createElement('rect', { width: '12', height: '3' }),\n                                React.createElement('rect', { width: '3', height: '12', x: '9' })\n                            )\n                        )\n                    ) : null\n                ),\n                React.createElement(\n                    'div',\n                    { id: 'currentScene' },\n                    React.createElement(\n                        'div',\n                        { className: 'slide', style: {\n                                'margin-left': '-' + this.state.pixel + 'px',\n                                '-webkit-transition': 'all 0.3s ease-in-out',\n                                '-moz-transition': 'all 0.3s ease-in-out',\n                                '-o-transition': 'all 0.3s ease-in-out',\n                                'transition': 'all 0.3s ease-in-out'\n                            } },\n                        this.populateCarousel('hello')\n                    )\n                ),\n                React.createElement(\n                    'div',\n                    { className: 'right' },\n                    this.state.count === 1 || this.state.count === 2 ? React.createElement(\n                        'a',\n                        { href: '#', onClick: this.movingRight.bind(this) },\n                        ' ',\n                        React.createElement(\n                            'svg',\n                            { width: '11', height: '17', viewBox: '0 0 11 17' },\n                            React.createElement(\n                                'g',\n                                { 'fill-rule': 'evenodd', transform: 'rotate(45 1.243 3)' },\n                                React.createElement('rect', { width: '12', height: '3' }),\n                                React.createElement('rect', { width: '3', height: '12', x: '9' })\n                            )\n                        )\n                    ) : null\n                )\n            );\n        }\n    }]);\n\n    return StockList;\n}(React.Component);\n\nexports.default = StockList;\n\n\nfunction populateCarousel(string) {\n    var carousel = [];\n\n    for (var i = 1; i <= 12; i++) {\n        carousel.push(React.createElement(\n            'div',\n            { className: 'stocks' },\n            React.createElement(_stock2.default, null),\n            i + string\n        ));\n    }\n\n    return carousel;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3RvY2tMaXN0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3RvY2tMaXN0LmpzeD8zNDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9jayBmcm9tICcuL3N0b2NrLmpzeCc7XG5cbmNsYXNzIFN0b2NrTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGl4ZWw6IDAsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wdWxhdGVDYXJvdXNlbChzdHJpbmcpIHtcbiAgICAgICAgdmFyIGNhcm91c2VsID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgICAgICAgICAgY2Fyb3VzZWwucHVzaCg8ZGl2IGNsYXNzTmFtZT0nc3RvY2tzJz48U3RvY2sgLz57aSArIHN0cmluZ308L2Rpdj4pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBjYXJvdXNlbDtcbiAgICB9XG5cbiAgICBtb3ZpbmdSaWdodCgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLnBpeGVsO1xuICAgICAgICBjdXJyZW50ICs9IDM1MDsgXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwaXhlbDogY3VycmVudCxcbiAgICAgICAgICAgIGNvdW50IDogdGhpcy5zdGF0ZS5jb3VudCArIDFcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZpbmdMZWZ0KCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUucGl4ZWw7XG4gICAgICAgIGN1cnJlbnQgLT0gMzUwOyBcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBpeGVsOiBjdXJyZW50LFxuICAgICAgICAgICAgY291bnQgOiB0aGlzLnN0YXRlLmNvdW50IC0gMVxuICAgICAgICB9KVxuICAgIFxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2Nhcm91c2VsJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0Jz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvdW50ID09PSAyIHx8IHRoaXMuc3RhdGUuY291bnQgPT09IDMgPyA8YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLm1vdmluZ0xlZnQuYmluZCh0aGlzKX0+IDxzdmcgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxMSAxN1wiPjxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgMS4yNDMgMylcIj48cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiM1wiPjwvcmVjdD48cmVjdCB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIxMlwiIHg9XCI5XCI+PC9yZWN0PjwvZz48L3N2Zz5cbiAgICAgICAgICAgIDwvYT4gOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nY3VycmVudFNjZW5lJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZScgc3R5bGU9IHt7XG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOiBgLSR7dGhpcy5zdGF0ZS5waXhlbH1weGAsXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgICctbW96LXRyYW5zaXRpb24nOidhbGwgMC4zcyBlYXNlLWluLW91dCcsXG4gICAgICAgICAgICAnLW8tdHJhbnNpdGlvbic6J2FsbCAwLjNzIGVhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzonYWxsIDAuM3MgZWFzZS1pbi1vdXQnLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3RoaXMucG9wdWxhdGVDYXJvdXNlbCgnaGVsbG8nKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY291bnQgPT09IDEgfHwgdGhpcy5zdGF0ZS5jb3VudCA9PT0gMiA/IDxhIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMubW92aW5nUmlnaHQuYmluZCh0aGlzKX0+IDxzdmcgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxMSAxN1wiPjxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgMS4yNDMgMylcIj48cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiM1wiPjwvcmVjdD48cmVjdCB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIxMlwiIHg9XCI5XCI+PC9yZWN0PjwvZz48L3N2Zz5cbiAgICAgICAgICAgIDwvYT4gOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b2NrTGlzdDsgXG5cbmZ1bmN0aW9uIHBvcHVsYXRlQ2Fyb3VzZWwoc3RyaW5nKSB7XG4gICAgdmFyIGNhcm91c2VsID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICAgIGNhcm91c2VsLnB1c2goPGRpdiBjbGFzc05hbWU9J3N0b2Nrcyc+PFN0b2NrIC8+e2kgKyBzdHJpbmd9PC9kaXY+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2Fyb3VzZWw7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUEE7QUFEQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBaEJBO0FBd0JBOzs7O0FBbEVBO0FBQ0E7QUFvRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/stockList.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _stockList = __webpack_require__(/*! ./components/stockList.jsx */ \"./client/src/components/stockList.jsx\");\n\nvar _stockList2 = _interopRequireDefault(_stockList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            slideCount: 1\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'slideNext',\n        value: function slideNext() {\n            // this.setState({\n            //     slideCount: this.state.slideCount + 1\n            // })\n\n        }\n    }, {\n        key: 'slidePrev',\n        value: function slidePrev() {\n            // this.setState({\n            //     slideCount: this.state.slideCount - 1\n            // })\n\n\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                { id: 'cssCarousel' },\n                React.createElement(\n                    'div',\n                    { id: 'carouselOverflow' },\n                    React.createElement(_stockList2.default, { count: this.state.slideCount, next: this.slideNext.bind(this), prev: this.slidePrev.bind(this) })\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2luZGV4LmpzeD85MzM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9ja0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL3N0b2NrTGlzdC5qc3gnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzbGlkZUNvdW50OiAxXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2xpZGVOZXh0KCkge1xuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLy8gICAgIHNsaWRlQ291bnQ6IHRoaXMuc3RhdGUuc2xpZGVDb3VudCArIDFcbiAgICAgICAgLy8gfSlcbiAgIFxuICAgIH1cblxuICAgIHNsaWRlUHJldigpIHtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICBzbGlkZUNvdW50OiB0aGlzLnN0YXRlLnNsaWRlQ291bnQgLSAxXG4gICAgICAgIC8vIH0pXG5cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9J2Nzc0Nhcm91c2VsJz4gXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nY2Fyb3VzZWxPdmVyZmxvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxTdG9ja0xpc3QgY291bnQ9e3RoaXMuc3RhdGUuc2xpZGVDb3VudH0gbmV4dD17dGhpcy5zbGlkZU5leHQuYmluZCh0aGlzKX0gcHJldj17dGhpcy5zbGlkZVByZXYuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BOzs7O0FBaENBO0FBQ0E7QUF3Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });
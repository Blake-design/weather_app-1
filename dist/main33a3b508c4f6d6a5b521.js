/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/normal.jpg */ \"./src/img/normal.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  height: 100vh;\\n  overflow: hidden;\\n  width: 100vw;\\n  font-family: Arial, Helvetica, sans-serif;\\n  color: ivory;\\n}\\n\\n.flex-it {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  flex-wrap: wrap;\\n}\\n\\n@keyframes scrolling {\\n  0% {\\n    transform: translateX(0px);\\n  }\\n  50% {\\n    transform: translateX(-300px);\\n  }\\n  100% {\\n    transform: translateX(0px);\\n  }\\n}\\n.background {\\n  z-index: -1000;\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.background::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  background-position-y: center;\\n  box-sizing: content-box;\\n  background-size: cover;\\n  width: 200%;\\n  height: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  animation-name: scrolling;\\n  animation-duration: 60s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.weather-icon {\\n  animation-name: weather-icon;\\n  animation-duration: 5s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n\\nheader .navbar {\\n  display: flex;\\n  flex-direction: row;\\n  align-content: center;\\n  justify-content: space-between;\\n  position: fixed;\\n  height: 7vh;\\n  width: 100%;\\n  z-index: 10;\\n  background: rgba(0, 0, 0, 0.8);\\n  border-bottom: 2px solid rgba(50, 100, 150, 0.8);\\n}\\nheader .navbar h2 {\\n  color: ivory;\\n  padding: 5px;\\n}\\nheader .navbar #search-bar {\\n  padding: 5px;\\n  margin-right: auto;\\n  margin-left: 100px;\\n}\\nheader .navbar #search-bar .search-btn {\\n  border: none;\\n  background: transparent;\\n  color: white;\\n}\\nheader .navbar #search-bar .search-btn:hover {\\n  opacity: 0.9;\\n  transform: scale(1.2);\\n}\\nheader .navbar #search-bar input {\\n  text-align: center;\\n  border-radius: 10%;\\n}\\nheader .navbar #search-bar input:hover {\\n  text-align: center;\\n  border-radius: 10%;\\n  opacity: 0.95;\\n}\\nheader .navbar #favorites-btn {\\n  border: none;\\n  background: transparent;\\n}\\nheader .navbar #favorites-btn i {\\n  animation: star-spin 5s ease infinite;\\n  color: white;\\n}\\nheader .navbar #favorites-btn i:hover {\\n  color: gold;\\n}\\nheader .navbar #favorites-btn.faved i {\\n  color: gold;\\n  animation: star-spin 5s ease infinite;\\n}\\n\\n@keyframes star-spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.navbar section .hamburger {\\n  position: absolute;\\n  top: 20px;\\n  left: 10px;\\n  width: 20px;\\n  background: ivory;\\n  height: 3px;\\n  z-index: 100;\\n  transition: all 0.8s ease;\\n}\\n\\n.navbar section .hamburger::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: -8px;\\n  width: 20px;\\n  background: ivory;\\n  height: 3px;\\n  z-index: 100;\\n  transition: all 0.8s ease;\\n}\\n\\n.navbar section .hamburger::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 8px;\\n  width: 20px;\\n  background: ivory;\\n  height: 3px;\\n  z-index: 100;\\n  transition: all 0.8s ease;\\n}\\n\\n.navbar section .toggler {\\n  opacity: 0;\\n  position: absolute;\\n  z-index: 10000;\\n  height: 50px;\\n  width: 30px;\\n  top: 0px;\\n  left: 5px;\\n}\\n\\n.navbar section .toggler:checked + .hamburger::before,\\n.navbar section .toggler:checked + .hamburger::after {\\n  top: 0;\\n  transform: rotate(90deg);\\n}\\n\\n.navbar section .toggler:checked + .hamburger {\\n  transform: rotate(225deg);\\n}\\n\\n.navbar section .menu {\\n  opacity: 0;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 30vw;\\n  padding: 3vh 5%;\\n  background: rgba(0, 0, 0, 0.8);\\n  border-right: 2px solid rgba(50, 100, 150, 0.8);\\n  transform: translateX(-1000px);\\n  transition: all 0.5s ease;\\n}\\n\\n.navbar section .toggler:checked ~ .menu {\\n  opacity: 1;\\n  z-index: 10;\\n  transform: translateX(0px);\\n  transition: all 0.5s ease;\\n}\\n\\n.navbar section .menu li {\\n  list-style: none;\\n  border-bottom: 1px dotted aquamarine;\\n  padding: 5px;\\n  display: flex;\\n  vertical-align: middle;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: justify;\\n}\\n\\n.navbar section .menu li #C-F-btn {\\n  height: 5vh;\\n  width: 3rem;\\n  border: none;\\n  color: ivory;\\n  background: rgba(50, 100, 150, 0.8);\\n  border-radius: 30%;\\n  margin: auto 5%;\\n}\\n\\n.navbar section .menu li #C-F-btn:hover {\\n  opacity: 0.7;\\n}\\n\\n.navbar section .menu li .C .c-unit,\\n.navbar section .menu li .F .f-unit {\\n  display: none;\\n  height: inherit;\\n  width: inherit;\\n  border-radius: inherit;\\n  position: justify;\\n  z-index: 1000;\\n  transition: all 0.5s ease;\\n}\\n\\n.c-unit,\\n.f-unit {\\n  font-size: 1.25rem;\\n  display: none;\\n}\\n\\n.navbar section .menu li .C .c-unit {\\n  display: inherit;\\n  background: cyan;\\n}\\n\\n.navbar section .menu li .F .f-unit {\\n  display: inherit;\\n  background: crimson;\\n}\\n\\n.navbar section .menu li#learning-info ul li {\\n  text-align: justify;\\n  font-size: 0.75rem;\\n  width: 20vw;\\n  padding: 5px;\\n  border: none;\\n}\\n\\n.navbar section .menu li#learning-info ul li:hover {\\n  color: aquamarine;\\n  opacity: 0.8;\\n  cursor: pointer;\\n}\\n\\n.navbar section .menu li#learning-info ul li .fa-chevron-right {\\n  margin-left: auto;\\n}\\n\\n.navbar section .menu li ul#favorites-menu li {\\n  font-size: 0.75rem;\\n  width: 20vw;\\n  border-bottom: none;\\n  cursor: pointer;\\n}\\n\\n.navbar section .menu li ul#favorites-menu li p {\\n  color: ivory;\\n}\\n\\n.navbar section .menu li ul#favorites-menu li p:hover {\\n  opacity: 0.7;\\n  color: aquamarine;\\n}\\n\\n.navbar section .menu li ul#favorites-menu li i {\\n  color: aquamarine;\\n  margin-left: auto;\\n}\\n\\n.navbar section .menu li ul#favorites-menu li i:hover {\\n  color: red;\\n  transform: scale(1.3);\\n}\\n\\n#info-square {\\n  display: block;\\n  position: absolute;\\n  width: 40%;\\n  height: 40%;\\n  top: 30%;\\n  left: 30%;\\n  z-index: 1000;\\n  background: rgba(0, 0, 0, 0.8);\\n  padding: 4%;\\n  font-size: 0.75rem;\\n  opacity: 1;\\n  transform: scale(0);\\n  transition: all 0.6s ease-in-out;\\n}\\n\\n#info-square.vis {\\n  display: block;\\n  opacity: 1;\\n  transform: scale(1);\\n  border-radius: 20%;\\n  transition: all 0.6s ease-in-out;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://myportfolio/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://myportfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://myportfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://myportfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://myportfolio/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://myportfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://myportfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://myportfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://myportfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://myportfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://myportfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/api_keys.js":
/*!*********************************!*\
  !*** ./src/scripts/api_keys.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REVGEO_API_KEY\": () => (/* binding */ REVGEO_API_KEY),\n/* harmony export */   \"WEATHER_API_KEY\": () => (/* binding */ WEATHER_API_KEY)\n/* harmony export */ });\nconst WEATHER_API_KEY = 'a609c15503594caf96b28d360952f491';\r\nconst REVGEO_API_KEY = 'fc5bef22a20647438f60b2a29a04d8b5';\r\n\n\n//# sourceURL=webpack://myportfolio/./src/scripts/api_keys.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../sass/card_arrows.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _models_get_forcast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/get_forcast.js */ \"./src/scripts/models/get_forcast.js\");\n/* harmony import */ var _models_parse_Info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/parse_Info.js */ \"./src/scripts/models/parse_Info.js\");\n/* harmony import */ var _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/card_manager.js */ \"./src/scripts/views/card_manager.js\");\n/* harmony import */ var _models_manage_stroage_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/manage_stroage_model.js */ \"./src/scripts/models/manage_stroage_model.js\");\n/* harmony import */ var _views_manage_storage_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/manage_storage_view.js */ \"./src/scripts/views/manage_storage_view.js\");\n/* harmony import */ var _views_C_F_btn_views_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/C_F_btn_views.js */ \"./src/scripts/views/C_F_btn_views.js\");\n/* harmony import */ var _views_side_arrows_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/side_arrows.js */ \"./src/scripts/views/side_arrows.js\");\n/* harmony import */ var _views_dom_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/dom.js */ \"./src/scripts/views/dom.js\");\n\n\n\n//Location controller could become\n//Params = default or location string\n//checks for string to convert through geolocation/if false useses default location\n//runs default or geolocation through api to get data\n//parsers activate on it\n//information is extracted from parsed data\n//the appropriate card type is selected and generated\n\n\n\n\n\n\n\n\n\n\n\n//connects to the api, retrives the data then parses it.\nconst locationController = async (locationLatLong, mesType) => {\n  //targets a location with lat and long to obtain weather data from the api\n\n  if (locationLatLong) {\n    locationLatLong = _models_parse_Info_js__WEBPACK_IMPORTED_MODULE_3__.convertToUsableDataForReverseGeoCoding(locationLatLong);\n    locationLatLong = await _models_get_forcast_js__WEBPACK_IMPORTED_MODULE_2__.reverseGeocode(...locationLatLong);\n\n  } else {\n    locationLatLong = await _models_get_forcast_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentLatLon();\n  }\n\n\n  const { lat, long } = locationLatLong;\n\n  //returns json from the weather api using lat and long as its target\n  const data = await _models_get_forcast_js__WEBPACK_IMPORTED_MODULE_2__.getData(lat, long, mesType);\n  //obtains all values held in the cards which will be appended to the dom\n  const weatherData = _models_parse_Info_js__WEBPACK_IMPORTED_MODULE_3__.parseData(data);\n\n  //the below values are located outside of the daily values in the returned data from the api\n  //which is why they are destructured in this way\n  const { state_code, city_name, country_code } = data;\n\n  //parses the data from the weather api and constructs html elements fot the DOM\n  const cards = weatherData.map((measurments, index) => {\n    return _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.createMainCards(measurments, mesType, index);\n  });\n  //plugs data into cards then creates and appends them to the DOM\n  _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.changeTitle(state_code, city_name, country_code);\n  _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.createCard(cards, 'main');\n};\n\n\n\nconst favoritesListController = () => {\n\n  const populate = () => {\n    const favoritesListDOM = '#favorites-menu';\n    const favoritesListData = _models_manage_stroage_model_js__WEBPACK_IMPORTED_MODULE_5__.getFavorites();\n    const favoritesCards = _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.createFavoriteCard(favoritesListData);\n    _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.createCard(favoritesCards, favoritesListDOM);\n  }\n\n  const checkIfFavorite = () => {\n    if (_models_manage_stroage_model_js__WEBPACK_IMPORTED_MODULE_5__.checkForFavoritesOnLoad() === true) return _views_manage_storage_view_js__WEBPACK_IMPORTED_MODULE_6__.toggleFavoriteStar('faved');\n    return _views_manage_storage_view_js__WEBPACK_IMPORTED_MODULE_6__.toggleFavoriteStar('unfaved');\n  }\n\n  return {\n    populate,\n    checkIfFavorite,\n  }\n}\n\nconst addEventListeners = () => {\n  //search button\n  $(_views_dom_js__WEBPACK_IMPORTED_MODULE_9__.dom.searchBtn).on('click', async () => {\n    const location = $('.search').val();\n    console.log(location);\n    const mesToggle = (0,_views_C_F_btn_views_js__WEBPACK_IMPORTED_MODULE_7__.toggleCelcFaren)();\n    (0,_views_dom_js__WEBPACK_IMPORTED_MODULE_9__.clearSearchBar)();\n    return activate(location, mesToggle);\n  });\n  //page left\n  $(_views_dom_js__WEBPACK_IMPORTED_MODULE_9__.dom.leftBtn).on('click', () => {\n    const page = (0,_views_side_arrows_js__WEBPACK_IMPORTED_MODULE_8__.changeArrows)('left');\n    return _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.createCard(page, 'main', false);\n  });\n  //page right\n  $(_views_dom_js__WEBPACK_IMPORTED_MODULE_9__.dom.rightBtn).on('click', () => {\n    const page = (0,_views_side_arrows_js__WEBPACK_IMPORTED_MODULE_8__.changeArrows)('right');\n    return _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.createCard(page, 'main', false);\n  });\n  $(_views_dom_js__WEBPACK_IMPORTED_MODULE_9__.dom.cfBtn).on('click', async () => {\n    const mesToggle = (0,_views_C_F_btn_views_js__WEBPACK_IMPORTED_MODULE_7__.toggleCelcFaren)(true);\n    const location = $('#location-name').text();\n    return activate(location, mesToggle);\n  });\n  //To close leftover elements of the sidebar\n  $(_views_dom_js__WEBPACK_IMPORTED_MODULE_9__.dom.toggler).on('click', () => _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.getInfoCard('remove'));\n  //give funtionality to the favorite button\n  $(favoritesBtn).on('click', () => {\n    _models_manage_stroage_model_js__WEBPACK_IMPORTED_MODULE_5__.manageFavorites();\n    _views_manage_storage_view_js__WEBPACK_IMPORTED_MODULE_6__.toggleFavoriteStar();\n    favoritesListController().populate();\n    addDynamicEventListeners();\n  });\n\n\n  //info-cards in menu\n  const sideBarInfoList = ['humidity-info', \"pressure-info\", \"dewpoint-info\", \"visability-info\", \"uv-info\"];\n  sideBarInfoList.forEach(element => {\n    return $(`#${element}`).on('click', () => {\n      const infoCard = _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.getInfoCard(element);\n      return _views_card_manager_js__WEBPACK_IMPORTED_MODULE_4__.createCard(infoCard, \"#info-square\");\n    });\n  });\n};\n\nconst addDynamicEventListeners = () => {\n  //Makes favorites in sidebar functional\n  $('.favorite').on('click', async (el) => {\n    const name = _models_parse_Info_js__WEBPACK_IMPORTED_MODULE_3__.getFavoritesLocationFromText(el.target);\n    activate(name);\n  });\n};\n\n//initiates the api and cards //the default value of mesType = 'I' is to default it to imperial measurements\nconst activate = async (latLong, mesType = 'I') => {\n  const data = await locationController(latLong, mesType);\n  favoritesListController().populate();\n  favoritesListController().checkIfFavorite();\n  addDynamicEventListeners();\n};\n\nactivate();\naddEventListeners();\n\n//# sourceURL=webpack://myportfolio/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/models/get_forcast.js":
/*!*******************************************!*\
  !*** ./src/scripts/models/get_forcast.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentLatLon\": () => (/* binding */ getCurrentLatLon),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"reverseGeocode\": () => (/* binding */ reverseGeocode)\n/* harmony export */ });\n/* harmony import */ var _api_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././api_keys.js */ \"./src/scripts/api_keys.js\");\n\n\n//uses the openweathermap api to reverse geocode a location entered into the searchbar in the DOM\n//needs the api key hidden as it is currently exposed.\n//only city is NEEDED to get a response but the state and country peramiters will give\n//the reverseGeocode function more accuracy\nconst reverseGeocode = async (city, state = '', country = '') => {\n  const limit = 5;\n  const key = _api_keys_js__WEBPACK_IMPORTED_MODULE_0__.REVGEO_API_KEY;\n  //error handling for certain countries that do not return positive on search due to the api's data;\n  //looking for bet[ter fix;\n  if (/\\d\\d/.test(state)) state = '';\n  console.log(`City:${city}`, `State:${state}`, `Country:${country}`);\n  const options = {\n    method: 'GET',\n    headers: {\n      'Content-Security-Policy': 'upgrade-insecure-request;',\n    },\n  };\n  const data = await fetch(\n    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${key}`\n  );\n\n  const json = await data.json();\n  console.log(json);\n  const { lat, lon } = json[0];\n  return { lat, long: lon };\n};\n\n//gets lat and long\nfunction getCurrentLatLon() {\n  // mutate position depending on requirements to give proper city\n  try {\n    return new Promise((res, rej) => {\n      return navigator.geolocation['getCurrentPosition'](function (\n        position,\n        err\n      ) {\n        let lat = position.coords.latitude;\n        let long = position.coords.longitude;\n        res({\n          lat: lat,\n          long: long,\n        });\n      });\n    });\n  } catch (err) {\n    errorMessage('getLatLon', err);\n  }\n}\n\n//!!obtains data from the weatherbit apit utilizing lat and long obtained from\n//!!ither the js geolocation api or the reverseGeocode (openweathermapapi) function\n//!!has option to add unit to change to metric. Default is imperial.\n//\nconst getData = async function (lat, long, unit) {\n  try {\n    console.log(lat, long);\n    const key = _api_keys_js__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API_KEY;\n    const data = await fetch(\n      `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${lat}&lon=${long}&units=${unit}&days=14`\n    );\n\n    const json = await data.json();\n    //console.log(json);\n    return json;\n  } catch (err) {\n    errorMessage('getData', err);\n  }\n};\n\nconst errorMessage = (fnName, err) => {\n  console.log(`error in \"${fnName}\" function\\b\n        ERROR: ${err}`);\n};\n\n\n//# sourceURL=webpack://myportfolio/./src/scripts/models/get_forcast.js?");

/***/ }),

/***/ "./src/scripts/models/manage_stroage_model.js":
/*!****************************************************!*\
  !*** ./src/scripts/models/manage_stroage_model.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkForFavoritesOnLoad\": () => (/* binding */ checkForFavoritesOnLoad),\n/* harmony export */   \"getFavorites\": () => (/* binding */ getFavorites),\n/* harmony export */   \"manageFavorites\": () => (/* binding */ manageFavorites),\n/* harmony export */   \"setOrGetDefaultLocation\": () => (/* binding */ setOrGetDefaultLocation)\n/* harmony export */ });\nconst getFavorites = () => {\n    if (!localStorage.getItem('favorites')) return;\n    const favorites = JSON.parse(localStorage.getItem('favorites'));\n    return favorites\n}\n\n\nconst checkForFavoritesOnLoad = () => {\n    if (!localStorage.getItem('favorites')) return;\n    const favorites = JSON.parse(localStorage.getItem('favorites'));\n    const favoriteName = $('#location-name').text();\n    if (favorites.indexOf(favoriteName) == true ||\n        favorites.indexOf(favoriteName) == 0) return true;\n}\n\nconst manageFavorites = () => {\n\n    //create the favorites array;\n    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([]))\n\n    const favoriteToAdd = $('#location-name').text();\n\n    let favorites = JSON.parse(localStorage.getItem('favorites'));\n    //checks to see if duplicates of the favorite to add are present in the localstorage favorites array\n    //this will remove any duplicates, which also causes the favorites button to become toggleable;\n    const filterFavoritesForDuplicates = favorites.filter(fav => {\n        if (fav !== favoriteToAdd) return true;\n    });\n    //blelow will cause the function to return if duplicates are found in favorites\n    if (filterFavoritesForDuplicates.length < favorites.length) {\n        favorites = JSON.stringify(filterFavoritesForDuplicates);\n        return localStorage.setItem('favorites', favorites);\n    };\n    //check to make sure not too many oitems are in favorites\n    //if (favorites.length >= 5) return alert('You Cannot Have More then 5 Favorites!');\n    if (favorites.length >= 5) return alert(\"You cannot have more then 5 favorites!\");\n    //adds to and sets the favorite array to local storage;\n    favorites.push(favoriteToAdd);\n    favorites = JSON.stringify(favorites);\n    return localStorage.setItem('favorites', favorites);\n\n}\n\nconst setOrGetDefaultLocation = (setOrGet) => {\n    if (setOrGet !== 'set' && setOrGet !== 'get') return alert('error');\n\n    //get location from the current h2 element.\n    const locationFromTitle = $('#location-name').text();\n\n    if (setOrGet == 'get') {\n        let currentDefault = localStorage.getItem('defaultLocation');\n        currentDefault = getJSON(currentDefault);\n        return currentDefault;\n    }\n    return localStorage.setItem('defaultLocation', locationFromTitle);\n};\n\n\n\n//# sourceURL=webpack://myportfolio/./src/scripts/models/manage_stroage_model.js?");

/***/ }),

/***/ "./src/scripts/models/parse_Info.js":
/*!******************************************!*\
  !*** ./src/scripts/models/parse_Info.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertToUsableDataForReverseGeoCoding\": () => (/* binding */ convertToUsableDataForReverseGeoCoding),\n/* harmony export */   \"getFavoritesLocationFromText\": () => (/* binding */ getFavoritesLocationFromText),\n/* harmony export */   \"getMonth\": () => (/* binding */ getMonth),\n/* harmony export */   \"parseData\": () => (/* binding */ parseData)\n/* harmony export */ });\n//parses the data attribute of the API and parses all values used in cards then places them in an array of arrays\n//for each day.\nconst parseData = (data) => {\n  data = data.data.map((el) => {\n    let {\n      datetime,\n      high_temp,\n      low_temp,\n      pop,\n      pres,\n      rh,\n      weather,\n      wind_spd,\n      wind_cdir,\n      dewpt,\n      vis,\n      uv,\n    } = el;\n    let { icon, description } = weather;\n\n    //rounds some values returned from api to avoid decimals;\n    low_temp = Math.round(low_temp);\n    high_temp = Math.round(high_temp);\n    dewpt = Math.round(dewpt);\n    wind_spd = Math.round(wind_spd);\n\n    //converts the datetime to a day of the week, date, month ex: Monday, the first, April\n    const regExpForMonthAndDay = /(?<=-)(\\d\\d){1}/g;\n    let monthAndDay = datetime.match(regExpForMonthAndDay);\n    const month = getMonthString(monthAndDay[0]);\n    const day = monthAndDay[1];\n    let weekday = createCalWeek(month, day);\n    weekday = dayOfWeek(weekday);\n    //\n    return {\n      weekday, //1\n      day, //2\n      month, //3\n      high_temp, //4\n      low_temp, //5\n      pop, //6\n      pres, //7\n      rh, //8\n      wind_spd, //9\n      wind_cdir, //10\n      dewpt, //11\n      vis, //12\n      uv, //13\n      icon, //14\n      description, //15\n    };\n  });\n\n  return data;\n};\n\nconst getMonth = function (data) {\n  data = data.data.map((date) => {\n    date = date.datetime.match(/-\\d\\d-/)[0];\n    date = date.match(/\\d\\d/)[0];\n    date = getMonthString(date);\n\n    return el;\n  });\n  return data;\n};\n\n//Favorites Funtions\nconst getFavoritesLocationFromText = (favorite) => {\n  return $(favorite).text();\n}\n\n//Utility Functions\nconst createCalWeek = function (month, day) {\n  let date = new Date();\n\n  const year = date.getFullYear();\n  //const month = date.getMonth() + 1;\n  //Passees values to get the 0-6 numberical value of the day of the week this specified date is on.\n  date = new Date(`${month} ${day}, ${year} 07:00:00`);\n  date = date.getDay();\n  return date;\n};\n\nconst dayOfWeek = (day) => {\n  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];\n  return days[day] ?? 'Sun';\n};\n\nconst getMonthString = (month) => {\n  month = (month * 1) - 1;\n  const months = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August',\n    'September', 'October', 'November', 'December'];\n  return months[month];\n};\n\nconst convertToUsableDataForReverseGeoCoding = (loc) => {\n  //regexp parses the location string given by the api to seperate city, state, country into an array;\n  const regExpForLoc = /(\\w+(\\W\\w+)?(\\W\\w+)?|(\\w+(\\s\\w+)?(\\s\\w+)?))/gi;\n  loc = loc.match(regExpForLoc);\n  //this returns your current location if the searchbar has an empty address\n  if (!loc || loc[0] === '' || loc[0] == null) {\n    return false;\n  }\n  return loc;\n};\n\n//# sourceURL=webpack://myportfolio/./src/scripts/models/parse_Info.js?");

/***/ }),

/***/ "./src/scripts/views/C_F_btn_views.js":
/*!********************************************!*\
  !*** ./src/scripts/views/C_F_btn_views.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleCelcFaren\": () => (/* binding */ toggleCelcFaren)\n/* harmony export */ });\n//checks the current status of the DOM's measurement button. If toggle is true it changes C - F;\n//if it is false it returns the current value of the button. C or F;\nconst toggleCelcFaren = (toggle) => {\n  const celc = $('#C-F-btn').hasClass('C');\n  const far = $('#C-F-btn').hasClass('F');\n  const btn = $('#C-F-btn');\n\n  if (!toggle) {\n    if (celc) return 'C';\n    if (far) return 'F';\n  }\n\n  //if toggle is true, C and F are toggled below and the appropriate value is returned.\n  btn.toggleClass('C');\n  btn.toggleClass('F');\n  if (celc) return 'F';\n  if (far) return 'C';\n};\n\n//# sourceURL=webpack://myportfolio/./src/scripts/views/C_F_btn_views.js?");

/***/ }),

/***/ "./src/scripts/views/card_manager.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/card_manager.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTitle\": () => (/* binding */ changeTitle),\n/* harmony export */   \"createCard\": () => (/* binding */ createCard),\n/* harmony export */   \"createFavoriteCard\": () => (/* binding */ createFavoriteCard),\n/* harmony export */   \"createMainCards\": () => (/* binding */ createMainCards),\n/* harmony export */   \"getInfoCard\": () => (/* binding */ getInfoCard)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/scripts/views/dom.js\");\n\n\nconst createMainCards = (data, mes, cardArrIndex) => {\n  const {\n    weekday,\n    day,\n    month,\n    high_temp,\n    low_temp,\n    pop,\n    pres,\n    rh,\n    wind_spd,\n    wind_cdir,\n    dewpt,\n    vis,\n    uv,\n    icon,\n    description,\n  } = data;\n  let template = $('#main-card-template').html();\n  //MEASUREMENT REPLACEMENT\n  const imperial = {\n    temp: 'F',\n    wind: 'Mph',\n    dewpt: 'F',\n    vis: 'Mi',\n  };\n\n  const metric = {\n    temp: 'C',\n    wind: 'Ms',\n    dewpt: 'C',\n    vis: 'Km',\n  };\n\n  const replacer = (mi) => {\n    template = template.replace(/%TEMPMES%/g, mi.temp);\n    template = template.replace(/%WINDMES%/g, mi.wind);\n    template = template.replace(/%DEWPOINTMES%/g, mi.dewpt);\n    template = template.replace(/%VISMES%/g, mi.vis);\n  };\n  if (mes === 'C' || mes === 'M' || mes == false) replacer(metric);\n  if (mes === 'F' || mes === 'I') replacer(imperial);\n  //\n\n  cardArrIndex <= 4\n    ? template = template.replace(/%VISABILITYCLASS%/g, 'visable') :\n    template = template.replace(/%VISABILITYCLASS%/g, '');\n\n  template = template.replace(/%DAYOFWEEK%/g, weekday);\n  template = template.replace(/%DAY%/g, day);\n  template = template.replace(/%MONTH%/g, month);\n  template = template.replace(/%HIGH%/g, high_temp);\n  template = template.replace(/%LOW%/g, low_temp);\n  template = template.replace(/%PRECIP%/g, pop);\n  template = template.replace(/%PRESSURE%/g, pres);\n  template = template.replace(/%HUMIDITY%/g, rh);\n  template = template.replace(/%WIND_SPD%/g, wind_spd);\n  template = template.replace(/%WIND_DIR%/g, wind_cdir);\n  template = template.replace(/%DEWPOINT%/g, dewpt);\n  template = template.replace(/%VISABILITY%/, vis);\n  template = template.replace(/%UV%/g, uv);\n  template = template.replace(/%ICON%/g, icon);\n  template = template.replace(/%DESC%/g, description);\n\n  return template;\n};\n\nconst getInfoCard = (type = null) => {\n  if (type == null) return;\n  let template = $('#info-square-template').html();\n\n  //accesses the text object using the sidebar list text as a key.\n  const text = _dom_js__WEBPACK_IMPORTED_MODULE_0__.domInfoText[type];\n\n  if (type == 'remove') return $('#info-square').removeClass('vis');\n  $('#info-square').addClass('vis');\n\n  template = template.replace(/%INFOSQUARE%/, text);\n  return [template];\n};\n\nconst createFavoriteCard = (fav) => {\n  let template = $('#favorites-template').html();\n  template = fav.map(el => {\n    return template.replace(/%FAVORITES%/, el)\n  })\n  return template;\n}\n\n//creates cards that append to the dom\nconst createCard = (cards, type) => {\n  $(type).children().remove();\n  cards.forEach((el) => {\n    $(type).append(el);\n  });\n};\n\n//changes text in navbar upon a search request\nconst changeTitle = (state, city, country) => {\n  const text = `${city}, ${state} - ${country}`;\n  return $('#location-name').text(text);\n};\n\n\n//# sourceURL=webpack://myportfolio/./src/scripts/views/card_manager.js?");

/***/ }),

/***/ "./src/scripts/views/dom.js":
/*!**********************************!*\
  !*** ./src/scripts/views/dom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearSearchBar\": () => (/* binding */ clearSearchBar),\n/* harmony export */   \"dom\": () => (/* binding */ dom),\n/* harmony export */   \"domInfoText\": () => (/* binding */ domInfoText)\n/* harmony export */ });\n\n//likely decomissioning\nconst dom = {\n  cfBtn: '#C-F',\n  leftBtn: '#left',\n  rightBtn: '#right',\n  searchBtn: '#search-btn',\n  locationName: '#location-name',\n  toggler: '.toggler',\n  favoritesBtn: '#favorites-btn'\n};\n\nconst clearSearchBar = () => {\n  const val = $('.search').val('');\n}\n\n\n//changing to json\nconst domInfoText = {\n  'humidity-info': 'Humidity is a measure of the amount of water vapor in the air. Relative humidity measures the amount of water in the air in relation to the maximum amount of water vapor (moisture). The higher the temperature, the more water vapor the air can hold. Relative humidity is what your morning weather reporter would refer to.',\n  'pressure-info': `Atmospheric pressure refers to the weight of the air. High pressure means the air is heavy, and it sinks. Sinking air makes the environment very stable. Under high pressure you can generally expect sunny skies and calm weather. Low pressure is what causes active weather.`,\n  'dewpoint-info': `The atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form.`,\n  'visability-info': `Visibility is a measure of the horizontal opacity of the atmosphere at the point of observation and is expressed in terms of the horizontal distance at which a person should be able to see and identify`,\n  'uv-info': `The UV Index represents the amount of skin-damaging UV radiation reaching the earth's surface at any instant of time. The basic UV Index forecast is given for solar noon — the sun's highest point in the sky and the time of the highest fluctuation in UV radiation (under clear sky conditions).`,\n};\n\n//# sourceURL=webpack://myportfolio/./src/scripts/views/dom.js?");

/***/ }),

/***/ "./src/scripts/views/manage_storage_view.js":
/*!**************************************************!*\
  !*** ./src/scripts/views/manage_storage_view.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleFavoriteStar\": () => (/* binding */ toggleFavoriteStar)\n/* harmony export */ });\nconst toggleFavoriteStar = (isFaved) => {\n    if (isFaved == 'faved') return $('#favorites-btn').addClass('faved');\n    if (isFaved == 'unfaved') return $('#favorites-btn').removeClass('faved');\n    return $('#favorites-btn').toggleClass('faved');\n};\n\n//# sourceURL=webpack://myportfolio/./src/scripts/views/manage_storage_view.js?");

/***/ }),

/***/ "./src/scripts/views/side_arrows.js":
/*!******************************************!*\
  !*** ./src/scripts/views/side_arrows.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeArrows\": () => (/* binding */ changeArrows)\n/* harmony export */ });\nconst changeArrows = (dir) => {\n  //!!!!NOTE:$()Jquery not working with the below command, look into why\n  let cards = $('main').children();\n  //spread used to convert NodeList into an Array;\n  cards = [...cards];\n\n  const cardVisabilityToggle = () => {\n\n    cards.map((node, index) => {\n      if (index < 5) return node.classList.add('visable');\n      if (index >= 5) return node.classList.remove('visable');\n    })\n  }\n\n  if (dir == 'right') {\n    cards.push(cards[0]);\n    cards.shift();\n    cardVisabilityToggle();\n  }\n  if (dir == 'left') {\n    cards.unshift(cards[cards.length - 1]);\n    cards.pop();\n    cardVisabilityToggle();\n  }\n  return cards;\n};\n\n\n//# sourceURL=webpack://myportfolio/./src/scripts/views/side_arrows.js?");

/***/ }),

/***/ "./src/img/normal.jpg":
/*!****************************!*\
  !*** ./src/img/normal.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6fd789a2b5505e980cf7.jpg\";\n\n//# sourceURL=webpack://myportfolio/./src/img/normal.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    font-family: \"Sixtyfour\", sans-serif;\n}\nbody{\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(129, 129, 129);\n}\nbutton{\n    width: 100px;\n    height: 40px;\n    margin-top: 15px;\n    border: 0;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n}\n#start-btn{\n    background-color: rgb(183, 255, 183);\n    transition: background-color 0.2s ease-in-out;\n}\n#start-btn:hover{\n    background-color: rgb(69, 255, 69);\n}\n#reset{\n    background-color: rgb(255, 216, 216);\n    transition: background-color 0.2s ease-in-out;\n}\n#reset:hover{\n    background-color: rgb(255, 67, 67);\n}\n.flex-container{\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n.container{\n    text-align: center;\n}\n.game-board{\n    background-color: white;\n    width: 500px;\n    height: 500px;\n    border: 1px solid rgb(192, 192, 192);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n    transition: background-color 0.1s ease-in;\n}\n.box{\n    width: 48px;\n    height: 48px;\n    border: 1px solid rgb(168, 168, 168);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n}\n.box:hover{\n    background-color: rgb(226, 226, 226);\n}\n\n/* modal */\n.modal{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(168, 168, 168);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.hide{\n    display: none;\n}\n\n/* ships info */\n#enemy-ship-info {\n    margin-top: 10px;\n}\n#enemy-ship-info > div{\n    display: flex;\n}\n#player-ship-info {\n    margin-top: 10px;\n}\n#player-ship-info > div{\n    display: flex;\n    justify-content: end;\n}\n.ships{\n    background-color: #fff;\n    height: 25px;\n    width: 25px;\n    border: 1px solid black;\n    margin-top: 5px;\n    margin-left: 5px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM/dom.js":
/*!************************!*\
  !*** ./src/DOM/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/ship */ \"./src/class/ship.js\");\n/* harmony import */ var _class_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/player */ \"./src/class/player.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const user = new _class_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    const bot = new _class_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n// player ships\n    const carrier = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n    const battleship = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n    const destroyer = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const submarine = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const patrolBoat = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n// bot ships\n    const botCarrier = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n    const botBattleship = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n    const botDestroyer = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const botSubmarine = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const botPatrolBoat = new _class_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n\n    placeShip(bot, [\n        carrier,\n        battleship,\n        destroyer,\n        submarine,\n        patrolBoat\n    ]);\n    placeShip(user, [\n        botCarrier,\n        botBattleship,\n        botDestroyer,\n        botSubmarine,\n        botPatrolBoat\n    ]);\n\n    opponentShipInfo(user.gameboard.ships);\n    playerShipInfo(bot.gameboard.ships);\n    \n\n    const enemyBoard = document.querySelector('#enemy-board');\n    const playerBoard = document.querySelector('#player-board');\n    playerBoard.style.backgroundColor = 'rgb(226, 226, 226)';\n    enemyBoard.style.backgroundColor = 'rgb(255, 255, 255)';\n    for(let row = 0; row < 10; row++){\n        for(let col = 0; col < 10; col++){\n            const box = document.createElement('div');\n            box.classList.add('box');\n            box.id = `${row} ${col}`;\n\n            box.addEventListener('click', () => {\n                enemyBoard.style.backgroundColor = 'rgb(226, 226, 226)';\n                playerBoard.style.backgroundColor = 'rgb(255, 255, 255)';\n                const id = box.id;\n                const arrID = id.split(' ');\n                const x = arrID[0];\n                const y = arrID[1];\n                const result = bot.attack(user.gameboard, x, y);\n                if(result === false) return;\n                if(result === 'hit'){\n                    box.style.color = 'red';\n                    box.textContent = 'X';\n                    opponentShipInfo(user.gameboard.ships);\n                }else{\n                    box.textContent = '.';\n                }\n                if(user.gameboard.allShipsSunk()){\n                    modal('You won', 'You destroyed opponent\\'s ships');\n                }\n                setTimeout( () => {\n                    playerBoard.style.backgroundColor = 'rgb(226, 226, 226)';\n                    enemyBoard.style.backgroundColor = 'rgb(255, 255, 255)';\n                    while(true){\n                        let row = generateRandomNumber();\n                        let col = generateRandomNumber();\n                        const res = user.attack(bot.gameboard, row, col);\n                        if( res ){\n                            row = row + 10;\n                            col = col + 10;\n                            let id = String(row) +'-'+ String(col);\n                            const element = document.getElementById(id);\n                            if(res === 'hit'){\n                                element.style.color = 'red';\n                                element.textContent = 'X';\n                                playerShipInfo(bot.gameboard.ships);\n                            }else{\n                                element.textContent = '.';\n                            }\n                            if(bot.gameboard.allShipsSunk()){\n                                modal('You lost', 'Opponent destroyed all your ships')\n                            }\n                            break;\n                        }\n                    }\n                }, 500)\n            });\n\n            enemyBoard.appendChild(box);\n\n            const box1 = document.createElement('div');\n            box1.classList.add('box');\n            box1.id = `${row + 10}-${col + 10}`;\n            if(bot.gameboard.board[row][col]) box1.textContent = 'x';\n            playerBoard.appendChild(box1);\n        }\n    }\n});\n\nconst placeShip = (board, ships) => {\n    ships.forEach(ship => {\n        while(true){\n            const x = generateRandomNumber();\n            const y = generateRandomNumber();\n            const isVertical = generateBoolean();\n            if( board.gameboard.placeShip(ship, x, y, isVertical) ){\n                board.gameboard.placeShip(ship, x, y, isVertical)\n                break;\n            }\n        }\n    });\n}\n\nconst generateRandomNumber = () => {\n    return Math.floor(Math.random() * 10);\n}\nconst generateBoolean = () => {\n    return Math.floor(Math.random() * 2);\n}\nconst modal = (winner, sub) => {\n    const modalDiv = document.querySelector('.modal');\n    const div = document.createElement('div');\n    modalDiv.innerHTML = \"\";\n    const heading = document.createElement('h1');\n    heading.textContent = winner;\n    const subHeading = document.createElement('p');\n    subHeading.textContent = sub;\n    div.append(heading, subHeading);\n    modalDiv.append(div);\n    modalDiv.classList.remove('hide');\n    setTimeout( () => {\n        modalDiv.classList.add('hide');\n        document.getElementById('reset').click();\n    },3000)\n}\n\nconst opponentShipInfo = (ships) => {\n    const wrapper = document.querySelector('#enemy-ship-info');\n    wrapper.innerHTML = '';\n    ships.forEach(ship => {\n        const shipWrapper = document.createElement('div');\n        let colored = 0;\n        for(let i = 0; i < ship.length; i++){\n            const div = document.createElement('div');\n            div.classList.add('ships');\n            if(colored < ship.hits){\n                div.style.backgroundColor = 'red';\n                colored++;\n            }\n            shipWrapper.appendChild(div);\n        }\n        wrapper.appendChild(shipWrapper);\n    });\n}\n\nconst playerShipInfo = (ships) => {\n    const wrapper = document.querySelector('#player-ship-info');\n    wrapper.innerHTML = '';\n    ships.forEach(ship => {\n        const shipWrapper = document.createElement('div');\n        let colored = 0;\n        for(let i = 0; i < ship.length; i++){\n            const div = document.createElement('div');\n            div.classList.add('ships');\n            if(colored < ship.hits){\n                div.style.backgroundColor = 'red';\n                colored++;\n            }\n            shipWrapper.appendChild(div);\n        }\n        wrapper.appendChild(shipWrapper);\n    });\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/DOM/dom.js?");

/***/ }),

/***/ "./src/class/gameboard.js":
/*!********************************!*\
  !*** ./src/class/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n    constructor() {\n      this.board = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null));\n      this.missedAttacks = [];\n      this.ships = [];\n    }\n  \n    placeShip(ship, x, y, isVertical) {\n        if (!this.isValidPlacement(ship.length, x, y, isVertical)) {\n          return false; // Invalid placement\n        }\n    \n        // Place the ship on the board\n        for (let i = 0; i < ship.length; i++) {\n          if (isVertical) {\n            this.board[x + i][y] = ship;\n          } else {\n            this.board[x][y + i] = ship;\n          }\n        }\n    \n        this.ships.push(ship); // Add the ship to the list of ships on the board\n        return true; // Successful placement\n    }\n    \n  \n    receiveAttack(row, col) {\n      if(this.board[row][col] !== '.' && this.board[row][col] !== 'x'){\n        if(this.board[row][col] === null) {\n          this.board[row][col] = '.';\n          return true;\n        }\n        this.board[row][col].hit();\n        this.board[row][col] = 'x';\n        return 'hit';\n      }\n      return false;\n    }\n  \n    allShipsSunk() {\n      return this.ships.every(ship => ship.isSunk());\n    }\n\n\n    isValidPlacement(length, x, y, isVertical) {\n        // Ensure that the ship fits within the boundaries of the board\n        if (isVertical) {\n          if (x + length > 10) {\n            return false; // Ship exceeds the board's height\n          }\n        } else {\n          if (y + length > 10) {\n            return false; // Ship exceeds the board's width\n          }\n        }\n    \n        // Ensure that the ship does not overlap with existing ships\n        for (let i = 0; i < length; i++) {\n          if (isVertical) {\n            if (this.board[x + i][y] !== null) {\n              return false; // Overlaps with existing ship\n            }\n          } else {\n            if (this.board[x][y + i] !== null) {\n              return false; // Overlaps with existing ship\n            }\n          }\n        }\n\n        if(isVertical){\n            if(y > 0 && this.board[x][y - 1] !== null) return false;\n            if(y + length < 9 && this.board[x][y + length] !== null) return false;\n        }else{\n            if(x > 0 && this.board[x - 1][y] !== null) return false;\n            if(x + length < 9 && this.board[x + length][y] !== null) return false;\n        }\n    \n        return true; // Valid placement\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n  \n\n//# sourceURL=webpack://battleship-game/./src/class/gameboard.js?");

/***/ }),

/***/ "./src/class/player.js":
/*!*****************************!*\
  !*** ./src/class/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/gameboard */ \"./src/class/gameboard.js\");\n\nclass Player {\n    constructor() {\n      this.gameboard = new _class_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n  \n    attack(enemyGameboard, x, y) {\n      // enemyGameboard.receiveAttack(x, y);\n      return (enemyGameboard.receiveAttack(x, y));\n    }\n  }\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship-game/./src/class/player.js?");

/***/ }),

/***/ "./src/class/ship.js":
/*!***************************!*\
  !*** ./src/class/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n      this.length = length;\n      this.hits = 0;\n    }\n  \n    hit() {\n      this.hits++;\n    }\n  \n    isSunk() {\n      return this.hits === this.length;\n    }\n  }\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n  \n\n//# sourceURL=webpack://battleship-game/./src/class/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/dom */ \"./src/DOM/dom.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\nconst startBtn = document.getElementById('start-btn');\nstartBtn.addEventListener('click', () => {\n    (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    startBtn.style.display = 'none';\n});\n\nconst resetBtn = document.getElementById('reset');\nresetBtn.addEventListener('click', () => {\n    const enemyBoard = document.querySelector('#enemy-board');\n    const playerBoard = document.querySelector('#player-board');\n    const enemyShip = document.getElementById('enemy-ship-info');\n    enemyShip.innerHTML = '';\n    const player = document.getElementById('player-ship-info');\n    player.innerHTML = '';\n    enemyBoard.textContent = '';\n    playerBoard.textContent = '';\n    enemyBoard.style.backgroundColor = 'white';\n    playerBoard.style.backgroundColor = 'white';\n    startBtn.style.display = 'inline-block';\n});\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
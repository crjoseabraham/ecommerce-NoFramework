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
/******/ 	__webpack_require__.p = "./dist/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./resources/sass/main.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js!./resources/sass/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./resources/sass/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js?url=false!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./resources/sass/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./resources/sass/main.scss?");

/***/ }),

/***/ "./resources/scripts/FormValidations.js":
/*!**********************************************!*\
  !*** ./resources/scripts/FormValidations.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormValidations; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FormValidations = /*#__PURE__*/function () {\n  function FormValidations() {\n    _classCallCheck(this, FormValidations);\n\n    this.errors = new Object();\n    this.form = undefined;\n    this.inputs = undefined; // Possible error messages\n\n    this.EMPTY_FIELD = \"This field is required\";\n    this.INVALID_NAME = \"Name can contain only letters\";\n    this.INVALID_EMAIL = \"Please enter a valid email address\";\n    this.EMAIL_EXISTS = \"This email is already registered\";\n    this.INVALID_PASS = \"Passwords needs at least: 6 characters long, 1 capital letter and 1 number\";\n    this.MATCH_PASS = \"Password and confirmation don't match\";\n  }\n  /**\r\n   * Sort form inputs by type. Set errors array. Start validation process\r\n   * @param  {object} form Pre-submitted form\r\n   */\n\n\n  _createClass(FormValidations, [{\n    key: \"process\",\n    value: function process(form) {\n      var _this = this;\n\n      this.form = form;\n      this.inputs = form.querySelectorAll(\"form[action='\".concat(this.form.getAttribute(\"action\"), \"'] input\"));\n      this.inputs.forEach(function (input) {\n        _this.errors[input.name] = []; // Start validation process\n\n        _this[input.name](input);\n      });\n      console.log(this.errors);\n    }\n  }, {\n    key: \"name\",\n    value: function name(input) {\n      if (input.value === '') {\n        this.errors[input.name].push(this.EMPTY_FIELD);\n      }\n    }\n  }, {\n    key: \"email\",\n    value: function email(input) {\n      if (input.value === '') {\n        this.errors[input.name].push(this.EMPTY_FIELD);\n      }\n    }\n  }, {\n    key: \"password\",\n    value: function password(input) {\n      if (input.value === '') {\n        this.errors[input.name].push(this.EMPTY_FIELD);\n      }\n    }\n  }, {\n    key: \"passwordConfirmation\",\n    value: function passwordConfirmation(input) {\n      if (input.value === '') {\n        this.errors[input.name].push(this.EMPTY_FIELD);\n      }\n    }\n  }]);\n\n  return FormValidations;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/scripts/FormValidations.js?");

/***/ }),

/***/ "./resources/scripts/HttpRequest.js":
/*!******************************************!*\
  !*** ./resources/scripts/HttpRequest.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HttpRequest; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HttpRequest = /*#__PURE__*/function () {\n  function HttpRequest() {\n    _classCallCheck(this, HttpRequest);\n\n    this.request = new XMLHttpRequest();\n    this.baseURL = \"http://localhost/shoppingcart/\";\n  }\n  /**\r\n   * GET method\r\n   * @param {string} resource URL for the request\r\n   */\n\n\n  _createClass(HttpRequest, [{\n    key: \"get\",\n    value: function get(resource) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.request.addEventListener(\"readystatechange\", function () {\n          if (_this.request.readyState === 4 && _this.request.status === 200) {\n            var data = JSON.parse(JSON.stringify(_this.request.responseText));\n            resolve(data);\n          } else if (_this.readyState === 4) {\n            reject(\"Error here dude\");\n          }\n        });\n\n        _this.request.open(\"GET\", _this.baseURL + resource);\n\n        _this.request.send();\n      });\n    }\n  }]);\n\n  return HttpRequest;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/scripts/HttpRequest.js?");

/***/ }),

/***/ "./resources/scripts/UI.js":
/*!*********************************!*\
  !*** ./resources/scripts/UI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UI; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UI = /*#__PURE__*/function () {\n  function UI(HttpRequest, FormValidations) {\n    var _this = this;\n\n    _classCallCheck(this, UI);\n\n    // For HTTP Requests\n    this.http = HttpRequest; // For validating forms before submitting\n\n    this.validate_form = FormValidations; // UI elements\n\n    this.modal = document.getElementById(\"modal\");\n    this.body = document.getElementById(\"bodyJsPointer\");\n    this.forms = document.querySelectorAll(\"form\"); // Set event listeners\n\n    this.forms.forEach(function (form) {\n      form.addEventListener(\"submit\", function (event) {\n        event.preventDefault();\n\n        _this.validate_form.process(form);\n      });\n    });\n    document.querySelectorAll(\"[data-popup]\").forEach(function (popup_pointer) {\n      popup_pointer.addEventListener(\"click\", _this.showPopup.bind(_this));\n    });\n    document.getElementById(\"close-popup\").addEventListener(\"click\", this.closePopup.bind(this)); // Load other elements on startup\n\n    this.loadCarousels();\n    this.stickyNav();\n  } // -------------------------------------------------\n  // RELATED TO THE DOM AND NOT TO SPECIFIC WEBAPP ACTIONS\n\n  /**\r\n   * Hide carousels horizontal scrollbar in Firefox\r\n   */\n\n\n  _createClass(UI, [{\n    key: \"hideFFScrollbars\",\n    value: function hideFFScrollbars() {\n      document.addEventListener(\"glider-loaded\", hideFFScrollBars);\n      document.addEventListener(\"glider-refresh\", hideFFScrollBars);\n\n      function hideFFScrollBars(e) {\n        var scrollbarHeight = 17; // Currently 17, may change with updates\n\n        if (/firefox/i.test(navigator.userAgent)) {\n          // We only need to apply to desktop. Firefox for mobile uses\n          // a different rendering engine (WebKit)\n          if (window.innerWidth > 575) {\n            e.target.parentNode.style.height = e.target.offsetHeight - scrollbarHeight + \"px\";\n          }\n        }\n      }\n    } // -------------------------\n    // SHOW OR HIDE UI ELEMENTS\n\n    /**\r\n     * Display popup content\r\n     * @param {object} event Mouse Event\r\n     */\n\n  }, {\n    key: \"showPopup\",\n    value: function showPopup(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      var popup_parent = document.querySelector(\".menu__popup\");\n      var popup_content_divs = document.querySelectorAll(\".popup__content\");\n      var overlay = document.getElementById(\"overlay\");\n      popup_content_divs.forEach(function (content_div) {\n        if (event.target.dataset.popup === content_div.dataset.popupname) {\n          if (content_div.classList.contains(\"active\")) {\n            content_div.classList.remove(\"active\");\n            popup_parent.classList.remove(\"active\");\n          } else {\n            overlay.classList.add(\"active\");\n\n            _this2.body.classList.add(\"noscroll\");\n\n            popup_parent.classList.add(\"active\");\n            content_div.classList.toggle(\"active\");\n          }\n        } else content_div.classList.remove(\"active\");\n      });\n\n      if (!popup_parent.classList.contains(\"active\")) {\n        overlay.classList.remove(\"active\");\n        this.body.classList.remove(\"noscroll\");\n      }\n    } // Close the popup\n\n  }, {\n    key: \"closePopup\",\n    value: function closePopup(event) {\n      document.querySelectorAll(\".popup__content\").forEach(function (content) {\n        content.classList.remove(\"active\");\n      });\n      document.querySelector(\".menu__popup\").classList.remove(\"active\");\n      overlay.classList.remove(\"active\");\n      this.body.classList.remove(\"noscroll\");\n    } // ---------------------------------------\n    // THINGS THAT MUST BE LOADED ON STARTUP\n\n    /**\r\n     * Make navbar sticky on scroll\r\n     */\n\n  }, {\n    key: \"stickyNav\",\n    value: function stickyNav() {\n      window.addEventListener(\"scroll\", function () {\n        var navbar = document.getElementById(\"menu\");\n        navbar.classList.toggle(\"sticky\", window.scrollY > 0);\n      });\n    }\n    /**\r\n     * Init Glider.js carousel\r\n     */\n\n  }, {\n    key: \"loadCarousels\",\n    value: function loadCarousels() {\n      new Glider(document.querySelector(\".items-with-discount\"), {\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        scrollLock: true,\n        itemWidth: 155,\n        rewind: true,\n        draggable: true,\n        arrows: {\n          prev: \".glider-prev\",\n          next: \".glider-next\"\n        },\n        responsive: [{\n          breakpoint: 320,\n          settings: {\n            itemWidth: 197,\n            slidesToShow: 2,\n            slidesToScroll: 2\n          }\n        }, {\n          breakpoint: 400,\n          settings: {\n            itemWidth: 197,\n            slidesToShow: 2,\n            slidesToScroll: 2\n          }\n        }, {\n          breakpoint: 500,\n          settings: {\n            itemWidth: 160,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 550,\n          settings: {\n            itemWidth: 170,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 601,\n          settings: {\n            slidesToShow: 1,\n            slidesToScroll: 1\n          }\n        }]\n      });\n      new Glider(document.querySelector(\".best-sellers-carousel\"), {\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        itemWidth: 172,\n        scrollLock: true,\n        draggable: true,\n        rewind: true,\n        arrows: {\n          prev: \".best-prev\",\n          next: \".best-next\"\n        },\n        responsive: [{\n          breakpoint: 400,\n          settings: {\n            itemWidth: 197,\n            slidesToShow: 2,\n            slidesToScroll: 2\n          }\n        }, {\n          breakpoint: 500,\n          settings: {\n            itemWidth: 160,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 550,\n          settings: {\n            itemWidth: 170,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 600,\n          settings: {\n            itemWidth: 170,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 760,\n          settings: {\n            itemWidth: 190,\n            slidesToShow: 4,\n            slidesToScroll: 4\n          }\n        }]\n      });\n      new Glider(document.querySelector(\".just-arrived-carousel\"), {\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        itemWidth: 172,\n        scrollLock: true,\n        draggable: true,\n        rewind: true,\n        arrows: {\n          prev: \".ja-prev\",\n          next: \".ja-next\"\n        },\n        responsive: [{\n          breakpoint: 400,\n          settings: {\n            itemWidth: 197,\n            slidesToShow: 2,\n            slidesToScroll: 2\n          }\n        }, {\n          breakpoint: 499,\n          settings: {\n            itemWidth: 160,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 550,\n          settings: {\n            itemWidth: 170,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 600,\n          settings: {\n            itemWidth: 170,\n            slidesToShow: 3,\n            slidesToScroll: 3\n          }\n        }, {\n          breakpoint: 760,\n          settings: {\n            itemWidth: 180,\n            slidesToShow: 4,\n            slidesToScroll: 4\n          }\n        }]\n      });\n      this.hideFFScrollbars();\n    }\n  }]);\n\n  return UI;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/scripts/UI.js?");

/***/ }),

/***/ "./resources/scripts/index.js":
/*!************************************!*\
  !*** ./resources/scripts/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./resources/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./resources/scripts/UI.js\");\n/* harmony import */ var _HttpRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpRequest */ \"./resources/scripts/HttpRequest.js\");\n/* harmony import */ var _FormValidations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormValidations */ \"./resources/scripts/FormValidations.js\");\n\n\n\n\nnew _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _HttpRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), new _FormValidations__WEBPACK_IMPORTED_MODULE_3__[\"default\"]());\n\n//# sourceURL=webpack:///./resources/scripts/index.js?");

/***/ })

/******/ });
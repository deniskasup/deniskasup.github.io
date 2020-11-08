/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"base": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_modules_sliders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-modules/sliders.js */ "./src/js/js-modules/sliders.js");
/* harmony import */ var _js_modules_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-modules/header.js */ "./src/js/js-modules/header.js");
/* harmony import */ var _js_modules_animation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js-modules/animation.js */ "./src/js/js-modules/animation.js");
/* harmony import */ var _js_modules_tabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js-modules/tabs.js */ "./src/js/js-modules/tabs.js");
/* harmony import */ var _js_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js-modules/dropdown.js */ "./src/js/js-modules/dropdown.js");
/* harmony import */ var _js_modules_range_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js-modules/range.js */ "./src/js/js-modules/range.js");
/* harmony import */ var _js_modules_listing_grid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js-modules/listing-grid.js */ "./src/js/js-modules/listing-grid.js");
/* harmony import */ var _js_modules_mobilemenu_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js-modules/mobilemenu.js */ "./src/js/js-modules/mobilemenu.js");
var t0 = performance.now();

__webpack_provided_window_dot_jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a; // PLUGINS======================================================================================



 // MODULES======================================================================================








 // init ========================================================================================

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    Object(_js_modules_mobilemenu_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
  }

  document.querySelectorAll(".burger").forEach(function (burger) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("active");
    });
  });
  var lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a();
  var im = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a("+7 (999) 999-99-99");
  im.mask(document.querySelectorAll('input[name="PHONE"]')); // CUSTOM FUNCTIONS

  Object(_js_modules_header_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_js_modules_tabs_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_js_modules_animation_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_js_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_js_modules_range_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_js_modules_listing_grid_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
});
var t1 = performance.now();
console.log("Load index.js in", (t1 - t0).toFixed(4), "milliseconds");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/js-modules/animation.js":
/*!****************************************!*\
  !*** ./src/js/js-modules/animation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initAnimations; });
function initAnimations() {
  var observeParams = {
    rootMargin: '0px',
    threshold: 0.65
  };

  if (window.matchMedia("(max-width: 768px)").matches) {
    observeParams.threshold = 0.35;
  }

  var animateTargets = document.querySelectorAll('.fadeInUp');

  if (animateTargets) {
    var observerCallback = function observerCallback(entries, observer) {
      var i = 0.25;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("style", "transition-delay: " + i + "s;");
          i = i + 0.1;
          entry.target.classList.add('js-visible');
        }
      });
    };

    var animateObserver = new IntersectionObserver(observerCallback, observeParams);
    animateTargets.forEach(function (target) {
      animateObserver.observe(target);
    });
  }
}

/***/ }),

/***/ "./src/js/js-modules/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/js-modules/dropdown.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initDropdown; });
function initDropdown() {
  var dropdownLists = document.querySelectorAll("[data-dropdown]");

  if (dropdownLists) {
    dropdownLists.forEach(function (list) {
      if (list.getAttribute("data-dropdown") != "") {
        var listItems = Array.from(document.querySelectorAll(list.getAttribute("data-dropdown")));
        listItems.forEach(function (item) {
          item.addEventListener("click", function () {
            item.parentElement.classList.toggle("active");
          });
        });
      } else {
        var _listItems = Array.from(list.children);

        _listItems.forEach(function (item) {
          item.addEventListener("click", function () {
            item.classList.toggle("active");
          });
        });
      }
    });
  }
}

/***/ }),

/***/ "./src/js/js-modules/header.js":
/*!*************************************!*\
  !*** ./src/js/js-modules/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stickyHeader; });
function stickyHeader() {
  var point;

  if (window.matchMedia('(min-width: 1024px)').matches) {
    point = document.querySelector("header");
  } else {
    point = document.querySelector(".mobile-header");
  }

  var header = document.querySelector(".header-sticky");
  var scrollButton = document.querySelector('.scroll-top');
  var filterButton = document.querySelector('.listing__filter-button');
  var config = {
    rootMargin: "0px",
    threshold: 0.8
  };

  var observerCallback2 = function observerCallback2(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        header.classList.remove("sticky");
        scrollButton.classList.remove("active");

        if (filterButton) {
          filterButton.classList.remove('active');
        }
      } else {
        if (entry.rootBounds.y >= entry.boundingClientRect.y) {
          header.classList.add("sticky");
          scrollButton.classList.add("active");

          if (filterButton) {
            filterButton.classList.add('active');
          }
        }
      }
    });
  };

  var headerObserver = new IntersectionObserver(observerCallback2, config);
  headerObserver.observe(point);
}

/***/ }),

/***/ "./src/js/js-modules/listing-grid.js":
/*!*******************************************!*\
  !*** ./src/js/js-modules/listing-grid.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initListing; });
function initListing() {
  var linesButton = document.querySelector(".listing__sort-grid svg:first-of-type");
  var gridButton = document.querySelector(".listing__sort-grid svg:last-of-type");
  var products = document.querySelector(".listing__products-list");

  if (linesButton) {
    linesButton.onclick = function () {
      linesButton.classList.add("active");
      gridButton.classList.remove("active");
      products.classList.remove("grid");
    };

    gridButton.onclick = function () {
      gridButton.classList.add("active");
      linesButton.classList.remove("active");
      products.classList.add("grid");
    };
  }

  var listingButton = document.querySelector('.listing__filter-button');
  var filter = document.querySelector('.listing__filter');

  if (listingButton) {
    listingButton.addEventListener('click', function () {
      listingButton.classList.toggle('opened');
      filter.classList.toggle('active');
      document.body.classList.toggle('filter-opened');
    });
  }
}

/***/ }),

/***/ "./src/js/js-modules/mobilemenu.js":
/*!*****************************************!*\
  !*** ./src/js/js-modules/mobilemenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initMobileMenu; });
function initMobileMenu() {
  var burger = document.querySelector('.js-burger');
  var body = document.querySelector('body');

  if (burger) {
    var menu = document.querySelector('.mobilemenu');
    burger.addEventListener('click', function () {
      if (body.classList.contains('mobile-opened')) {
        document.removeEventListener('click', outsideEvtListener);
      } else {
        setTimeout(function () {
          document.addEventListener('click', outsideEvtListener);
        });
      } // burger.classList.toggle('active')


      menu.classList.toggle('active');
      body.classList.toggle('mobile-opened');
    });

    if (menu) {
      var menuItems = document.querySelectorAll('.mobilemenu__nav-item');
      menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
          if (item.querySelector('.mobilemenu__nav-sublist')) {
            item.classList.toggle('opened');
          }
        });
      });
    }

    function outsideEvtListener(evt) {
      if (evt.target === menu || menu.contains(evt.target)) {
        return;
      }

      burger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('mobile-opened');
      document.removeEventListener('click', outsideEvtListener);
    }
  }
}

/***/ }),

/***/ "./src/js/js-modules/range.js":
/*!************************************!*\
  !*** ./src/js/js-modules/range.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initRange; });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
//  ** https://refreshless.com/nouislider/ **

function initRange() {
  var slider = document.querySelector(".listing__filter-price-range");
  var sliderMin = document.querySelector("[name=range-min]");
  var sliderMax = document.querySelector("[name=range-max]");
  var inputs = [sliderMin, sliderMax];

  if (slider) {
    nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(slider, {
      start: [4000, 8000],
      connect: true,
      range: {
        min: 0,
        max: 100000
      }
    });
    slider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = Math.floor(values[handle]);
    });
    inputs.forEach(function (input, handle) {
      input.addEventListener("change", function () {
        slider.noUiSlider.setHandle(handle, this.value);
      });
    });
  }
}

/***/ }),

/***/ "./src/js/js-modules/sliders.js":
/*!**************************************!*\
  !*** ./src/js/js-modules/sliders.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\src\\js\\js-modules\\sliders.js: Unexpected token, expected \",\" (92:5)\n\n  90 |                 slidesPerView: \"auto\",\n  91 |             }\n> 92 |     })\n     |      ^\n  93 | }\n    at Parser._raise (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at Parser.unexpected (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:8966:16)\n    at Parser.expect (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:8952:28)\n    at Parser.parseObjectLike (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:10655:14)\n    at Parser.parseExprAtom (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:10198:23)\n    at Parser.parseExprSubscripts (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9844:23)\n    at Parser.parseUpdate (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9620:21)\n    at C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9586:39\n    at Parser.allowInAnd (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:11303:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9586:17)\n    at Parser.parseExprListItem (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:11051:18)\n    at Parser.parseExprList (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:11021:22)\n    at Parser.parseNewArguments (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:10594:25)\n    at Parser.parseNew (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:10588:10)\n    at Parser.parseNewOrNewTarget (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:10574:17)\n    at Parser.parseExprAtom (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:10213:21)\n    at Parser.parseExprSubscripts (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9844:23)\n    at Parser.parseUpdate (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9620:21)\n    at C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9586:39\n    at Parser.allowInAnd (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:11297:16)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:9586:17)\n    at Parser.parseVar (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:12097:70)\n    at Parser.parseVarStatement (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:11906:10)\n    at Parser.parseStatementContent (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:11498:21)\n    at Parser.parseStatement (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Denis\\PhpstormProjects\\deniskasup.github.io\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)");

/***/ }),

/***/ "./src/js/js-modules/tabs.js":
/*!***********************************!*\
  !*** ./src/js/js-modules/tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initTabs; });
function initTabs() {
  var allTabs = document.querySelectorAll('[data-tabs]'); // const tabsSelects = document.querySelectorAll('[data-select-tabs]');

  if (allTabs || tabsSelects) {
    allTabs.forEach(function (tabs) {
      var arr = Array.from(tabs.children);
      var tabPages = document.querySelectorAll(".".concat(tabs.getAttribute('data-tabs'), " > *"));
      arr.forEach(function (elem) {
        elem.addEventListener('click', function () {
          // remove кнопки
          arr.forEach(function (e) {
            return e.classList.remove('active');
          }); // remove Вкладки

          tabPages.forEach(function (item) {
            return item.classList.remove('active');
          }); // add Кнопка

          elem.classList.add('active'); // add вкладка

          tabPages[elem.getAttribute('data-tab-page')].classList.add('active');
        });
      });
    }); // tabsSelects.forEach((select) => {
    //     const tabPages = document.querySelectorAll(`.${select.getAttribute('data-select-tabs')} > *`);
    //     select.addEventListener('change', () => {
    //         // remove Вкладки
    //         tabPages.forEach(item => item.classList.remove('active'));
    //         // add вкладка
    //         tabPages[select.options[select.selectedIndex].getAttribute('data-tab-page')].classList.add('active');
    //     })
    // })
  }
}

/***/ })

/******/ });
//# sourceMappingURL=base.js.map
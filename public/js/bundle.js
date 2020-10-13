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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//////////////////////////////////////////////////////////////////////////////////////\n// Global variables\nvar body = document.body;\nvar menu = document.querySelector('.menu');\nvar menuToggleButtons = document.querySelectorAll('.button--menu-toggle');\nvar menuCloseButton = document.querySelector('.button--menu-close');\nvar dropdownLinks = document.querySelectorAll('.dropdown_body_content_item a'); //////////////////////////////////////////////////////////////////////////////////////\n// Functions\n// Get the scroll position\n\nvar getScrollPosition = function getScrollPosition() {\n  return window.pageYOffset | document.body.scrollTop;\n}; // Get specified parent of element\n\n\nvar getParent = function getParent(element, index) {\n  while (index > 0) {\n    element = element.parentNode;\n    index--;\n  }\n\n  return element;\n}; // Animate header\n\n\nvar headerAnimation = function headerAnimation() {\n  var header = document.querySelector('.header');\n  var scrollPosition = getScrollPosition();\n\n  if (scrollPosition > 50) {\n    header.setAttribute('data-background', 'true');\n  } else {\n    header.setAttribute('data-background', 'false');\n  }\n}; // Toggle menu\n\n\nvar toggleMenu = function toggleMenu() {\n  body.setAttribute('data-overflow-y', body.getAttribute('data-overflow-y') === 'hidden' ? 'scroll' : 'hidden');\n  menu.setAttribute('data-state', menu.getAttribute('data-state') === 'active' ? 'disabled' : 'active');\n}; // Close menu\n\n\nvar closeMenu = function closeMenu() {\n  body.setAttribute('data-overflow-y', 'scroll');\n  menu.setAttribute('data-state', 'disabled');\n}; //////////////////////////////////////////////////////////////////////////////////////\n// Listeners\n// Dom content loaded\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  menu.setAttribute('data-ready', 'true');\n}); // Window scroll\n\nwindow.addEventListener('scroll', headerAnimation); // Menu toggle buttons\n\nmenuToggleButtons.forEach(function (menuToggleButton) {\n  menuToggleButton.addEventListener('click', toggleMenu);\n}); // Menu close button\n\nmenuCloseButton.addEventListener('click', closeMenu); // Freeze dropdown focus\n\ndropdownLinks.forEach(function (dropdownLink) {\n  // Get the third parent of dropdown link\n  var parentContainer = getParent(dropdownLink, 4); // Add attribute to parent when focus in\n\n  dropdownLink.addEventListener('focusin', function () {\n    // console.log(`Focus IN - to ${dropdownLink.innerHTML}`);\n    parentContainer.setAttribute('data-focus', 'true');\n  }); // Remove attribute from parent when focus out\n\n  dropdownLink.addEventListener('focusout', function () {\n    // console.log(`Focus OUT - from ${dropdownLink.innerHTML}`);\n    parentContainer.setAttribute('data-focus', 'false');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });
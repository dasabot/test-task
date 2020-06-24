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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Buttons\nconst randomButton = document.getElementById(\"random\");\nconst searchButton = document.getElementById(\"search\");\nconst categoriesButton = document.getElementById(\"categories\");\nconst searchInput = document.getElementById(\"search-area\");\n\n// Containers\nconst categoriesContainer = document.querySelector(\".categories-container\");\n\n// Handlers\nfunction showCategoriesContainer() {\n  categoriesContainer.classList.remove(\"hide\");\n}\n\nfunction hideCategoriesContainer() {\n  categoriesContainer.classList.add(\"hide\");\n  resetCategories();\n}\n\nfunction showSearchInput() {\n  searchInput.classList.remove(\"hide\");\n}\n\nfunction hideSearchInput() {\n  searchInput.classList.add(\"hide\");\n}\n\nfunction handleSearchButtonClick() {\n  hideCategoriesContainer();\n  showSearchInput();\n}\n\nfunction handleRandomButtonClick() {\n  hideCategoriesContainer();\n  hideSearchInput();\n}\n\nfunction handleCategoriesButtonClick() {\n  showCategoriesContainer();\n  hideSearchInput();\n}\n\nfunction handleSearchButtonClick() {\n  showSearchInput();\n  hideCategoriesContainer();\n}\n\n// Event listeners\nrandomButton.addEventListener(\"click\", handleRandomButtonClick);\ncategoriesButton.addEventListener(\"click\", handleCategoriesButtonClick);\nsearchButton.addEventListener(\"click\", handleSearchButtonClick);\n\n// Categories\nconst categories = document.querySelectorAll(\".category\");\nconst animalCategory = document.getElementById(\"category-animal\");\n\nfunction removeCategoriesSelection() {\n  categories.forEach(function (category) {\n    category.classList.remove(\"select\");\n  });\n}\n\nfunction resetCategories() {\n  removeCategoriesSelection();\n  animalCategory.classList.add(\"select\");\n}\n\ncategories.forEach(function (category) {\n  category.addEventListener(\"click\", function () {\n    removeCategoriesSelection();\n    category.classList.add(\"select\");\n  });\n});\n\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./src/javascript/index.js ./src/sass/main.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/javascript/index.js */\"./src/javascript/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/sass/main.scss */\"./src/sass/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/javascript/index.js_./src/sass/main.scss?");

/***/ })

/******/ });
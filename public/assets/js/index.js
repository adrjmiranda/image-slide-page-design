/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Slide Animation\n */\nvar PREV_CLASS = 'prev';\nvar NEXT_CLASS = 'next';\nvar ACTIVE_CLASS = 'active';\nvar prevButton = document.getElementById(PREV_CLASS);\nvar nextButton = document.getElementById(NEXT_CLASS);\nvar slidesBox = document.getElementById('slides');\nvar getRootVariable = function (variableName) {\n    var root = document.documentElement;\n    var variable = getComputedStyle(root).getPropertyValue(variableName);\n    return variable;\n};\nvar clearSlidesBoxClasses = function () {\n    slidesBox === null || slidesBox === void 0 ? void 0 : slidesBox.classList.remove(PREV_CLASS, NEXT_CLASS);\n};\nvar clearSlideItemsClasses = function () {\n    var slideItems = document.querySelectorAll('.slide');\n    slideItems.forEach(function (item) { return item.classList.remove(ACTIVE_CLASS); });\n    slideItems[1].classList.add(ACTIVE_CLASS);\n};\nvar clearClasses = function () {\n    clearSlideItemsClasses();\n    clearSlidesBoxClasses();\n};\nvar updateSlideItems = function (buttonType) {\n    var _a;\n    var slideItems = document.querySelectorAll('.slide');\n    var index = buttonType === PREV_CLASS ? 0 : (_a = slideItems === null || slideItems === void 0 ? void 0 : slideItems.length) !== null && _a !== void 0 ? _a : 0;\n    switch (buttonType) {\n        case PREV_CLASS:\n            var firstElement = slideItems[index];\n            slidesBox === null || slidesBox === void 0 ? void 0 : slidesBox.appendChild(firstElement);\n            break;\n        case NEXT_CLASS:\n            var lastElement = slideItems[index - 1];\n            slidesBox === null || slidesBox === void 0 ? void 0 : slidesBox.prepend(lastElement);\n            break;\n    }\n};\nif (prevButton && nextButton) {\n    [prevButton, nextButton].forEach(function (button) {\n        var _a;\n        var id = (_a = button.getAttribute('id')) !== null && _a !== void 0 ? _a : '';\n        button.addEventListener('click', function () {\n            slidesBox === null || slidesBox === void 0 ? void 0 : slidesBox.classList.add(id);\n            var slideDuration = parseFloat(getRootVariable('--slide-duration')) * 1000;\n            setTimeout(function () {\n                updateSlideItems(id);\n                clearClasses();\n            }, slideDuration);\n        });\n    });\n}\n\n\n//# sourceURL=webpack://image-slide-page-design/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
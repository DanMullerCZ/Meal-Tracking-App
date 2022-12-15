"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/meals";
exports.ids = ["pages/api/meals"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/meals.ts":
/*!****************************!*\
  !*** ./pages/api/meals.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/db */ \"(api)/./src/db.ts\");\n\nasync function handler(req, res) {\n    const method = req.method;\n    switch(method){\n        case \"GET\":\n            const meals = await _src_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].meal.findMany({\n                select: {\n                    name: true\n                }\n            });\n            res.status(200).json(meals);\n            break;\n        case \"POST\":\n            const mealToPost = req.body.name;\n            const postedMeal = await _src_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].meal.create({\n                data: {\n                    name: mealToPost\n                }\n            });\n            res.status(200).json(postedMeal);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVhbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUM7QUFFbEIsZUFBZUMsUUFDMUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUN0QjtJQUNFLE1BQU1DLFNBQVNGLElBQUlFLE1BQU07SUFFekIsT0FBUUE7UUFDSixLQUFLO1lBQ0QsTUFBTUMsUUFBUSxNQUFNTCw2REFBb0IsQ0FBQztnQkFDckNRLFFBQVE7b0JBQ0pDLE1BQU0sSUFBSTtnQkFDZDtZQUNKO1lBQ0FOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOO1lBQ3JCLEtBQUs7UUFFVCxLQUFLO1lBQ0QsTUFBTU8sYUFBcUJWLElBQUlXLElBQUksQ0FBQ0osSUFBSTtZQUV4QyxNQUFNSyxhQUFhLE1BQU1kLDJEQUFrQixDQUFDO2dCQUN4Q2dCLE1BQU07b0JBQ0ZQLE1BQU1HO2dCQUNWO1lBQ0o7WUFDQVQsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0c7WUFDckIsS0FBSztJQUNiO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lYWwtYXBwLy4vcGFnZXMvYXBpL21lYWxzLnRzPzVkY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9zcmMvZGInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gICAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZFxyXG5cclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgY29uc3QgbWVhbHMgPSBhd2FpdCBwcmlzbWEubWVhbC5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1lYWxzKVxyXG4gICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgY29uc3QgbWVhbFRvUG9zdDogc3RyaW5nID0gcmVxLmJvZHkubmFtZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zdGVkTWVhbCA9IGF3YWl0IHByaXNtYS5tZWFsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbWVhbFRvUG9zdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0ZWRNZWFsKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibWVhbHMiLCJtZWFsIiwiZmluZE1hbnkiLCJzZWxlY3QiLCJuYW1lIiwic3RhdHVzIiwianNvbiIsIm1lYWxUb1Bvc3QiLCJib2R5IiwicG9zdGVkTWVhbCIsImNyZWF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/meals.ts\n");

/***/ }),

/***/ "(api)/./src/db.ts":
/*!*******************!*\
  !*** ./src/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBO0FBRS9CLGlFQUFlQyxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVhbC1hcHAvLi9zcmMvZGIudHM/YWIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meals.ts"));
module.exports = __webpack_exports__;

})();
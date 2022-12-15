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
exports.id = "pages/api/meal/[mealName]";
exports.ids = ["pages/api/meal/[mealName]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/meal/[mealName].ts":
/*!**************************************!*\
  !*** ./pages/api/meal/[mealName].ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/db */ \"(api)/./src/db.ts\");\n\nasync function handler(req, res) {\n    const method = req.method;\n    const mealName = req.query.mealName?.toString();\n    switch(method){\n        case \"GET\":\n            const meal = await _src_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].meal.findFirst({\n                where: {\n                    name: mealName\n                },\n                select: {\n                    name: true\n                }\n            });\n            res.status(200).json(meal || {\n                name: \"Meal doesnt exist in my db\"\n            });\n            break;\n        case \"DELETE\":\n            const deletedMeal = await _src_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].meal[\"delete\"]({\n                where: {\n                    name: mealName\n                }\n            });\n            res.status(200).json(deletedMeal || {\n                name: \"Meal could not be deleted\"\n            });\n            break;\n        default:\n            res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVhbC9bbWVhbE5hbWVdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ29DO0FBTXJCLGVBQWVDLFFBQzFCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDNUI7SUFDRSxNQUFNQyxTQUFTRixJQUFJRSxNQUFNO0lBQ3pCLE1BQU1DLFdBQVdILElBQUlJLEtBQUssQ0FBQ0QsUUFBUSxFQUFFRTtJQUVyQyxPQUFRSDtRQUNKLEtBQUs7WUFDRCxNQUFNSSxPQUFPLE1BQU1SLDhEQUFxQixDQUFDO2dCQUNyQ1UsT0FBTztvQkFDSEMsTUFBTU47Z0JBQ1Y7Z0JBQ0FPLFFBQVE7b0JBQ0pELE1BQU0sSUFBSTtnQkFDZDtZQUNKO1lBQ0FSLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOLFFBQVE7Z0JBQUNHLE1BQU07WUFBNEI7WUFDaEUsS0FBSztRQUVULEtBQUs7WUFDRCxNQUFNSSxjQUFjLE1BQU1mLDhEQUFrQixDQUFDO2dCQUN6Q1UsT0FBTztvQkFDSEMsTUFBTU47Z0JBQ1Y7WUFDSjtZQUNBRixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQyxlQUFlO2dCQUFDSixNQUFNO1lBQTJCO1lBQ3RFLEtBQUs7UUFFVDtZQUNJUixJQUFJVSxNQUFNLENBQUMsS0FBS0ksR0FBRztJQUMzQjtBQUVKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWFsLWFwcC8uL3BhZ2VzL2FwaS9tZWFsL1ttZWFsTmFtZV0udHM/ZTg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL3NyYy9kYidcclxuXHJcbnR5cGUgTWVhbCA9IHtcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxNZWFsPlxyXG4pIHtcclxuICAgIGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2RcclxuICAgIGNvbnN0IG1lYWxOYW1lID0gcmVxLnF1ZXJ5Lm1lYWxOYW1lPy50b1N0cmluZygpXHJcblxyXG4gICAgc3dpdGNoIChtZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIGNvbnN0IG1lYWwgPSBhd2FpdCBwcmlzbWEubWVhbC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZWFsTmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obWVhbCB8fCB7bmFtZTogJ01lYWwgZG9lc250IGV4aXN0IGluIG15IGRiJ30pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRNZWFsID0gYXdhaXQgcHJpc21hLm1lYWwuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbWVhbE5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGVsZXRlZE1lYWwgfHwge25hbWU6ICdNZWFsIGNvdWxkIG5vdCBiZSBkZWxldGVkJ30pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibWVhbE5hbWUiLCJxdWVyeSIsInRvU3RyaW5nIiwibWVhbCIsImZpbmRGaXJzdCIsIndoZXJlIiwibmFtZSIsInNlbGVjdCIsInN0YXR1cyIsImpzb24iLCJkZWxldGVkTWVhbCIsImRlbGV0ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/meal/[mealName].ts\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meal/[mealName].ts"));
module.exports = __webpack_exports__;

})();
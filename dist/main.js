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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n\r\n\r\n\r\n\r\n// импорты, здесь все понятно\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_3__.UserService //создаем новый объект от класса, и кладем его в глобальный объект window\r\n\r\nuserService.getUsers().then(data => { //обращаемся к методу объекта, раскрываем дзен, и вытыскиваем оттуда масив пользователей, который передаем на отрисовку\r\n   ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.render)(data) // вызов самой функции отрисовки\r\n})\r\n\r\n;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_0__.addUsers)()\r\n;(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_1__.removeUsers)()\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n //импортируем рендер для отрисовки\r\n\r\nconst addUsers = () => {\r\n   const form = document.getElementById('form')\r\n   const inputName = document.querySelector('#form-name')\r\n   const inputEmail = document.querySelector('#form-email')\r\n   const inputChildren = document.querySelector('#form-children')\r\n   // получаем все необходимые поля, форму\r\n\r\n   form.addEventListener('submit', (e) => { // вешаем обработчик события\r\n        e.preventDefault(); // убираем стандартное поведение формы\r\n\r\n         const  user = {\r\n            name : inputName.value,\r\n            email : inputEmail.value,\r\n            children : inputChildren.checked,\r\n            permissions : false\r\n        } //создаем новый объект на основе полученных данных из формы\r\n\r\n        userService.addUser(user).then(() => { // запускаем метод записи пользователя\r\n            userService.getUsers().then(users => { // после добавления в базу данных, нужно получить свежие данные из бд  и как раз таки отрисовать их на странницу\r\n               ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n            })\r\n        })\r\n   })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n // импортируем рендер для обновления таблицы\r\n\r\nconst removeUsers = () => {\r\n    const tbody = document.querySelector('#table-body') // находим таблицу\r\n\r\n    const removeUserFunc = (e) => { // запускаем функцию, получаем event\r\n        // ставим условие, если клик произойдет на элементе, у которого есть родитель(закрывающий элемент) с классом .btn-danger\r\n        // то запускаем следующее\r\n        if(e.target.closest('.btn-danger')){\r\n            const tr = e.target.closest('tr') // получаем все строку из таблицы\r\n            const id = tr.dataset.key // обращаемся к дата атрибуту этой строки, и получаем ее айдишник\r\n\r\n            userService.removeUser(id).then(() => { // запускаем метод delete и передаем туда айдишник\r\n                userService.getUsers().then(users => { // получаем свежие данные из бд и отрисовываем их на страницу\r\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n                 })\r\n            })\r\n        }\r\n    }\r\n\r\n    tbody.addEventListener('click' , removeUserFunc) // навешиваем делегирование на таблицу\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => { // тут принимаем данные из индекса (из дзена)\r\n    const tbody = document.querySelector('#table-body') // получаем всю таблицу\r\n    tbody.innerHTML = '' // отчищаем таблицу, что бы не дублировались каждый раз данные\r\n\r\n    users.forEach(user => { // перебираем массив с данными, и каждый отдельный объект записываем в строчку\r\n       tbody.insertAdjacentHTML('beforeend', `\r\n       <tr data-key=\"${user.id}\">\r\n       <th scope=\"row\">${user.id}</th>\r\n       <td>${user.name}</td>\r\n       <td>${user.email}</td>\r\n       <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n       <td>\r\n           <div class=\"form-check form-switch\">\r\n               <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" ${user.permissions ? 'checked' : ''}\r\n                   id=\"form-children\">\r\n           </div>\r\n       </td>\r\n       <td>\r\n           <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n               <button type=\"button\" class=\"btn btn-warning\">\r\n                   <i class=\"bi-pencil-square\"></i>\r\n               </button>\r\n               <button type=\"button\" class=\"btn btn-danger\">\r\n                   <i class=\"bi-person-x\"></i>\r\n               </button>\r\n           </div>\r\n       </td>\r\n   </tr>\r\n       `)\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\n class UserService {\r\n    getUsers(){\r\n        return fetch(\"http://localhost:3000/users\").then(resp => resp.json())\r\n    }\r\n\r\n    addUser(user){\r\n        return fetch(\"http://localhost:3000/users\", {\r\n            method : \"POST\", \r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify(user)\r\n        }).then((resp) => resp.json())\r\n    }\r\n\r\n    removeUser(id){\r\n        return fetch(`http://localhost:3000/users/${id}`, {\r\n            method: \"DELETE\"\r\n        }).then((resp) => resp.json())\r\n    }\r\n }\r\n//  если по простому, то это класс, который экспортируется в индекс. Здесь делаются как раз таки\r\n// таки запросы в базу. Тут и получаем пользователей, и записываем, и удаляем\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
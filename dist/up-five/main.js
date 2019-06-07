(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<up-five></up-five>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'up-five';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _up_five_up_five_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./up-five/up-five.module */ "./src/app/up-five/up-five.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _up_five_up_five_module__WEBPACK_IMPORTED_MODULE_4__["UpFiveModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/up-five/components/footer/footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/up-five/components/footer/footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <h4>UP-5</h4>\n      </div>\n      <div class=\"col-4\">\n        Developed by: Theotech\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/up-five/components/footer/footer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/up-five/components/footer/footer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  background-color: #242424;\n  color: white;\n  padding-bottom: 1rem;\n  padding-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hemlhdGhlYnJvd24vdXAtZml2ZS91cC1maXZlL3NyYy9hcHAvdXAtZml2ZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBaUM7RUFDakMsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VwLWZpdmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/up-five/components/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/up-five/components/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/up-five/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/up-five/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/up-five/components/header/header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/up-five/components/header/header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <h4>UP-5</h4>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <a><span>Home</span></a>\n          </div>\n          <div class=\"col\">\n            <a><span>About</span></a>\n          </div>\n          <div class=\"col\">\n            <a><span>Contact</span></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/up-five/components/header/header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/up-five/components/header/header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n  background-color: #0c856a;\n  color: #fdfdfd;\n  padding-bottom: 1rem;\n  padding-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hemlhdGhlYnJvd24vdXAtZml2ZS91cC1maXZlL3NyYy9hcHAvdXAtZml2ZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBbUM7RUFDbkMsY0FBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXAtZml2ZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEzMywgMTA2KTtcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/up-five/components/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/up-five/components/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/up-five/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/up-five/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/up-five/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/up-five/components/index.ts ***!
  \*********************************************/
/*! exports provided: FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/up-five/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/up-five/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });





/***/ }),

/***/ "./src/app/up-five/pages/about-page/about-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/up-five/pages/about-page/about-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/up-five/pages/about-page/about-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/up-five/pages/about-page/about-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwLWZpdmUvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/up-five/pages/about-page/about-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/up-five/pages/about-page/about-page.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/up-five/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/up-five/pages/about-page/about-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/up-five/pages/contact-page/contact-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/up-five/pages/contact-page/contact-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/up-five/pages/contact-page/contact-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/up-five/pages/contact-page/contact-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwLWZpdmUvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/up-five/pages/contact-page/contact-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/up-five/pages/contact-page/contact-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/up-five/pages/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/up-five/pages/contact-page/contact-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/up-five/pages/index.ts":
/*!****************************************!*\
  !*** ./src/app/up-five/pages/index.ts ***!
  \****************************************/
/*! exports provided: AboutPageComponent, ContactPageComponent, InitPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/up-five/pages/about-page/about-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_0__["AboutPageComponent"]; });

/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/up-five/pages/contact-page/contact-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_1__["ContactPageComponent"]; });

/* harmony import */ var _init_page_init_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-page/init-page.component */ "./src/app/up-five/pages/init-page/init-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitPageComponent", function() { return _init_page_init_page_component__WEBPACK_IMPORTED_MODULE_2__["InitPageComponent"]; });






/***/ }),

/***/ "./src/app/up-five/pages/init-page/init-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/up-five/pages/init-page/init-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h1>WELCOME TO UP5</h1>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/up-five/pages/init-page/init-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/up-five/pages/init-page/init-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwLWZpdmUvcGFnZXMvaW5pdC1wYWdlL2luaXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/up-five/pages/init-page/init-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/up-five/pages/init-page/init-page.component.ts ***!
  \****************************************************************/
/*! exports provided: InitPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPageComponent", function() { return InitPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitPageComponent = /** @class */ (function () {
    function InitPageComponent() {
    }
    InitPageComponent.prototype.ngOnInit = function () {
    };
    InitPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-init-page',
            template: __webpack_require__(/*! ./init-page.component.html */ "./src/app/up-five/pages/init-page/init-page.component.html"),
            styles: [__webpack_require__(/*! ./init-page.component.scss */ "./src/app/up-five/pages/init-page/init-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitPageComponent);
    return InitPageComponent;
}());



/***/ }),

/***/ "./src/app/up-five/up-five-routing/up-five-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/up-five/up-five-routing/up-five-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UpFiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpFiveRoutingModule", function() { return UpFiveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages */ "./src/app/up-five/pages/index.ts");





var routes = [
    {
        path: 'home',
        component: _pages__WEBPACK_IMPORTED_MODULE_4__["InitPageComponent"]
    },
    {
        path: 'about',
        component: _pages__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"]
    },
    {
        path: 'contact',
        component: _pages__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var UpFiveRoutingModule = /** @class */ (function () {
    function UpFiveRoutingModule() {
    }
    UpFiveRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], UpFiveRoutingModule);
    return UpFiveRoutingModule;
}());



/***/ }),

/***/ "./src/app/up-five/up-five.component.html":
/*!************************************************!*\
  !*** ./src/app/up-five/up-five.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<footer></footer>"

/***/ }),

/***/ "./src/app/up-five/up-five.component.scss":
/*!************************************************!*\
  !*** ./src/app/up-five/up-five.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: 78vh;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hemlhdGhlYnJvd24vdXAtZml2ZS91cC1maXZlL3NyYy9hcHAvdXAtZml2ZS91cC1maXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXAtZml2ZS91cC1maXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGhlaWdodDogNzh2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/up-five/up-five.component.ts":
/*!**********************************************!*\
  !*** ./src/app/up-five/up-five.component.ts ***!
  \**********************************************/
/*! exports provided: UpFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpFiveComponent", function() { return UpFiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpFiveComponent = /** @class */ (function () {
    function UpFiveComponent() {
    }
    UpFiveComponent.prototype.ngOnInit = function () {
    };
    UpFiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'up-five',
            template: __webpack_require__(/*! ./up-five.component.html */ "./src/app/up-five/up-five.component.html"),
            styles: [__webpack_require__(/*! ./up-five.component.scss */ "./src/app/up-five/up-five.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpFiveComponent);
    return UpFiveComponent;
}());



/***/ }),

/***/ "./src/app/up-five/up-five.module.ts":
/*!*******************************************!*\
  !*** ./src/app/up-five/up-five.module.ts ***!
  \*******************************************/
/*! exports provided: UpFiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpFiveModule", function() { return UpFiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _up_five_routing_up_five_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./up-five-routing/up-five-routing.module */ "./src/app/up-five/up-five-routing/up-five-routing.module.ts");
/* harmony import */ var _up_five_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./up-five.component */ "./src/app/up-five/up-five.component.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages */ "./src/app/up-five/pages/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/up-five/components/index.ts");







var UpFiveModule = /** @class */ (function () {
    function UpFiveModule() {
    }
    UpFiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _up_five_component__WEBPACK_IMPORTED_MODULE_4__["UpFiveComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["InitPageComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["AboutPageComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ContactPageComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _up_five_routing_up_five_routing_module__WEBPACK_IMPORTED_MODULE_3__["UpFiveRoutingModule"]
            ],
            exports: [
                _up_five_component__WEBPACK_IMPORTED_MODULE_4__["UpFiveComponent"]
            ]
        })
    ], UpFiveModule);
    return UpFiveModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/maziathebrown/up-five/up-five/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
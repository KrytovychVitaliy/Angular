(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+iWV":
/*!************************************************************************!*\
  !*** ./src/app/pages/users-page-orders/users-page-orders.component.ts ***!
  \************************************************************************/
/*! exports provided: UsersPageOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageOrdersComponent", function() { return UsersPageOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UsersPageOrdersComponent_div_1_div_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r6[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r6[1].nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r6[1].price, " \u0433\u0440\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r6[1].count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r6[1].count * product_r6[1].price, " \u0433\u0440\u043D.");
} }
function UsersPageOrdersComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UsersPageOrdersComponent_div_1_div_1_tr_16_Template, 13, 6, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ind_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r3.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("order \u2116", ind_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 4, order_r3.date, "yyyy-MM-dd"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", order_r3.total, " \u0433\u0440\u043D.");
} }
function UsersPageOrdersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPageOrdersComponent_div_1_div_1_Template, 25, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrOrders);
} }
function UsersPageOrdersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UsersPageOrdersComponent {
    constructor(usersService, authorizationService) {
        this.usersService = usersService;
        this.authorizationService = authorizationService;
        this.userLocal = null; //залогінений користувач - дані з LocalStorage
        this.userFirebase = null; //залогінений користувач - дані з Firebase
        this.arrOrders = null;
    }
    ngOnInit() {
        this.getDataUser();
    }
    getDataUser() {
        this.userLocal = this.authorizationService.userLocal;
        this.usersService.getOneUser(this.userLocal[0]) //отримання з firebase останніх даних про поточного користувача
            .then(data => {
            this.userFirebase = data;
            this.arrOrders = data.orders;
        });
    }
}
UsersPageOrdersComponent.ɵfac = function UsersPageOrdersComponent_Factory(t) { return new (t || UsersPageOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"])); };
UsersPageOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersPageOrdersComponent, selectors: [["app-users-page-orders"]], decls: 3, vars: 2, consts: [["class", "orders", 4, "ngIf"], ["class", "noOrders", 4, "ngIf"], [1, "orders"], ["class", "table", 4, "ngFor", "ngForOf"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "info"], ["colspan", "2"], [1, "img"], [3, "src"], [1, "noOrders"]], template: function UsersPageOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPageOrdersComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersPageOrdersComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrOrders && ctx.arrOrders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.arrOrders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1wYWdlLW9yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "/Lrz":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-out/sign-out.component.ts ***!
  \******************************************************/
/*! exports provided: SignOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutComponent", function() { return SignOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SignOutComponent {
    constructor(authorizationService, orderService, router) {
        this.authorizationService = authorizationService;
        this.orderService = orderService;
        this.router = router;
    }
    ngOnInit() {
    }
    out() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику є товари
            localStorage.removeItem('basket'); //очистка кошика
            this.orderService.basket.next(null);
        }
        ;
        localStorage.removeItem('activeUser'); //очистка даних користувача
        this.authorizationService.loggedIn.next(null);
        this.router.navigate(['/products']); //перехід на сторінку товарів
    }
    cancel() {
        this.router.navigate(['/products']); //перехід на сторінку товарів
    }
}
SignOutComponent.ɵfac = function SignOutComponent_Factory(t) { return new (t || SignOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignOutComponent, selectors: [["app-sign-out"]], decls: 9, vars: 0, consts: [[1, "container"], [1, "containerIN"], [1, "button"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function SignOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sing out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignOutComponent_Template_button_click_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignOutComponent_Template_button_click_7_listener() { return ctx.out(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .containerIN[_ngcontent-%COMP%] {\n  background-color: #f3f3f3;\n  width: 300px;\n}\n.container[_ngcontent-%COMP%]   .containerIN[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .containerIN[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   .containerIN[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24tb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRU47QUFETTtFQUNFLFlBQUE7QUFHUiIsImZpbGUiOiJzaWduLW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIC5jb250YWluZXJJTntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1dHRvbntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBidXR0b257XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vitaliykrytovych/Projects/Angular/onlineStore/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "osbo");
/* harmony import */ var _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carrousel/carrousel.component */ "BAT5");



class HomeComponent {
    constructor(constantsService) {
        this.constantsService = constantsService;
        this.data = null;
    }
    ngOnInit() {
        this.data = this.constantsService.companyDetails;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 2, consts: [[1, "main"], [1, "name"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-carrousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
    } }, directives: [_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_2__["CarrouselComponent"]], styles: ["section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\nsection[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 0 auto;\n  margin-top: 50px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUFNO0VBQ0UsbUJBQUE7QUFFUiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcbiAgLm1haW57XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHB7XG4gICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLm5hbWV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "osbo");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");







const _c0 = function () { return ["/checkIn"]; };
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/signIn"]; };
function HeaderComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/signOut"]; };
function HeaderComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/users"]; };
function HeaderComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeUser[1].name);
} }
const _c4 = function () { return ["/admin"]; };
function HeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
function HeaderComponent_ul_27_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HeaderComponent_ul_27_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function HeaderComponent_ul_27_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function HeaderComponent_ul_27_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.activeUser[1].name);
} }
function HeaderComponent_ul_27_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
const _c5 = function () { return ["/home"]; };
const _c6 = function () { return ["/products"]; };
const _c7 = function () { return ["/basket"]; };
function HeaderComponent_ul_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_ul_27_a_8_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_ul_27_a_10_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_ul_27_a_12_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_ul_27_a_14_Template, 2, 3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ul_27_a_16_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.activeUser && ctx_r5.check);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.activeUser && !ctx_r5.check);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.activeUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.activeUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.activeUser && ctx_r5.adminEmail === ctx_r5.activeUser[1].email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.totalPrice, " \u0433\u0440\u043D.");
} }
class HeaderComponent {
    constructor(constantsService, authorizationService, orderService) {
        this.constantsService = constantsService;
        this.authorizationService = authorizationService;
        this.orderService = orderService;
        this.localProducts = null;
        this.totalPrice = null;
        this.activeUser = null; //залогінений user, в т.ч. адмін
        this.check = true; //переключння між модалками 'check in' / 'sign in'
    }
    ngOnInit() {
        this.identificationAdmin();
        this.initSubscriptionPrice();
        this.initSubscriptionUser();
        this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
        this.initSubscriptionCheckIn();
        this.loadLocalStoragePrice(); //якщо в LocalStorage вже є товар у корзині
    }
    initSubscriptionPrice() {
        this.orderService.basket.subscribe(() => {
            this.loadLocalStoragePrice();
        });
    }
    initSubscriptionUser() {
        this.authorizationService.loggedIn.subscribe(() => {
            this.loadLocalStorageUser();
        });
    }
    initSubscriptionCheckIn() {
        this.authorizationService.checkIn.subscribe((data) => {
            this.check = data;
        });
    }
    loadLocalStoragePrice() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику є товари
            this.localProducts = JSON.parse(localStorage.getItem('basket'));
            this.totalPrice = this.orderService.total(this.localProducts);
        }
        else { //якщо в кошику немає товарів
            this.totalPrice = 0;
        }
    }
    loadLocalStorageUser() {
        if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //якщо є залогінений користувач
            this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
        }
        else { //якщо немає залогінених користувачів
            this.activeUser = null;
        }
    }
    identificationAdmin() {
        this.adminEmail = this.constantsService.adminEmail;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 28, vars: 16, consts: [[1, "header"], [1, "navbar", "navbar-light", "bigHeader"], [1, "d-flex", "align-items-start"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "horizontal", 1, "nav", "flex-row", "nav-pills", "headerNav"], [3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", "basketPrice", 3, "routerLink"], ["src", "https://www.lapiec-pizza.com.ua/wp-content/themes/lapiec/fonts/svg-icons/shopping-cart.svg", "alt", "shopping-cart"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "nav-link user", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "smallHeader"], ["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["routerLinkActive", "active", 1, "nav-link", "user", 3, "routerLink"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item user", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item admin", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "dropdown-item", "basketPrice", 3, "routerLink"], ["routerLinkActive", "active", 1, "dropdown-item", "user", 3, "routerLink"], ["routerLinkActive", "active", 1, "dropdown-item", "admin", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Online Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_a_16_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_a_17_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_a_18_Template, 2, 3, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_a_19_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Online Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_ul_27_Template, 23, 12, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.totalPrice, " \u0433\u0440\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activeUser && ctx.check);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activeUser && !ctx.check);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser && ctx.adminEmail === ctx.activeUser[1].email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: var(--header-background);\n  display: flex;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0 50px 0 0;\n}\n.header[_ngcontent-%COMP%]   .basketPrice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  margin-right: 2px;\n}\n.header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: bold;\n  border: 1px solid #0099ff;\n  margin: 0 5px;\n}\n@media (max-width: 610px) {\n  .header[_ngcontent-%COMP%]   .bigHeader[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .header[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%]   #button-basic[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .header[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 310px) {\n  .header[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .header[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n  }\n  .header[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 0 0 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUZGO0FBSkU7RUFDRSxhQUFBO0FBTUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBSUE7RUFFSTtJQUNFLGFBQUE7RUFGSjtFQUlFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VBRko7RUFHSTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBRE47RUFHSTtJQUNFLFNBQUE7RUFETjtBQUNGO0FBTUE7RUFDRTtJQUNFLGFBQUE7RUFKRjtFQUtFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQUhKO0VBSUk7SUFDRSxnQkFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIC5zbWFsbEhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGgzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDUwcHggMCAwO1xuICB9XG4gIC5iYXNrZXRQcmljZSB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICB9XG4gIH1cbiAgLnVzZXIge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTUzLCAyNTUpO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIC5iaWdIZWFkZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNtYWxsSGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgI2J1dHRvbi1iYXNpYyB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICAgLnVzZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMTBweCkge1xuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC5zbWFsbEhlYWRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "2NMY":
/*!************************************************************!*\
  !*** ./src/app/shared/services/modal-add-edite.service.ts ***!
  \************************************************************/
/*! exports provided: ModalAddEditeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAddEditeService", function() { return ModalAddEditeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModalAddEditeService {
    constructor() {
        this.modalDelete = false; //видимість модалки delete
        this.deleteCategory = null; //категорія, що видаляється
        this.modalAddEditCategory = false; //видимість модалки додавання/редагування категорії
        this.add = true; //визначення додавання чи редагування категорії
        this.categoryNotEmpty = false;
        this.editCategory = null; //категорія, що редагується
        this.deleteProduct = null; //продукт, що видаляється
        this.modalAddEditProd = false; //видимість модалки додавання/редагування продукта
        this.addProd = true; //визначення додавання чи редагування продукта
        this.editProduct = null; //продукт, що редагується
        this.deleteUser = null; //user, що видаляється
    }
}
ModalAddEditeService.ɵfac = function ModalAddEditeService_Factory(t) { return new (t || ModalAddEditeService)(); };
ModalAddEditeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalAddEditeService, factory: ModalAddEditeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2qjx":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/products.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "osbo");
/* harmony import */ var _modal_add_edite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-add-edite.service */ "2NMY");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.service */ "U5Sr");





class ProductsService {
    constructor(orderService, constantsService, modalService, categoriesService) {
        this.orderService = orderService;
        this.constantsService = constantsService;
        this.modalService = modalService;
        this.categoriesService = categoriesService;
    }
    getProducts() {
        return fetch(`${this.constantsService.firebaseProducts}.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => Object.entries(response))
            .catch(error => {
            console.warn('getProducts', error);
            return null;
        });
    }
    getOneProduct(id) {
        return fetch(`${this.constantsService.firebaseProducts}/${id}/.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .catch(error => {
            console.warn('getOneProduct', error);
            return null;
        });
    }
    postProduct(product) {
        return fetch(`${this.constantsService.firebaseProducts}.json`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    patchProduct(product, ind) {
        return fetch(`${this.constantsService.firebaseProducts}/${ind}/.json`, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    deleteProduct(productID) {
        return fetch(`${this.constantsService.firebaseProducts}/${productID}.json`, {
            method: 'DELETE',
            body: JSON.stringify(productID),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    //----------------------------------------------------------
    postId(product) {
        return fetch(`${this.constantsService.firebaseCategories}/${product.category[0]}/productsID.json`, {
            method: 'POST',
            body: JSON.stringify([product.id]),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    deleteId(product) {
        let prodID = '';
        let arrCategories = [];
        this.categoriesService.getCategories()
            .then((response) => {
            arrCategories = response;
        })
            .then(() => {
            arrCategories.forEach((element) => {
                if (element[1].productsID) {
                    const obj = element[1].productsID;
                    for (const key in obj) {
                        if (obj[key][0] === product[1].id) {
                            prodID = key;
                        }
                    }
                }
            });
        })
            .then(() => {
            fetch(`${this.constantsService.firebaseCategories}/${product[1].category[0]}/productsID/${prodID}.json`, {
                method: 'DELETE',
                body: JSON.stringify(prodID),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        });
    }
    //----------------------------------------------------------
    addToBasket(product) {
        let localProducts = [];
        if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику вже є товари
            localProducts = JSON.parse(localStorage.getItem('basket')); //отримання товарів з кошика
            if (localProducts.some(localProduct => localProduct[0] === product[0])) { //якщо додається товар, що вже є в кошику
                const index = localProducts.findIndex(localProduct => localProduct[0] === product[0]); //визначається його індекс в масиві товарів, що купуються
                localProducts[index][1].count = product[1].count; //змінюється кількість на поточну
            }
            else { //якщо додається товар, якого ще немає в кошику
                localProducts.push(product);
            }
        }
        else { //якщо в кошику ще нема ніяких товарів
            localProducts.push(product);
        }
        localStorage.setItem('basket', JSON.stringify(localProducts));
        this.orderService.basket.next(product);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modal_add_edite_service__WEBPACK_IMPORTED_MODULE_3__["ModalAddEditeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6nK1":
/*!******************************************************!*\
  !*** ./src/app/shared/guards/auth-activate.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActivateGuard", function() { return AuthActivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthActivateGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        return this.isLogin();
    }
    isLogin() {
        if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //перевірка наявності залогіненого користувача
            return true;
        }
        else {
            this.router.navigate(['/checkIn']);
            return false;
        }
    }
}
AuthActivateGuard.ɵfac = function AuthActivateGuard_Factory(t) { return new (t || AuthActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthActivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthActivateGuard, factory: AuthActivateGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7ozh":
/*!************************************************************!*\
  !*** ./src/app/shared/guards/auth-admin-activate.guard.ts ***!
  \************************************************************/
/*! exports provided: AuthAdminActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminActivateGuard", function() { return AuthAdminActivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/constants.service */ "osbo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthAdminActivateGuard {
    constructor(constantsService, router) {
        this.constantsService = constantsService;
        this.router = router;
    }
    canLoad(route, segments) {
        return this.isAdminLogin();
    }
    isAdminLogin() {
        if (localStorage.length > 0
            &&
                localStorage.getItem('activeUser')
            &&
                (this.constantsService.adminEmail === JSON.parse(localStorage.getItem('activeUser'))[1].email)) {
            return true;
        }
        else {
            this.router.navigate(['/products']);
            return false;
        }
    }
}
AuthAdminActivateGuard.ɵfac = function AuthAdminActivateGuard_Factory(t) { return new (t || AuthAdminActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthAdminActivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthAdminActivateGuard, factory: AuthAdminActivateGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9Zvn":
/*!**********************************************************************!*\
  !*** ./src/app/pages/products-details/products-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailsComponent", function() { return ProductsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_uuidv4_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/uuidv4.service */ "xe31");
/* harmony import */ var src_app_shared_services_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/comments.service */ "Z9/t");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/products.service */ "2qjx");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









const _c0 = function (a0) { return [a0]; };
function ProductsDetailsComponent_section_1_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/products/" + ctx_r6.curentProduct.category[1].nameEN.toLowerCase() + "/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.curentProduct.category[1].nameEN);
} }
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/products"]; };
function ProductsDetailsComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductsDetailsComponent_section_1_li_10_Template, 3, 4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsDetailsComponent_section_1_Template_span_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.productCounter(ctx_r7.curentProduct, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsDetailsComponent_section_1_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.productCounter(ctx_r9.curentProduct, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsDetailsComponent_section_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addToBasket(ctx_r10.curentProduct); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.curentProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.curentProduct.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.curentProduct.nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.curentProduct.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0426\u0456\u043D\u0430: ", ctx_r0.curentProduct.price, " \u0433\u0440\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.curentProduct.count);
} }
function ProductsDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0426\u0435\u0439 \u0442\u043E\u0432\u0430\u0440 \u0449\u0435 \u043D\u0435 \u043C\u0430\u0454 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsDetailsComponent_div_3_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0456\u044E,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0434\u043E\u0434\u0430\u0442\u0438 \u0449\u0435 \u043E\u0434\u0438\u043D \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsDetailsComponent_div_3_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.comment = $event; })("input", function ProductsDetailsComponent_div_3_Template_textarea_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.commentMessage = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsDetailsComponent_div_3_h5_2_Template, 6, 0, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsDetailsComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.postCommentNotModerated(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.commentMessage);
} }
function ProductsDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u0435\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C \u0437\u0430\u043B\u0438\u0448\u0430\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0431\u0443\u0434\u044C-\u043B\u0430\u0441\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043B\u0438\u0448\u0430\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u0430\u0441 \u0437\u0430\u0431\u043B\u043E\u0432\u0430\u043D\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsDetailsComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0410\u0432\u0442\u043E\u0440:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0414\u0430\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", i_r18 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r17.autorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 4, comment_r17.date, "yyyy-MM-dd -- HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r17.text);
} }
function ProductsDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsDetailsComponent_div_6_div_1_Template, 19, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.curentProduct.comments);
} }
class ProductsDetailsComponent {
    constructor(uuidv4Service, commentsService, productService, authorizationService, route, usersService) {
        this.uuidv4Service = uuidv4Service;
        this.commentsService = commentsService;
        this.productService = productService;
        this.authorizationService = authorizationService;
        this.route = route;
        this.usersService = usersService;
        this.activeUser = null; //залогінений user, в т.ч. адмін
        this.commentMessage = false;
        this.comment = '';
        this.idProduct = '';
        this.curentProduct = null;
    }
    ngOnInit() {
        this.getMyProduct();
        this.initSubscriptionUser();
        this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
    }
    getMyProduct() {
        this.idProduct = this.route.snapshot.paramMap.get('id');
        this.productService.getOneProduct(this.idProduct)
            .then(product => this.curentProduct = product);
    }
    productCounter(product, isIncrease) {
        if (isIncrease) {
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
            }
        }
    }
    addToBasket(product) {
        this.productService.addToBasket([this.idProduct, product]);
    }
    postCommentNotModerated() {
        if (this.comment) {
            const currentComment = {
                id: this.uuidv4Service.uuidv4(),
                text: this.comment,
                product: this.curentProduct,
                productID: this.idProduct,
                category: this.curentProduct.category[1].nameUA,
                autor: this.activeUser,
                autorEmail: this.activeUser[1].email,
                date: new Date(),
                moderation: false
            };
            this.commentsService.postCommentNotModerated(currentComment); //запис коментаря в базу всіх непромодерований коментарів
            this.comment = '';
            this.commentMessage = true;
        }
    }
    initSubscriptionUser() {
        this.authorizationService.loggedIn.subscribe(() => {
            this.loadLocalStorageUser();
        });
    }
    loadLocalStorageUser() {
        if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //якщо є залогінений користувач
            this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
        }
        else { //якщо немає залогінених користувачів
            this.activeUser = null;
        }
        this.usersService.getOneUser(this.activeUser[0])
            .then(respons => {
            this.orBlocked = respons.block; //актуальна інформація про блокування
        });
    }
}
ProductsDetailsComponent.ɵfac = function ProductsDetailsComponent_Factory(t) { return new (t || ProductsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_uuidv4_service__WEBPACK_IMPORTED_MODULE_1__["Uuidv4Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"])); };
ProductsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsDetailsComponent, selectors: [["app-products-details"]], decls: 7, vars: 6, consts: [["class", "mainProduct", 4, "ngIf"], ["class", "noComments", 4, "ngIf"], ["class", "createComment", 4, "ngIf"], ["class", "notactiveUser", 4, "ngIf"], ["class", "blockedUser", 4, "ngIf"], ["class", "comments", 4, "ngIf"], [1, "mainProduct"], [1, "row"], [1, "col-md-12", "col-lg-l2"], [1, "breadcrumb", "smallSlideLeft"], [3, "routerLink"], [4, "ngIf"], [1, "productDetail"], [1, "img"], [3, "src"], [1, "info"], [1, "name"], [1, "description"], [1, "productCountWrapper"], [1, "productCount", 3, "click"], ["type", "text", 3, "value"], [1, "btn", "btn-success", 3, "click"], [1, "noComments"], [1, "createComment"], ["placeholder", "Input new comment...", "cols", "30", "rows", "4", 3, "ngModel", "ngModelChange", "input"], ["class", "commentMessage", 4, "ngIf"], [1, "commentMessage"], [1, "notactiveUser"], [1, "blockedUser"], [1, "comments"], ["class", "oneComment", 4, "ngFor", "ngForOf"], [1, "oneComment"], [1, "title"], [1, "num"], [1, "user"], [1, "text"]], template: function ProductsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsDetailsComponent_section_1_Template, 29, 10, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsDetailsComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsDetailsComponent_div_3_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsDetailsComponent_div_4_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsDetailsComponent_div_5_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsDetailsComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.curentProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.curentProduct && !ctx.curentProduct.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.curentProduct && ctx.activeUser && !ctx.orBlocked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.curentProduct && !ctx.activeUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.curentProduct && ctx.orBlocked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.curentProduct && ctx.curentProduct.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["main[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  padding-left: 0;\n  background-color: transparent;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 17px;\n  transition: color 0.25s linear;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #c80000;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .productDetail[_ngcontent-%COMP%] {\n  display: flex;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .productDetail[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 400px;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .productDetail[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .productDetail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 10px;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .productDetail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0.8rem;\n  width: 3rem;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .productDetail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px;\n}\nmain[_ngcontent-%COMP%]   .mainProduct[_ngcontent-%COMP%]   .productDetail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.8rem 0;\n}\nmain[_ngcontent-%COMP%]   .createComment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%]   .createComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  width: 400px;\n  padding-left: 10px;\n}\nmain[_ngcontent-%COMP%]   .createComment[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 0.8rem 0;\n}\nmain[_ngcontent-%COMP%]   .createComment[_ngcontent-%COMP%]   .commentMessage[_ngcontent-%COMP%] {\n  color: red;\n}\nmain[_ngcontent-%COMP%]   .blockedUser[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  color: red;\n}\nmain[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 20px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3RzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUFDTjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFHQSw4QkFBQTtBQUVSO0FBQU07RUFDRSxjQUFBO0FBRVI7QUFDSTtFQUNFLGFBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtBQUVSO0FBRFE7RUFDRSxXQUFBO0FBR1Y7QUFBTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQVU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVaO0FBQVU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUVaO0FBQ1E7RUFDRSxnQkFBQTtBQUNWO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUdJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBR0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdJO0VBQ0UsVUFBQTtBQUROO0FBSUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQUZKO0FBSUU7RUFDRSxpQkFBQTtBQUZKIiwiZmlsZSI6InByb2R1Y3RzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgLm1haW5Qcm9kdWN0e1xuICAgIC5icmVhZGNydW1iIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbGkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4yNTBzIGxpbmVhcjtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMjUwcyBsaW5lYXI7XG4gICAgICB9XG4gICAgICBsaTpob3ZlciBhIHtcbiAgICAgICAgY29sb3I6ICNjODAwMDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0RGV0YWlse1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC5pbWd7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaW5mb3tcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIC5wcm9kdWN0Q291bnRXcmFwcGVye1xuICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAuOHJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYnRue1xuICAgICAgICAgIG1hcmdpbjogMC44cmVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNyZWF0ZUNvbW1lbnR7IC8v0YHRgtCy0L7RgNC10L3QvdGPINC60L7QvNC10L3RgtCw0YDRj1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5idG57XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBtYXJnaW46IDAuOHJlbSAwO1xuICAgIH1cbiAgICAuY29tbWVudE1lc3NhZ2V7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuICAuYmxvY2tlZFVzZXJ7XG4gICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBoNXtcbiAgICBtYXJnaW46IDIwcHggNTBweDtcbiAgfVxufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyANWW5BhJP63OVS6ZLNn3qRRalgULvX3gI",
        authDomain: "onlinestore-b84a8.firebaseapp.com",
        projectId: "onlinestore-b84a8",
        storageBucket: "onlinestore-b84a8.appspot.com",
        messagingSenderId: "540216322202",
        appId: "1:540216322202:web:4597bcc84a271ebb925723"
    }
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

/***/ "BAT5":
/*!********************************************************!*\
  !*** ./src/app/pages/carrousel/carrousel.component.ts ***!
  \********************************************************/
/*! exports provided: CarrouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrouselComponent", function() { return CarrouselComponent; });
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_products_top_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/products-top.service */ "qsJM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CarrouselComponent_carousel_2_slide_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r2[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2[1].nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2[1].description);
} }
function CarrouselComponent_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0422\u043E\u043F \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0439:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarrouselComponent_carousel_2_slide_3_Template, 7, 3, "slide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.arrProductsTop);
} }
class CarrouselComponent {
    constructor(productsTopService) {
        this.productsTopService = productsTopService;
        this.arrProductsTop = null;
    }
    ngOnInit() {
        this.getProductsTop();
    }
    getProductsTop() {
        this.productsTopService
            .getProductsTop()
            .then(response => {
            this.arrProductsTop = response;
        });
    }
}
CarrouselComponent.ɵfac = function CarrouselComponent_Factory(t) { return new (t || CarrouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_products_top_service__WEBPACK_IMPORTED_MODULE_2__["ProductsTopService"])); };
CarrouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarrouselComponent, selectors: [["app-carrousel"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_0__["CarouselConfig"], useValue: { interval: 2500, noPause: true, showIndicators: true } }
        ])], decls: 3, vars: 1, consts: [[1, "oneProduct"], [4, "ngIf"], [1, "title"], [4, "ngFor", "ngForOf"], [2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption", "d-none", "d-md-block"]], template: function CarrouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarrouselComponent_carousel_2_Template, 4, 1, "carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrProductsTop);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_0__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_0__["SlideComponent"]], styles: [".oneProduct[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  max-width: 600px;\n  padding: 0 10px;\n}\n.oneProduct[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.oneProduct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6ImNhcnJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmVQcm9kdWN0e1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICAudGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "BnsD":
/*!******************************************************!*\
  !*** ./src/app/pages/check-in/check-in.component.ts ***!
  \******************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CheckInComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C - c\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0435\u043C\u0435\u0439\u043B. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C \u0434\u043E \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckInComponent {
    constructor(usersService, authorizationService, router) {
        this.usersService = usersService;
        this.authorizationService = authorizationService;
        this.router = router;
        this.form = null;
        this.arrUsers = [];
        this.userEmail = '';
        this.userPassword = '';
        this.passwordError = false;
        this.emailError = false;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.usersService
            .getUsers()
            .then(response => {
            this.arrUsers = response;
        });
    }
    checkUser(form) {
        this.form = form;
        if (form.form.valid) {
            this.arrUsers.forEach((element) => {
                if (element[1].email === this.userEmail) { //якщо користувач зареєстрований
                    if (element[1].password === this.userPassword) { //якщо користувач зареєстрований і ввів правильний пароль
                        this.authorizationService.userLocalStorage(element);
                        this.router.navigate(['/products']); //перехід на сторінку товарів
                    }
                    else { //якщо користувач зареєстрований, але ввів неправильний пароль
                        this.passwordError = true;
                        this.emailError = false;
                    }
                }
                else { //якщо користувач не зареєстрований або ввів не правильний емейл
                    this.passwordError = false;
                    this.emailError = true;
                }
            });
        }
    }
    signIn() {
        if (this.form) {
            this.form.resetForm();
        }
        this.form = null;
        this.passwordError = false;
        this.emailError = false;
        this.authorizationService.checkIn.next(false);
        this.router.navigate(['/signIn']);
    }
}
CheckInComponent.ɵfac = function CheckInComponent_Factory(t) { return new (t || CheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInComponent, selectors: [["app-check-in"]], decls: 26, vars: 6, consts: [[1, "container"], [1, "containerIN"], ["myFormCheck", "ngForm"], [1, "form-group"], ["for", "userEmail"], ["required", "", "pattern", "^[a-zA-Z0-9_\\.\\-]{1,15}@[a-zA-Z]{1,6}\\.[a-zA-Z]{2,6}$", "name", "email", "type", "text", "id", "userEmail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "userPassword"], ["required", "", "name", "password", "type", "text", "id", "userPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "button"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["class", "err", 4, "ngIf"], [1, "err"]], template: function CheckInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0423\u0432\u0456\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email incorrect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInComponent_Template_input_ngModelChange_15_listener($event) { return ctx.userPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password incorrect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.checkUser(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0423\u0432\u0456\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_22_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CheckInComponent_p_24_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckInComponent_p_25_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: red;\n}\n.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNrLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJjaGVjay1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBcbiAgLmVycntcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLmJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBoNHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "DIiU":
/*!************************************************************!*\
  !*** ./src/app/pages/basket-page/basket-page.component.ts ***!
  \************************************************************/
/*! exports provided: BasketPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageComponent", function() { return BasketPageComponent; });
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "QnLe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/map.service */ "ZL7T");
/* harmony import */ var src_app_shared_services_uuidv4_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/uuidv4.service */ "xe31");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










const _c0 = ["map"];
function BasketPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041D\u0430\u0440\u0430\u0437\u0456 \u0412\u0430\u0448 \u043A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BasketPageComponent_table_2_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasketPageComponent_table_2_tr_21_Template_span_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const objProduct_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.productCounter(objProduct_r7[1], false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasketPageComponent_table_2_tr_21_Template_span_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const objProduct_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.productCounter(objProduct_r7[1], true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasketPageComponent_table_2_tr_21_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const objProduct_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.deleteProduct(objProduct_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Del");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const objProduct_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", objProduct_r7[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](objProduct_r7[1].nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](objProduct_r7[1].category[1].nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](objProduct_r7[1].price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](objProduct_r7[1].count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](objProduct_r7[1].price * objProduct_r7[1].count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", objProduct_r7[1].count);
} }
function BasketPageComponent_table_2_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0422\u0430\u043A\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E - \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BasketPageComponent_table_2_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041F\u043E\u043B\u0435 \"Address\" - \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BasketPageComponent_table_2_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0412\u0432\u0456\u0439\u0434\u0456\u0442\u044C \u0432 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BasketPageComponent_table_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, BasketPageComponent_table_2_tr_21_Template, 25, 8, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BasketPageComponent_table_2_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasketPageComponent_table_2_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.displayMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BasketPageComponent_table_2_tr_31_Template, 4, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, BasketPageComponent_table_2_tr_32_Template, 4, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BasketPageComponent_table_2_tr_33_Template, 4, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u0412\u0441\u044C\u043E\u0433\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasketPageComponent_table_2_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.returnProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0449\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasketPageComponent_table_2_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.buy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u041A\u0443\u043F\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.arrProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.errorAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.emptyAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.emptyUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.deliveryCost, " \u0433\u0440\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.totalPrice + ctx_r1.deliveryCost, " \u0433\u0440\u043D.");
} }
function BasketPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 30, 31);
} }
class BasketPageComponent {
    constructor(usersService, authorizationService, orderService, router, mapService, uuidv4Service, cdr) {
        this.usersService = usersService;
        this.authorizationService = authorizationService;
        this.orderService = orderService;
        this.router = router;
        this.mapService = mapService;
        this.uuidv4Service = uuidv4Service;
        this.cdr = cdr;
        this.gmarker = null;
        this.address = ''; //ввід адреси доставки
        this.formattedAddress = ''; //відформатована/четабельна адреса доставки
        this.errorAddress = false; //помилка в адресі доставки
        this.emptyAddress = false; //адресу доставки не введено
        this.emptyUser = false; //немає активного юзера
        this.deliveryCost = 0; //вартість доставки
        this.arrProducts = null;
        this.totalPrice = null;
        this.activeUser = null; //залогінений user, в т.ч. адмін
    }
    ngOnInit() {
        this.initSubscriptionPrice();
        this.initSubscriptionUser();
        this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
        this.loadLocalStoragePrice(); //якщо в LocalStorage вже є товар у корзині
        this.initMap();
    }
    initSubscriptionPrice() {
        this.orderService.basket.subscribe(() => {
            this.loadLocalStoragePrice();
        });
    }
    initSubscriptionUser() {
        this.authorizationService.loggedIn.subscribe(() => {
            this.loadLocalStorageUser();
        });
    }
    loadLocalStoragePrice() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику є товари
            this.arrProducts = JSON.parse(localStorage.getItem('basket'));
            this.totalPrice = this.orderService.total(this.arrProducts);
        }
        else { //якщо в кошику немає товарів
            this.arrProducts = null;
            this.totalPrice = 0;
        }
    }
    loadLocalStorageUser() {
        if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //якщо є залогінений користувач
            this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
        }
        else { //якщо немає залогінених користувачів
            this.activeUser = null;
        }
    }
    productCounter(product, isIncrease) {
        if (isIncrease) {
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
            }
        }
        this.renewalLocalStorage();
    }
    deleteProduct(product) {
        this.arrProducts = this.arrProducts.filter(elem => elem[0] !== product[0]);
        if (this.arrProducts && this.arrProducts.length === 0) {
            this.arrProducts = null;
        } //якщо видалено останній продукт кошика
        this.renewalLocalStorage();
    }
    renewalLocalStorage() {
        if (this.arrProducts && this.arrProducts.length > 0) { //якщо у кошику є продукти
            localStorage.setItem('basket', JSON.stringify(this.arrProducts));
            this.orderService.basket.next(this.arrProducts);
        }
        else { //якщо видалено останній продукт кошика
            localStorage.removeItem('basket'); //очистка кошика
            this.orderService.basket.next(null);
        }
    }
    buy() {
        if (this.activeUser) {
            this.emptyUser = false;
            if (this.formattedAddress) { //введення адреси доставки
                const newOrder = {
                    id: this.uuidv4Service.uuidv4(),
                    date: new Date(),
                    user: this.activeUser,
                    product: this.arrProducts,
                    total: this.totalPrice,
                    deliveryAddress: this.formattedAddress,
                    deliveryCost: this.deliveryCost,
                    orPaid: false,
                    whetherDelivered: false
                };
                this.orderService.addOrder(newOrder); //запис поточного ордера в масив всіх ордерів
                this.usersService.getOneUser(this.activeUser[0]) //отримання з firebase останніх даних про поточного користувача
                    .then(data => {
                    const currentUser = data;
                    if (currentUser.orders) { //якщо користувач вже має хоч 1 ордер
                        currentUser.orders.push(newOrder);
                    }
                    else {
                        currentUser.orders = [newOrder];
                    }
                    this.usersService.patchUser([this.activeUser[0], currentUser]); //внесення ордера в масив всіх ордерів користувача
                    localStorage.removeItem('basket'); //очистка кошика
                    this.orderService.basket.next(null);
                    this.emptyAddress = false;
                });
            }
            else {
                this.emptyAddress = true;
            }
        }
        else {
            this.emptyUser = true;
        }
    }
    returnProducts() {
        this.router.navigate(['/products']);
    }
    initMap() {
        if (this.arrProducts) {
            const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__["Loader"]({
                apiKey: this.mapService.apiKey
            });
            loader.load()
                .then(() => {
                this.map = new google.maps.Map(this.divMap.nativeElement, {
                    center: this.mapService.mapLocation,
                    zoom: 12.5,
                    disableDefaultUI: true
                });
                const polygon1 = new google.maps.Polygon(this.mapService.sector1Param); //нанесення на карту sector1
                polygon1.setMap(this.map);
                const polygon2 = new google.maps.Polygon(this.mapService.sector2Param); //нанесення на карту sector2
                polygon2.setMap(this.map);
            });
        }
    }
    displayMap() {
        if (this.address) {
            if (this.gmarker) {
                this.gmarker.setMap(null);
            }
            ; //очистка попереднього маркера
            const geocoder = new google.maps.Geocoder(); //новий маркер адреси доставки користувача
            geocoder.geocode({ 'address': this.address }, (results, status) => {
                if (status == 'OK') {
                    const geoLoc = results[0].geometry.location;
                    this.formattedAddress = results[0].formatted_address;
                    this.gmarker = new google.maps.Marker({
                        position: geoLoc,
                        map: this.map,
                        title: "Address delivery"
                    });
                    this.deliveryCost = this.mapService.whichSector(//визначення в якому секторі адреса доставки
                    geoLoc.lat(), geoLoc.lng());
                    this.errorAddress = false;
                }
                else {
                    this.errorAddress = true;
                    console.warn(status);
                }
                this.cdr.detectChanges();
            });
            this.emptyAddress = false;
        }
        else {
            this.emptyAddress = true;
        }
    }
}
BasketPageComponent.ɵfac = function BasketPageComponent_Factory(t) { return new (t || BasketPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_uuidv4_service__WEBPACK_IMPORTED_MODULE_7__["Uuidv4Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
BasketPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BasketPageComponent, selectors: [["app-basket-page"]], viewQuery: function BasketPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divMap = _t.first);
    } }, decls: 4, vars: 3, consts: [["class", "basketEmpty", 4, "ngIf"], ["class", "table", 4, "ngIf"], ["class", "full", "id", "map", 4, "ngIf"], [1, "basketEmpty"], [1, "aRouter"], ["routerLink", "/products"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "address"], ["colspan", "2"], ["colspan", "5"], ["type", "text", "name", "address", "placeholder", "Input the delivery address...", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-block", 3, "click"], [4, "ngIf"], [1, "delivery"], [1, "trTotal"], [1, "trButton"], ["colspan", "4"], ["colspan", "3"], [1, "btn", "btn-warning", "btn-block", 3, "click"], [1, "img"], [3, "src"], [1, "edit"], [1, "productCountWrapper"], [1, "productCount", 3, "click"], ["type", "text", 3, "value"], [1, "delete"], [1, "btn", "btn-danger", "btn-block", 3, "click"], ["colspan", "9"], [1, "warn"], ["id", "map", 1, "full"], ["map", ""]], template: function BasketPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BasketPageComponent_div_1_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BasketPageComponent_table_2_Template, 54, 7, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BasketPageComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.arrProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nsection[_ngcontent-%COMP%]   .basketEmpty[_ngcontent-%COMP%] {\n  margin: 50px 0 10px 50px;\n}\nsection[_ngcontent-%COMP%]   .basketEmpty[_ngcontent-%COMP%]   .aRouter[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nsection[_ngcontent-%COMP%]   .basketEmpty[_ngcontent-%COMP%]   .aRouter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .trTotal[_ngcontent-%COMP%] {\n  text-align: end;\n  font-weight: bolder;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .delivery[_ngcontent-%COMP%] {\n  text-align: end;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  width: 120px;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0.8rem;\n  width: 3rem;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 3px;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%] {\n  color: red;\n}\nsection[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n}\n@media (max-width: 750px) {\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 8px;\n    max-width: 50px;\n  }\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n    width: 80px;\n    padding-top: 0;\n  }\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 0rem;\n  }\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  section[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jhc2tldC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSx3QkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtBQUVOO0FBRE07RUFDRSxlQUFBO0FBR1I7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFTTtFQUNFLFdBQUE7QUFBUjtBQUdJO0VBQ0UsWUFBQTtBQUROO0FBRU07RUFDRSxjQUFBO0FBQVI7QUFDUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ1Y7QUFDUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ1Y7QUFJTTtFQUNFLHdCQUFBO0FBRlI7QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRlI7QUFLTTtFQUNFLFVBQUE7QUFIUjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFMSjtBQVNBO0VBRUk7SUFDRSxnQkFBQTtFQVBKO0VBUUk7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQU5OO0VBU0k7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQVBOO0VBUU07SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQU5SO0VBT1E7SUFDRSxZQUFBO0VBTFY7RUFPUTtJQUNFLGNBQUE7RUFMVjtFQVNJO0lBQ0UsWUFBQTtFQVBOO0VBVUU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQVJKO0FBQ0YiLCJmaWxlIjoiYmFza2V0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuYmFza2V0RW1wdHl7XG4gICAgbWFyZ2luOiA1MHB4IDAgMTBweCA1MHB4O1xuICAgIC5hUm91dGVye1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0YWJsZXtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIC50clRvdGFse1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG4gICAgLmRlbGl2ZXJ5e1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbiAgICB0aCwgdGR7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuaW1ne1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVkaXR7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAucHJvZHVjdENvdW50V3JhcHBlcntcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgMC44cmVtO1xuICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYWRkcmVzc3tcbiAgICAgIHRke1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICB9XG4gICAgICBpbnB1dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgIH1cbiAgICB9XG4gICAgICAud2FybntcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgfVxuXG4gIC5mdWxse1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICBzZWN0aW9ue1xuICAgIHRhYmxle1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgIHRoLCB0ZHtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgIG1heC13aWR0aDogNTBweDtcblxuICAgICAgfVxuICAgICAgLmVkaXR7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLnByb2R1Y3RDb3VudFdyYXBwZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kZWxldGUgYnV0dG9ue1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5mdWxse1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgfVxufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "osbo");


class FooterComponent {
    constructor(constantsService) {
        this.constantsService = constantsService;
        this.data = null;
    }
    ngOnInit() {
        this.data = this.constantsService.companyDetails;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 30, vars: 11, consts: [[1, "footer"], [1, "details"], [1, "licence"], ["src", "../../../assets/pizza.png"], [1, "workSchedule"], [1, "weekend"], [1, "address"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.licenceYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.licenceText1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.licenceText2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.workSchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.weekend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.index, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("city: ", ctx.data.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("street: ", ctx.data.street, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.house);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.email);
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 100%;\n  background-color: var(--header-background);\n  min-height: 100px;\n  display: flex;\n  justify-content: center;\n  padding: 0 10px;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .licence[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 150px;\n  height: 60px;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .licence[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: brown;\n  width: 30px;\n  z-index: 5;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .licence[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .workSchedule[_ngcontent-%COMP%] {\n  width: 150px;\n  margin: 20px 100px 0;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .workSchedule[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .workSchedule[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%] {\n  color: #db1818;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 150px;\n  text-align: right;\n}\n.footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n@media (max-width: 670px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .workSchedule[_ngcontent-%COMP%] {\n    margin: 20px 20px 0;\n  }\n}\n@media (max-width: 510px) {\n  .footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .licence[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .workSchedule[_ngcontent-%COMP%] {\n    margin: 20px 0 0 0;\n    font-weight: bolder;\n  }\n  .footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .workSchedule[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: 1px;\n  }\n  .footer[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFOO0FBQ007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDUjtBQUNNO0VBQ0UsZ0JBQUE7QUFDUjtBQUdJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUVNO0VBQ0UsY0FBQTtBQUFSO0FBRU07RUFDSSxjQUFBO0FBQVY7QUFJSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRk47QUFHTTtFQUNFLGdCQUFBO0FBRFI7QUFPQTtFQUNFO0lBQ0ksZ0JBQUE7RUFKSjtFQUtFO0lBQ0UsbUJBQUE7RUFISjtBQUNGO0FBT0E7RUFDSTtJQUNFLHNCQUFBO0VBTEo7RUFNSTtJQUNFLGtCQUFBO0VBSk47RUFNSTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFKTjtFQUtNO0lBQ0UsbUJBQUE7RUFIUjtFQU1JO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9vdGVye1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcblxuICAuZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5saWNlbmNle1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGltZ3tcbiAgICAgICAgY29sb3I6IGJyb3duO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgIH1cbiAgICAgIHB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndvcmtTY2hlZHVsZXtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIG1hcmdpbjogMjBweCAxMDBweCAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAud2Vla2VuZHtcbiAgICAgICAgICBjb2xvcjogcmdiKDIxOSwgMjQsIDI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRyZXNze1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgcHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY3MHB4KSB7XG4gIC5mb290ZXJ7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5kZXRhaWxzIC53b3JrU2NoZWR1bGUge1xuICAgICAgbWFyZ2luOiAyMHB4IDIwcHggMDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUxMHB4KSB7XG4gICAgLmZvb3RlciAuZGV0YWlsc3tcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAubGljZW5jZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLndvcmtTY2hlZHVsZSB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgcHtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYWRkcmVzc3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "N5rp":
/*!********************************************************************!*\
  !*** ./src/app/pages/users-page-data/users-page-data.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersPageDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageDataComponent", function() { return UsersPageDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-in/sign-in.component */ "XWge");





function UsersPageDataComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Street:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "House:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userLocal[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userLocal[1].email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userLocal[1].password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userLocal[1].phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userLocal[1].city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userLocal[1].street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userLocal[1].house);
} }
function UsersPageDataComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersPageDataComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeDataUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersPageDataComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sign-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UsersPageDataComponent {
    constructor(usersService, authorizationService) {
        this.usersService = usersService;
        this.authorizationService = authorizationService;
        this.userLocal = null; //залогінений користувач - дані з LocalStorage
        this.changeData = false;
    }
    ngOnInit() {
        this.getDataUser();
    }
    getDataUser() {
        this.userLocal = this.authorizationService.userLocal;
    }
    changeDataUser() {
        this.usersService.changeDataUser = true;
        this.changeData = true;
    }
}
UsersPageDataComponent.ɵfac = function UsersPageDataComponent_Factory(t) { return new (t || UsersPageDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"])); };
UsersPageDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersPageDataComponent, selectors: [["app-users-page-data"]], decls: 4, vars: 3, consts: [["class", "data", 4, "ngIf"], ["class", "button", 4, "ngIf"], ["class", "changeData", 4, "ngIf"], [1, "data"], [1, "dataUser"], [1, "nameData"], [1, "button"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "changeData"]], template: function UsersPageDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPageDataComponent_div_1_Template, 37, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersPageDataComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersPageDataComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changeData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 5px;\n  padding: 10px;\n}\nsection[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .dataUser[_ngcontent-%COMP%]   .nameData[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100px;\n}\nsection[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .dataUser[_ngcontent-%COMP%]   .nameData[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  color: gray;\n}\nsection[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXJzLXBhZ2UtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRUo7QUFBTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQU07RUFDRSxXQUFBO0FBRVI7QUFFRTtFQUNFLGNBQUE7QUFBSiIsImZpbGUiOiJ1c2Vycy1wYWdlLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZGF0YXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC5kYXRhVXNlcntcbiAgICAgIC5uYW1lRGF0YXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgICAubmFtZURhdGEgKyBzcGFue1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "NuUg":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/constants.service */ "osbo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class OrderService {
    constructor(constantsService, http) {
        this.constantsService = constantsService;
        this.http = http;
        this.basket = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.url = constantsService.firebaseOrders;
    }
    getOrders() {
        return fetch(`${this.constantsService.firebaseOrders}.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => Object.entries(response))
            .catch(error => {
            console.warn('getOrders', error);
            return null;
        });
    }
    addOrder(order) {
        return fetch(`${this.constantsService.firebaseOrders}.json`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    total(product) {
        return product.reduce((total, elem) => {
            return total + (elem[1].price * elem[1].count);
        }, 0);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Pjss":
/*!*********************************************************!*\
  !*** ./src/app/shared/guards/auth-no-activate.guard.ts ***!
  \*********************************************************/
/*! exports provided: AuthNoActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoActivateGuard", function() { return AuthNoActivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthNoActivateGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        return this.isLogin();
    }
    isLogin() {
        if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //перевірка наявності залогіненого користувача
            this.router.navigate(['/signOut']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthNoActivateGuard.ɵfac = function AuthNoActivateGuard_Factory(t) { return new (t || AuthNoActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthNoActivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthNoActivateGuard, factory: AuthNoActivateGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'onlineStore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "insert"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: var(--body-background);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  justify-content: space-between;\n}\nsection[_ngcontent-%COMP%]   .insert[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQUU7RUFDRSxPQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmluc2VydHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "U5Sr":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "osbo");
/* harmony import */ var src_app_shared_services_modal_add_edite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/modal-add-edite.service */ "2NMY");



class CategoriesService {
    constructor(constantsService, modalService) {
        this.constantsService = constantsService;
        this.modalService = modalService;
    }
    getCategories() {
        return fetch(`${this.constantsService.firebaseCategories}.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => Object.entries(response))
            .catch(error => {
            console.warn('getCategories', error);
            return null;
        });
    }
    postCategory(category) {
        return fetch(`${this.constantsService.firebaseCategories}.json`, {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    patchСategory(category) {
        return fetch(`${this.constantsService.firebaseCategories}/${category[0]}/.json`, {
            method: 'PATCH',
            body: JSON.stringify(category[1]),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    deleteСategory(categoryID) {
        return fetch(`${this.constantsService.firebaseCategories}/${categoryID}.json`, {
            method: 'DELETE',
            body: JSON.stringify(categoryID),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    //----------------------------------------------------------
    updateCategoryInProd(product, elem) {
        return fetch(`${this.constantsService.firebaseProducts}/${product[0]}/category/1/.json`, {
            method: 'PATCH',
            body: JSON.stringify(elem),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_modal_add_edite_service__WEBPACK_IMPORTED_MODULE_2__["ModalAddEditeService"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XWge":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SignInComponent_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0424\u043E\u0440\u043C\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0434\u0430\u043D\u0456:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_p_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043C\u0438\u043B\u043A\u0430. \u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0456\u0437 \u0442\u0430\u043A\u0438\u043C email \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_div_55_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r13.addUser(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_div_55_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r15.toCheckIn(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0423\u0432\u0456\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_div_56_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx_r16.editUser(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u043C\u0456\u043D\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(usersService, authorizationService, router) {
        this.usersService = usersService;
        this.authorizationService = authorizationService;
        this.router = router;
        this.changeDataUser = false; //чи користувач самостійно змінює свої дані
        this.erorEmail = false;
        this.arrUsers = null;
        this.user = {
            name: '',
            phone: '',
            city: '',
            street: '',
            house: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.getUsers();
        this.getChangeDataUser();
    }
    getUsers() {
        this.usersService
            .getUsers()
            .then(response => {
            this.arrUsers = response;
        });
    }
    getChangeDataUser() {
        this.changeDataUser = this.usersService.changeDataUser;
        if (this.changeDataUser) {
            this.user = {
                name: this.authorizationService.userLocal[1].name,
                phone: this.authorizationService.userLocal[1].phone,
                city: this.authorizationService.userLocal[1].city,
                street: this.authorizationService.userLocal[1].street,
                house: this.authorizationService.userLocal[1].house,
                email: this.authorizationService.userLocal[1].email,
                password: this.authorizationService.userLocal[1].password
            };
        }
    }
    addUser(form) {
        if (form.form.valid) {
            const arrActiveUser = this.arrUsers.filter(element => element[1].email === this.user.email);
            if (arrActiveUser.length > 0) { //перевірка, чи користувач зареєстрований
                this.erorEmail = true;
                return;
            }
            this.usersService.postUser(this.user) //запис користувача
                .then(() => {
                this.router.navigate(['/checkIn']);
            });
        }
    }
    editUser(form) {
        if (form.form.valid) {
            this.usersService.patchUser([this.authorizationService.userLocal[0], this.user]) //зміна даних користувача
                .then(() => {
                this.usersService.changeDataUser = false;
                this.authorizationService.userLocalStorage([this.authorizationService.userLocal[0], this.user]);
                location.reload();
            });
        }
    }
    toCheckIn(form) {
        this.authorizationService.checkIn.next(true);
        this.router.navigate(['/checkIn']);
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 57, vars: 19, consts: [[1, "container"], [1, "containerIN"], ["myForm", "ngForm"], [4, "ngIf"], [1, "form-group"], ["for", "userName"], ["required", "", "name", "name", "type", "text", "id", "userName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "userPhone"], ["required", "", "name", "phone", "type", "text", "id", "userPhone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["for", "userSity"], ["required", "", "name", "city", "type", "text", "id", "userSity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["for", "userStreet"], ["required", "", "name", "street", "type", "text", "id", "userStreet", 1, "form-control", 3, "ngModel", "ngModelChange"], ["street", "ngModel"], ["for", "userHouse"], ["required", "", "name", "house", "type", "text", "id", "userHouse", 1, "form-control", 3, "ngModel", "ngModelChange"], ["house", "ngModel"], ["for", "userEmail"], ["required", "", "pattern", "^[a-zA-Z0-9_\\.\\-]{1,15}@[a-zA-Z]{1,6}\\.[a-zA-Z]{2,6}$", "name", "email", "type", "text", "id", "userEmail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "erorEmail", 4, "ngIf"], ["for", "userPassword"], ["required", "", "name", "password", "type", "text", "id", "userPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["class", "buttons", 4, "ngIf"], [1, "erorEmail"], [1, "buttons"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignInComponent_h4_3_Template, 2, 0, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignInComponent_h4_4_Template, 2, 0, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The \"Name\" field must be filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "The \"Phone\" field must be filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_22_listener($event) { return ctx.user.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The \"City\" field must be filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_29_listener($event) { return ctx.user.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "The \"Street\" field must be filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_36_listener($event) { return ctx.user.house = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The \"House\" field must be filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_43_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Email incorrect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SignInComponent_p_47_Template, 2, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_51_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Password incorrect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SignInComponent_div_55_Template, 5, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SignInComponent_div_56_Template, 3, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changeDataUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changeDataUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r4.valid || _r4.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r5.valid || _r5.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r6.valid || _r6.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.house);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r7.valid || _r7.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r8.valid || _r8.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erorEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r10.valid || _r10.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changeDataUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changeDataUser);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   input.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.container[_ngcontent-%COMP%]   .erorEmail[_ngcontent-%COMP%] {\n  color: red;\n}\n.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 5px 0;\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtBQUNKO0FBQ0U7RUFDRSxVQUFBO0FBQ0o7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDSiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIFxuICBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgLmVyb3JFbWFpbHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIGg0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG4gIC5idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "Z9/t":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/comments.service.ts ***!
  \*****************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.service */ "osbo");
/* harmony import */ var _modal_add_edite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-add-edite.service */ "2NMY");



class CommentsService {
    constructor(constantsService, modalService) {
        this.constantsService = constantsService;
        this.modalService = modalService;
    }
    getComments() {
        return fetch(`${this.constantsService.firebaseComments}.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => Object.entries(response))
            .catch(error => {
            console.warn('getComments', error);
            return null;
        });
    }
    postCommentNotModerated(comment) {
        return fetch(`${this.constantsService.firebaseComments}.json`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    deleteCommentNotModerated(comment) {
        return fetch(`${this.constantsService.firebaseComments}/${comment[0]}.json`, {
            method: 'DELETE',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modal_add_edite_service__WEBPACK_IMPORTED_MODULE_2__["ModalAddEditeService"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");
/* harmony import */ var _pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/products-details/products-details.component */ "9Zvn");
/* harmony import */ var _pages_basket_page_basket_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/basket-page/basket-page.component */ "DIiU");
/* harmony import */ var _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/users-page/users-page.component */ "hB5O");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "XWge");
/* harmony import */ var _pages_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/sign-out/sign-out.component */ "/Lrz");
/* harmony import */ var _pages_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/check-in/check-in.component */ "BnsD");
/* harmony import */ var _pages_users_page_orders_users_page_orders_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/users-page-orders/users-page-orders.component */ "+iWV");
/* harmony import */ var _pages_users_page_comments_users_page_comments_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/users-page-comments/users-page-comments.component */ "a0Fl");
/* harmony import */ var _pages_users_page_data_users_page_data_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/users-page-data/users-page-data.component */ "N5rp");
/* harmony import */ var _pages_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/carrousel/carrousel.component */ "BAT5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ "fXoL");




































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _pages_products_products_component__WEBPACK_IMPORTED_MODULE_18__["ProductsComponent"],
        _pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_19__["ProductsDetailsComponent"],
        _pages_basket_page_basket_page_component__WEBPACK_IMPORTED_MODULE_20__["BasketPageComponent"],
        _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_21__["UsersPageComponent"],
        _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__["SignInComponent"],
        _pages_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_23__["SignOutComponent"],
        _pages_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_24__["CheckInComponent"],
        _pages_users_page_orders_users_page_orders_component__WEBPACK_IMPORTED_MODULE_25__["UsersPageOrdersComponent"],
        _pages_users_page_comments_users_page_comments_component__WEBPACK_IMPORTED_MODULE_26__["UsersPageCommentsComponent"],
        _pages_users_page_data_users_page_data_component__WEBPACK_IMPORTED_MODULE_27__["UsersPageDataComponent"],
        _pages_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_28__["CarrouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"]] }); })();


/***/ }),

/***/ "ZL7T":
/*!************************************************!*\
  !*** ./src/app/shared/services/map.service.ts ***!
  \************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.service */ "osbo");


class MapService {
    constructor(constantsService) {
        this.constantsService = constantsService;
        this.apiKey = 'AIzaSyCM2nK5YCFFnH2EXrXQdgiS5aygJDOkNYg';
        this.mapLocation = { lat: 49.84178857391628, lng: 24.031238169561295 }; //пл.Ринок, 1
        this.sector1 = [
            { lat: 49.844575, lng: 24.026266 },
            { lat: 49.844575, lng: 24.038749 },
            { lat: 49.839575, lng: 24.038749 },
            { lat: 49.839575, lng: 24.026266 } //нижня ліва
        ];
        this.sector2 = [
            { lat: 49.849775, lng: 24.005900 },
            { lat: 49.849775, lng: 24.041370 },
            { lat: 49.832200, lng: 24.041370 },
            { lat: 49.832200, lng: 24.005900 } //нижня ліва
        ];
        this.sector1Param = {
            paths: this.sector1,
            strokeColor: 'green',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'green',
            editable: false,
            fillOpacity: 0.25,
            geodesic: true
        };
        this.sector2Param = {
            paths: this.sector2,
            strokeColor: 'yellow',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'yellow',
            editable: false,
            fillOpacity: 0.25,
            geodesic: true
        };
    }
    whichSector(lat, lng) {
        if ( //якщо зелений сектор
        lat <= this.sector1[0].lat
            &&
                lat >= this.sector1[3].lat
            &&
                lng >= this.sector1[3].lng
            &&
                lng <= this.sector1[2].lng) {
            return this.constantsService.costGreenSector;
        }
        else if ( //якщо жовтий сектор
        lat <= this.sector2[0].lat
            &&
                lat >= this.sector2[3].lat
            &&
                lng >= this.sector2[3].lng
            &&
                lng <= this.sector2[2].lng) {
            return this.constantsService.costYellowSector;
        }
        else { //якщо не зелений і не жовтий
            return this.constantsService.costAnotherSector;
        }
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"])); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "a0Fl":
/*!****************************************************************************!*\
  !*** ./src/app/pages/users-page-comments/users-page-comments.component.ts ***!
  \****************************************************************************/
/*! exports provided: UsersPageCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageCommentsComponent", function() { return UsersPageCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UsersPageCommentsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0414\u0430\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", i_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", comment_r2.productName, " / ", comment_r2.categoryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 5, comment_r2.date, "yyyy-MM-dd -- HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r2.text);
} }
function UsersPageCommentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPageCommentsComponent_div_0_div_1_Template, 19, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentUser.comments);
} }
class UsersPageCommentsComponent {
    constructor(authorizationService, usersService) {
        this.authorizationService = authorizationService;
        this.usersService = usersService;
        this.userLocal = null; //залогінений user, в т.ч. адмін - з LocalStorage
        this.currentUser = null; //поточні дані про користувача з firebase
    }
    ngOnInit() {
        this.initSubscriptionUser();
        this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
    }
    initSubscriptionUser() {
        this.authorizationService.loggedIn.subscribe(() => {
            this.loadLocalStorageUser();
        });
    }
    loadLocalStorageUser() {
        this.userLocal = JSON.parse(localStorage.getItem('activeUser'));
        this.usersService.getOneUser(this.userLocal[0])
            .then(data => {
            this.currentUser = data;
        });
    }
}
UsersPageCommentsComponent.ɵfac = function UsersPageCommentsComponent_Factory(t) { return new (t || UsersPageCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"])); };
UsersPageCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersPageCommentsComponent, selectors: [["app-users-page-comments"]], decls: 1, vars: 1, consts: [["class", "comments", 4, "ngIf"], [1, "comments"], ["class", "oneComment", 4, "ngFor", "ngForOf"], [1, "oneComment"], [1, "title"], [1, "num"], [1, "user"], [1, "text"]], template: function UsersPageCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersPageCommentsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1wYWdlLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "bXUF":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/authorization.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthorizationService {
    constructor(router) {
        this.router = router;
        this.userLocal = null; //залогінений user, в т.ч. адмін - з LocalStorage
        this.currentUser = null; //поточні/свіжі дані про користувача з firebase
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); //чи хтось залогінений
        this.checkIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); //визначення чи це реєстрація, чи це вхід користувача
    }
    userLocalStorage(user) {
        localStorage.setItem('activeUser', JSON.stringify(user)); //запис користувача в localStorage
        this.loggedIn.next(user); //передача користувача по підписках
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dxD2":
/*!**************************************************!*\
  !*** ./src/app/shared/services/users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "osbo");


class UsersService {
    constructor(constantsService) {
        this.constantsService = constantsService;
        this.changeDataUser = false;
    }
    getUsers() {
        return fetch(`${this.constantsService.firebaseUsers}.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => Object.entries(response))
            .catch(error => {
            console.warn('getUsers', error);
            return null;
        });
    }
    getOneUser(id) {
        return fetch(`${this.constantsService.firebaseUsers}/${id}/.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .catch(error => {
            console.warn('getOneUser', error);
            return null;
        });
    }
    postUser(user) {
        return fetch(`${this.constantsService.firebaseUsers}.json`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    patchUser(user) {
        return fetch(`${this.constantsService.firebaseUsers}/${user[0]}/.json`, {
            method: 'PATCH',
            body: JSON.stringify(user[1]),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    deleteUser(userID) {
        return fetch(`${this.constantsService.firebaseUsers}/${userID}.json`, {
            method: 'DELETE',
            body: JSON.stringify(userID),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fdtU":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/products.service */ "2qjx");
/* harmony import */ var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/categories.service */ "U5Sr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "osbo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carrousel/carrousel.component */ "BAT5");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");









function ProductsComponent_section_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_section_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const oneCategory_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.clickCategory(oneCategory_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oneCategory_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("activeCategory", ctx_r5.activeCategory && oneCategory_r6[1].nameUA === ctx_r5.activeCategory[1].nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", oneCategory_r6[1].nameUA, " ");
} }
function ProductsComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_section_1_button_1_Template, 2, 3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrCategories);
} }
function ProductsComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_ul_7_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const oneCategory_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.clickCategory(oneCategory_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oneCategory_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", oneCategory_r11[1].nameUA, " ");
} }
function ProductsComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_ul_7_li_1_Template, 3, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrCategories);
} }
function ProductsComponent_section_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_section_10_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const product_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.openDetails(product_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_section_10_div_1_Template_h5_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const product_r16 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.openDetails(product_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0433\u0440\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_section_10_div_1_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const product_r16 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.productCounter(product_r16, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_section_10_div_1_Template_span_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const product_r16 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.productCounter(product_r16, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_section_10_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const product_r16 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.addToBasket(product_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r16[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r16[1].nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r16[1].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r16[1].price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", product_r16[1].count);
} }
function ProductsComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_section_10_div_1_Template, 20, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.returnedArray);
} }
function ProductsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423 \u0432\u0438\u0431\u0440\u0430\u043D\u0456\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function ProductsComponent_div_12_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r4.arrCurrentProducts.length)("itemsPerPage", ctx_r4.paginationQuantity);
} }
class ProductsComponent {
    constructor(productsService, categoriesService, route, router, constantsService) {
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.route = route;
        this.router = router;
        this.constantsService = constantsService;
        this.arrCategories = null; //всі категорії
        this.activeCategory = null; //поточна категорія
        this.arrCurrentProducts = []; //продукти поточної категорії
        this.arrProducts = null; //всі продукти
        this.returnedArray = null; //для пагінації
    }
    ngOnInit() {
        this.getCategories();
        this.paginationQuantity = this.constantsService.paginationQuantity;
    }
    getCategories() {
        this.categoriesService
            .getCategories() //отримання категорій
            .then(response => {
            this.arrCategories = response;
            this.activeCategory = this.arrCategories[0];
            if (this.route.snapshot.paramMap.get('category')) { //якщо перехід/повернення зі сторінки 1 товару - якщо роут визначено
                this.activeCategory = this.arrCategories.filter(elem => elem[1].nameEN.toLowerCase() === this.route.snapshot.paramMap.get('category'))[0];
            }
            this.navigateCategory();
        })
            .then(() => {
            if (this.route.snapshot.paramMap.get('category')) { //якщо роут вже визначено
                this.getProducts(); //отримання продуктів
            }
        });
    }
    navigateCategory() {
        if (this.arrCategories.length > 0) {
            this.router.navigate([`/products/${this.activeCategory[1].nameEN.toLowerCase()}`]);
        }
    }
    getProducts() {
        this.productsService
            .getProducts()
            .then(response => {
            this.arrProducts = response;
        })
            .then(() => {
            if (this.activeCategory) {
                this.getCarrentProducts(); //формування продуктів вибраної категорії
            }
        });
    }
    clickCategory(category) {
        this.activeCategory = category;
        this.navigateCategory();
        this.getCarrentProducts();
    }
    getCarrentProducts() {
        if (this.activeCategory[1].productsID) { //якщо категорія містить продукти
            this.arrCurrentProducts = [];
            const idProdIn = Array.prototype.concat(...Object.values(this.activeCategory[1].productsID)); //внутрішні id, що містяться в категорії
            idProdIn.forEach(element => {
                this.arrProducts.some((el) => {
                    if (el[1].id === element) {
                        this.arrCurrentProducts.push(el);
                        return true;
                    }
                });
                this.returnedArray = this.arrCurrentProducts.slice(0, this.paginationQuantity); //перша сторінка пагінації
            });
        }
        else {
            this.arrCurrentProducts = null;
        }
    }
    productCounter(product, isIncrease) {
        if (isIncrease) {
            product[1].count++;
        }
        else {
            if (product[1].count > 1) {
                product[1].count--;
            }
        }
    }
    addToBasket(product) {
        this.productsService.addToBasket(product);
    }
    openDetails(product) {
        this.router.navigate([`${product[0]}`], { relativeTo: this.route });
    }
    pageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.arrCurrentProducts.slice(startItem, endItem);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 13, vars: 4, consts: [["class", "categoriesList bigList", 4, "ngIf"], [1, "smallList"], ["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], [1, "carrousel"], ["class", "productsList", 4, "ngIf"], ["class", "noProducts", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "categoriesList", "bigList"], ["type", "button", "class", "btn btn-primary oneCategory", 3, "activeCategory", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "oneCategory", 3, "click"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], [1, "productsList"], ["class", "oneProduct", 4, "ngFor", "ngForOf"], [1, "oneProduct"], [1, "clickDetails", 3, "click"], [3, "src"], [1, "pPrice"], [1, "spanPrice"], [1, "spanValuta"], [1, "productCountWrapper"], [1, "productCount", 3, "click"], ["type", "text", 3, "value"], [1, "btn", "btn-success", 3, "click"], [1, "noProducts"], [1, "pagination"], [3, "totalItems", "itemsPerPage", "pageChanged"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_section_1_Template, 2, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductsComponent_ul_7_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-carrousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductsComponent_section_10_Template, 2, 1, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductsComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductsComponent_div_12_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrCurrentProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.arrCurrentProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrCurrentProducts.length > ctx.paginationQuantity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_7__["CarrouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain[_ngcontent-%COMP%]   .smallList[_ngcontent-%COMP%] {\n  display: none;\n}\nmain[_ngcontent-%COMP%]   .categoriesList[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\nmain[_ngcontent-%COMP%]   .categoriesList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\nmain[_ngcontent-%COMP%]   .categoriesList[_ngcontent-%COMP%]   .oneCategory[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nmain[_ngcontent-%COMP%]   .categoriesList[_ngcontent-%COMP%]   .activeCategory[_ngcontent-%COMP%] {\n  background-color: var(--body-background);\n  color: black;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  width: 250px;\n  margin: 0.8rem;\n  border: 1px solid #d4d4d4;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: var(--card-background);\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  text-align: justify;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   .pPrice[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   .pPrice[_ngcontent-%COMP%]   .spanPrice[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.8rem;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0.8rem;\n  width: 3rem;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   .productCountWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0.8rem 0;\n  width: 150px;\n  align-self: center;\n}\nmain[_ngcontent-%COMP%]   .productsList[_ngcontent-%COMP%]   .oneProduct[_ngcontent-%COMP%]   .clickDetails[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nmain[_ngcontent-%COMP%]   .noProducts[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 20px 50px;\n}\nmain[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 680px) {\n  main[_ngcontent-%COMP%]   .categoriesList[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin-bottom: 10px;\n  }\n}\n@media (max-width: 500px) {\n  main[_ngcontent-%COMP%]   .bigList[_ngcontent-%COMP%] {\n    display: none;\n  }\n  main[_ngcontent-%COMP%]   .smallList[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 20px 0;\n  }\n  main[_ngcontent-%COMP%]   .smallList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 150px;\n    background-color: #6cd47a;\n    border: 1px solid #6cd47a;\n  }\n  main[_ngcontent-%COMP%]   .smallList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n    box-shadow: 0 0 0 0.2rem rgba(108, 212, 122, 0.3);\n  }\n  main[_ngcontent-%COMP%]   .smallList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFKO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFDSTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtBQUNOO0FBR0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBREo7QUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQU47QUFDTTtFQUNFLGNBQUE7QUFDUjtBQUNNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQVE7RUFDRSxtQkFBQTtBQUVWO0FBQ007RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFDUjtBQUNNO0VBQ0Usa0JBQUE7QUFDUjtBQUFRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFFVjtBQUFRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFFVjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNNO0VBQ0UsZUFBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUhKO0FBT0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFKRjtBQUNGO0FBT0E7RUFFSTtJQUNFLGFBQUE7RUFOSjtFQVFFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFOSjtFQU9JO0lBQ0UsWUFBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7RUFMTjtFQU1NO0lBQ0UsaURBQUE7RUFKUjtFQU9JO0lBQ0UsWUFBQTtFQUxOO0FBQ0YiLCJmaWxlIjoicHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc21hbGxMaXN0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2F0ZWdvcmllc0xpc3R7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBidXR0b257XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAub25lQ2F0ZWdvcnl7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIC5hY3RpdmVDYXRlZ29yeXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZCk7XG4gICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0c0xpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLm9uZVByb2R1Y3R7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIG1hcmdpbjogMC44cmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xuICAgICAgaDV7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgfVxuICAgICAgcHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgfVxuICAgICAgLnBQcmljZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgLnNwYW5QcmljZXtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gICAgICB9XG4gICAgICAucHJvZHVjdENvdW50V3JhcHBlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpbnB1dHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwIDAuOHJlbTtcbiAgICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5idG57XG4gICAgICAgIG1hcmdpbjogMC44cmVtIDA7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNsaWNrRGV0YWlsc3tcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5ub1Byb2R1Y3Rze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaDV7XG4gICAgICBtYXJnaW46IDIwcHggNTBweDtcbiAgICB9XG4gIH1cblxuICAucGFnaW5hdGlvbntcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xuICBtYWluIC5jYXRlZ29yaWVzTGlzdCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBtYWlue1xuICAgIC5iaWdMaXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zbWFsbExpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDIxMiwgMTIyKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwOCwgMjEyLCAxMjIpO1xuICAgICAgICAmOmZvY3Vze1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEwOCwgMjEyLCAxMjIsIDAuMyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpe1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "hB5O":
/*!**********************************************************!*\
  !*** ./src/app/pages/users-page/users-page.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageComponent", function() { return UsersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/users.service */ "dxD2");
/* harmony import */ var src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/users/orders"]; };
const _c1 = function () { return ["/users/comments"]; };
const _c2 = function () { return ["/users/data"]; };
class UsersPageComponent {
    constructor(usersService, authorizationService) {
        this.usersService = usersService;
        this.authorizationService = authorizationService;
    }
    ngOnInit() {
        this.initSubscriptionUser();
        this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
    }
    initSubscriptionUser() {
        this.authorizationService.loggedIn.subscribe(() => {
            this.loadLocalStorageUser();
        });
    }
    loadLocalStorageUser() {
        if (localStorage.length > 0 && localStorage.getItem('activeUser')) {
            this.authorizationService.userLocal = JSON.parse(localStorage.getItem('activeUser'));
            this.usersService.getOneUser(this.authorizationService.userLocal[0])
                .then(data => {
                this.authorizationService.currentUser = data;
            });
        }
    }
}
UsersPageComponent.ɵfac = function UsersPageComponent_Factory(t) { return new (t || UsersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"])); };
UsersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersPageComponent, selectors: [["app-users-page"]], decls: 10, vars: 6, consts: [[1, "sectionLeftUser"], [1, "d-flex", "align-items-start", "navv"], [1, "nav", "flex-column", "nav-pills"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "insert"]], template: function UsersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".sectionLeftUser[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoidXNlcnMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uTGVmdFVzZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "osbo":
/*!******************************************************!*\
  !*** ./src/app/shared/services/constants.service.ts ***!
  \******************************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConstantsService {
    constructor() {
        this.adminEmail = 'admin@gmail.com';
        this.firebaseCategories = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/categories';
        this.firebaseProducts = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/products';
        this.firebaseProductsTop = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/productsTop';
        this.dirPathProducts = 'imagesProducts';
        this.firebaseOrders = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/orders';
        this.firebaseUsers = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/users';
        this.firebaseComments = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/commentsNotModerated';
        this.costGreenSector = 20;
        this.costYellowSector = 50;
        this.costAnotherSector = 100;
        this.paginationQuantity = 3;
        this.firebaseOffice = 'https://onlinestore-b84a8-default-rtdb.firebaseio.com/office';
        this.companyDetails = {
            index: '79000',
            city: 'Lviv',
            street: 'Galytska',
            house: '1',
            phone: '+38-097-123-45-67',
            email: 'onlinestore@gmail.com',
            instagram: '',
            workSchedule: 'з 10:00 до 23:00',
            weekend: 'без вихідних',
            name: 'Online Store Pizza',
            text: ` - є одним з лідерів на ринку імпортерів італійських продуктів.
    Ми готуємо, а Ви куштуєте справжню італійську піцу по традиційній рецептурі. Наші піцайоло навчались та проходили стажування у Неаполі, на півдні Італії, де народилась піца. Вишуканість цієї страви не знає меж.
    Трохи таланту, досвіду та позитиву і ву-а-ля – легка та свіжа піца, спечена з любов’ю, мчить до Вас у Львові! Наші кур’єри – справжні віртуози своєї справи. Для них будь-які затори не перешкода доставити піцу вчасно та якісно!
    Ви – наші найдорожчі гурмани! Ми прагнемо, щоб весь Львів та його гості мали можливість смакувати справжньою італійською піцою. Buon Apettito:)`,
            licenceYear: `© 2021`,
            licenceText1: `Online Store Pizza.`,
            licenceText2: `Всі права захищено.`
        };
    }
}
ConstantsService.ɵfac = function ConstantsService_Factory(t) { return new (t || ConstantsService)(); };
ConstantsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantsService, factory: ConstantsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qsJM":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/products-top.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductsTopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsTopService", function() { return ProductsTopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.service */ "osbo");


class ProductsTopService {
    constructor(constantsService) {
        this.constantsService = constantsService;
    }
    getProductsTop() {
        return fetch(`${this.constantsService.firebaseProductsTop}.json`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => Object.entries(response))
            .catch(error => {
            console.warn('getProductsTop', error);
            return null;
        });
    }
    postProductTop(product) {
        fetch(`${this.constantsService.firebaseProductsTop}.json`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    deleteProduct(productID) {
        fetch(`${this.constantsService.firebaseProductsTop}/${productID}.json`, {
            method: 'DELETE',
            body: JSON.stringify(productID),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
ProductsTopService.ɵfac = function ProductsTopService_Factory(t) { return new (t || ProductsTopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"])); };
ProductsTopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsTopService, factory: ProductsTopService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_basket_page_basket_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/basket-page/basket-page.component */ "DIiU");
/* harmony import */ var _pages_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/check-in/check-in.component */ "BnsD");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products-details/products-details.component */ "9Zvn");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "XWge");
/* harmony import */ var _pages_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/sign-out/sign-out.component */ "/Lrz");
/* harmony import */ var _pages_users_page_comments_users_page_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/users-page-comments/users-page-comments.component */ "a0Fl");
/* harmony import */ var _pages_users_page_data_users_page_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/users-page-data/users-page-data.component */ "N5rp");
/* harmony import */ var _pages_users_page_orders_users_page_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/users-page-orders/users-page-orders.component */ "+iWV");
/* harmony import */ var _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/users-page/users-page.component */ "hB5O");
/* harmony import */ var _shared_guards_auth_activate_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/guards/auth-activate.guard */ "6nK1");
/* harmony import */ var _shared_guards_auth_admin_activate_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/guards/auth-admin-activate.guard */ "7ozh");
/* harmony import */ var _shared_guards_auth_no_activate_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/guards/auth-no-activate.guard */ "Pjss");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'products', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'products/:category', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'products/:category/:id', component: _pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductsDetailsComponent"] },
    { path: 'basket', component: _pages_basket_page_basket_page_component__WEBPACK_IMPORTED_MODULE_1__["BasketPageComponent"] },
    { path: 'signIn', component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"], canActivate: [_shared_guards_auth_no_activate_guard__WEBPACK_IMPORTED_MODULE_14__["AuthNoActivateGuard"]] },
    { path: 'signOut', component: _pages_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_7__["SignOutComponent"], canActivate: [_shared_guards_auth_activate_guard__WEBPACK_IMPORTED_MODULE_12__["AuthActivateGuard"]] },
    { path: 'checkIn', component: _pages_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_2__["CheckInComponent"], canActivate: [_shared_guards_auth_no_activate_guard__WEBPACK_IMPORTED_MODULE_14__["AuthNoActivateGuard"]] },
    { path: 'users', component: _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_11__["UsersPageComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'orders' },
            { path: 'orders', component: _pages_users_page_orders_users_page_orders_component__WEBPACK_IMPORTED_MODULE_10__["UsersPageOrdersComponent"] },
            { path: 'comments', component: _pages_users_page_comments_users_page_comments_component__WEBPACK_IMPORTED_MODULE_8__["UsersPageCommentsComponent"] },
            { path: 'data', component: _pages_users_page_data_users_page_data_component__WEBPACK_IMPORTED_MODULE_9__["UsersPageDataComponent"] }
        ]
    },
    { path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule), canLoad: [_shared_guards_auth_admin_activate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthAdminActivateGuard"]]
    },
    { path: '**', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xe31":
/*!***************************************************!*\
  !*** ./src/app/shared/services/uuidv4.service.ts ***!
  \***************************************************/
/*! exports provided: Uuidv4Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uuidv4Service", function() { return Uuidv4Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Uuidv4Service {
    constructor() { }
    uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
Uuidv4Service.ɵfac = function Uuidv4Service_Factory(t) { return new (t || Uuidv4Service)(); };
Uuidv4Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Uuidv4Service, factory: Uuidv4Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp([1,4],{

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 160;


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(174);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__acl_builder_acl_builder_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_resolver_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_resolver_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });






var AppRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__acl_builder_acl_builder_component__["a" /* AclBuilderComponent */],
        resolve: {
            models: __WEBPACK_IMPORTED_MODULE_4__shared_models_resolver_service__["a" /* ModelsResolverService */]
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */],
                pathMatch: 'full'
            },
            {
                path: 'model/:model',
                component: __WEBPACK_IMPORTED_MODULE_2__model_model_component__["a" /* ModelComponent */],
                resolve: {
                    model: __WEBPACK_IMPORTED_MODULE_5__shared_model_resolver_service__["a" /* ModelResolverService */]
                }
            }
        ]
    }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(AppRoutes);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(237),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_sortablejs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_model_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__acl_builder_acl_builder_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__model_model_component__["a" /* ModelComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__acl_builder_acl_builder_component__["a" /* AclBuilderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_share_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roles_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_resolver_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_resolver_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__data_share_service__["a" /* DataShareService */],
            __WEBPACK_IMPORTED_MODULE_4__roles_service__["a" /* RolesService */],
            __WEBPACK_IMPORTED_MODULE_6__model_resolver_service__["a" /* ModelResolverService */],
            __WEBPACK_IMPORTED_MODULE_5__models_resolver_service__["a" /* ModelsResolverService */],
        ],
        exports: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "/* Full Width/Height body */\n:host {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host > md-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  overflow-y: auto; }\n\n:host > md-sidenav > div {\n  height: 100%;\n  overflow: auto; }\n\nmd-toolbar {\n  position: relative;\n  z-index: 10; }\n\nmd-sidenav {\n  width: 250px; }\n\n[md-list-item] {\n  text-overflow: ellipsis;\n  overflow-x: hidden; }\n\ndiv.content {\n  position: relative;\n  padding: 20px; }\n\na.active[md-list-item] {\n  background-color: #ffd740; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "button[md-fab] {\n  position: absolute;\n  top: 30px;\n  right: 30px; }\n\nmd-select.permission-DENY /deep/ * {\n  color: red !important; }\n\nmd-select.permission-ALLOW /deep/ * {\n  color: green !important; }\n\nmd-select {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"mat-elevation-z3\">Toolbar title goes here</md-toolbar>\n<md-sidenav-container>\n  <md-sidenav mode=\"side\" [opened]=\"true\" class=\"mat-elevation-z3\" id=\"models\">\n    <ng-container *ngIf=\"!models.length\">\n      Loading...\n    </ng-container>\n\n    <md-nav-list>\n      <a *ngFor=\"let model of models\"\n         md-list-item\n         routerLinkActive=\"active\"\n         [routerLink]=\"['/model',model.name]\"\n         [attr.id]=\"'model_' + model.name\">\n        {{model.name}}\n      </a>\n    </md-nav-list>\n  </md-sidenav>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<h1>Viewing {{model?.name}}</h1>\n<button md-fab [mdMenuTriggerFor]=\"menu\">\n  <md-icon>more_vert</md-icon>\n</button>\n<md-menu #menu=\"mdMenu\">\n  <button md-menu-item (click)=\"exportAcl()\">\n    Export\n  </button>\n</md-menu>\n<table class=\"table table-bordered\">\n  <thead>\n  <tr>\n    <th width=\"250\">Method</th>\n    <th width=\"100\">Permission</th>\n    <th>Principals</th>\n  </tr>\n  </thead>\n  <tbody [sortablejs]=\"acls\">\n  <tr *ngFor=\"let acl of acls?.controls\" [formGroup]=\"acl\">\n    <td>\n      <md-select formControlName=\"method\" [title]=\"acl?.get('method')?.value\">\n        <div *ngFor=\"let group of methodGroups\">\n          <h4>{{group}}</h4>\n          <md-option *ngFor=\"let method of methods[group]\" [value]=\"method.value\">{{method.name}}</md-option>\n        </div>\n      </md-select>\n    </td>\n    <td>\n      <md-select formControlName=\"permission\" [class]=\"'permission-'+acl?.get('permission')?.value\">\n        <md-option value=\"ALLOW\">ALLOW</md-option>\n        <md-option value=\"DENY\">DENY</md-option>\n      </md-select>\n    </td>\n    <td>\n      <!-- <md-chip-list [FormGroup]=\"acl.principals\">\n         <md-chip *ngFor=\"let principal of acl.principals.controls\">\n           {{principal.value.principalType}}:{{principal.value.principalId}}\n         </md-chip>\n       </md-chip-list>-->\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataShareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataShareService = (function () {
    function DataShareService() {
        this.dataStore = {};
    }
    DataShareService.prototype.createShare = function (key, initialValue) {
        if (initialValue === void 0) { initialValue = ''; }
        if (typeof (this.dataStore[key]) == 'undefined') {
            this.dataStore[key] = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](initialValue);
        }
        else {
            this.setShare(key, initialValue);
        }
        return this.getShare(key);
    };
    DataShareService.prototype.getShare = function (key) {
        return this.dataStore[key];
    };
    DataShareService.prototype.isShare = function (key) {
        return Object.keys(this.dataStore).indexOf(key) !== -1;
    };
    DataShareService.prototype.getShareValue = function (key) {
        return this.dataStore[key].getValue();
    };
    DataShareService.prototype.setShare = function (key, value) {
        return this.dataStore[key].next(value);
    };
    return DataShareService;
}());
DataShareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataShareService);

//# sourceMappingURL=data-share.service.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(161);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RolesService = (function () {
    function RolesService() {
        this.roles = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._roles = [];
    }
    RolesService.prototype.addRole = function (role) {
        if (this._roles.indexOf(role) === -1) {
            this._roles.push(role);
            this._roles = this._roles.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
            this.roles.next(this._roles);
        }
    };
    return RolesService;
}());
RolesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RolesService);

//# sourceMappingURL=roles.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AclBuilderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AclBuilderComponent = (function () {
    function AclBuilderComponent(route) {
        this.route = route;
        this.models = [];
    }
    AclBuilderComponent.prototype.ngOnInit = function () {
        this.models = this.route.snapshot.data['models'];
    };
    return AclBuilderComponent;
}());
AclBuilderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-acl-builder',
        template: __webpack_require__(236),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], AclBuilderComponent);

var _a;
//# sourceMappingURL=acl-builder.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(238),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_share_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_roles_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModelComponent = (function () {
    function ModelComponent(route, http, dataShare, rolesService, fb) {
        this.route = route;
        this.http = http;
        this.dataShare = dataShare;
        this.rolesService = rolesService;
        this.fb = fb;
        this.methods = {};
        this.methodGroups = [];
        this.roles = [];
    }
    ModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSub = this.route.data.subscribe(function (data) {
            _this.model = data['model'];
            _this.buildData();
        });
        this.rolesSub = this.rolesService.roles.subscribe(function (roles) { return _this.roles = roles; });
    };
    ModelComponent.prototype.ngOnDestroy = function () {
        this.rolesSub.unsubscribe();
        this.routerSub.unsubscribe();
    };
    ModelComponent.prototype.buildData = function () {
        var _this = this;
        var acls = {};
        var modelAcls = this.model && this.model.settings && this.model.settings.acls ? this.model.settings.acls : [];
        modelAcls.forEach(function (acl) {
            if (!acl.property) {
                acl.property = '*';
            }
            var selector = [acl.permission, acl.property].join('.');
            if (!acls[selector]) {
                acls[selector] = [];
            }
            acls[selector].push({
                principalType: acl.principalType,
                principalId: acl.principalId
            });
        });
        this.acls = this.fb.array(Object.keys(acls).map(function (s) {
            var props = s.split('.');
            return _this.fb.group({
                permission: props[0],
                method: props[1],
                principals: _this.fb.array(acls[s].map(function (p) { return _this.fb.group(p); }))
            });
        }));
        var methods = [];
        this.model.settings.methods.forEach(function (m) {
            methods.push({ value: m.name, name: m.name });
        });
        var grouped_methods = {};
        grouped_methods[this.model.name] = [{ value: '*', name: '* (any)' }];
        var re = /__(\w*)__(\w*)/;
        methods.forEach(function (method) {
            var match = re.exec(method.name);
            if (match) {
                if (typeof (grouped_methods[match[2]]) == 'undefined') {
                    grouped_methods[match[2]] = [];
                }
                method.name = "[" + match[2] + "] " + match[1];
                grouped_methods[match[2]].push(method);
            }
            else {
                grouped_methods[_this.model.name].push(method);
            }
        });
        this.methodGroups = Object.keys(grouped_methods);
        this.methodGroups.forEach(function (group) {
            grouped_methods[group].sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });
        });
        this.methods = grouped_methods;
    };
    ModelComponent.prototype.exportAcl = function () {
        var acls = [];
        var val = this.acls.value;
        val.forEach(function (acl) {
            var acl_body = {
                permission: acl.permission,
                property: acl.method,
            };
            if (acl_body.property == '*') {
                delete (acl_body.property);
            }
            acl.principals.forEach(function (p) {
                var n = Object.assign({}, acl_body);
                n['principalId'] = p.principalId;
                n['principalType'] = p.principalType;
                acls.push(n);
            });
        });
    };
    return ModelComponent;
}());
ModelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-model',
        template: __webpack_require__(239),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_share_service__["a" /* DataShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_share_service__["a" /* DataShareService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_roles_service__["a" /* RolesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_roles_service__["a" /* RolesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormBuilder */]) === "function" && _e || Object])
], ModelComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=model.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_share_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelResolverService = (function () {
    function ModelResolverService(dataShare) {
        this.dataShare = dataShare;
    }
    ModelResolverService.prototype.resolve = function (route) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(this.dataShare.getShareValue(route.params['model']));
    };
    return ModelResolverService;
}());
ModelResolverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_share_service__["a" /* DataShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_share_service__["a" /* DataShareService */]) === "function" && _a || Object])
], ModelResolverService);

var _a;
//# sourceMappingURL=model-resolver.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_share_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roles_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelsResolverService = (function () {
    function ModelsResolverService(http, dataShare, rolesService) {
        this.http = http;
        this.dataShare = dataShare;
        this.rolesService = rolesService;
    }
    ModelsResolverService.prototype.resolve = function (route) {
        var _this = this;
        if (this.dataShare.isShare('models')) {
            return this.dataShare.getShare('models');
        }
        return this.http.get('api/models').map(function (res) {
            res = res.json();
            var models = Object.keys(res).sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
            var entries = models.map(function (m) {
                var model = res[m];
                _this.dataShare.createShare(model.name, model);
                if (model && model.settings && model.settings.acls) {
                    model.settings.acls.forEach(function (acl) {
                        if (acl.principalType.toLowerCase() == 'role') {
                            _this.rolesService.addRole(acl.principalId);
                        }
                    });
                }
                return model;
            });
            _this.dataShare.createShare('models', entries);
            return entries;
        });
    };
    return ModelsResolverService;
}());
ModelsResolverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_share_service__["a" /* DataShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_share_service__["a" /* DataShareService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__roles_service__["a" /* RolesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__roles_service__["a" /* RolesService */]) === "function" && _c || Object])
], ModelsResolverService);

var _a, _b, _c;
//# sourceMappingURL=models-resolver.service.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.bundle.js.map
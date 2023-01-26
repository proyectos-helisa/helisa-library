(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/snack-bar'), require('@angular/material/dialog'), require('rxjs'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/cdk/drag-drop'), require('moment'), require('rxjs/operators'), require('@angular/cdk/tree'), require('@angular/material/tree'), require('@angular/router'), require('lodash'), require('@angular/material/autocomplete'), require('@angular/material/tooltip'), require('@angular/cdk/layout'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@angular/material/grid-list'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/radio'), require('@angular/material/sidenav'), require('@angular/material/card'), require('@angular/material/chips'), require('@angular/material/datepicker'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/progress-spinner'), require('@angular/material/select'), require('@angular/material/stepper'), require('@angular/material/tabs'), require('@angular/material/toolbar')) :
    typeof define === 'function' && define.amd ? define('helisa-lib', ['exports', '@angular/core', '@angular/forms', '@angular/material/snack-bar', '@angular/material/dialog', 'rxjs', '@angular/material/sort', '@angular/material/table', '@angular/cdk/drag-drop', 'moment', 'rxjs/operators', '@angular/cdk/tree', '@angular/material/tree', '@angular/router', 'lodash', '@angular/material/autocomplete', '@angular/material/tooltip', '@angular/cdk/layout', '@angular/common', '@angular/material/button', '@angular/material/checkbox', '@angular/material/core', '@angular/material/grid-list', '@angular/material/input', '@angular/material/menu', '@angular/material/paginator', '@angular/material/radio', '@angular/material/sidenav', '@angular/material/card', '@angular/material/chips', '@angular/material/datepicker', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/icon', '@angular/material/list', '@angular/material/progress-spinner', '@angular/material/select', '@angular/material/stepper', '@angular/material/tabs', '@angular/material/toolbar'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['helisa-lib'] = {}, global.ng.core, global.ng.forms, global.ng.material.snackBar, global.ng.material.dialog, global.rxjs, global.ng.material.sort, global.ng.material.table, global.ng.cdk.dragDrop, global.moment_, global.rxjs.operators, global.ng.cdk.tree, global.ng.material.tree, global.ng.router, global._, global.ng.material.autocomplete, global.ng.material.tooltip, global.ng.cdk.layout, global.ng.common, global.ng.material.button, global.ng.material.checkbox, global.ng.material.core, global.ng.material.gridList, global.ng.material.input, global.ng.material.menu, global.ng.material.paginator, global.ng.material.radio, global.ng.material.sidenav, global.ng.material.card, global.ng.material.chips, global.ng.material.datepicker, global.ng.material.expansion, global.ng.material.formField, global.ng.material.icon, global.ng.material.list, global.ng.material.progressSpinner, global.ng.material.select, global.ng.material.stepper, global.ng.material.tabs, global.ng.material.toolbar));
}(this, (function (exports, i0, forms, i1, i1$1, rxjs, sort, table, dragDrop, moment_, operators, tree, tree$1, router, _, autocomplete, tooltip, layout, common, button, checkbox, core, gridList, input, menu, paginator, radio, sidenav, card, chips, datepicker, expansion, formField, icon, list, progressSpinner, select, stepper, tabs, toolbar) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var moment___namespace = /*#__PURE__*/_interopNamespace(moment_);

    var InputWithButtonComponent = /** @class */ (function () {
        function InputWithButtonComponent() {
            this.placeholder = '';
            this.inputFormControl = new forms.FormControl('', forms.Validators.required);
            this.requiredMessage = 'El campo es requerido';
            this.value = '';
            this.isFocused = false;
            this.done = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
        }
        InputWithButtonComponent.prototype.ngOnInit = function () {
            if (this.value !== '') {
                this.inputFormControl.setValue(this.value);
            }
            this.nameField.nativeElement.focus();
        };
        InputWithButtonComponent.prototype.onDone = function () {
            if (this.inputFormControl.valid) {
                this.done.emit(this.inputFormControl.value);
            }
        };
        InputWithButtonComponent.prototype.onCancel = function () {
            this.cancel.emit();
        };
        return InputWithButtonComponent;
    }());
    InputWithButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-input-with-button',
                    template: "<div>\n  <mat-form-field>\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
                    styles: [""]
                },] }
    ];
    InputWithButtonComponent.ctorParameters = function () { return []; };
    InputWithButtonComponent.propDecorators = {
        placeholder: [{ type: i0.Input }],
        inputFormControl: [{ type: i0.Input }],
        requiredMessage: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        isFocused: [{ type: i0.Input }],
        nameField: [{ type: i0.ViewChild, args: ['inputText', { static: true },] }],
        done: [{ type: i0.Output }],
        cancel: [{ type: i0.Output }]
    };

    // @dynamic
    var ToastHelisaComponent = /** @class */ (function () {
        function ToastHelisaComponent(data) {
            this.data = data;
        }
        ToastHelisaComponent.prototype.ngOnInit = function () { };
        return ToastHelisaComponent;
    }());
    ToastHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-toast',
                    template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                    styles: [""]
                },] }
    ];
    ToastHelisaComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.MAT_SNACK_BAR_DATA,] }] }
    ]; };

    var ToastHelisaService = /** @class */ (function () {
        function ToastHelisaService(snackBar) {
            this.snackBar = snackBar;
            this.durationInSeconds = 5;
        }
        ToastHelisaService.prototype.showToast = function (type, message, subMessages) {
            subMessages = subMessages ? subMessages : [];
            this.snackBar.openFromComponent(ToastHelisaComponent, {
                data: { message: message, type: type, subMessages: subMessages },
                duration: this.durationInSeconds * 1000
            });
        };
        return ToastHelisaService;
    }());
    ToastHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(i0.ɵɵinject(i1.MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
    ToastHelisaService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ToastHelisaService.ctorParameters = function () { return [
        { type: i1.MatSnackBar }
    ]; };

    (function (ToastType) {
        ToastType["DONE"] = "done";
        ToastType["ERROR"] = "error";
        ToastType["INFO"] = "info";
    })(exports.ToastType || (exports.ToastType = {}));

    (function (AlertHelisaType) {
        AlertHelisaType["ERROR"] = "ERROR";
        AlertHelisaType["CONFIRMATION"] = "CONFIRMATION";
    })(exports.AlertHelisaType || (exports.AlertHelisaType = {}));

    var AlertHelisaComponent = /** @class */ (function () {
        function AlertHelisaComponent(dialogRef, data) {
            var _this = this;
            this.dialogRef = dialogRef;
            this.data = data;
            this.content = data.content;
            this.title = data.title;
            this.okLabel = data.okLabel;
            if (this.okLabel === undefined) {
                this.okLabel = 'aceptar';
            }
            this.cancelLabel = data.cancelLabel;
            if (this.cancelLabel === undefined) {
                this.cancelLabel = 'cancelar';
            }
            this.hasCancel = data.type === exports.AlertHelisaType.CONFIRMATION;
            dialogRef.disableClose = true;
            dialogRef.keydownEvents().subscribe(function (event) {
                if (event.code === 'Escape') {
                    _this.dialogRef.close(_this.onCancel());
                }
            });
        }
        AlertHelisaComponent.prototype.ngOnInit = function () {
        };
        AlertHelisaComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        return AlertHelisaComponent;
    }());
    AlertHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-alert',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>",
                    styles: [""]
                },] }
    ];
    AlertHelisaComponent.ctorParameters = function () { return [
        { type: i1$1.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1$1.MAT_DIALOG_DATA,] }] }
    ]; };

    var AlertHelisaService = /** @class */ (function () {
        function AlertHelisaService(dialog) {
            this.dialog = dialog;
        }
        AlertHelisaService.prototype.openDialog = function (type, title, content, okLabel, cancelLabel) {
            var dialogRef = this.dialog.open(AlertHelisaComponent, {
                width: '250px',
                data: { title: title, content: content, type: type, okLabel: okLabel, cancelLabel: cancelLabel }
            });
            return dialogRef.afterClosed();
        };
        return AlertHelisaService;
    }());
    AlertHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(i0.ɵɵinject(i1$1.MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
    AlertHelisaService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AlertHelisaService.ctorParameters = function () { return [
        { type: i1$1.MatDialog }
    ]; };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var DependencyTableHelisaService = /** @class */ (function () {
        function DependencyTableHelisaService() {
            this.tables = new rxjs.Subject();
            this.infoTables = new Array();
            this.emitVisibilityButton$ = new rxjs.Subject();
            this.emitVisibilityButton = this.emitVisibilityButton$.asObservable();
            this.emitVisibilityAllButtons$ = new rxjs.Subject();
            this.emitVisibilityAllButtons = this.emitVisibilityAllButtons$.asObservable();
            this.emitIsCellSelection$ = new rxjs.Subject();
            this.emitIsCellSelection = this.emitIsCellSelection$.asObservable();
            this.emitChangeColumns$ = new rxjs.Subject();
            this.emitChangeColumns = this.emitChangeColumns$.asObservable();
            this.emitEnabledButton$ = new rxjs.Subject();
            this.emitEnabledButton = this.emitEnabledButton$.asObservable();
            this.emitTotal = new rxjs.Subject();
            this.emitNextPage = new rxjs.Subject();
        }
        /**
         * retorna un Observable<ConfigTable[]>
         */
        DependencyTableHelisaService.prototype.getTables = function () {
            return this.tables;
        };
        /**
         * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
         * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
         * @param configTable Objeto que contiene la configuración para la tabla.
         * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
         */
        DependencyTableHelisaService.prototype.updateDependency = function (configTable, withRemoveDependency) {
            if (withRemoveDependency === void 0) { withRemoveDependency = false; }
            if (withRemoveDependency) {
                this.infoTables = this.infoTables.slice(0, !configTable.order ? 0 : configTable.order);
            }
            if (!configTable.order || configTable.order >= this.infoTables.length) {
                configTable.order = this.infoTables.length;
            }
            this.infoTables[configTable.order] = configTable;
            if (configTable.isRemote) {
                configTable.dataSource = null;
                if (configTable.count === null) {
                    throw new Error('hace falta el count');
                }
            }
            else {
                if (configTable.dataSource === null) {
                    throw new Error('hace falta el dataSource');
                }
                configTable.count = configTable.dataSource.length;
            }
            this.tables.next(this.infoTables);
        };
        /**
         * Emite un evento de total con la información para la tabla correspondiente
         * @param event wrapper que contiene el indice de la tabla y la información de la pagina
         */
        DependencyTableHelisaService.prototype.setTotal = function (event) {
            this.emitTotal.next(event);
        };
        /**
         * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
         * @param event wrapper que contiene el indice de la tabla y la información de la pagina
         */
        DependencyTableHelisaService.prototype.addPage = function (event) {
            this.emitNextPage.next(event);
        };
        DependencyTableHelisaService.prototype.selectIndexRow = function (config) {
            if (this.infoTables[config.order]) {
                this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
                this.tables.next(this.infoTables);
            }
        };
        /**
         * * Deshabilita el botón y le pone un titulo sobre el over
         * @param event para indicar el index de la tabla y en "data" true o false
         */
        DependencyTableHelisaService.prototype.changeEnabledButton = function (event) {
            this.emitEnabledButton$.next(event);
        };
        /**
         * Muestra o esconde el boton una tabla en especifico
         * @param event para indicar el index de la tabla y en "data" true o false
         */
        DependencyTableHelisaService.prototype.changeVisibilityButton = function (event) {
            this.emitVisibilityButton$.next(event);
        };
        /**
         * Esconde los botones de todas las tablas
         * @param show indicar si se muestran o no todos los botones de las tablas
         */
        DependencyTableHelisaService.prototype.changeVisibilityAllButtons = function (show) {
            this.emitVisibilityAllButtons$.next(show);
        };
        /**
         * Para habilitar el manejo de selección de celda
         * @param event para indicar el index de la tabla y en "data" true o false
         */
        DependencyTableHelisaService.prototype.changeisCellSelection = function (event) {
            this.emitIsCellSelection$.next(event);
        };
        /**
         * Para habilitar el cambio de columnas
         * @param event para indicar el index de la tabla y en "data" columnas
         */
        DependencyTableHelisaService.prototype.changeColumnsByTable = function (event) {
            this.emitChangeColumns$.next(event);
        };
        return DependencyTableHelisaService;
    }());
    DependencyTableHelisaService.decorators = [
        { type: i0.Injectable }
    ];
    DependencyTableHelisaService.ctorParameters = function () { return []; };

    var TableHelisaService = /** @class */ (function () {
        function TableHelisaService() {
            this.emitChangeSource = new rxjs.Subject();
            this.emitNextPage = new rxjs.Subject();
            this.totalReturn = this.emitChangeSource.asObservable();
            this.nextPageReturn = this.emitNextPage.asObservable();
            this.emitVisibleButton$ = new rxjs.Subject();
            this.emitEnabledButton$ = new rxjs.Subject();
            /**
             * Observable para saber si se debe mostrar o esconder el boton de add row
             */
            this.emitVisibleButton = this.emitVisibleButton$.asObservable();
        }
        TableHelisaService.prototype.setTotal = function (total, table) {
            this.emitChangeSource.next({ obj: total, table: table });
        };
        TableHelisaService.prototype.addPage = function (page, table) {
            this.emitNextPage.next({ obj: page, table: table });
        };
        /**
         * para modificar el valor de si se muestra o no el boton de add row de la tabla
         * @param change indicar si se muestra o no el boton de add row de la tabla
         */
        TableHelisaService.prototype.changeVisibilityButton = function (change) {
            this.emitVisibleButton$.next(change);
        };
        /**
         * para modificar el estado del boton de add row de la tabla
         * @param change indicar si se muestra o no el boton de add row de la tabla
         */
        TableHelisaService.prototype.changeEnabledButton = function (change) {
            this.emitEnabledButton$.next(change);
        };
        return TableHelisaService;
    }());
    TableHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
    TableHelisaService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    (function (TypeResizeEnum) {
        TypeResizeEnum[TypeResizeEnum["BOTH"] = 0] = "BOTH";
        TypeResizeEnum[TypeResizeEnum["ONLY_CELLS"] = 1] = "ONLY_CELLS";
        TypeResizeEnum[TypeResizeEnum["ONLY_TABLES"] = 2] = "ONLY_TABLES";
    })(exports.TypeResizeEnum || (exports.TypeResizeEnum = {}));
    var ResizeConfig = /** @class */ (function () {
        function ResizeConfig() {
            this.enableResize = false;
            this.typeResize = exports.TypeResizeEnum.ONLY_CELLS;
            this.uuid = 'testing';
        }
        return ResizeConfig;
    }());
    var ResizeResponse = /** @class */ (function () {
        function ResizeResponse() {
        }
        return ResizeResponse;
    }());
    var DependencyTableHelisaComponent = /** @class */ (function () {
        function DependencyTableHelisaComponent(dependencyTableHelisaService, tableService) {
            this.dependencyTableHelisaService = dependencyTableHelisaService;
            this.tableService = tableService;
            this.tables = [];
            this.showToolTip = true;
            /**
             * deprecated, use selectObject
             */
            this.selected = new i0.EventEmitter();
            this.selectToImport = new i0.EventEmitter();
            this.selectObject = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.total = new i0.EventEmitter();
            this.sort = new i0.EventEmitter();
            this.drop = new i0.EventEmitter();
            this.addRow = new i0.EventEmitter();
            this.selectCell = new i0.EventEmitter();
            this.bookClicked = new i0.EventEmitter();
            this.afterViewInit = new i0.EventEmitter();
            this.selectedObject = null;
            /**
             * Tiempo antes de ocultarla el mensaje del tooltip
             */
            this.hideDelay = 600;
            /**
             * Tiempo antes de mostra el mensaje del tooltip
             */
            this.showDelay = 500;
            this.resizeConfig = new ResizeConfig();
            this.modeImportEnabled = false;
        }
        Object.defineProperty(DependencyTableHelisaComponent.prototype, "modeImportingEnabled", {
            get: function () {
                return this.modeImportEnabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DependencyTableHelisaComponent.prototype, "resizingConfig", {
            get: function () {
                return this.resizeConfig;
            },
            enumerable: false,
            configurable: true
        });
        DependencyTableHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.getTables();
            this.dependencyTableHelisaService.emitNextPage.subscribe(function (event) {
                _this.tableService.addPage(event.data, _this.viewTables.toArray()[event.index]);
            });
            this.dependencyTableHelisaService.emitTotal.subscribe(function (event) {
                _this.tableService.setTotal(event.data, _this.viewTables[event.index]);
            });
            // Observable para mostrar o esconder el boton de una tabla
            this.dependencyTableHelisaService.emitVisibilityButton.subscribe(function (data) {
                if (!!data && data.index !== undefined) {
                    var table = _this.tables[data.index];
                    if (!!table) {
                        table.addRowButton.showButton = data.data;
                    }
                }
            });
            // Observable para habilitar o deshabilitar el botón y mostrar titulo
            this.dependencyTableHelisaService.emitEnabledButton.subscribe(function (data) {
                if (!!data && data.index !== undefined) {
                    var table = _this.tables[data.index];
                    if (!!table) {
                        table.addRowButton.isDisabled = data.data.isDisabled;
                        table.addRowButton.toolTipText = data.data.text;
                    }
                }
            });
            // Observable para mostrar o esconder los botones de todas las tablas
            this.dependencyTableHelisaService.emitVisibilityAllButtons.subscribe(function (data) {
                if (data !== undefined && data != null) {
                    _this.tables.forEach(function (element) {
                        if (!!element.addRowButton) {
                            element.addRowButton.showButton = data;
                        }
                    });
                }
            });
            // Observable para manejo de selección de celdas
            this.dependencyTableHelisaService.emitIsCellSelection.subscribe(function (data) {
                if (!!data && data.index !== undefined) {
                    var table = _this.tables[data.index];
                    if (table) {
                        table.isCellSelection = data.data;
                    }
                }
            });
            // Observable para manejo de columnas
            this.dependencyTableHelisaService.emitChangeColumns.subscribe(function (data) {
                if (!!data && data.index !== undefined) {
                    var table = _this.tables[data.index];
                    if (table) {
                        table.columns = data.data;
                    }
                }
            });
        };
        /**
         * retorna el servicio que gestiona el componente.
         */
        DependencyTableHelisaComponent.prototype.getService = function () {
            return this.dependencyTableHelisaService;
        };
        /**
         * Obtiene un observable con las tablas dependientes desde el servicio.
         */
        DependencyTableHelisaComponent.prototype.getTables = function () {
            var _this = this;
            this.dependencyTableHelisaService.getTables()
                .subscribe(function (tables) {
                var _a;
                (_a = _this.tables).splice.apply(_a, __spread([0, _this.tables.length], tables));
                _this.viewTables.forEach(function (item) {
                    item.reload();
                });
            });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla seleccionada
         * @param data retorna la fila que fue seleccionada
         */
        DependencyTableHelisaComponent.prototype.onSelectedDependency = function (index, event) {
            this.selectedObject = { index: index, data: event };
            this.selected.emit({ index: index, data: event.value });
            this.selectObject.emit({ index: index, data: event });
        };
        DependencyTableHelisaComponent.prototype.onSelectedDependencyImport = function (index, event) {
            this.selectToImport.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onNextPage = function (index, event) {
            this.nextPage.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onTotal = function (index, event) {
            this.total.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onSort = function (index, event) {
            this.sort.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onDrop = function (index, event) {
            this.drop.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
         * @param index indica el indice de la tabla de la cual se dispara el evento
         */
        DependencyTableHelisaComponent.prototype.onAddRow = function (index) {
            this.addRow.emit(index);
        };
        DependencyTableHelisaComponent.prototype.selectedCell = function (index, event) {
            if (this.tables[index].isCellSelection) {
                this.selectCell.emit({ index: index, data: event });
            }
        };
        DependencyTableHelisaComponent.prototype.onBookClicked = function (index, event) {
            this.bookClicked.emit({ index: index, data: event });
        };
        DependencyTableHelisaComponent.prototype.onAfterViewInitTable = function (resizeResponse) {
            if (this.resizeConfig.enableResize) {
                this.afterViewInit.emit({
                    quantityTable: this.tables.length,
                    uuid: resizeResponse.uuid
                });
            }
        };
        return DependencyTableHelisaComponent;
    }());
    DependencyTableHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-dependency-table',
                    template: "<div tabindex=\"0\">\n  <hel-table [modeImportEnabled]=\"modeImportingEnabled\" [resizeConfig]=\"resizingConfig\" #viewTables *ngFor=\"let table of tables; let i = index;\" [tableIndex]=\"i\" class=\"table-test hw-min-width-120\"\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\n    (selectObject)=\"onSelectedDependency(i, $event)\" (selectToImport)=\"onSelectedDependencyImport(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\" [configColumnClass]=\"table.configColumnClass\"\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\n    (bookClicked)=\"onBookClicked(i,$event)\"\n    [showToolTip]=\"showToolTip\"\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\n    (afterViewInit)=\"onAfterViewInitTable($event)\">\n  </hel-table>\n</div>\n",
                    providers: [DependencyTableHelisaService],
                    styles: [""]
                },] }
    ];
    DependencyTableHelisaComponent.ctorParameters = function () { return [
        { type: DependencyTableHelisaService },
        { type: TableHelisaService }
    ]; };
    DependencyTableHelisaComponent.propDecorators = {
        viewTables: [{ type: i0.ViewChildren, args: ['viewTables',] }],
        showToolTip: [{ type: i0.Input }],
        selected: [{ type: i0.Output }],
        selectToImport: [{ type: i0.Output }],
        selectObject: [{ type: i0.Output }],
        nextPage: [{ type: i0.Output }],
        total: [{ type: i0.Output }],
        sort: [{ type: i0.Output }],
        drop: [{ type: i0.Output }],
        addRow: [{ type: i0.Output }],
        selectCell: [{ type: i0.Output }],
        bookClicked: [{ type: i0.Output }],
        afterViewInit: [{ type: i0.Output }],
        hideDelay: [{ type: i0.Input }],
        showDelay: [{ type: i0.Input }],
        resizeConfig: [{ type: i0.Input }],
        modeImportEnabled: [{ type: i0.Input }]
    };

    (function (InputHelisaType) {
        InputHelisaType[InputHelisaType["DEFAULT"] = 0] = "DEFAULT";
        InputHelisaType[InputHelisaType["IDENTITY"] = 1] = "IDENTITY";
        InputHelisaType[InputHelisaType["NUMERIC"] = 2] = "NUMERIC";
        InputHelisaType[InputHelisaType["DOUBLE"] = 3] = "DOUBLE";
        InputHelisaType[InputHelisaType["POSITIVEORNEGATIVEDOUBLE"] = 4] = "POSITIVEORNEGATIVEDOUBLE";
        InputHelisaType[InputHelisaType["PHONE"] = 5] = "PHONE";
    })(exports.InputHelisaType || (exports.InputHelisaType = {}));
    var InputHelisaComponent = /** @class */ (function () {
        function InputHelisaComponent() {
            this.DECIMAL_SEPARATOR = '.';
            this.THOUSAND_SEPARATOR = ',';
            this.NEGATIVE_SIGN = '-';
            this.placeholder = '';
            this.floatLabel = 'never';
            /** Activar o desactivar el autocompletado
             * (Caracteristica de los navegadores para campos comunes como
             * Direccion , Usuario, Password ... etc)
             */
            this.autocompleteMode = false;
            // Mostrar o no el icono de buscar
            this.isSearch = false;
            // @Input() inputFormControl: FormControl = new FormControl('');
            this.isFocused = false;
            // Esto agrega en el tipo DOUBLE, NUMERIC y POSITIVEORNEGATIVEDOUBLE  dos ceros al final si no los tiene y es true
            this._showCurrencyZerosDecimal = false;
            /**
             * Deprecated
             */
            this.disabled = false;
            this._type = exports.InputHelisaType.DEFAULT;
            /**
             * Deprecated
             */
            this.setValue = new i0.EventEmitter();
            // tslint:disable-next-line:no-any
            this.blur = new i0.EventEmitter();
            this.formControlMask = new forms.FormControl('');
            this.realValue = '';
            this.inputFormReal = new forms.FormControl('');
            this.isUserChange = false;
        }
        Object.defineProperty(InputHelisaComponent.prototype, "showCurrencyZerosDecimal", {
            set: function (newShowCurrencyZerosDecimal) {
                this._showCurrencyZerosDecimal = newShowCurrencyZerosDecimal;
                this.changeValue(this.inputFormReal.value, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputHelisaComponent.prototype, "type", {
            set: function (newType) {
                this._type = newType;
                this.changeValue(this.inputFormReal.value, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputHelisaComponent.prototype, "inputFormControl", {
            set: function (formControl) {
                var _this = this;
                this.inputFormReal = formControl;
                this.inputFormReal.registerOnDisabledChange((function (isDisabled) {
                    if (isDisabled) {
                        _this.formControlMask.disable();
                    }
                    else {
                        _this.formControlMask.enable();
                    }
                }));
                this.inputFormReal.valueChanges.subscribe(function (data) {
                    _this.statusChange(_this.inputFormReal.status);
                    if (_this.getMaskedValue(data, !_this.isUserChange) !== _this.formControlMask.value) {
                        _this.changeValue(data, !_this.isUserChange);
                        if (_this.isFocused) {
                            _this.onFocus(null);
                        }
                    }
                    _this.isUserChange = false;
                });
                this.formControlMask.setValidators(this.inputFormReal.validator);
                this.changeValue(this.inputFormReal.value, true);
                // disable control
                if (formControl.disabled) {
                    this.formControlMask.disable({ onlySelf: true });
                }
                this.inputFormReal.statusChanges.subscribe(function (data) {
                    _this.statusChange(data);
                    if (_this.isFocused) {
                        _this.onFocus(null);
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        InputHelisaComponent.prototype.statusChange = function (data) {
            if (data === 'INVALID') {
                this.formControlMask.setErrors({ key: 'Error de validación.' });
                this.formControlMask.markAsTouched();
            }
            else {
                this.formControlMask.setErrors(null);
            }
        };
        InputHelisaComponent.prototype.ngOnInit = function () {
            if (this.isFocused) {
                this.inputText.nativeElement.focus();
            }
        };
        InputHelisaComponent.prototype.ngAfterViewInit = function () {
            // this.isParentDisabled();
        };
        /*isParentDisabled(): void {
          setTimeout(() => {
            if (this.nameInput.nativeElement.closest('.hw-disabled-mode')) {
              this.disabled = true;
            } else {
              this.disabled = false;
            }
          });
        }*/
        InputHelisaComponent.prototype.search = function () {
            this.setValue.emit(this.realValue);
        };
        InputHelisaComponent.prototype.ngModelChange = function (event) {
            this.isUserChange = true;
            this.changeValue(event, false);
        };
        InputHelisaComponent.prototype.changeValue = function (event, isFinishOrStart) {
            if (event != null) {
                event = event + '';
            }
            var position = this.inputText.nativeElement.selectionStart;
            var length = event ? event.length : 0;
            this.realValue = this.getRealValue(event);
            if (this.getMaskedValue(this.realValue, isFinishOrStart) !== this.formControlMask.value) {
                this.formControlMask.setValue(this.getMaskedValue(this.realValue, isFinishOrStart));
                position += this.inputText.nativeElement.value.length - length;
                this.inputText.nativeElement.selectionStart = position;
                this.inputText.nativeElement.selectionEnd = position;
            }
            if (this.inputFormReal.value !== this.realValue) {
                this.inputFormReal.setValue(this.realValue);
            }
        };
        InputHelisaComponent.prototype.getMaskedValue = function (str, isFinish) {
            if (str == null) {
                return str;
            }
            str = str + '';
            if (this._type === exports.InputHelisaType.DEFAULT || this._type === exports.InputHelisaType.PHONE) {
                return str;
            }
            var maskedStr = '';
            if (this._type === exports.InputHelisaType.IDENTITY) {
                for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                    if (j > 0 && j % 3 === 0) {
                        maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                    }
                    maskedStr = str[i] + maskedStr;
                }
            }
            if (this._type === exports.InputHelisaType.NUMERIC) {
                for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                    if (j > 0 && j % 3 === 0) {
                        maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                    }
                    maskedStr = str[i] + maskedStr;
                }
                maskedStr = this.addZeroDecimals(maskedStr, isFinish);
            }
            if (this._type === exports.InputHelisaType.DOUBLE) {
                maskedStr = this.getMaskedValueDouble(str);
                maskedStr = this.addZeroDecimals(maskedStr, isFinish);
            }
            if (this._type === exports.InputHelisaType.POSITIVEORNEGATIVEDOUBLE) {
                var isNegativeValue = str.indexOf(this.NEGATIVE_SIGN) === 0;
                var newStr = isNegativeValue ? str.replace(this.NEGATIVE_SIGN, '') : str;
                maskedStr = this.getMaskedValueDouble(newStr);
                if (isNegativeValue) {
                    maskedStr = this.NEGATIVE_SIGN + maskedStr;
                }
                maskedStr = this.addZeroDecimals(maskedStr, isFinish);
            }
            return maskedStr;
        };
        InputHelisaComponent.prototype.addZeroDecimals = function (maskedStr, isFinish) {
            if (this._showCurrencyZerosDecimal && isFinish) {
                var indexDecimalSeparator = maskedStr.indexOf(this.DECIMAL_SEPARATOR);
                if (indexDecimalSeparator < 0) {
                    maskedStr += '.00';
                }
                else {
                    var decimals = maskedStr.substring(indexDecimalSeparator);
                    while (decimals.length < 3) {
                        decimals += '0';
                    }
                    maskedStr = maskedStr.substring(0, indexDecimalSeparator) + decimals;
                }
            }
            return maskedStr;
        };
        InputHelisaComponent.prototype.getMaskedValueDouble = function (str) {
            var maskedStr = '';
            if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0) {
                for (var i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++) {
                    maskedStr += str[i];
                }
            }
            for (var i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
            return maskedStr;
        };
        InputHelisaComponent.prototype.getRealValue = function (str) {
            var e_1, _a;
            if (str == null) {
                return str;
            }
            str = str + '';
            var realStr = '';
            if (this._type === exports.InputHelisaType.DEFAULT) {
                return str;
            }
            if (this._type === exports.InputHelisaType.IDENTITY || this._type === exports.InputHelisaType.NUMERIC || this._type === exports.InputHelisaType.PHONE) {
                try {
                    for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
                        var strItem = str_1_1.value;
                        if (strItem.match('[0-9]')) {
                            realStr += strItem;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (this._type === exports.InputHelisaType.DOUBLE) {
                realStr = this.getRealValueDouble(str);
            }
            if (this._type === exports.InputHelisaType.POSITIVEORNEGATIVEDOUBLE) {
                var isNegativeValue = str.indexOf(this.NEGATIVE_SIGN) === 0;
                var newStr = isNegativeValue ? str.replace(this.NEGATIVE_SIGN, '') : str;
                realStr = this.getRealValueDouble(newStr);
                if (isNegativeValue) {
                    realStr = this.NEGATIVE_SIGN + realStr;
                }
            }
            return realStr;
        };
        InputHelisaComponent.prototype.getRealValueDouble = function (str) {
            var e_2, _a;
            var realStr = '';
            var haveDot = false;
            try {
                for (var str_2 = __values(str), str_2_1 = str_2.next(); !str_2_1.done; str_2_1 = str_2.next()) {
                    var strItem = str_2_1.value;
                    if (strItem.match('[0-9]') || ((strItem === this.DECIMAL_SEPARATOR) && !haveDot)) {
                        realStr += strItem;
                    }
                    haveDot = haveDot || (strItem === this.DECIMAL_SEPARATOR);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (str_2_1 && !str_2_1.done && (_a = str_2.return)) _a.call(str_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return realStr;
        };
        InputHelisaComponent.prototype.onFocus = function ($event) {
            if ((this._type === exports.InputHelisaType.NUMERIC || this._type === exports.InputHelisaType.DOUBLE || this._type === exports.InputHelisaType.POSITIVEORNEGATIVEDOUBLE) &&
                Number(this.getRealValue(this.inputText.nativeElement.value)) === 0) {
                this.inputText.nativeElement.select();
            }
        };
        InputHelisaComponent.prototype.change = function (event) {
            this.changeValue(event.target.value, true);
        };
        return InputHelisaComponent;
    }());
    InputHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-input',
                    template: "<mat-form-field [floatLabel]=\"floatLabel\">\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"ngModelChange($event)\"\n  (change)=\"change($event)\"\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" [minlength]=\"minlength\" [maxlength]=\"maxlength\" (focus)=\"onFocus($event)\">\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\n</mat-form-field>\n",
                    styles: ["::ng-deep hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
                },] }
    ];
    InputHelisaComponent.ctorParameters = function () { return []; };
    InputHelisaComponent.propDecorators = {
        placeholder: [{ type: i0.Input }],
        floatLabel: [{ type: i0.Input }],
        minlength: [{ type: i0.Input }],
        maxlength: [{ type: i0.Input }],
        autocompleteMode: [{ type: i0.Input }],
        isSearch: [{ type: i0.Input }],
        isFocused: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        setValue: [{ type: i0.Output }],
        blur: [{ type: i0.Output }],
        inputText: [{ type: i0.ViewChild, args: ['inputText', { static: true },] }],
        showCurrencyZerosDecimal: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        inputFormControl: [{ type: i0.Input }]
    };

    (function (ColumnType) {
        ColumnType[ColumnType["NORMAL"] = 0] = "NORMAL";
        ColumnType[ColumnType["URL"] = 1] = "URL";
    })(exports.ColumnType || (exports.ColumnType = {}));
    (function (EventScope) {
        EventScope[EventScope["USER"] = 0] = "USER";
        EventScope[EventScope["CODE_CALL"] = 1] = "CODE_CALL";
    })(exports.EventScope || (exports.EventScope = {}));
    (function (TotalType) {
        TotalType[TotalType["SUM"] = 0] = "SUM";
        TotalType[TotalType["AVERAGE"] = 1] = "AVERAGE";
        TotalType[TotalType["COUNT"] = 2] = "COUNT";
    })(exports.TotalType || (exports.TotalType = {}));
    (function (ChangeColumnConfigurationType) {
        ChangeColumnConfigurationType[ChangeColumnConfigurationType["SORT"] = 0] = "SORT";
        ChangeColumnConfigurationType[ChangeColumnConfigurationType["UNKNOWN"] = 1] = "UNKNOWN";
        ChangeColumnConfigurationType[ChangeColumnConfigurationType["TOTAL"] = 2] = "TOTAL";
    })(exports.ChangeColumnConfigurationType || (exports.ChangeColumnConfigurationType = {}));
    (function (TableHelisaType) {
        TableHelisaType[TableHelisaType["REMOTE"] = 0] = "REMOTE";
        TableHelisaType[TableHelisaType["LOCAL"] = 1] = "LOCAL";
    })(exports.TableHelisaType || (exports.TableHelisaType = {}));
    // @dynamic
    var ColumnConfigUtil = /** @class */ (function () {
        function ColumnConfigUtil() {
        }
        ColumnConfigUtil.prototype.getValue = function (obj, column) {
            return column.name.split('.').reduce(function (o, field) { return o && o[field]; }, obj);
        };
        return ColumnConfigUtil;
    }());

    var TableHelisaConnectComponent = /** @class */ (function () {
        function TableHelisaConnectComponent() {
            this.page = 0;
            this.isLastPage = false;
            this.isUsed = false;
        }
        TableHelisaConnectComponent.prototype.getBody = function (columnConfig, search) {
            return {};
        };
        TableHelisaConnectComponent.prototype.nextPage = function () {
            return this.page++;
        };
        return TableHelisaConnectComponent;
    }());

    var RowType;
    (function (RowType) {
        RowType[RowType["GROUP_TITLE"] = 0] = "GROUP_TITLE";
        RowType[RowType["GROUP_FOOTER"] = 1] = "GROUP_FOOTER";
        RowType[RowType["ROW"] = 2] = "ROW";
    })(RowType || (RowType = {}));
    var TableHelisaComponent = /** @class */ (function () {
        function TableHelisaComponent(tableService) {
            this.tableService = tableService;
            this.data = new table.MatTableDataSource([]);
            this.displayedColumns = [];
            this.displayedColumnsWithTitle = [];
            this.displayedColumnsWithSubtitle = [];
            this.displayedColumnsWithFooter = [];
            this.type = exports.TableHelisaType.LOCAL;
            this.scrollCount = 0;
            this.hasSubtitle = false;
            this.indexRowStartDrag = -1;
            this.lastIndexRowDrag = -1;
            this.dataBeforeDrag = null;
            this.dataSource$ = [];
            this.scrollX = 0;
            this.scrollY = 0;
            this.sort = new i0.EventEmitter();
            this.total = new i0.EventEmitter();
            this.search = new i0.EventEmitter();
            /**
             * Deprecado, cambiar por electObject
             */
            this.select = new i0.EventEmitter();
            this.selectCell = new i0.EventEmitter();
            this.selectHeaderCell = new i0.EventEmitter();
            this.selectToImport = new i0.EventEmitter();
            this.selectObject = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.showTitle = true;
            this.isCellSelection = false;
            this.drop = new i0.EventEmitter();
            this.isDragged = false;
            this.addRowButton = { showButton: false, text: '', isDisabled: false, toolTipText: '' };
            this.emptyMessageForColumn = { isEnabled: false, text: '' };
            this.addRow = new i0.EventEmitter();
            this.bookClicked = new i0.EventEmitter();
            this.addBookButton = false;
            this.showToolTip = true;
            this.tableIndex = 0;
            this.resizeConfig = new ResizeConfig();
            this.afterViewInit = new i0.EventEmitter();
            this.showFooter = false;
            this.showSearch = false;
            /**
             * Tiempo antes de ocultarla el mensaje del tooltip
             */
            this.hideDelay = 600;
            /**
             * Tiempo antes de mostra el mensaje del tooltip
             */
            this.showDelay = 500;
            this.modeImportEnabled = false;
        }
        TableHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.reloadColumnConfig();
            this.tableService.nextPageReturn.subscribe(function (data) {
                if (!data.table || data.table === _this) {
                    _this.receivePage(data.obj);
                }
            });
            this.tableService.totalReturn.subscribe(function (info) {
                if (info) {
                    _this.columnConfig.forEach(function (column, idx) {
                        if (column === info.obj.column) {
                            _this.totalData[idx] = _this.getGroupValue(column, { sum: info.obj.value, count: _this.count });
                        }
                    });
                }
            });
            this.matSort.sortChange.subscribe(function (event) {
                var column = _this.columnConfig.find(function (c) { return c.name === event.active; });
                column.sortDirection = event.direction;
                _this.sort.emit({ column: column, columnConfigurations: _this.columnConfig, type: exports.ChangeColumnConfigurationType.SORT });
            });
            this.tableService.emitVisibleButton.subscribe(function (data) {
                if (data !== undefined && data != null) {
                    _this.addRowButton.showButton = data;
                }
            });
            this.reload();
        };
        TableHelisaComponent.prototype.ngAfterViewInit = function () {
            if (this.isCellSelection) {
                this.matTable.renderRows();
            }
            if (this.resizeConfig.enableResize) {
                this.afterViewInit.emit({
                    uuid: this.resizeConfig.uuid
                });
            }
        };
        Object.defineProperty(TableHelisaComponent.prototype, "isRemote", {
            set: function (w) {
                this.type = w ? exports.TableHelisaType.REMOTE : exports.TableHelisaType.LOCAL;
                this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
                if (this.type === exports.TableHelisaType.REMOTE) {
                    this.goNextPage();
                }
                else {
                    this.tableHelisaConnectComponent.page++;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "columnConfiguration", {
            set: function (columnConfiguration) {
                this.columnConfig = columnConfiguration;
                this.reload();
                this.reloadColumnConfig();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "dataSource", {
            get: function () {
                return this.dataSource$;
            },
            set: function (dataSource) {
                this.dataSource$ = dataSource;
                this.rawData = dataSource;
                this.reload();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "selectedIndexRow", {
            set: function (idRowSelected) {
                this.indexRowSelect = idRowSelected;
                if (this.rawData && this.rawData.length) {
                    if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                        this.indexRowSelect = 0;
                    }
                    this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
                }
            },
            enumerable: false,
            configurable: true
        });
        TableHelisaComponent.prototype.reloadColumnConfig = function () {
            var _this = this;
            this.hasSubtitle = false;
            this.displayedColumns.splice(0, this.displayedColumns.length);
            if (this.columnConfig) {
                if (this.addBookButton) {
                    var columnCount = this.columnConfig.length;
                    var countSubtitle_1 = 0;
                    var showBookButton_1 = false;
                    this.columnConfig.forEach(function (column) {
                        if (!!column.subtitle) {
                            countSubtitle_1 = countSubtitle_1 + 1;
                        }
                        if ((!showBookButton_1) && (column.name === 'bookButton')) {
                            showBookButton_1 = true;
                        }
                    });
                    var subtitleTemp = columnCount === countSubtitle_1;
                    if (!showBookButton_1) {
                        this.columnConfig.push({
                            name: 'bookButton',
                            title: '',
                            subtitle: subtitleTemp ? '' : undefined,
                            visible: true
                        });
                    }
                }
                this.columnConfig.forEach(function (column) {
                    if (column.visible) {
                        _this.displayedColumns.push(column.name);
                    }
                    if (!_this.hasSubtitle) {
                        _this.hasSubtitle = column.subtitle !== undefined;
                    }
                });
                if (this.rawData) {
                    this.dataSource = this.rawData;
                }
            }
            this.displayedColumnsWithTitle.splice(0, this.displayedColumnsWithTitle.length);
            this.displayedColumnsWithSubtitle.splice(0, this.displayedColumnsWithSubtitle.length);
            this.displayedColumnsWithFooter.splice(0, this.displayedColumnsWithFooter.length);
            this.getColumnsWithTitle().forEach(function (col) { return _this.displayedColumnsWithTitle.push(col); });
            this.getHeaderSubtitle().forEach(function (col) { return _this.displayedColumnsWithSubtitle.push(col); });
            this.footerDisplayedColumns().forEach(function (col) { return _this.displayedColumnsWithFooter.push(col); });
        };
        TableHelisaComponent.prototype.reload = function () {
            var _this = this;
            if (this.columnConfig) {
                var changeData_1 = Array();
                var haveGroup_1 = false;
                var groupFooter_1;
                this.columnConfig.forEach(function (column) {
                    if (column.totalType !== undefined && (_this.type === exports.TableHelisaType.LOCAL || _this.tableHelisaConnectComponent.page <= 1)) {
                        _this.totalData = new Array(_this.columnConfig.length);
                        _this.showFooter = true;
                        _this.total.emit({ column: column, columnConfigurations: _this.columnConfig, type: exports.ChangeColumnConfigurationType.TOTAL });
                    }
                    _this.showSearch = _this.showSearch || column.searchable;
                    haveGroup_1 = haveGroup_1 || column.groupable;
                });
                if (haveGroup_1) {
                    this.rawData = this.rawData.sort(function (a, b) {
                        var result = 0;
                        _this.columnConfig.forEach(function (column) {
                            if (result === 0) {
                                result = _this.compare(a, b);
                            }
                        });
                        return result;
                    });
                }
                if (this.rawData) {
                    this.rawData.forEach(function (row) {
                        if (haveGroup_1 && (changeData_1.length === 0 || _this.compare(changeData_1[changeData_1.length - 1].data, row) !== 0)) {
                            if (groupFooter_1) {
                                changeData_1.push({ data: groupFooter_1, rowType: RowType.GROUP_FOOTER });
                            }
                            changeData_1.push({ data: row, rowType: RowType.GROUP_TITLE });
                            groupFooter_1 = new Array(_this.columnConfig.length);
                        }
                        if (haveGroup_1) {
                            _this.addTotalGroup(groupFooter_1, row);
                        }
                        changeData_1.push({ data: row, rowType: RowType.ROW });
                    });
                    this.data = new table.MatTableDataSource(changeData_1);
                }
                if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
                    if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0) {
                        this.indexRowSelect = 0;
                    }
                    this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
                }
            }
        };
        TableHelisaComponent.prototype.addTotalGroup = function (rowTotal, row) {
            this.columnConfig.forEach(function (column, index) {
                if (column.totalType !== undefined) {
                    if (rowTotal[index] === undefined) {
                        rowTotal[index] = { sum: new ColumnConfigUtil().getValue(row, column), count: 1 };
                    }
                    else {
                        rowTotal[index].sum += new ColumnConfigUtil().getValue(row, column);
                        rowTotal[index].count++;
                    }
                }
            });
        };
        TableHelisaComponent.prototype.compare = function (a, b) {
            var ws = 0;
            this.columnConfig.forEach(function (column) {
                if (ws === 0 && column.groupable) {
                    if (new ColumnConfigUtil().getValue(a, column) < new ColumnConfigUtil().getValue(b, column)) {
                        ws = -1;
                    }
                    else if (new ColumnConfigUtil().getValue(a, column) > new ColumnConfigUtil().getValue(b, column)) {
                        ws = 1;
                    }
                }
            });
            return ws;
        };
        TableHelisaComponent.prototype.getGroupDescription = function (obj) {
            var result = '';
            this.columnConfig.forEach(function (column) {
                if (column.groupable) {
                    result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
                }
            });
            return result;
        };
        TableHelisaComponent.prototype.isGroupTitle = function (index, item) {
            return item.rowType === RowType.GROUP_TITLE;
        };
        TableHelisaComponent.prototype.isRow = function (index, item) {
            return item.rowType === RowType.ROW;
        };
        TableHelisaComponent.prototype.isGroupFooter = function (index, item) {
            return item.rowType === RowType.GROUP_FOOTER;
        };
        TableHelisaComponent.prototype.footerDisplayedColumns = function () {
            return this.displayedColumns.map(function (name) { return 'footer-' + name; });
        };
        TableHelisaComponent.prototype.getGroupValue = function (column, data) {
            if (column.totalType === exports.TotalType.SUM) {
                return data.sum;
            }
            if (column.totalType === exports.TotalType.COUNT) {
                return data.count;
            }
            if (column.totalType === exports.TotalType.AVERAGE) {
                return 1. * data.sum / data.count;
            }
            return undefined;
        };
        TableHelisaComponent.prototype.getValue = function (obj, column) {
            return new ColumnConfigUtil().getValue(obj, column);
        };
        TableHelisaComponent.prototype.getValueTooltip = function (obj, column) {
            if (this.showToolTip) {
                return new ColumnConfigUtil().getValue(obj, column);
            }
            else {
                return null;
            }
        };
        TableHelisaComponent.prototype.searchText = function (text) {
            this.lastSearch = text;
            this.search.emit({ text: text, columnConfigurations: this.columnConfig });
        };
        TableHelisaComponent.prototype.selectRow = function (row, isUser, column) {
            if (row === undefined || row === null) {
                return;
            }
            if ((column === undefined || column === null) || (!!column && column.name !== 'bookButton')) {
                this.selectedObject = row.data;
                this.select.emit(this.selectedObject);
                this.selectObject.emit({ value: this.selectedObject, scope: isUser ? exports.EventScope.USER : exports.EventScope.CODE_CALL });
            }
            else if (!!column && column.name === 'bookButton') {
                if (this.selectedObject !== row.data) {
                    this.selectedObject = row.data;
                    this.select.emit(this.selectedObject);
                    this.selectObject.emit({ value: this.selectedObject, scope: isUser ? exports.EventScope.USER : exports.EventScope.CODE_CALL });
                }
                this.bookClicked.emit(this.selectedObject);
            }
        };
        TableHelisaComponent.prototype.onScroll = function (event) {
            var element = event.target;
            var isScrollY;
            if (this.scrollY !== element.scrollTop) {
                isScrollY = true;
                this.scrollY = element.scrollTop;
                this.scrollX = element.scrollLeft;
            }
            if (this.scrollX !== element.scrollLeft) {
                isScrollY = false;
                this.scrollY = element.scrollTop;
                this.scrollX = element.scrollLeft;
            }
            if ((element.scrollHeight - element.scrollTop < 1000) && isScrollY) {
                this.goNextPage();
            }
        };
        TableHelisaComponent.prototype.goNextPage = function () {
            if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
                this.tableHelisaConnectComponent.isUsed = true;
                this.nextPage.emit({
                    page: this.tableHelisaConnectComponent.nextPage(),
                    body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
                });
            }
        };
        TableHelisaComponent.prototype.receivePage = function (data) {
            if (!this.rawData) {
                this.rawData = new Array();
            }
            this.rawData = this.rawData.concat(data);
            this.dataSource = this.rawData;
            this.tableHelisaConnectComponent.isLastPage = data.length === 0;
            this.tableHelisaConnectComponent.isUsed = false;
        };
        TableHelisaComponent.prototype.dblClickCell = function () {
            this.selectCell.emit(this.selectedCells);
        };
        TableHelisaComponent.prototype.selectedCell = function (element, column) {
            if (column.isSelectable === undefined || column.isSelectable === null || column.isSelectable) {
                this.selectRow(element, true, column);
                this.selectedCells = { column: column, row: element };
                this.selectCell.emit(this.selectedCells);
            }
        };
        TableHelisaComponent.prototype.isSelectedCell = function (row, column) {
            if (this.isCellSelection && !this.modeImportEnabled) {
                if (this.selectedCells != null) {
                    if (this.selectedCells.column.name === column.name &&
                        this.selectedCells.row.data === row.data) {
                        return true;
                    }
                }
            }
            return false;
        };
        TableHelisaComponent.prototype.selectedHeaderCell = function (column) {
            this.selectHeaderCell.emit(column);
        };
        TableHelisaComponent.prototype.getClassToHeaderCell = function (column) {
            var classToHeaderCell = new Array();
            if (column.headerStyle) {
                classToHeaderCell.push(column.headerStyle);
            }
            return classToHeaderCell;
        };
        TableHelisaComponent.prototype.getClassToCell = function (row, column) {
            var _this = this;
            var classToCell = new Array();
            if (this.modeImportEnabled) {
                classToCell.push('hw-color-gray');
            }
            if (this.configCellStyles) {
                var found = this.configCellStyles.find(function (c) {
                    return c.cellData === _this.getValue(row, column);
                });
                if (found) {
                    classToCell.push(found.classCell);
                }
            }
            if (column.columnStyle) {
                classToCell.push(column.columnStyle);
            }
            return classToCell;
        };
        TableHelisaComponent.prototype.getClassToColumn = function () {
            return this.configColumnClass;
        };
        TableHelisaComponent.prototype.getClassToRow = function (row) {
            var _this = this;
            var classToRow = new Array();
            if (row === this.selectedObject && !this.isCellSelection) {
                classToRow.push('');
            }
            if (this.configRowStylesFromColumn) {
                var founds = this.configRowStylesFromColumn.filter(function (c) {
                    return c.data === _this.getValue(row, c.column);
                });
                if (founds) {
                    founds.forEach(function (c) {
                        classToRow.push(c.classRow);
                    });
                }
            }
            return classToRow;
        };
        TableHelisaComponent.prototype.onDrop = function (event) {
            if (this.isDragged && this.indexRowStartDrag >= 0) {
                var rowIndex = this.getRowIndex(event.pageY);
                var array = this.dataBeforeDrag.data;
                var rawData = this.rawData;
                dragDrop.moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                dragDrop.moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
                this.drop.emit({ value: array[rowIndex].data, order: rowIndex });
                this.rawData = rawData;
                this.data = new table.MatTableDataSource(array);
                event.stopPropagation();
            }
        };
        TableHelisaComponent.prototype.tableKeydown = function (event) {
            if (this.modeImportEnabled) {
                if (event.code === 'Space' || event.key === 'Insert' || event.key === 'Delete') {
                    event.preventDefault();
                    event.stopPropagation();
                    this.selectToImport.emit({ value: this.selectedObject, scope: exports.EventScope.USER, keyActionImport: event.key });
                }
            }
            if (!this.isCellSelection) {
                this.arrowsEvents(event);
            }
        };
        TableHelisaComponent.prototype.arrowsEvents = function (event) {
            var _this = this;
            var currentIndex = this.data.data.findIndex(function (row) { return row.data === _this.selectedObject; });
            var newSelection = -10;
            if (event.key === 'ArrowDown') {
                this.scrollCount++;
                this.data.data.forEach(function (row, index) {
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
                });
            }
            if (event.key === 'ArrowUp') {
                this.scrollCount--;
                currentIndex = this.data.data.length - currentIndex - 1;
                this.data.data.reverse().forEach(function (row, index) {
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
                });
                this.data.data.reverse();
                if (newSelection !== -10) {
                    newSelection = this.data.data.length - newSelection - 1;
                }
            }
            if (newSelection !== -10) {
                this.selectRow(this.data.data[newSelection], true);
            }
            if (Math.abs(this.scrollCount) >= 2) {
                this.scrollCount = 0;
            }
            else {
                event.preventDefault();
            }
        };
        /**
         * Emite el evento cuando se da click al boton AddRow
         */
        TableHelisaComponent.prototype.onAddRow = function () {
            this.addRow.emit();
        };
        TableHelisaComponent.prototype.getHeaderSubtitle = function () {
            var x = this.columnConfig.map(function (column, index) {
                if (column.visible && column.subtitle !== undefined) {
                    return 'subtitle' + index;
                }
                else {
                    return null;
                }
            }).filter(function (data) { return data != null; });
            return x;
        };
        TableHelisaComponent.prototype.getColumnsWithTitle = function () {
            return this.columnConfig.filter(function (column) { return column.visible && column.title !== undefined; }).map(function (col) { return col.name; });
        };
        TableHelisaComponent.prototype.dragger = function (event) {
            if (this.isDragged && this.indexRowStartDrag >= 0) {
                var rowIndex = this.getRowIndex(event.pageY);
                if (rowIndex !== this.lastIndexRowDrag) {
                    this.lastIndexRowDrag = rowIndex;
                    // This can have a memory problem with big data
                    var array = __spread(this.dataBeforeDrag.data);
                    dragDrop.moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                    this.data = new table.MatTableDataSource(array);
                }
                event.preventDefault();
                return true;
            }
        };
        TableHelisaComponent.prototype.startDrag = function (event) {
            this.indexRowStartDrag = this.getRowIndex(event.pageY);
            this.lastIndexRowDrag = this.indexRowStartDrag;
            this.dataBeforeDrag = this.data;
        };
        TableHelisaComponent.prototype.getRowIndex = function (pageY) {
            var offsetTop = 0;
            var container = this.containerTable.nativeElement;
            while ((container !== null) && (offsetTop === 0)) {
                offsetTop = container.offsetTop;
                container = container.parentElement;
            }
            var rowIndex = -1;
            var rows = this.matTableElement.nativeElement.children[1].children;
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop) {
                    rowIndex = i;
                }
            }
            if (rowIndex < 0) {
                rowIndex = 0;
            }
            return rowIndex;
        };
        Object.defineProperty(TableHelisaComponent.prototype, "columnType", {
            get: function () {
                return exports.ColumnType;
            },
            enumerable: false,
            configurable: true
        });
        TableHelisaComponent.prototype.showMessageEmpty = function (data) {
            if (this.emptyMessageForColumn.isEnabled) {
                if ((!data.filteredData) || (data.filteredData && data.filteredData.length === 0)) {
                    return true;
                }
            }
            return false;
        };
        TableHelisaComponent.prototype.getMessageEmtpy = function () {
            return this.emptyMessageForColumn.text;
        };
        TableHelisaComponent.prototype.getIfButtonDisabled = function () {
            if (this.addRowButton && (this.addRowButton.isDisabled !== undefined && this.addRowButton.isDisabled !== null)) {
                if (this.addRowButton.isDisabled) {
                    return true;
                }
            }
            return false;
        };
        TableHelisaComponent.prototype.getToolTipButtonMessage = function () {
            if (this.getIfButtonDisabled()) {
                return this.addRowButton.toolTipText;
            }
            return '';
        };
        TableHelisaComponent.prototype.isResizingTable = function () {
            return this.resizeConfig.enableResize && (this.resizeConfig.typeResize === exports.TypeResizeEnum.BOTH || this.resizeConfig.typeResize === exports.TypeResizeEnum.ONLY_TABLES);
        };
        TableHelisaComponent.prototype.isResizingCell = function () {
            return this.resizeConfig.enableResize && (this.resizeConfig.typeResize === exports.TypeResizeEnum.BOTH || this.resizeConfig.typeResize === exports.TypeResizeEnum.ONLY_CELLS);
        };
        TableHelisaComponent.prototype.getIdForHelTable = function () {
            return this.resizeConfig.uuid + "-" + this.tableIndex;
        };
        TableHelisaComponent.prototype.getIdForCellTable = function (idx) {
            return this.resizeConfig.uuid + "-" + this.tableIndex + "-child-" + idx;
        };
        return TableHelisaComponent;
    }());
    TableHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-table',
                    template: "<button title=\"{{getToolTipButtonMessage()}}\" [disabled]=\"getIfButtonDisabled()\"  *ngIf=\"!!addRowButton && addRowButton.showButton && !modeImportEnabled\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div [ngClass]=\"getClassToColumn()\" class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort matTable\n      (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th [ngClass]=\"getClassToHeaderCell(column)\" (click)=\"selectedHeaderCell(column)\" [title]=\"column.title\" mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\n                *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\" class=\"hw-min-width-100 hw-weight-bold\">\n                {{column.title}}\n                <div id=\"{{getIdForCellTable(idx)}}\" *ngIf=\"isResizingCell()\" class=\"resize-handle-right resize-handle-table\"></div>\n              </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th [ngClass]=\"getClassToHeaderCell(column)\" (click)=\"selectedHeaderCell(column)\" [title]=\"column.title\" mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\n                *matHeaderCellDef mat-sort-header [attr.colspan]=\"column.colspanTitle\" class=\"hw-min-width-100 hw-weight-bold\"> {{column.title}}\n                <div id=\"{{getIdForCellTable(idx)}}\" *ngIf=\"isResizingCell()\" class=\"resize-handle-right resize-handle-table\"></div>\n              </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton' && !modeImportEnabled\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element;\" (click)=\"selectedCell(element, column)\">\n              <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                <i class=\"material-icons-outlined\">description</i>\n              </button>\n            </td>\n          </ng-container>\n\n          <td [title]=\"getValue(element.data, column)\" mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\" [hideDelay]=\"hideDelay\"\n            [showDelay]=\"showDelay\" *matCellDef=\"let element\" (dblclick)=\"dblClickCell()\"\n            (click)=\"selectedCell(element, column)\" [class.selected-row]=\"isSelectedCell(element, column)\"\n            [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{\n              getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n\n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\"\n          [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n  <div *ngIf=\"showMessageEmpty(data)\">\n    <p>\n      {{getMessageEmtpy()}}\n    </p>\n  </div>\n</div>\n<div *ngIf=\"isResizingTable()\" class=\"resize-handle-right resize-handle-table\" id=\"{{getIdForHelTable()}}\"></div>\n",
                    styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}tbody tr td button{height:auto;line-height:inherit}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table{position:relative}::ng-deep hel-table>button{align-items:flex-start;background:transparent;border:none;color:transparent;cursor:pointer;display:flex;height:26px;justify-content:center;opacity:.5;overflow:hidden;position:absolute;right:0;top:0;width:20px;z-index:101}::ng-deep hel-table>button:focus{outline:none}::ng-deep hel-table>button:hover{opacity:1}::ng-deep hel-table>button:before{align-items:center;color:#fff;content:\"+\";display:flex;font-size:20px;height:26px;justify-content:center;position:absolute;width:20px}::ng-deep hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}::ng-deep hel-table .buttons-container{order:2}::ng-deep hel-table .buttons-container.hasSubtitle,::ng-deep hel-table .buttons-container.hasTitle{padding-top:26px}::ng-deep hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}::ng-deep hel-table .buttons-container>div{height:26px}::ng-deep hel-table .buttons-container>div button{align-items:center;display:flex;height:26px;justify-content:center}::ng-deep hel-table .buttons-container>div button>*{display:flex;height:100%}::ng-deep hel-table .div-table-helisa{height:100%}::ng-deep hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa{width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep table{table-layout:fixed}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr{height:26px}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td button{height:auto;line-height:inherit}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot{display:none}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa .selected-row{background:silver;font-weight:700}"]
                },] }
    ];
    TableHelisaComponent.ctorParameters = function () { return [
        { type: TableHelisaService }
    ]; };
    TableHelisaComponent.propDecorators = {
        matSort: [{ type: i0.ViewChild, args: [sort.MatSort, { static: true },] }],
        matTable: [{ type: i0.ViewChild, args: [table.MatTable, { static: true },] }],
        matTableElement: [{ type: i0.ViewChild, args: [table.MatTable, { read: i0.ElementRef, static: true },] }],
        containerTable: [{ type: i0.ViewChild, args: ['containerTable', { static: true },] }],
        sort: [{ type: i0.Output }],
        total: [{ type: i0.Output }],
        search: [{ type: i0.Output }],
        select: [{ type: i0.Output }],
        selectCell: [{ type: i0.Output }],
        selectHeaderCell: [{ type: i0.Output }],
        selectToImport: [{ type: i0.Output }],
        selectObject: [{ type: i0.Output }],
        nextPage: [{ type: i0.Output }],
        showTitle: [{ type: i0.Input }],
        isCellSelection: [{ type: i0.Input }],
        count: [{ type: i0.Input }],
        configCellStyles: [{ type: i0.Input }],
        configRowStylesFromColumn: [{ type: i0.Input }],
        configColumnClass: [{ type: i0.Input }],
        selectedCells: [{ type: i0.Input }],
        drop: [{ type: i0.Output }],
        isDragged: [{ type: i0.Input }],
        addRowButton: [{ type: i0.Input }],
        emptyMessageForColumn: [{ type: i0.Input }],
        addRow: [{ type: i0.Output }],
        bookClicked: [{ type: i0.Output }],
        addBookButton: [{ type: i0.Input }],
        showToolTip: [{ type: i0.Input }],
        tableIndex: [{ type: i0.Input }],
        resizeConfig: [{ type: i0.Input }],
        afterViewInit: [{ type: i0.Output }],
        hideDelay: [{ type: i0.Input }],
        showDelay: [{ type: i0.Input }],
        modeImportEnabled: [{ type: i0.Input }],
        isRemote: [{ type: i0.Input }],
        columnConfiguration: [{ type: i0.Input }],
        dataSource: [{ type: i0.Input }],
        selectedIndexRow: [{ type: i0.Input }]
    };

    var moment = moment___namespace;
    (function (TypeCalendarEnum) {
        TypeCalendarEnum["NORMAL"] = "norma";
        TypeCalendarEnum["MONTH_YEAR"] = "mounth-year";
        TypeCalendarEnum["STRICT"] = "strict";
    })(exports.TypeCalendarEnum || (exports.TypeCalendarEnum = {}));
    var DateHelisaComponent = /** @class */ (function () {
        function DateHelisaComponent() {
            this.floatLabel = 'never';
            this.dateFormControl = new forms.FormControl('');
            this.date = new Date();
            /**
             * Formato de fecha.
             * Los formatos validos son aquellos que maneja la libreria momentjs y este: 'DD [de] MMMM [de] YYYY'
             * https://momentjs.com/docs/#/parsing/string-format/
             */
            this.dateFormat = 'DD/MM/YYYY';
            this.locale = 'es';
            this.errorMessage = 'La fecha no concuerda con el formato ';
            this.showErrorMessage = true;
            this.placeholder = this.dateFormat;
            this.showDatePicker = false;
            this.change = new i0.EventEmitter();
            this.isClosed = false;
            this.isDisabled = false;
            /**
             * Si este valor es diferente a TypeCalendarEnum.NORMAL no
             * será tomado en cuenta
             */
            this.typeCalendar = exports.TypeCalendarEnum.NORMAL;
            /**
             * Para evitar nuevos eventos miestras se realiza el parseo
             */
            this.isFromInputEvent = false;
            /**
             * Verificar si el formato es valido
             */
            this.invalidFormat = false;
            this.inputFormReal = new forms.FormControl('');
        }
        /*
        * TypeCalendarEnum.MONTH_YEAR = 'MM/YYYY'
        * TypeCalendarEnum.STRICT = 'DD [de] MMMM [de] YYYY'
        * */
        DateHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            moment.locale(this.locale);
            this.dateToVisualize = new forms.FormControl('', this.dateFormControl.validator);
            this.formHandler();
            this.inputFormReal = this.dateFormControl;
            this.inputFormReal.registerOnDisabledChange(function (isDisabled) {
                if (isDisabled) {
                    _this.isDisabled = true;
                    _this.dateToVisualize.disable();
                }
                else {
                    _this.isDisabled = false;
                    _this.dateToVisualize.enable();
                }
            });
            /**
             * establecer valor por defecto de la fecha
             */
            if (this.dateFormControl.value !== '' && this.dateFormControl.value !== null) {
                var incomingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
                if (incomingDate !== 'Invalid date') {
                    this.dateToVisualize.setValue(incomingDate);
                    this.dateFormControl.setValue(this.dateFormControl.value);
                }
            }
        };
        Object.defineProperty(DateHelisaComponent.prototype, "typeCalendarEnum", {
            get: function () {
                return exports.TypeCalendarEnum;
            },
            enumerable: false,
            configurable: true
        });
        DateHelisaComponent.prototype.openDatePicker = function () {
            var _this = this;
            if (this.showDatePicker && !this.isClosed) {
                this.isClosed = true;
                this.timeout = setTimeout(function () {
                    _this.datePickerShow.open();
                }, 2000);
            }
        };
        DateHelisaComponent.prototype.onKey = function (event) {
            if (event.key === 'Enter') {
                this.onBlur();
                this.isClosed = true;
                this.datePickerShow.open();
            }
        };
        DateHelisaComponent.prototype.onBlur = function () {
            if (moment(this.dateToVisualize.value, this.dateFormat, true).isValid()) {
                var incomingDate = moment(this.dateToVisualize.value, this.dateFormat).format(this.dateFormat);
                this.dateToVisualize.setValue(incomingDate);
                this.dateFormControl.setValue(moment(this.dateToVisualize.value, this.dateFormat).toDate());
                this.change.emit(moment(this.dateToVisualize.value, this.dateFormat).toDate());
                clearTimeout(this.timeout);
                this.isClosed = false;
                if (this.showDatePicker) {
                    this.isClosed = true;
                    this.datePickerShow.open();
                }
            }
        };
        /**
         * Determina como se debe inicializar la visualizacion del calendar
         */
        DateHelisaComponent.prototype.getStartView = function () {
            // multi-year
            if (this.typeCalendar === this.typeCalendarEnum.MONTH_YEAR) {
                return 'multi-year';
            }
            else if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
                return 'month';
            }
            else {
                return 'month';
            }
        };
        DateHelisaComponent.prototype.formHandler = function () {
            var _this = this;
            if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
                this.dateToVisualize.valueChanges.subscribe(function (date) {
                    _this.invalidFormat = false;
                    var isValid = moment(date, _this.dateFormat, true).isValid();
                    var result = moment(date, _this.dateFormat).format(_this.dateFormat);
                    if (!!result && (result === 'Invalid date' || !isValid)) {
                        _this.invalidFormat = true;
                        return;
                    }
                    if (!!result) {
                        if (!_this.isFromInputEvent) {
                            _this.isFromInputEvent = true;
                            _this.dateToVisualize.setValue(moment(result, _this.dateFormat).format(_this.dateFormat));
                            _this.dateFormControl.setValue(moment(result, _this.dateFormat).toDate());
                            _this.isFromInputEvent = false;
                        }
                        else {
                            setTimeout(function () {
                                _this.isFromInputEvent = false;
                            }, 1500);
                        }
                    }
                });
            }
            else {
                this.dateToVisualize.valueChanges
                    .pipe(operators.tap(function (date) {
                    if (date.trim().length > _this.dateFormat.length) {
                        _this.invalidFormat = true;
                    }
                    else {
                        _this.invalidFormat = false;
                    }
                }), operators.filter(function (date) { return date.length === _this.dateFormat.length; }))
                    .subscribe(function (date) {
                    _this.invalidFormat = false;
                    var isValid = moment(date, _this.dateFormat, true).isValid();
                    var result = moment(date, _this.dateFormat).format('YYYY-MM-DD');
                    if (!!result && (result === 'Invalid date' || !isValid)) {
                        _this.invalidFormat = true;
                        return;
                    }
                    if (!!result) {
                        if (!_this.isFromInputEvent) {
                            _this.isFromInputEvent = true;
                            var subString = result.split('-');
                            var year = parseFloat(subString[0]);
                            var month = parseFloat(subString[1]);
                            var day = parseFloat(subString[2]);
                            _this.date.setFullYear(year);
                            _this.date.setDate(day);
                            _this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                            /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                            if (_this.typeCalendar === exports.TypeCalendarEnum.MONTH_YEAR) {
                                _this.date = moment(_this.date).endOf('month').toDate();
                            }
                            _this.dateToVisualize.setValue(moment(_this.date, 'YYYY-MM-DD').format(_this.dateFormat));
                            _this.dateFormControl.setValue(_this.date);
                            _this.isFromInputEvent = false;
                        }
                        else {
                            setTimeout(function () {
                                _this.isFromInputEvent = false;
                            }, 1500);
                        }
                    }
                });
            }
            this.dateFormControl.valueChanges
                .subscribe(function (date) {
                var incommingDate = moment(date, _this.dateFormat).format(_this.dateFormat);
                if (_this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                    _this.dateToVisualize.setValue(incommingDate);
                }
            });
        };
        /**
         * Evento que se dispara luego seleccionar un mes
         */
        DateHelisaComponent.prototype.monthSelectedHandler = function (chosenMonthDate, datepicker) {
            if (this.typeCalendar === exports.TypeCalendarEnum.MONTH_YEAR) {
                datepicker.close();
                var date = moment(chosenMonthDate).endOf('month').toDate();
                this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
                this.dateFormControl.setValue(date);
                this.change.emit(date);
            }
        };
        /**
         * Evento desde el control touch del calendar
         */
        DateHelisaComponent.prototype.dateChange = function (type, event) {
            this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(new Date(event.value));
            this.change.emit(new Date(event.value));
            this.isClosed = true;
        };
        DateHelisaComponent.prototype.getErrorMessage = function () {
            return this.errorMessage + this.dateFormat;
        };
        DateHelisaComponent.prototype.getDateToControl = function () {
            return moment(this.dateToVisualize.value, this.dateFormat).toDate();
        };
        return DateHelisaComponent;
    }());
    DateHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-date-helisa',
                    template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"getDateToControl()\"\n    (dateChange)=\"dateChange('change', $event)\" [min]=\"minDate\" [max]=\"maxDate\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"showErrorMessage && invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
                    styles: [""]
                },] }
    ];
    DateHelisaComponent.ctorParameters = function () { return []; };
    DateHelisaComponent.propDecorators = {
        datePickerShow: [{ type: i0.ViewChild, args: ['picker', { static: true },] }],
        floatLabel: [{ type: i0.Input }],
        dateFormControl: [{ type: i0.Input }],
        dateFormat: [{ type: i0.Input }],
        locale: [{ type: i0.Input }],
        errorMessage: [{ type: i0.Input }],
        showErrorMessage: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        showDatePicker: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        change: [{ type: i0.Output }],
        typeCalendar: [{ type: i0.Input }]
    };

    var TreeHelisaService = /** @class */ (function () {
        function TreeHelisaService() {
            // Observable string sources
            this.emitNodeSelected = new rxjs.BehaviorSubject(1);
            // Observable string streams
            this.nodeSelected = this.emitNodeSelected.asObservable();
            // Observable string sources
            this.emitDataSource = new rxjs.BehaviorSubject(undefined);
            // Observable string streams
            this.dataSourceObservable = this.emitDataSource.asObservable();
            // Expand node observable
            this.emitExpandAllNodes = new rxjs.BehaviorSubject(null);
            this.nodeExpand = this.emitExpandAllNodes.asObservable();
            // Collapse node observable
            this.emitCollapseAllNodes = new rxjs.BehaviorSubject(null);
            this.nodeCollapse = this.emitCollapseAllNodes.asObservable();
            this.emitRefreshTree = new rxjs.Subject();
            this.refreshTreeObservable = this.emitRefreshTree.asObservable();
            this.emitRefreshTreeWithPagination = new rxjs.Subject();
            this.refreshTreeWithPaginationObservable = this.emitRefreshTreeWithPagination.asObservable();
            this.emitExpandOneNode = new rxjs.Subject();
            this.expandOneNodeObservable = this.emitExpandOneNode.asObservable();
            this.emitCollapseOneNode = new rxjs.Subject();
            this.collapseOneNodeObservable = this.emitCollapseOneNode.asObservable();
        }
        // Service message commands
        TreeHelisaService.prototype.changeNodeSelected = function (idResidentialArea) {
            this.emitNodeSelected.next(idResidentialArea);
        };
        // Service message commands
        TreeHelisaService.prototype.changeDataSource = function (data) {
            this.emitDataSource.next(data);
        };
        TreeHelisaService.prototype.expandAllNodes = function (expand) {
            this.emitExpandAllNodes.next(expand);
        };
        TreeHelisaService.prototype.collapseAllNodes = function (collapse) {
            this.emitCollapseAllNodes.next(collapse);
        };
        TreeHelisaService.prototype.refreshTree = function () {
            this.emitRefreshTree.next();
        };
        TreeHelisaService.prototype.refreshTreeWithPagination = function () {
            this.emitRefreshTreeWithPagination.next();
        };
        TreeHelisaService.prototype.expandOneNode = function (node) {
            this.emitExpandOneNode.next(node);
        };
        TreeHelisaService.prototype.collapseOneNode = function (node) {
            this.emitCollapseOneNode.next(node);
        };
        return TreeHelisaService;
    }());
    TreeHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
    TreeHelisaService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    TreeHelisaService.ctorParameters = function () { return []; };

    var TreeHelisaConnect = /** @class */ (function () {
        function TreeHelisaConnect() {
            this.page = 0;
            this.isLastPage = false;
            this.isUsed = false;
        }
        TreeHelisaConnect.prototype.nextPage = function () {
            return this.page = this.page + 1;
        };
        return TreeHelisaConnect;
    }());

    var TreeHelisaComponent = /** @class */ (function () {
        //#endregion ====== Variables ========
        function TreeHelisaComponent(treeHelisaService, router, elementRef) {
            this.treeHelisaService = treeHelisaService;
            this.router = router;
            this.elementRef = elementRef;
            this.selectedOptions = new Map();
            /**
             * Retorna el id del nodo removido
             */
            this.removed = new i0.EventEmitter();
            /**
             * Retorna un nodo editado
             */
            this.edited = new i0.EventEmitter();
            /**
             * Retorna un nodo sin id del nodo , pero si con el parent
             * para conocer a cual fue añadido
             */
            this.added = new i0.EventEmitter();
            this.collapseParent = new i0.EventEmitter();
            this.rangeScrolled = new i0.EventEmitter();
            this.nodeSelected = new i0.EventEmitter();
            this.dobleClick = new i0.EventEmitter();
            this.keypressDelete = new i0.EventEmitter();
            this.keypressInsert = new i0.EventEmitter();
            this.checkedOptionNode = new i0.EventEmitter();
            this.uncheckedOptionNode = new i0.EventEmitter();
            this.clickAddNode = new i0.EventEmitter();
            this.clickEditNode = new i0.EventEmitter();
            this.clickDeleteNode = new i0.EventEmitter();
            this.treeControl = new tree.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new tree$1.MatTreeNestedDataSource();
            this.isSingleClick = true;
            this.currentNode = null;
            // cargar datos pasados por el @Input
            if (!!this.data) {
                var data = this.data;
                this.data = null;
                this.receivePage(data.children);
            }
            else {
                this.dataSource.data = [];
                this.treeControl.dataNodes = [];
            }
        }
        /**
         * Obtiene la descripcion completa del nodo
         * @example Nodo padre,nodo hijo,nodo nieto
         * @param node Debe tener todos los parent llenos hacia arriba
         */
        TreeHelisaComponent.getDescription = function (node) {
            var result = [node.name];
            var concat = '';
            if (node.parent) {
                result.push(this.getDescription(node.parent));
            }
            if (result.length === 1) {
                return node.name;
            }
            result = result.reverse();
            for (var i = 0; i < result.length; i++) {
                var element = result[i];
                concat = concat + element + (i === result.length - 1 ? '' : ',');
            }
            return concat;
        };
        TreeHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            // si se cargan datos por medio del servicio
            this.treeHelisaService.dataSourceObservable.subscribe(function (res) {
                if (!!res && !!res.children) {
                    _this.selectedNode = res.id;
                    _this.receivePage(res.children);
                }
                else {
                    _this.dataSource.data = [];
                    _this.treeControl.dataNodes = [];
                }
            });
            // Observable, si cambia el nodo seleccionado por medio del servicio
            this.treeHelisaService.nodeSelected.subscribe(function (res) {
                if (!!_this.data && !!_this.data.children) {
                    _this.selectNode(_this.data, res);
                }
            });
            this.treeHelisaService.refreshTreeObservable.subscribe(function (res) {
                _this.refreshTree();
            });
            this.treeHelisaService.refreshTreeWithPaginationObservable.subscribe(function (res) {
                _this.refreshTreeWithPagination();
            });
        };
        TreeHelisaComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.treeHelisaService.nodeExpand.subscribe(function (res) {
                if (res != null) {
                    if (res) {
                        _this.tree.treeControl.expandAll();
                    }
                }
            });
            this.treeHelisaService.nodeCollapse.subscribe(function (res) {
                if (res !== null) {
                    if (res) {
                        _this.tree.treeControl.collapseAll();
                    }
                }
            });
            this.treeHelisaService.expandOneNodeObservable.subscribe(function (res) {
                if (res !== undefined) {
                    _this.treeControl.expand(res);
                }
            });
            this.treeHelisaService.collapseOneNodeObservable.subscribe(function (res) {
                if (res !== undefined) {
                    _this.treeControl.collapse(res);
                }
            });
        };
        //#region  ====== Events ===========
        TreeHelisaComponent.prototype.onRedirect = function (node) {
            var _this = this;
            this.isSingleClick = true;
            setTimeout(function () {
                if (_this.isSingleClick) {
                    _this.selectNode(node, node.id);
                    // if(!!node && !node.children){
                    if (!!node) {
                        _this.nodeSelected.emit(node.id);
                        _this.currentNode = node;
                    }
                }
            }, 350);
        };
        TreeHelisaComponent.prototype.onScroll = function (event) {
            var element = event.target;
            if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
                this.goNextPage();
            }
        };
        TreeHelisaComponent.prototype.onEdit = function (node) {
            this.clickEditNode.emit(node);
            /** @Deprecated
             *  Ya no se edita el nodo ahora solo se emite el evento 'clickEditNode'
             * retornando el nodo al cual le hicieron click en la opción delete
             */
            // node.isEditable = true;
            // this.isDisabled = true;
        };
        TreeHelisaComponent.prototype.onAdd = function (node) {
            this.clickAddNode.emit(node);
            /** @Deprecated
             *  Ya no se crea y se agrega el nodo ahora solo se emite el evento 'clickAddNode'
             * retornando el nodo al cual le hicieron click en la opción add
             */
            //   // si no tiene hijos instanciar el array
            //   if (!node.children) {
            //     node.children = [];
            //   }
            //   node.children.push({
            //     id: Math.random(),
            //     name: '',
            //     isSelected: false,
            //     parent: node,
            //     isEditable: true
            //   });
            //   if (node.children) {
            //     this.isDisabled = true;
            //     this.treeHelisaService.expandOneNode(node);
            //   }
            //   this.refreshTree();
        };
        TreeHelisaComponent.prototype.onDelete = function (node) {
            this.clickDeleteNode.emit(node);
            /** @Deprecated
             *  Ya no se elimina el nodo ahora solo se emite el evento 'clickDeleteNode'
             * retornando el nodo al cual le hicieron click en la opción delete
             */
            // // Remueve el nodo utilizando la libreria de lodash
            // _.remove(node.parent.children, node);
            // this.refreshTree();
            // this.removed.emit(node.id);
        };
        TreeHelisaComponent.prototype.onEdited = function (node, value) {
            node.name = value;
            if (node.id == null && node.name === '') {
                _.remove(node.parent.children, node);
                this.refreshTree();
            }
            else if (node.id && node.id != null && node.name.trim() !== '') {
                this.edited.emit(node);
                node.isEditable = false;
                this.selectNode(node, node.id);
            }
            else if (node.id == null && node.name.trim() !== '') {
                this.added.emit(node);
                node.isEditable = false;
            }
            this.isDisabled = false;
            this.refreshTree();
        };
        TreeHelisaComponent.prototype.onCancel = function (node, value) {
            this.isDisabled = false;
            // Si no tiene id por ser un nuevo item, lo elimina
            if (node.id == null) {
                _.remove(node.parent.children, node);
                this.refreshTree();
            }
            node.isEditable = false;
        };
        TreeHelisaComponent.prototype.onDblClick = function (node) {
            this.isSingleClick = false;
            this.dobleClick.emit(node.id);
        };
        TreeHelisaComponent.prototype.onKeyDown = function (event) {
            switch (event.key) {
                case 'Delete':
                    this.keypressDelete.emit(!!this.currentNode && this.currentNode.id ? this.currentNode.id : null);
                    break;
                case 'Insert':
                    this.keypressInsert.emit(!!this.currentNode && this.currentNode.id ? this.currentNode.id : null);
                    break;
                case 'ArrowDown':
                    this.moveDownIntoTree();
                    break;
                case 'ArrowUp':
                    this.moveUpIntoTree();
                    break;
            }
        };
        //#endregion ======= Events ========
        //#region  ======== Metodos =============
        TreeHelisaComponent.prototype.moveUpIntoTree = function () {
            if (!!this.data) {
                // si aun no hay ningun node seleccionado selecciona el primero
                if (this.currentNode == null) {
                    this.selectNode(this.data, this.data.children[0].id);
                    this.currentNode = this.data.children[0];
                    if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                        this.treeHelisaService.expandOneNode(this.currentNode);
                    }
                }
                else {
                    if (!!this.currentNode.parent && this.currentNode.id != null) {
                        // obtiene el indice del nodo seleccionado actualmente
                        var index = this.currentNode.parent.children.indexOf(this.currentNode);
                        if (this.currentNode.parent.id == null && index === 0) {
                            return 0;
                        }
                        else {
                            // si tiene nodos al mismo nivel salta al nodo anterior
                            if (index !== undefined && index === 0) {
                                this.currentNode = this.currentNode.parent;
                                this.selectNode(this.data, this.currentNode.id);
                                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                    this.treeHelisaService.expandOneNode(this.currentNode);
                                }
                            }
                            else {
                                // si no tiene nodos al mismo nivel salta al nodo padre
                                this.currentNode = this.currentNode.parent.children[index - 1];
                                this.selectNode(this.data, this.currentNode.id);
                                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                    this.treeHelisaService.expandOneNode(this.currentNode);
                                }
                            }
                        }
                    }
                }
            }
        };
        TreeHelisaComponent.prototype.moveDownIntoTree = function () {
            if (!!this.data) {
                if (this.currentNode == null) {
                    this.selectNode(this.data, this.data.children[0].id);
                    this.currentNode = this.data.children[0];
                    if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                        this.treeHelisaService.expandOneNode(this.currentNode);
                    }
                }
                else {
                    if (!!this.currentNode) {
                        // obtiene el indice del nodo seleccionado actualmente
                        var index = !!this.currentNode && !!this.currentNode.parent ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
                        // si tiene childrens pasa al primer children
                        if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                            this.currentNode = this.currentNode.children[0];
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                        else if (index !== undefined &&
                            index === this.currentNode.parent.children.length - 1 &&
                            this.currentNode.parent.parent != null &&
                            this.currentNode.parent.parent.children != null &&
                            this.currentNode.parent.parent.children.length > 0) {
                            var indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
                            this.currentNode =
                                this.currentNode.parent.parent.children[indexOfParent + 1] === undefined
                                    ? this.currentNode
                                    : this.currentNode.parent.parent.children[indexOfParent + 1];
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                        else {
                            // si no tiene nodos al mismo nivel salta al siguiente hacia abajo
                            this.currentNode = this.currentNode.parent.children[index + 1];
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                    }
                }
            }
        };
        /**
         * Verifica si el nodo tiene hijos
         */
        TreeHelisaComponent.prototype.hasChild = function (t, node) {
            return !!node.children && node.children.length > 0;
        };
        /**
         * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
         */
        TreeHelisaComponent.prototype.refreshTree = function () {
            this.data = null;
            var datasourceData = this.dataSource.data;
            this.dataSource.data = null;
            this.dataSource.data = datasourceData;
            this.treeControl.dataNodes = datasourceData;
        };
        /**
         * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
         */
        TreeHelisaComponent.prototype.refreshTreeWithPagination = function () {
            var datasourceData = this.dataSource.data;
            this.dataSource.data = null;
            this.dataSource.data = datasourceData;
            this.treeControl.dataNodes = datasourceData;
        };
        TreeHelisaComponent.prototype.goNextPage = function () {
            if (!this.treeHelisaConnect.isLastPage && !this.treeHelisaConnect.isUsed) {
                this.treeHelisaConnect.isUsed = true;
                this.rangeScrolled.emit({
                    page: this.treeHelisaConnect.nextPage()
                });
            }
        };
        TreeHelisaComponent.prototype.receivePage = function (data) {
            var _this = this;
            if (!this.data) {
                this.data = { id: null, name: 'root', isSelected: false };
            }
            if (!this.data.children) {
                this.data.children = new Array();
                this.treeHelisaConnect = new TreeHelisaConnect();
            }
            this.data.children = this.data.children.concat(data);
            this.data.children.forEach(function (node) {
                _this.fillParent(node, _this.data);
            });
            this.data.children = this.reorderByOrderIndex(this.data.children);
            this.dataSource.data = this.data.children;
            this.treeControl.dataNodes = this.data.children;
            this.treeHelisaConnect.isLastPage = data.length === 0;
            this.treeHelisaConnect.isUsed = false;
        };
        /**
         * Llenan el campo parent de todos los nodos hijos
         */
        TreeHelisaComponent.prototype.fillParent = function (node, parent) {
            var _this = this;
            node.parent = parent;
            if (node.children && node.children.length > 0) {
                node.children.forEach(function (item) {
                    _this.fillParent(item, node);
                });
            }
        };
        /**
         * coloca como true del isSelected del nodo que concuerde con el id
         */
        TreeHelisaComponent.prototype.selectNode = function (node, id) {
            if (node == null) {
                return null;
            }
            this.upSelectNode(node);
            if (!!this.selectedNode) {
                var nodeSelected = this.getNodeById(this.selectedNode);
                if (nodeSelected != null) {
                    nodeSelected.isSelected = false;
                    this.selectedNode = null;
                }
            }
            if (node.id !== undefined && node.id === id) {
                node.isSelected = true;
                this.expandAllParents(node);
                this.selectedNode = node.id;
                return node;
            }
            else if (node.children != null) {
                var i = void 0;
                var result = null;
                for (i = 0; result == null && i < node.children.length; i++) {
                    result = this.selectNode(node.children[i], id);
                }
                return result;
            }
            return null;
        };
        TreeHelisaComponent.prototype.expandAllParents = function (node) {
            if (!!node && !!node.parent) {
                this.treeHelisaService.expandOneNode(node.parent);
                this.expandAllParents(node.parent);
            }
        };
        /**
         * Elimina el isSelected de todos los nodos
         */
        TreeHelisaComponent.prototype.upSelectNode = function (node) {
            var e_1, _a;
            if (!!node && node.isSelected !== undefined) {
                node.isSelected = false;
                if (!!node.children) {
                    try {
                        for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var childrenNode = _c.value;
                            this.upSelectNode(childrenNode);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
        };
        TreeHelisaComponent.prototype.getClassNode = function (node) {
            var classNode = [];
            if (node.isSelected) {
                classNode.push('isSelected');
            }
            if (node.classNode) {
                classNode.push(node.classNode);
            }
            return classNode;
        };
        TreeHelisaComponent.prototype.onEditMode = function (node, editMode) {
            this.getSelectedOptions(node).editMode = editMode;
        };
        TreeHelisaComponent.prototype.onSelectOption = function (event, node) {
            node.isCheckedOption = event.source.selected;
            if (node.isCheckedOption) {
                this.checkedOptionNode.emit(node.id);
            }
            else {
                this.uncheckedOptionNode.emit(node.id);
            }
        };
        TreeHelisaComponent.prototype.getSelectedOptions = function (node) {
            if (this.selectedOptions.has(node.id)) {
                this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
            }
            else {
                this.reloadSelectedOptions(node, false);
            }
            return this.selectedOptions.get(node.id);
        };
        TreeHelisaComponent.prototype.reloadSelectedOptions = function (node, editMode) {
            var array = new Array();
            node.options.forEach(function (option) {
                if (option.isCheckedOption) {
                    array.push(option.id);
                }
            });
            var obj = { formControl: new forms.FormControl(array), editMode: editMode };
            this.selectedOptions.set(node.id, obj);
        };
        /**
         * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
         * @param id  number | string
         * @returns Node o null si no hay un nodo con ese id
         */
        TreeHelisaComponent.prototype.getNodeById = function (id) {
            var queue = __spread(this.dataSource.data);
            while (queue.length > 0) {
                var curr = queue.shift();
                if (curr.id === id) {
                    return curr;
                }
                else {
                    if (!!curr.children) {
                        queue.push.apply(queue, __spread(curr.children));
                    }
                }
            }
            return null;
        };
        TreeHelisaComponent.prototype.reorderByOrderIndex = function (node) {
            var _this = this;
            if (!!node && node.length > 0) {
                try {
                    node = _.orderBy(node, function (x) { return x.orderIndex; }, ['asc']);
                    node.forEach(function (element) {
                        if (!!element.children && element != null) {
                            element.children = _this.reorderByOrderIndex(element.children);
                        }
                    });
                    return node;
                }
                catch (error) {
                    console.log(error);
                }
            }
        };
        return TreeHelisaComponent;
    }());
    TreeHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-tree',
                    template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      <li\n        class=\"mat-tree-node\"\n        [ngClass]=\"getClassNode(node)\"\n        (click)=\"onRedirect(node)\"\n        (dblclick)=\"onDblClick(node)\"\n        *ngIf=\"!node.isEditable\"\n        class=\"tree-node\"\n      >\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        <ng-container *ngIf=\"node.data\">\n          <ul>\n            <ng-container *ngFor=\"let col of node.data\">\n              <li *ngIf=\"col.visible\">\n                {{ col.name }}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n      </li>\n      <li class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </li>\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n              option.name\n            }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </div>\n\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n        <hel-input-with-button [isFocused]=\"true\" [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n        </hel-input-with-button>\n      </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\n      <ul>\n        <li>\n          <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\n            <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n              <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\n              </mat-icon>\n            </button>\n            <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\n              <ng-container *ngIf=\"node.data\">\n                <ul>\n                  <ng-container *ngFor=\"let col of node.data\">\n                    <li *ngIf=\"col.visible\">\n                      {{ col.name }}\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n            </p>\n          </div>\n          <div class=\"tree-options\">\n            <li class=\"tree-options\">\n              <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n                <mat-icon>add</mat-icon>\n              </button>\n              <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </li>\n            <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n              <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n                <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n                  <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n                    option.name\n                  }}</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n                <mat-icon>done</mat-icon>\n              </button>\n            </div>\n          </div>\n          <ul *ngIf=\"treeControl.isExpanded(node)\">\n            <ng-container matTreeNodeOutlet></ng-container>\n          </ul>\n        </li>\n      </ul>\n    </mat-nested-tree-node>\n  </mat-tree>\n</div>\n",
                    styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{list-style-type:none;margin-bottom:0;margin-top:0}.isSelected{background:red}.tree-options{display:inline}.container-tree{height:350px;overflow:scroll;width:100%}.tree-node{-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
                },] }
    ];
    TreeHelisaComponent.ctorParameters = function () { return [
        { type: TreeHelisaService },
        { type: router.Router },
        { type: i0.ElementRef }
    ]; };
    TreeHelisaComponent.propDecorators = {
        tree: [{ type: i0.ViewChild, args: ['tree', { static: true },] }],
        data: [{ type: i0.Input }],
        removed: [{ type: i0.Output }],
        edited: [{ type: i0.Output }],
        added: [{ type: i0.Output }],
        collapseParent: [{ type: i0.Output }],
        rangeScrolled: [{ type: i0.Output }],
        nodeSelected: [{ type: i0.Output }],
        dobleClick: [{ type: i0.Output }],
        keypressDelete: [{ type: i0.Output }],
        keypressInsert: [{ type: i0.Output }],
        checkedOptionNode: [{ type: i0.Output }],
        uncheckedOptionNode: [{ type: i0.Output }],
        clickAddNode: [{ type: i0.Output }],
        clickEditNode: [{ type: i0.Output }],
        clickDeleteNode: [{ type: i0.Output }],
        onKeyDown: [{ type: i0.HostListener, args: ['document:keyup', ['$event'],] }]
    };

    var AutocompleteHelisaService = /** @class */ (function () {
        function AutocompleteHelisaService() {
            this.emitChangeSource = new rxjs.BehaviorSubject([]);
            this.dataSource$ = this.emitChangeSource.asObservable();
        }
        AutocompleteHelisaService.prototype.setDataSource = function (options) {
            this.emitChangeSource.next(options);
        };
        return AutocompleteHelisaService;
    }());
    AutocompleteHelisaService.decorators = [
        { type: i0.Injectable }
    ];
    AutocompleteHelisaService.ctorParameters = function () { return []; };

    var AutocompleteHelisaComponent = /** @class */ (function () {
        function AutocompleteHelisaComponent(autocompleteHelisaService) {
            this.autocompleteHelisaService = autocompleteHelisaService;
            this.myControl = new forms.FormControl();
            this.options = new Array();
            this.selectedValueEmmiter = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.isRemote = false;
            this.isLoading = false;
            this.onScrollObservable = new rxjs.Subject();
        }
        AutocompleteHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.onScrollObservable.asObservable()
                .pipe(operators.debounceTime(500), operators.throttleTime(500))
                .subscribe(function () {
                _this.nextPage.emit();
            });
            if (this.isRemote) {
                this.autocompleteHelisaService.dataSource$.subscribe(function (data) {
                    setTimeout(function () {
                        _this.options = data;
                        _this.filteredOptions = rxjs.of(_this.options);
                    });
                });
            }
            this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(function (x) { return _this._checkRegex(x); }), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompleteHelisaComponent.prototype.displayFn = function (option) {
            return option ? option.displayText : undefined;
        };
        AutocompleteHelisaComponent.prototype.getService = function () {
            return this.autocompleteHelisaService;
        };
        /** Elimina caracteres extraños */
        AutocompleteHelisaComponent.prototype._checkRegex = function (value) {
            value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
            return value;
        };
        AutocompleteHelisaComponent.prototype._filter = function (value) {
            if (!(value)) {
                if (!this.isRemote) {
                    var filterValue_1 = value.toLowerCase().split(' ');
                    return this.options.filter(function (option) {
                        var ws = true;
                        filterValue_1.forEach(function (text) { return ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0; });
                        return ws;
                    }).splice(0, 5);
                }
                else {
                    return this.options;
                }
            }
        };
        AutocompleteHelisaComponent.prototype.onSelected = function (event) {
            this.selectedValue = event.option.value;
            this.selectedValueEmmiter.emit(this.selectedValue.value);
        };
        AutocompleteHelisaComponent.prototype.getNextPage = function () {
            this.onScrollObservable.next();
        };
        return AutocompleteHelisaComponent;
    }());
    AutocompleteHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-autocomplete',
                    template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
                    providers: [AutocompleteHelisaService],
                    styles: [""]
                },] }
    ];
    AutocompleteHelisaComponent.ctorParameters = function () { return [
        { type: AutocompleteHelisaService }
    ]; };
    AutocompleteHelisaComponent.propDecorators = {
        myControl: [{ type: i0.Input }],
        options: [{ type: i0.Input }],
        selectedValueEmmiter: [{ type: i0.Output }],
        nextPage: [{ type: i0.Output }],
        isRemote: [{ type: i0.Input }]
    };

    var OptionsScrollDirective = /** @class */ (function () {
        function OptionsScrollDirective(autoComplete) {
            var _this = this;
            this.autoComplete = autoComplete;
            /**
             * This value would different depends of styles
             */
            this.thresholdPercent = .9;
            this.optionsScroll = new i0.EventEmitter();
            this.destroy = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.autoComplete.opened.pipe(operators.tap(function () {
                // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
                // Note: The panel will be available on next tick
                // Note: The panel wil NOT open if there are no options to display
                setTimeout(function () {
                    // Note: remove listner just for safety, in case the close event is skipped.
                    _this.removeScrollEventListener();
                    if (!!_this.autoComplete &&
                        !!_this.autoComplete.panel &&
                        !!_this.autoComplete.panel.nativeElement) {
                        _this.autoComplete.panel.nativeElement
                            .addEventListener('scroll', _this.onScroll.bind(_this), false);
                    }
                });
            }), operators.takeUntil(this.destroy)).subscribe();
            this.autoComplete.closed.pipe(operators.tap(function () { return _this.removeScrollEventListener(); }), operators.takeUntil(this.destroy)).subscribe();
        }
        OptionsScrollDirective.prototype.removeScrollEventListener = function () {
            if (!!this.autoComplete &&
                !!this.autoComplete.panel &&
                !!this.autoComplete.panel.nativeElement) {
                this.autoComplete.panel.nativeElement
                    .removeEventListener('scroll', this.onScroll);
            }
        };
        OptionsScrollDirective.prototype.ngOnDestroy = function () {
            this.destroy.next();
            this.destroy.complete();
            this.removeScrollEventListener();
        };
        OptionsScrollDirective.prototype.onScroll = function (event) {
            // Credits: how to know if it's down or up scroll "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            var st = event.target.pageYOffset || event.target.scrollTop;
            if (st > this.lastScrollTop) {
                // downscroll code
                if (this.thresholdPercent === undefined) {
                    this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
                }
                else {
                    var threshold = this.thresholdPercent * 100 * event.target.scrollHeight / 100;
                    var current = event.target.scrollTop + event.target.clientHeight;
                    if (current > threshold) {
                        this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
                    }
                }
            }
            else {
                // upscroll code
            }
            this.lastScrollTop = st <= 0 ? 0 : st;
        };
        return OptionsScrollDirective;
    }());
    OptionsScrollDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: 'mat-autocomplete[optionsScroll]'
                },] }
    ];
    OptionsScrollDirective.ctorParameters = function () { return [
        { type: autocomplete.MatAutocomplete }
    ]; };
    OptionsScrollDirective.propDecorators = {
        thresholdPercent: [{ type: i0.Input }],
        optionsScroll: [{ type: i0.Output }]
    };

    var HelTooltipDirective = /** @class */ (function () {
        function HelTooltipDirective(tooltip, elemRef) {
            this.elemRef = elemRef;
            /**
             * Tiempo antes de ocultarla el mensaje
             */
            this.hideDelay = 600;
            /**
             * Tiempo antes de mostra el mensaje
             */
            this.showDelay = 500;
            this.tooltip = tooltip;
        }
        HelTooltipDirective.prototype.mouseover = function () {
            var currentContent = this.elemRef.nativeElement.innerText;
            if (!!currentContent && !!this.message) {
                if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
                    this.tooltip.message = this.message;
                }
            }
            this.tooltip.showDelay = this.showDelay;
            this.tooltip.hideDelay = this.hideDelay;
        };
        HelTooltipDirective.prototype.isEllipsisActive = function (e) {
            return (e.offsetWidth < e.scrollWidth);
        };
        return HelTooltipDirective;
    }());
    HelTooltipDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[helTooltip]',
                    providers: [tooltip.MatTooltip]
                },] }
    ];
    HelTooltipDirective.ctorParameters = function () { return [
        { type: tooltip.MatTooltip },
        { type: i0.ElementRef }
    ]; };
    HelTooltipDirective.propDecorators = {
        message: [{ type: i0.Input, args: ['helTooltip',] }],
        hideDelay: [{ type: i0.Input }],
        showDelay: [{ type: i0.Input }],
        mouseover: [{ type: i0.HostListener, args: ['mouseover',] }]
    };

    var ExternalLinkDirective = /** @class */ (function () {
        function ExternalLinkDirective(platformId) {
            this.platformId = platformId;
            this.relAttr = '';
            this.targetAttr = '';
            this.hrefAttr = '';
        }
        ExternalLinkDirective.prototype.ngOnChanges = function () {
            this.hrefAttr = this.href;
            if (this.isLinkExternal()) {
                this.relAttr = 'noopener';
                this.targetAttr = '_blank';
            }
        };
        ExternalLinkDirective.prototype.isLinkExternal = function () {
            return common.isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
        };
        return ExternalLinkDirective;
    }());
    ExternalLinkDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: 'a[href]',
                },] }
    ];
    ExternalLinkDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
    ]; };
    ExternalLinkDirective.propDecorators = {
        relAttr: [{ type: i0.HostBinding, args: ['attr.rel',] }],
        targetAttr: [{ type: i0.HostBinding, args: ['attr.target',] }],
        hrefAttr: [{ type: i0.HostBinding, args: ['attr.href',] }],
        href: [{ type: i0.Input }]
    };

    var ExternalLinkPipe = /** @class */ (function () {
        function ExternalLinkPipe() {
        }
        ExternalLinkPipe.prototype.transform = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return '//' + value;
        };
        return ExternalLinkPipe;
    }());
    ExternalLinkPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'externalLink'
                },] }
    ];

    (function (ComboBoxHelisaState) {
        ComboBoxHelisaState[ComboBoxHelisaState["CLOSED"] = 0] = "CLOSED";
        ComboBoxHelisaState[ComboBoxHelisaState["SELECT"] = 1] = "SELECT";
        ComboBoxHelisaState[ComboBoxHelisaState["INSERT"] = 2] = "INSERT";
    })(exports.ComboBoxHelisaState || (exports.ComboBoxHelisaState = {}));
    var ComboBoxHelisaComponent = /** @class */ (function () {
        function ComboBoxHelisaComponent() {
            this.placeholder = 'Sin seleccionar';
            this.selectEmitter = new i0.EventEmitter();
            this.enabled = true;
            this.page = 0;
            this.pageSize = 50;
            this.haveNextPage = true;
            this.state = exports.ComboBoxHelisaState.CLOSED;
            this.rows = [];
        }
        ComboBoxHelisaComponent.prototype.ngOnInit = function () {
        };
        ComboBoxHelisaComponent.prototype.ngAfterViewInit = function () {
            this.getNextPage();
        };
        ComboBoxHelisaComponent.prototype.getNextPage = function () {
            var _this = this;
            if (this.haveNextPage) {
                this.listable.getData(this.page++, this.pageSize).subscribe(function (rows) {
                    rows.forEach(function (item) { return _this.rows.push(item); });
                    _this.haveNextPage = rows.length > 0;
                });
            }
        };
        Object.defineProperty(ComboBoxHelisaComponent.prototype, "comboBoxHelisaState", {
            get: function () {
                return exports.ComboBoxHelisaState;
            },
            enumerable: false,
            configurable: true
        });
        ComboBoxHelisaComponent.prototype.onFocus = function () {
            if (this.enabled) {
                this.state = exports.ComboBoxHelisaState.SELECT;
            }
        };
        ComboBoxHelisaComponent.prototype.selectItem = function (row) {
            this.selectedItem = row;
            this.selectEmitter.emit(row);
            this.state = exports.ComboBoxHelisaState.CLOSED;
        };
        ComboBoxHelisaComponent.prototype.changeToInsert = function () {
            this.state = exports.ComboBoxHelisaState.INSERT;
        };
        ComboBoxHelisaComponent.prototype.insert = function (event) {
            var _this = this;
            if (event.trim().length > 0) {
                this.editable.insert(event).subscribe(function (data) {
                    _this.rows.push(data);
                    _this.state = exports.ComboBoxHelisaState.SELECT;
                });
            }
            else {
                this.state = exports.ComboBoxHelisaState.SELECT;
            }
        };
        ComboBoxHelisaComponent.prototype.onScroll = function (event) {
            var element = event.target;
            if (element.scrollHeight - element.scrollTop < 1000) {
                this.getNextPage();
            }
        };
        return ComboBoxHelisaComponent;
    }());
    ComboBoxHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-combo-box-helisa',
                    template: "<div class=\"combo-box-general-container\">\n  <div class=\"combo-box-input-container\">\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\n  </div>\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\n    <div class=\"combo-box-line\"></div>\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\n        {{ listable.getDisplayText(row) }}\n      </div>\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".combo-box-general-container{width:300px}.combo-box-list-container{background-color:#fff;display:flex;flex-direction:row;height:100px;position:absolute}.combo-box-row{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.combo-box-line{background-color:#da0080;width:3px}.combo-box-list{flex:1;overflow-y:auto}.combo-box-input{width:100%}.combo-box-input-container{height:25px}.combo-box-selected-item{color:#7030a0}.combo-box-insert-button{color:#807f7f;cursor:pointer}"]
                },] }
    ];
    ComboBoxHelisaComponent.ctorParameters = function () { return []; };
    ComboBoxHelisaComponent.propDecorators = {
        editable: [{ type: i0.Input }],
        listable: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        selectedItem: [{ type: i0.Input }],
        selectEmitter: [{ type: i0.Output }],
        enabled: [{ type: i0.Input }]
    };

    (function (PagingTreeInitialMode) {
        PagingTreeInitialMode[PagingTreeInitialMode["COLLAPSE"] = 0] = "COLLAPSE";
        PagingTreeInitialMode[PagingTreeInitialMode["EXPAND"] = 1] = "EXPAND";
    })(exports.PagingTreeInitialMode || (exports.PagingTreeInitialMode = {}));
    var PagingTreeHelisaComponent = /** @class */ (function () {
        function PagingTreeHelisaComponent() {
            this.pageSize = 10000;
            this.visibleLimit = 0;
            this.visibleSize = 10000;
            this.treeMode = exports.PagingTreeInitialMode.EXPAND;
            this.visibleObjects = [];
            this.allNode = [];
            this.isModeAssociation = false;
            this.afterLoadData = new i0.EventEmitter();
        }
        PagingTreeHelisaComponent.prototype.ngOnInit = function () {
        };
        PagingTreeHelisaComponent.prototype.ngAfterViewInit = function () {
        };
        Object.defineProperty(PagingTreeHelisaComponent.prototype, "mode", {
            set: function (paramMode) {
                this.treeMode = paramMode;
                this.reset();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagingTreeHelisaComponent.prototype, "pagingTreeHelisaListable", {
            set: function (paramService) {
                this.service = paramService;
                this.reset();
            },
            enumerable: false,
            configurable: true
        });
        PagingTreeHelisaComponent.prototype.reset = function () {
            var _this = this;
            if (this.service) {
                this.service.get(0, this.pageSize).subscribe(function (items) { return _this.loadData(items); });
            }
        };
        PagingTreeHelisaComponent.prototype.ngAfterViewChecked = function () {
            if (this.itemToScroll) {
                var idString = this.getUniqueId(this.itemToScroll);
                if (idString) {
                    var element = document.getElementById(idString);
                    if (!!element) {
                        element.scrollIntoView({
                            behavior: "auto",
                            block: "start",
                            inline: "start",
                        });
                    }
                }
                this.itemToScroll = undefined;
            }
        };
        PagingTreeHelisaComponent.prototype.loadData = function (items) {
            var _this = this;
            this.searchNode = new Map();
            this.visibleObjects = [];
            this.allNode = [];
            items = this.sortItems(items);
            this.searchNode = new Map();
            items.forEach(function (item) {
                var node = _this.createNode(item);
                _this.allNode.push(node);
            });
            this.reSort();
            this.loadNextVisibleObjects(null);
            this.afterLoadData.emit();
        };
        PagingTreeHelisaComponent.prototype.getUniqueId = function (item) {
            return this.getNodeInformationById(item[this.service.getIdField()]).object[this.service.getIdField()];
        };
        PagingTreeHelisaComponent.prototype.scrollToItem = function (item) {
            this.expandToItem(item);
            this.itemToScroll = item;
        };
        PagingTreeHelisaComponent.prototype.scrollToTargetAdjusted = function (item, offset) {
            var idString = this.getUniqueId(item);
            if (idString) {
                var element = document.getElementById(idString);
                var headerOffset = offset;
                var elementPosition = element.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        };
        PagingTreeHelisaComponent.prototype.sortItems = function (items) {
            var _this = this;
            var lAdy = new Map();
            var stack = [];
            items.forEach(function (item) {
                var idParent = item[_this.service.getIdParentField()];
                if (!idParent) {
                    stack.unshift(item);
                }
                else {
                    if (!lAdy.has(idParent)) {
                        lAdy.set(idParent, []);
                    }
                    lAdy.get(idParent).push(item);
                }
            });
            var response = new Array(items.length);
            var index = 0;
            while (stack.length > 0) {
                var last = stack.pop();
                response[index++] = last;
                var children = lAdy.get(last[this.service.getIdField()]);
                if (children) {
                    for (var i = children.length - 1; i >= 0; i--) {
                        stack.push(children[i]);
                    }
                }
            }
            return response;
        };
        PagingTreeHelisaComponent.prototype.createNode = function (item) {
            if (this.searchNode.has(item[this.service.getIdField()])) {
                throw Error('Ya existe el nodo.');
            }
            var parentInformation = this.getNodeInformationById(item[this.service.getIdParentField()]);
            var nodeInformation = {
                object: item,
                haveChildren: false,
                level: parentInformation ? parentInformation.level + 1 : 0,
                expanded: this.treeMode === exports.PagingTreeInitialMode.EXPAND,
                visible: false,
                preorder: this.searchNode.size + 1,
            };
            this.searchNode.set(item[this.service.getIdField()], nodeInformation);
            if (parentInformation) {
                parentInformation.haveChildren = true;
            }
            return nodeInformation;
        };
        PagingTreeHelisaComponent.prototype.getNodeInformationById = function (id) {
            return this.searchNode.get(id);
        };
        PagingTreeHelisaComponent.prototype.getNodeInformation = function (item) {
            return this.searchNode.get(item[this.service.getIdField()]);
        };
        PagingTreeHelisaComponent.prototype.getClassAssociation = function () {
            return (this.isModeAssociation ? 'width-custom-1' : 'width-custom-full');
        };
        PagingTreeHelisaComponent.prototype.getLevelClass = function (item) {
            var node = this.getNodeInformationById(item[this.service.getIdField()]);
            return 'padding-level-' + node.level;
        };
        PagingTreeHelisaComponent.prototype.getRowClassAssociation = function () {
            return (this.isModeAssociation ? 'helisa-tree-row-association' : '');
        };
        PagingTreeHelisaComponent.prototype.loadNextVisibleObjects = function (nodeFrom) {
            var _this = this;
            var visibleObjects = [];
            this.visibleObjects.forEach(function (item) {
                if (_this.getNodeInformation(item)) {
                    if (nodeFrom && _this.getNodeInformation(nodeFrom).preorder >= _this.getNodeInformation(item).preorder) {
                        visibleObjects.push(item);
                    }
                    else {
                        _this.getNodeInformationById(item[_this.service.getIdField()]).visible = false;
                    }
                }
            });
            this.visibleLimit = visibleObjects.length + this.visibleSize;
            this.allNode.forEach(function (item) {
                if (visibleObjects.length < _this.visibleLimit &&
                    (!nodeFrom || _this.getNodeInformation(nodeFrom).preorder < item.preorder)) {
                    var idParent = item.object[_this.service.getIdParentField()];
                    if (!idParent) {
                        visibleObjects.push(item.object);
                        item.visible = true;
                    }
                    else {
                        var parentInformation = _this.getNodeInformationById(idParent);
                        if (parentInformation.visible && parentInformation.expanded) {
                            visibleObjects.push(item.object);
                            item.visible = true;
                        }
                    }
                }
            });
            this.visibleObjects = visibleObjects;
        };
        PagingTreeHelisaComponent.prototype.collapseNode = function (item) {
            this.getNodeInformationById(item[this.service.getIdField()]).expanded = false;
            this.loadNextVisibleObjects(item);
        };
        PagingTreeHelisaComponent.prototype.expandNode = function (item) {
            this.getNodeInformationById(item[this.service.getIdField()]).expanded = true;
            this.loadNextVisibleObjects(item);
        };
        PagingTreeHelisaComponent.prototype.showNextPage = function () {
            if (this.visibleObjects.length > 0) {
                this.loadNextVisibleObjects(this.visibleObjects[this.visibleObjects.length - 1]);
            }
        };
        Object.defineProperty(PagingTreeHelisaComponent.prototype, "visibleData", {
            get: function () {
                return this.visibleObjects;
            },
            enumerable: false,
            configurable: true
        });
        PagingTreeHelisaComponent.prototype.removeItem = function (item) {
            this.removeById(item[this.service.getIdField()]);
        };
        PagingTreeHelisaComponent.prototype.removeById = function (id) {
            var _this = this;
            if (this.getNodeInformationById(id)) {
                var idParent_1 = this.getNodeInformationById(id).object[this.service.getIdParentField()];
                var set = new Set();
                set.add(id);
                var beginIndex = this.allNode.findIndex(function (itemSearch) { return itemSearch.object[_this.service.getIdField()] === id; });
                var lastIndex = this.allNode.length;
                for (var i = beginIndex + 1; i < this.allNode.length; i++) {
                    var itemSearch = this.allNode[i].object;
                    if (set.has(itemSearch[this.service.getIdParentField()])) {
                        set.add(itemSearch[this.service.getIdField()]);
                    }
                    else {
                        lastIndex = i;
                        break;
                    }
                }
                var deletedItems = this.allNode.splice(beginIndex, lastIndex - beginIndex);
                var parentHaveChildren_1 = false;
                deletedItems.forEach(function (deletedItem) { return _this.searchNode.delete(deletedItem.object[_this.service.getIdField()]); });
                this.allNode.forEach(function (searchItem, index) {
                    searchItem.preorder = index + 1;
                    if (searchItem.object[_this.service.getIdParentField()] === idParent_1) {
                        parentHaveChildren_1 = true;
                    }
                });
                if (idParent_1) {
                    this.getNodeInformationById(idParent_1).haveChildren = parentHaveChildren_1;
                }
                this.loadNextVisibleObjects(beginIndex > 0 ? this.allNode[beginIndex - 1].object : null);
            }
        };
        PagingTreeHelisaComponent.prototype.addItem = function (item) {
            var _this = this;
            var indexParent = this.allNode.findIndex(function (node) { return node.object[_this.service.getIdField()] === item[_this.service.getIdParentField()]; });
            if (indexParent >= 0) {
                this.allNode.push(this.createNode(item));
                this.allNode[indexParent].haveChildren = true;
                this.reSort();
                this.expandNode(this.allNode[indexParent].object);
            }
            else {
                throw Error('No existe el padre.');
            }
        };
        PagingTreeHelisaComponent.prototype.updateItem = function (item) {
            var _this = this;
            if (this.getNodeInformation(item)) {
                this.getNodeInformation(item).object = item;
                this.reSort();
                var indexParent = this.allNode.findIndex(function (node) { return node.object[_this.service.getIdField()] === item[_this.service.getIdParentField()]; });
                if (indexParent >= 0) {
                    this.expandNode(this.allNode[indexParent].object);
                }
                else {
                    this.loadNextVisibleObjects(null);
                }
            }
        };
        PagingTreeHelisaComponent.prototype.reSort = function () {
            var _this = this;
            var items = this.allNode.map(function (node) { return node.object; });
            items.sort(function (a, b) { return _this.service.compare(a, b); });
            var preorder = this.sortItems(items);
            preorder.forEach(function (object, index) { return _this.getNodeInformation(object).preorder = index + 1; });
            this.allNode.sort(function (nodeA, nodeB) { return nodeA.preorder - nodeB.preorder; });
        };
        PagingTreeHelisaComponent.prototype.expandToItem = function (item) {
            var _this = this;
            var node = this.getNodeInformationById(item[this.service.getIdField()]);
            if (!node.expanded) {
                var idParent_2 = node.object[this.service.getIdParentField()];
                var parent = this.allNode.find(function (parent) { return parent.object[_this.service.getIdField()] === idParent_2; });
                if (idParent_2 && parent) {
                    this.expandToItem(parent.object);
                }
                this.expandNode(item);
            }
        };
        return PagingTreeHelisaComponent;
    }());
    PagingTreeHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-paging-tree',
                    template: "<div>\n  <ng-container [ngTemplateOutlet]=\"nodeTitle\"></ng-container>\n  <div *ngIf=\"isModeAssociation\" class=\"w-100 flex-custom-titles hw-color-white hw-bg-blue\">\n    <ng-container [ngTemplateOutlet]=\"otherTitlesColumnsComponent\"></ng-container>\n  </div>\n  <div class=\"w-100\" [ngClass]=\"{'flex-custom-padding': isModeAssociation}\">\n    <div *ngFor=\"let item of visibleData; let i=index\" class=\"w-100 flex-custom\" [ngClass]=\"getRowClassAssociation()\">\n      <div *ngIf=\"getNodeInformation(item).visible\" [ngClass]=\"getClassAssociation()\">\n        <div [id]=\"getUniqueId(item)\" *ngIf=\"getNodeInformation(item) as node\" [ngClass]=\"this.getLevelClass(item)\" class=\"helisa-tree-row w-100\">\n          <div [ngClass]=\"{expandNode: !node.expanded && node.haveChildren, withoutNode: !node.haveChildren}\">\n            <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\n            <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\n            <mat-icon *ngIf=\"!node.haveChildren\"></mat-icon>\n          </div>\n          <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\n        </div>\n      </div>\n      <div *ngIf=\"isModeAssociation\" class=\"d-flex width-custom-2\">\n        <ng-container [ngTemplateOutlet]=\"otherColumnsComponent\" [ngTemplateOutletContext]=\"{data: item, node: getNodeInformation(item)}\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".w-100{width:100%}.padding-level-0{margin-left:0}.padding-level-1{margin-left:40px}.padding-level-2{margin-left:80px}.padding-level-3{margin-left:120px}.padding-level-4{margin-left:160px}.padding-level-5{margin-left:200px}.padding-level-6{margin-left:240px}.padding-level-7{margin-left:280px}.padding-level-8{margin-left:320px}.padding-last-level{margin-left:360px}.helisa-tree-row{align-items:center;display:flex;flex-direction:row}.helisa-tree-row-association:hover{background-color:#f2f2f2}.flex-custom-titles{display:flex;flex-direction:row;justify-content:space-between;position:absolute}.flex-custom-padding{padding-top:26px}.flex-custom{display:flex;flex-direction:row;justify-content:space-between}.flex-custom-titles>div,.flex-custom>div{display:flex}.width-custom-1,.width-custom-2{width:50%}.width-custom-full{width:100%}"]
                },] }
    ];
    PagingTreeHelisaComponent.ctorParameters = function () { return []; };
    PagingTreeHelisaComponent.propDecorators = {
        isModeAssociation: [{ type: i0.Input }],
        afterLoadData: [{ type: i0.Output }],
        nodeComponent: [{ type: i0.ContentChild, args: ['nodeComponent',] }],
        otherColumnsComponent: [{ type: i0.ContentChild, args: ['otherColumnsComponent',] }],
        otherTitlesColumnsComponent: [{ type: i0.ContentChild, args: ['otherTitlesColumnsComponent',] }],
        nodeTitle: [{ type: i0.ContentChild, args: ['nodeTitle',] }],
        mode: [{ type: i0.Input }],
        pagingTreeHelisaListable: [{ type: i0.Input }]
    };

    (function (AlertInformationType) {
        AlertInformationType[AlertInformationType["AUTHORIZATION_TRANSACTION"] = 0] = "AUTHORIZATION_TRANSACTION";
        AlertInformationType[AlertInformationType["CONFIRM_DELETE_DATA"] = 1] = "CONFIRM_DELETE_DATA";
        AlertInformationType[AlertInformationType["DELETE_DATA"] = 2] = "DELETE_DATA";
        AlertInformationType[AlertInformationType["INFORMATION_NOT_VALID"] = 3] = "INFORMATION_NOT_VALID";
        AlertInformationType[AlertInformationType["LOST_DATA"] = 4] = "LOST_DATA";
        AlertInformationType[AlertInformationType["UNCOMPLETED_DATA"] = 5] = "UNCOMPLETED_DATA";
        AlertInformationType[AlertInformationType["UNCOMPLETED_SELECTED_DATA"] = 6] = "UNCOMPLETED_SELECTED_DATA";
        AlertInformationType[AlertInformationType["DEFINE_COMMERCIAL_STRUCTURE"] = 7] = "DEFINE_COMMERCIAL_STRUCTURE";
        AlertInformationType[AlertInformationType["DEFINE_PARKING_STRUCTURE"] = 8] = "DEFINE_PARKING_STRUCTURE";
        AlertInformationType[AlertInformationType["DEFINE_RESIDENCIAL_STRUCTURE"] = 9] = "DEFINE_RESIDENCIAL_STRUCTURE";
        AlertInformationType[AlertInformationType["NO_SEARCH_RESULTS"] = 10] = "NO_SEARCH_RESULTS";
    })(exports.AlertInformationType || (exports.AlertInformationType = {}));

    var TITLE_BY_ALERT_TYPE = ['!Esta transacción requiere autorización!',
        '',
        '¿Está seguro que debe anular esta información?',
        '',
        '¿Está seguro de querer perder lo ya hecho?',
        'No ha suministrado la información necesaria.',
        '',
        '',
        '',
        ''
    ];
    var CONTENT_BY_ALERT_TYPE = ['',
        '¿Esta seguro que desea eliminar esta información?',
        'Al anular este concepto, quedará la huella de todo lo que se hizo apoyados en su información. No es una eliminación tácita, es suprimir su uso en adelante.',
        'Rectifique. Hay información no válida',
        'Si no está seguro, puede continuar o "aplicar" y posteriormente cuando tenga clara las respuestas, usando la opción de modificar podrá completar el concepto.',
        'Si insite en grabar así, este concepto no será utilizable hasta su conclusión satisfactoria, que deberá completar posteriormente modificando el concepto.',
        'Elemento sin información requerida. Modifíquelo para completarlo.',
        'Primero defina la estructura comercial en configuración.',
        'Primero defina la estructura zona de parqueaderos en configuración.',
        'Primero defina la estructura física residencial en configuración.',
        'No fueron encontradas coincidencias con el criterio de búsqueda.',
    ];
    var OK_LABEL_BY_ALERT_TYPE = ['Solicitarla',
        'Lo asumo',
        'Lo asumo',
        '',
        'Lo asumo',
        'Lo asumo',
        'Aceptar',
        '',
        '',
        ''
    ];
    var CANCEL_LABEL_BY_ALERT_TYPE = ['Negarla',
        'Me retracto',
        'Me retracto',
        '',
        'Me retracto',
        'Me retracto',
        '',
        '',
        '',
        ''
    ];
    var AlertInformationDataHelisaComponent = /** @class */ (function () {
        function AlertInformationDataHelisaComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.alertType = data.alertType;
            this.title = data.title;
            if (this.title === undefined) {
                this.title = TITLE_BY_ALERT_TYPE[this.alertType];
            }
            this.content = data.content;
            if (this.content === undefined) {
                this.content = CONTENT_BY_ALERT_TYPE[this.alertType];
            }
            this.okLabel = data.okLabel;
            if (this.okLabel === undefined) {
                this.okLabel = OK_LABEL_BY_ALERT_TYPE[this.alertType];
            }
            this.cancelLabel = data.cancelLabel;
            if (this.cancelLabel === undefined) {
                this.cancelLabel = CANCEL_LABEL_BY_ALERT_TYPE[this.alertType];
            }
        }
        AlertInformationDataHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.alertType === exports.AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === exports.AlertInformationType.DEFINE_PARKING_STRUCTURE ||
                this.alertType === exports.AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE) {
                setTimeout(function () {
                    _this.dialogRef.close();
                }, 3000);
            }
        };
        AlertInformationDataHelisaComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        AlertInformationDataHelisaComponent.prototype.hasTitle = function () {
            return this.alertType === exports.AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === exports.AlertInformationType.DELETE_DATA ||
                this.alertType === exports.AlertInformationType.LOST_DATA || this.alertType === exports.AlertInformationType.UNCOMPLETED_DATA;
        };
        AlertInformationDataHelisaComponent.prototype.hasContent = function () {
            return this.alertType === exports.AlertInformationType.CONFIRM_DELETE_DATA || this.alertType === exports.AlertInformationType.DELETE_DATA ||
                this.alertType === exports.AlertInformationType.INFORMATION_NOT_VALID || this.alertType === exports.AlertInformationType.LOST_DATA ||
                this.alertType === exports.AlertInformationType.UNCOMPLETED_DATA || this.alertType === exports.AlertInformationType.UNCOMPLETED_SELECTED_DATA ||
                this.alertType === exports.AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === exports.AlertInformationType.DEFINE_PARKING_STRUCTURE ||
                this.alertType === exports.AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE || this.alertType === exports.AlertInformationType.NO_SEARCH_RESULTS;
        };
        AlertInformationDataHelisaComponent.prototype.hasButtons = function () {
            return this.alertType === exports.AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === exports.AlertInformationType.CONFIRM_DELETE_DATA ||
                this.alertType === exports.AlertInformationType.DELETE_DATA || this.alertType === exports.AlertInformationType.LOST_DATA ||
                this.alertType === exports.AlertInformationType.UNCOMPLETED_DATA || this.alertType === exports.AlertInformationType.UNCOMPLETED_SELECTED_DATA;
        };
        AlertInformationDataHelisaComponent.prototype.hasCancelButton = function () {
            return this.alertType !== exports.AlertInformationType.UNCOMPLETED_SELECTED_DATA;
        };
        return AlertInformationDataHelisaComponent;
    }());
    AlertInformationDataHelisaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'hel-alert-information-data-helisa',
                    template: "<button style='position: absolute; float: right; top: 0px; right: 10px;' (click)=\"onCancel()\">X</button>\n<h1 mat-dialog-title *ngIf=\"hasTitle()\">{{ title }}</h1>\n<div mat-dialog-content *ngIf=\"hasContent()\">{{ content }}</div>\n<div mat-dialog-action *ngIf=\"hasButtons()\">\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial *ngIf=\"hasCancelButton()\">{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>\n",
                    styles: [""]
                },] }
    ];
    AlertInformationDataHelisaComponent.ctorParameters = function () { return [
        { type: i1$1.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1$1.MAT_DIALOG_DATA,] }] }
    ]; };

    var HelisaLibModule = /** @class */ (function () {
        function HelisaLibModule() {
        }
        return HelisaLibModule;
    }());
    HelisaLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        InputWithButtonComponent,
                        ToastHelisaComponent,
                        AlertHelisaComponent,
                        DependencyTableHelisaComponent,
                        InputHelisaComponent,
                        TableHelisaComponent,
                        TreeHelisaComponent,
                        DateHelisaComponent,
                        AutocompleteHelisaComponent,
                        OptionsScrollDirective,
                        HelTooltipDirective,
                        ExternalLinkDirective,
                        ExternalLinkPipe,
                        ComboBoxHelisaComponent,
                        PagingTreeHelisaComponent,
                        AlertInformationDataHelisaComponent
                    ],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        autocomplete.MatAutocompleteModule,
                        button.MatButtonModule,
                        checkbox.MatCheckboxModule,
                        toolbar.MatToolbarModule,
                        expansion.MatExpansionModule,
                        formField.MatFormFieldModule,
                        input.MatInputModule,
                        select.MatSelectModule,
                        core.MatOptionModule,
                        list.MatListModule,
                        icon.MatIconModule,
                        i1.MatSnackBarModule,
                        card.MatCardModule,
                        layout.LayoutModule,
                        tooltip.MatTooltipModule,
                        button.MatButtonModule,
                        sidenav.MatSidenavModule,
                        icon.MatIconModule,
                        list.MatListModule,
                        gridList.MatGridListModule,
                        card.MatCardModule,
                        menu.MatMenuModule,
                        input.MatInputModule,
                        select.MatSelectModule,
                        radio.MatRadioModule,
                        progressSpinner.MatProgressSpinnerModule,
                        table.MatTableModule,
                        paginator.MatPaginatorModule,
                        sort.MatSortModule,
                        i1$1.MatDialogModule,
                        tabs.MatTabsModule,
                        datepicker.MatDatepickerModule,
                        core.MatNativeDateModule,
                        stepper.MatStepperModule,
                        chips.MatChipsModule,
                        dragDrop.DragDropModule,
                        tree$1.MatTreeModule
                    ],
                    exports: [
                        InputWithButtonComponent,
                        ToastHelisaComponent,
                        AlertHelisaComponent,
                        DependencyTableHelisaComponent,
                        InputHelisaComponent,
                        TableHelisaComponent,
                        TreeHelisaComponent,
                        DateHelisaComponent,
                        AutocompleteHelisaComponent,
                        OptionsScrollDirective,
                        HelTooltipDirective,
                        ExternalLinkDirective,
                        ExternalLinkPipe,
                        button.MatButtonModule,
                        checkbox.MatCheckboxModule,
                        toolbar.MatToolbarModule,
                        expansion.MatExpansionModule,
                        formField.MatFormFieldModule,
                        input.MatInputModule,
                        select.MatSelectModule,
                        core.MatOptionModule,
                        list.MatListModule,
                        icon.MatIconModule,
                        i1.MatSnackBarModule,
                        card.MatCardModule,
                        layout.LayoutModule,
                        tooltip.MatTooltipModule,
                        button.MatButtonModule,
                        sidenav.MatSidenavModule,
                        icon.MatIconModule,
                        list.MatListModule,
                        gridList.MatGridListModule,
                        card.MatCardModule,
                        menu.MatMenuModule,
                        input.MatInputModule,
                        select.MatSelectModule,
                        radio.MatRadioModule,
                        progressSpinner.MatProgressSpinnerModule,
                        table.MatTableModule,
                        paginator.MatPaginatorModule,
                        sort.MatSortModule,
                        i1$1.MatDialogModule,
                        tabs.MatTabsModule,
                        datepicker.MatDatepickerModule,
                        core.MatNativeDateModule,
                        stepper.MatStepperModule,
                        chips.MatChipsModule,
                        dragDrop.DragDropModule,
                        tree$1.MatTreeModule,
                        ComboBoxHelisaComponent,
                        PagingTreeHelisaComponent,
                        AlertInformationDataHelisaComponent
                    ],
                    providers: [TableHelisaService, TreeHelisaService]
                },] }
    ];

    var AlertInformationDataHelisaService = /** @class */ (function () {
        function AlertInformationDataHelisaService(dialog) {
            this.dialog = dialog;
        }
        AlertInformationDataHelisaService.prototype.openDialog = function (alertType, title, content, okLabel, cancelLabel) {
            var dialogRef = this.dialog.open(AlertInformationDataHelisaComponent, {
                width: '250px',
                data: { alertType: alertType, title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
            });
            return dialogRef.afterClosed();
        };
        return AlertInformationDataHelisaService;
    }());
    AlertInformationDataHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertInformationDataHelisaService_Factory() { return new AlertInformationDataHelisaService(i0.ɵɵinject(i1$1.MatDialog)); }, token: AlertInformationDataHelisaService, providedIn: "root" });
    AlertInformationDataHelisaService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AlertInformationDataHelisaService.ctorParameters = function () { return [
        { type: i1$1.MatDialog }
    ]; };

    /*
     * Public API Surface of helisa-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AlertHelisaComponent = AlertHelisaComponent;
    exports.AlertHelisaService = AlertHelisaService;
    exports.AlertInformationDataHelisaComponent = AlertInformationDataHelisaComponent;
    exports.AlertInformationDataHelisaService = AlertInformationDataHelisaService;
    exports.AutocompleteHelisaComponent = AutocompleteHelisaComponent;
    exports.AutocompleteHelisaService = AutocompleteHelisaService;
    exports.ColumnConfigUtil = ColumnConfigUtil;
    exports.ComboBoxHelisaComponent = ComboBoxHelisaComponent;
    exports.DateHelisaComponent = DateHelisaComponent;
    exports.DependencyTableHelisaComponent = DependencyTableHelisaComponent;
    exports.DependencyTableHelisaService = DependencyTableHelisaService;
    exports.HelTooltipDirective = HelTooltipDirective;
    exports.HelisaLibModule = HelisaLibModule;
    exports.InputHelisaComponent = InputHelisaComponent;
    exports.InputWithButtonComponent = InputWithButtonComponent;
    exports.OptionsScrollDirective = OptionsScrollDirective;
    exports.PagingTreeHelisaComponent = PagingTreeHelisaComponent;
    exports.ResizeConfig = ResizeConfig;
    exports.ResizeResponse = ResizeResponse;
    exports.TableHelisaComponent = TableHelisaComponent;
    exports.TableHelisaService = TableHelisaService;
    exports.ToastHelisaComponent = ToastHelisaComponent;
    exports.ToastHelisaService = ToastHelisaService;
    exports.TreeHelisaComponent = TreeHelisaComponent;
    exports.TreeHelisaConnect = TreeHelisaConnect;
    exports.TreeHelisaService = TreeHelisaService;
    exports.ɵa = ExternalLinkDirective;
    exports.ɵb = ExternalLinkPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=helisa-lib.umd.js.map

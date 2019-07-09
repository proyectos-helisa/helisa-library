(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/snack-bar'), require('lodash.clonedeep'), require('@angular/cdk/tree'), require('@angular/router'), require('lodash'), require('rxjs/operators'), require('rxjs'), require('@angular/core'), require('@angular/material'), require('@angular/material/toolbar'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/list'), require('@angular/material/icon'), require('@angular/material/card'), require('@angular/cdk/layout'), require('@angular/material/progress-spinner'), require('@angular/material/dialog'), require('@angular/material/tabs'), require('@angular/material/datepicker'), require('@angular/material/stepper'), require('@angular/material/chips'), require('@angular/cdk/drag-drop'), require('@angular/forms'), require('@angular/common'), require('@angular/material/tree')) :
    typeof define === 'function' && define.amd ? define('helisa-lib', ['exports', '@angular/material/snack-bar', 'lodash.clonedeep', '@angular/cdk/tree', '@angular/router', 'lodash', 'rxjs/operators', 'rxjs', '@angular/core', '@angular/material', '@angular/material/toolbar', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/select', '@angular/material/list', '@angular/material/icon', '@angular/material/card', '@angular/cdk/layout', '@angular/material/progress-spinner', '@angular/material/dialog', '@angular/material/tabs', '@angular/material/datepicker', '@angular/material/stepper', '@angular/material/chips', '@angular/cdk/drag-drop', '@angular/forms', '@angular/common', '@angular/material/tree'], factory) :
    (factory((global['helisa-lib'] = {}),global.ng.material['snack-bar'],global.clonedeep,global.ng.cdk.tree,global.ng.router,global._,global.rxjs.operators,global.rxjs,global.ng.core,global.ng.material,global.ng.material.toolbar,global.ng.material.expansion,global.ng.material['form-field'],global.ng.material.select,global.ng.material.list,global.ng.material.icon,global.ng.material.card,global.ng.cdk.layout,global.ng.material['progress-spinner'],global.ng.material.dialog,global.ng.material.tabs,global.ng.material.datepicker,global.ng.material.stepper,global.ng.material.chips,global.ng.cdk['drag-drop'],global.ng.forms,global.ng.common,global.ng.material.tree));
}(this, (function (exports,i1,clonedeep,tree,router,_,operators,rxjs,i0,material,toolbar,expansion,formField,select,list,icon,card,layout,progressSpinner,i1$1,tabs,datepicker,stepper,chips,dragDrop,forms,common,tree$1) { 'use strict';

    clonedeep = clonedeep && clonedeep.hasOwnProperty('default') ? clonedeep['default'] : clonedeep;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputWithButtonComponent = /** @class */ (function () {
        function InputWithButtonComponent() {
            this.placeholder = "";
            this.inputFormControl = new forms.FormControl('', forms.Validators.required);
            this.requiredMessage = "El campo es requerido";
            this.value = "";
            this.done = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        InputWithButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.value != "") {
                    this.inputFormControl.setValue(this.value);
                }
            };
        /**
         * @return {?}
         */
        InputWithButtonComponent.prototype.onDone = /**
         * @return {?}
         */
            function () {
                if (this.inputFormControl.valid) {
                    this.done.emit(this.inputFormControl.value);
                }
            };
        /**
         * @return {?}
         */
        InputWithButtonComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.cancel.emit();
            };
        InputWithButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-input-with-button',
                        template: "<div>\r\n  <mat-form-field>\r\n    <input matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \r\n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\r\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\r\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\r\n      {{ requiredMessage }}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        InputWithButtonComponent.ctorParameters = function () { return []; };
        InputWithButtonComponent.propDecorators = {
            placeholder: [{ type: i0.Input }],
            inputFormControl: [{ type: i0.Input }],
            requiredMessage: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            done: [{ type: i0.Output }],
            cancel: [{ type: i0.Output }]
        };
        return InputWithButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastHelisaComponent = /** @class */ (function () {
        function ToastHelisaComponent(data) {
            this.data = data;
        }
        /**
         * @return {?}
         */
        ToastHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ToastHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-toast',
                        template: "<div [ngClass]=\"'toast-'+data.type\">\r\n  <span class=\"toast-message\">{{ data.message }}</span>\r\n  <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\r\n</div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ToastHelisaComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_SNACK_BAR_DATA,] }] }
            ];
        };
        return ToastHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastHelisaService = /** @class */ (function () {
        function ToastHelisaService(snackBar) {
            this.snackBar = snackBar;
            this.durationInSeconds = 5;
        }
        /**
         * @param {?} type
         * @param {?} message
         * @param {?=} subMessages
         * @return {?}
         */
        ToastHelisaService.prototype.showToast = /**
         * @param {?} type
         * @param {?} message
         * @param {?=} subMessages
         * @return {?}
         */
            function (type, message, subMessages) {
                subMessages = subMessages ? subMessages : [];
                this.snackBar.openFromComponent(ToastHelisaComponent, {
                    data: { message: message, type: type, subMessages: subMessages },
                    duration: this.durationInSeconds * 1000
                });
            };
        ToastHelisaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ToastHelisaService.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        /** @nocollapse */ ToastHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(i0.inject(i1.MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
        return ToastHelisaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ToastType = {
        DONE: "done",
        ERROR: "error",
        INFO: "info",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AlertHelisaType = {
        ERROR: "ERROR",
        CONFIRMATION: "CONFIRMATION",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertHelisaComponent = /** @class */ (function () {
        function AlertHelisaComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.content = data.content;
            this.title = data.title;
            this.hasCancel = data.type == AlertHelisaType.CONFIRMATION;
        }
        /**
         * @return {?}
         */
        AlertHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        AlertHelisaComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        AlertHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-alert',
                        template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >cancelar</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>aceptar</button>\r\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AlertHelisaComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return AlertHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertHelisaService = /** @class */ (function () {
        function AlertHelisaService(dialog) {
            this.dialog = dialog;
        }
        /**
         * @param {?} type
         * @param {?} title
         * @param {?} content
         * @return {?}
         */
        AlertHelisaService.prototype.openDialog = /**
         * @param {?} type
         * @param {?} title
         * @param {?} content
         * @return {?}
         */
            function (type, title, content) {
                /** @type {?} */
                var dialogRef = this.dialog.open(AlertHelisaComponent, {
                    width: '250px',
                    data: { title: title, content: content, type: type }
                });
                return dialogRef.afterClosed();
            };
        AlertHelisaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AlertHelisaService.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        /** @nocollapse */ AlertHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(i0.inject(i1$1.MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
        return AlertHelisaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DependencyTableHelisaService = /** @class */ (function () {
        function DependencyTableHelisaService() {
            this.tables = new rxjs.Subject();
            this.infoTables = new Array();
            this.emitTotal = new rxjs.Subject();
            this.emitNextPage = new rxjs.Subject();
            this.selectedIndexRow$ = new rxjs.Subject();
            this.selectedIndexRow = this.selectedIndexRow$.asObservable();
        }
        /**
         * retorna un Observable<ConfigTable[]>
         */
        /**
         * retorna un Observable<ConfigTable[]>
         * @return {?}
         */
        DependencyTableHelisaService.prototype.getTables = /**
         * retorna un Observable<ConfigTable[]>
         * @return {?}
         */
            function () {
                return this.tables;
            };
        /**
         * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
         * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
         * @param configTable Objeto que contiene la configuración para la tabla.
         * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
         */
        /**
         * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
         * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
         * @param {?} configTable Objeto que contiene la configuración para la tabla.
         * @param {?=} withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
         * @return {?}
         */
        DependencyTableHelisaService.prototype.updateDependency = /**
         * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
         * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
         * @param {?} configTable Objeto que contiene la configuración para la tabla.
         * @param {?=} withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
         * @return {?}
         */
            function (configTable, withRemoveDependency) {
                if (withRemoveDependency === void 0) {
                    withRemoveDependency = false;
                }
                if (withRemoveDependency) {
                    this.infoTables = this.infoTables.slice(0, !configTable.order ? 0 : configTable.order);
                }
                if (!configTable.order || configTable.order >= this.infoTables.length) {
                    configTable.order = this.infoTables.length;
                }
                this.infoTables[configTable.order] = configTable;
                if (configTable.isRemote) {
                    configTable.dataSource = null;
                    if (configTable.count === null)
                        throw "hace falta el count";
                }
                else {
                    if (configTable.dataSource === null)
                        throw "hace falta el dataSource";
                    configTable.count = configTable.dataSource.length;
                }
                this.tables.next(this.infoTables);
            };
        /**
         * Emite un evento de total con la información para la tabla correspondiente
         * @param event wrapper que contiene el indice de la tabla y la información de la pagina
         */
        /**
         * Emite un evento de total con la información para la tabla correspondiente
         * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
         * @return {?}
         */
        DependencyTableHelisaService.prototype.setTotal = /**
         * Emite un evento de total con la información para la tabla correspondiente
         * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
         * @return {?}
         */
            function (event) {
                this.emitTotal.next(event);
            };
        /**
         * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
         * @param event wrapper que contiene el indice de la tabla y la información de la pagina
         */
        /**
         * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
         * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
         * @return {?}
         */
        DependencyTableHelisaService.prototype.addPage = /**
         * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
         * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
         * @return {?}
         */
            function (event) {
                this.emitNextPage.next(event);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        DependencyTableHelisaService.prototype.selectIndexRow = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.selectedIndexRow$.next(index);
            };
        DependencyTableHelisaService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        DependencyTableHelisaService.ctorParameters = function () { return []; };
        return DependencyTableHelisaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var TableHelisaService = /** @class */ (function () {
        function TableHelisaService() {
            this.emitChangeSource = new rxjs.Subject();
            this.emitNextPage = new rxjs.Subject();
            this.totalReturn = this.emitChangeSource.asObservable();
            this.nextPageReturn = this.emitNextPage.asObservable();
        }
        /**
         * @param {?} total
         * @param {?=} table
         * @return {?}
         */
        TableHelisaService.prototype.setTotal = /**
         * @param {?} total
         * @param {?=} table
         * @return {?}
         */
            function (total, table) {
                this.emitChangeSource.next({ obj: total, table: table });
            };
        /**
         * @param {?} page
         * @param {?=} table
         * @return {?}
         */
        TableHelisaService.prototype.addPage = /**
         * @param {?} page
         * @param {?=} table
         * @return {?}
         */
            function (page, table) {
                this.emitNextPage.next({ obj: page, table: table });
            };
        TableHelisaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ TableHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
        return TableHelisaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DependencyTableHelisaComponent = /** @class */ (function () {
        function DependencyTableHelisaComponent(dependencyTableHelisaService, tableService) {
            this.dependencyTableHelisaService = dependencyTableHelisaService;
            this.tableService = tableService;
            this.tables = [];
            this.selected = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.total = new i0.EventEmitter();
            this.sort = new i0.EventEmitter();
            this.isDragged = false;
            this.selectedObject = null;
        }
        /**
         * @return {?}
         */
        DependencyTableHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.getTables();
                this.dependencyTableHelisaService.emitNextPage.subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    _this.tableService.addPage(event.data, _this.viewTables.toArray()[event.index]);
                }));
                this.dependencyTableHelisaService.emitTotal.subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    _this.tableService.setTotal(event.data, _this.viewTables[event.index]);
                }));
                this.dependencyTableHelisaService.selectedIndexRow.subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    _this.indexRowSelect = event;
                }));
            };
        /**
         * retorna el servicio que gestiona el componente.
         */
        /**
         * retorna el servicio que gestiona el componente.
         * @return {?}
         */
        DependencyTableHelisaComponent.prototype.getService = /**
         * retorna el servicio que gestiona el componente.
         * @return {?}
         */
            function () {
                return this.dependencyTableHelisaService;
            };
        /**
         * Obtiene un observable con las tablas dependientes desde el servicio.
         */
        /**
         * Obtiene un observable con las tablas dependientes desde el servicio.
         * @return {?}
         */
        DependencyTableHelisaComponent.prototype.getTables = /**
         * Obtiene un observable con las tablas dependientes desde el servicio.
         * @return {?}
         */
            function () {
                var _this = this;
                this.dependencyTableHelisaService.getTables()
                    .subscribe(( /**
             * @param {?} tables
             * @return {?}
             */function (tables) {
                    _this.tables = tables;
                }));
            };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla seleccionada
         * @param data retorna la fila que fue seleccionada
         */
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla seleccionada
         * @param {?} event
         * @return {?}
         */
        DependencyTableHelisaComponent.prototype.onSelectedDependency = /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla seleccionada
         * @param {?} event
         * @return {?}
         */
            function (index, event) {
                this.selectedObject = { index: index, data: event };
                this.selected.emit({ index: index, data: event });
            };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla que genera el evento
         * @param {?} event evento generado desde la tabla
         * @return {?}
         */
        DependencyTableHelisaComponent.prototype.onNextPage = /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla que genera el evento
         * @param {?} event evento generado desde la tabla
         * @return {?}
         */
            function (index, event) {
                this.nextPage.emit({ index: index, data: event });
            };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla que genera el evento
         * @param {?} event evento generado desde la tabla
         * @return {?}
         */
        DependencyTableHelisaComponent.prototype.onTotal = /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla que genera el evento
         * @param {?} event evento generado desde la tabla
         * @return {?}
         */
            function (index, event) {
                this.total.emit({ index: index, data: event });
            };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla que genera el evento
         * @param {?} event evento generado desde la tabla
         * @return {?}
         */
        DependencyTableHelisaComponent.prototype.onSort = /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param {?} index indica el indice de la tabla que genera el evento
         * @param {?} event evento generado desde la tabla
         * @return {?}
         */
            function (index, event) {
                this.sort.emit({ index: index, data: event });
            };
        DependencyTableHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-dependency-table',
                        template: "<div>\r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (select)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\" (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"true\">\r\n  </hel-table>\r\n</div>\r\n",
                        providers: [DependencyTableHelisaService],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DependencyTableHelisaComponent.ctorParameters = function () {
            return [
                { type: DependencyTableHelisaService },
                { type: TableHelisaService }
            ];
        };
        DependencyTableHelisaComponent.propDecorators = {
            viewTables: [{ type: i0.ViewChildren, args: ['viewTables',] }],
            selected: [{ type: i0.Output }],
            nextPage: [{ type: i0.Output }],
            total: [{ type: i0.Output }],
            sort: [{ type: i0.Output }],
            isDragged: [{ type: i0.Input }],
            indexRowSelect: [{ type: i0.Input }]
        };
        return DependencyTableHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputHelisaComponent = /** @class */ (function () {
        function InputHelisaComponent() {
            this.placeholder = '';
            this.setValue = new i0.EventEmitter();
            this.isSearch = false;
            this.inputFormControl = new forms.FormControl('');
            this.isFocused = false;
        }
        /**
         * @return {?}
         */
        InputHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.isFocused) {
                    this.nameInput.nativeElement.focus();
                }
            };
        /**
         * @return {?}
         */
        InputHelisaComponent.prototype.search = /**
         * @return {?}
         */
            function () {
                this.setValue.emit(this.inputFormControl.value);
            };
        InputHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-input',
                        template: "<mat-form-field>\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\" (keyup.enter)=\"search()\" [formControl]= \"inputFormControl\">\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        InputHelisaComponent.ctorParameters = function () { return []; };
        InputHelisaComponent.propDecorators = {
            placeholder: [{ type: i0.Input }],
            setValue: [{ type: i0.Output }],
            isSearch: [{ type: i0.Input }],
            inputFormControl: [{ type: i0.Input }],
            isFocused: [{ type: i0.Input }],
            nameInput: [{ type: i0.ViewChild, args: ['inputText',] }]
        };
        return InputHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var TotalType = {
        SUM: 0, AVERAGE: 1, COUNT: 2,
    };
    TotalType[TotalType.SUM] = 'SUM';
    TotalType[TotalType.AVERAGE] = 'AVERAGE';
    TotalType[TotalType.COUNT] = 'COUNT';
    /** @enum {number} */
    var ChangeColumnConfigurationType = {
        SORT: 0, UNKNOWN: 1, TOTAL: 2,
    };
    ChangeColumnConfigurationType[ChangeColumnConfigurationType.SORT] = 'SORT';
    ChangeColumnConfigurationType[ChangeColumnConfigurationType.UNKNOWN] = 'UNKNOWN';
    ChangeColumnConfigurationType[ChangeColumnConfigurationType.TOTAL] = 'TOTAL';
    /** @enum {number} */
    var TableHelisaType = {
        REMOTE: 0, LOCAL: 1,
    };
    TableHelisaType[TableHelisaType.REMOTE] = 'REMOTE';
    TableHelisaType[TableHelisaType.LOCAL] = 'LOCAL';
    //@dynamic
    /**
     * @abstract
     */
    var  
    //@dynamic
    /**
     * @abstract
     */
    ColumnConfigUtil = /** @class */ (function () {
        function ColumnConfigUtil() {
        }
        /**
         * @param {?} obj
         * @param {?} column
         * @return {?}
         */
        ColumnConfigUtil.getValue = /**
         * @param {?} obj
         * @param {?} column
         * @return {?}
         */
            function (obj, column) {
                return column.name.split('.').reduce(( /**
                 * @param {?} o
                 * @param {?} field
                 * @return {?}
                 */function (o, field) { return o && o[field]; }), obj);
            };
        return ColumnConfigUtil;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ TableHelisaConnectComponent = /** @class */ (function () {
        function TableHelisaConnectComponent() {
            this.page = 0;
            this.isLastPage = false;
            this.isUsed = false;
        }
        /**
         * @param {?} columnConfig
         * @param {?} search
         * @return {?}
         */
        TableHelisaConnectComponent.prototype.getBody = /**
         * @param {?} columnConfig
         * @param {?} search
         * @return {?}
         */
            function (columnConfig, search) {
                return {};
            };
        /**
         * @return {?}
         */
        TableHelisaConnectComponent.prototype.nextPage = /**
         * @return {?}
         */
            function () {
                return this.page++;
            };
        return TableHelisaConnectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var RowType = {
        GROUP_TITLE: 0, GROUP_FOOTER: 1, ROW: 2,
    };
    RowType[RowType.GROUP_TITLE] = 'GROUP_TITLE';
    RowType[RowType.GROUP_FOOTER] = 'GROUP_FOOTER';
    RowType[RowType.ROW] = 'ROW';
    /**
     * @template T
     */
    var TableHelisaComponent = /** @class */ (function () {
        function TableHelisaComponent(tableService) {
            this.tableService = tableService;
            this.displayedColumns = [];
            this.type = TableHelisaType.LOCAL;
            this.isSetSelectedRow = false;
            this.sort = new i0.EventEmitter();
            this.total = new i0.EventEmitter();
            this.search = new i0.EventEmitter();
            this.select = new i0.EventEmitter();
            this.selectCell = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.showTitle = true;
            this.multipleCell = false;
            this.selectedCells = new Array();
            this.drop = new i0.EventEmitter();
            this.isDragged = false;
            this.showFooter = false;
            this.showSearch = false;
        }
        /**
         * @return {?}
         */
        TableHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.tableService.nextPageReturn.subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (!data.table || data.table === _this) {
                        _this.receivePage(data.obj);
                    }
                }));
                this.tableService.totalReturn.subscribe(( /**
                 * @param {?} info
                 * @return {?}
                 */function (info) {
                    if (info) {
                        _this.columnConfig.forEach(( /**
                         * @param {?} column
                         * @param {?} idx
                         * @return {?}
                         */function (column, idx) {
                            if (column === info.obj.column) {
                                _this.totalData[idx] = _this.getGroupValue(column, { sum: info.obj.value, count: _this.count });
                            }
                        }));
                    }
                }));
                this.matSort.sortChange.subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    /** @type {?} */
                    var column = _this.columnConfig.find(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return c.name === event.active; }));
                    column.sortDirection = event.direction;
                    _this.sort.emit({ column: column, columnConfigurations: _this.columnConfig, type: ChangeColumnConfigurationType.SORT });
                }));
            };
        /**
         * @return {?}
         */
        TableHelisaComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.multipleCell) {
                    this.matTable.renderRows();
                }
            };
        Object.defineProperty(TableHelisaComponent.prototype, "isRemote", {
            set: /**
             * @param {?} w
             * @return {?}
             */ function (w) {
                this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
                if (this.type === TableHelisaType.REMOTE) {
                    this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
                    this.goNextPage();
                }
                else {
                    this.tableHelisaConnectComponent = undefined;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "columnConfiguration", {
            set: /**
             * @param {?} columnConfiguration
             * @return {?}
             */ function (columnConfiguration) {
                var _this = this;
                this.columnConfig = columnConfiguration;
                this.displayedColumns.splice(0, this.displayedColumns.length);
                if (columnConfiguration) {
                    columnConfiguration.forEach(( /**
                     * @param {?} column
                     * @return {?}
                     */function (column) {
                        if (column.visible) {
                            _this.displayedColumns.push(column.name);
                        }
                    }));
                    if (this.rawData) {
                        this.dataSource = this.rawData;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "dataSource", {
            set: /**
             * @param {?} dataSource
             * @return {?}
             */ function (dataSource) {
                this.rawData = dataSource;
                if (this.rawData) {
                    this.prepareDataSource();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "selectedIndexRow", {
            set: /**
             * @param {?} idRowSelected
             * @return {?}
             */ function (idRowSelected) {
                this.indexRowSelect = idRowSelected;
                if (this.rawData && this.rawData.length) {
                    if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                        this.indexRowSelect = 0;
                    }
                    this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW });
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        TableHelisaComponent.prototype.prepareDataSource = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var changeData = Array();
                /** @type {?} */
                var haveGroup = false;
                /** @type {?} */
                var groupFooter;
                this.columnConfig.forEach(( /**
                 * @param {?} column
                 * @return {?}
                 */function (column) {
                    if (column.totalType !== undefined && (_this.type === TableHelisaType.LOCAL || _this.tableHelisaConnectComponent.page <= 1)) {
                        _this.totalData = new Array(_this.columnConfig.length);
                        _this.showFooter = true;
                        _this.total.emit({ column: column, columnConfigurations: _this.columnConfig, type: ChangeColumnConfigurationType.TOTAL });
                    }
                    _this.showSearch = _this.showSearch || column.searchable;
                    haveGroup = haveGroup || column.groupable;
                }));
                if (haveGroup) {
                    this.rawData = this.rawData.sort(( /**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */function (a, b) {
                        /** @type {?} */
                        var result = 0;
                        _this.columnConfig.forEach(( /**
                         * @param {?} column
                         * @return {?}
                         */function (column) {
                            if (result === 0) {
                                result = _this.compare(a, b);
                            }
                        }));
                        return result;
                    }));
                }
                this.rawData.forEach(( /**
                 * @param {?} row
                 * @return {?}
                 */function (row) {
                    if (haveGroup && (changeData.length === 0 || _this.compare(changeData[changeData.length - 1].data, row) !== 0)) {
                        if (groupFooter) {
                            changeData.push({ data: groupFooter, rowType: RowType.GROUP_FOOTER });
                        }
                        changeData.push({ data: row, rowType: RowType.GROUP_TITLE });
                        groupFooter = new Array(_this.columnConfig.length);
                    }
                    if (haveGroup) {
                        _this.addTotalGroup(groupFooter, row);
                    }
                    changeData.push({ data: row, rowType: RowType.ROW });
                }));
                this.data = new material.MatTableDataSource(changeData);
                if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
                    if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0)
                        this.indexRowSelect = 0;
                    this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW });
                }
            };
        /**
         * @private
         * @param {?} rowTotal
         * @param {?} row
         * @return {?}
         */
        TableHelisaComponent.prototype.addTotalGroup = /**
         * @private
         * @param {?} rowTotal
         * @param {?} row
         * @return {?}
         */
            function (rowTotal, row) {
                this.columnConfig.forEach(( /**
                 * @param {?} column
                 * @param {?} index
                 * @return {?}
                 */function (column, index) {
                    if (column.totalType !== undefined) {
                        if (rowTotal[index] === undefined) {
                            rowTotal[index] = { sum: ColumnConfigUtil.getValue(row, column), count: 1 };
                        }
                        else {
                            rowTotal[index].sum += ColumnConfigUtil.getValue(row, column);
                            rowTotal[index].count++;
                        }
                    }
                }));
            };
        /**
         * @private
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        TableHelisaComponent.prototype.compare = /**
         * @private
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                /** @type {?} */
                var ws = 0;
                this.columnConfig.forEach(( /**
                 * @param {?} column
                 * @return {?}
                 */function (column) {
                    if (ws === 0 && column.groupable) {
                        if (ColumnConfigUtil.getValue(a, column) < ColumnConfigUtil.getValue(b, column)) {
                            ws = -1;
                        }
                        else if (ColumnConfigUtil.getValue(a, column) > ColumnConfigUtil.getValue(b, column)) {
                            ws = 1;
                        }
                    }
                }));
                return ws;
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        TableHelisaComponent.prototype.getGroupDescription = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                /** @type {?} */
                var result = '';
                this.columnConfig.forEach(( /**
                 * @param {?} column
                 * @return {?}
                 */function (column) {
                    if (column.groupable) {
                        result += (result.length ? ' - ' : '') + ColumnConfigUtil.getValue(obj, column);
                    }
                }));
                return result;
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        TableHelisaComponent.prototype.isGroupTitle = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.rowType === RowType.GROUP_TITLE;
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        TableHelisaComponent.prototype.isRow = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.rowType === RowType.ROW;
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        TableHelisaComponent.prototype.isGroupFooter = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.rowType === RowType.GROUP_FOOTER;
            };
        /**
         * @return {?}
         */
        TableHelisaComponent.prototype.footerDisplayedColumns = /**
         * @return {?}
         */
            function () {
                return this.displayedColumns.map(( /**
                 * @param {?} name
                 * @return {?}
                 */function (name) { return 'footer-' + name; }));
            };
        /**
         * @param {?} column
         * @param {?} data
         * @return {?}
         */
        TableHelisaComponent.prototype.getGroupValue = /**
         * @param {?} column
         * @param {?} data
         * @return {?}
         */
            function (column, data) {
                if (column.totalType === TotalType.SUM) {
                    return data.sum;
                }
                if (column.totalType === TotalType.COUNT) {
                    return data.count;
                }
                if (column.totalType === TotalType.AVERAGE) {
                    return 1. * data.sum / data.count;
                }
                return undefined;
            };
        /**
         * @param {?} obj
         * @param {?} column
         * @return {?}
         */
        TableHelisaComponent.prototype.getValue = /**
         * @param {?} obj
         * @param {?} column
         * @return {?}
         */
            function (obj, column) {
                return ColumnConfigUtil.getValue(obj, column);
            };
        /**
         * @param {?} text
         * @return {?}
         */
        TableHelisaComponent.prototype.searchText = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                this.lastSearch = text;
                this.search.emit({ text: text, columnConfigurations: this.columnConfig });
            };
        /**
         * @param {?} row
         * @return {?}
         */
        TableHelisaComponent.prototype.selectRow = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this.selectedObject = row.data;
                this.select.emit(this.selectedObject);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TableHelisaComponent.prototype.onScroll = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var element = event.target;
                if (element.scrollHeight - element.scrollTop < 1000) {
                    this.goNextPage();
                }
            };
        /**
         * @private
         * @return {?}
         */
        TableHelisaComponent.prototype.goNextPage = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.type === TableHelisaType.REMOTE && !this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
                    this.tableHelisaConnectComponent.isUsed = true;
                    this.nextPage.emit({
                        page: this.tableHelisaConnectComponent.nextPage(),
                        body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
                    });
                }
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        TableHelisaComponent.prototype.receivePage = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (!this.rawData) {
                    this.rawData = new Array();
                }
                this.rawData = this.rawData.concat(data);
                this.dataSource = this.rawData;
                if (this.type === TableHelisaType.REMOTE) {
                    this.tableHelisaConnectComponent.isLastPage = data.length === 0;
                    this.tableHelisaConnectComponent.isUsed = false;
                }
            };
        /**
         * @return {?}
         */
        TableHelisaComponent.prototype.dblClickCell = /**
         * @return {?}
         */
            function () {
                this.selectCell.emit(this.selectedCells);
            };
        /**
         * @param {?} element
         * @param {?} column
         * @return {?}
         */
        TableHelisaComponent.prototype.selectedCell = /**
         * @param {?} element
         * @param {?} column
         * @return {?}
         */
            function (element, column) {
                /** @type {?} */
                var index = this.isSelectedCell(element, column);
                if (index >= 0) {
                    this.selectedCells.splice(index, 1);
                }
                else {
                    this.selectedCells.push({ column: column, row: element });
                }
                this.selectCell.emit(this.selectedCells);
            };
        /**
         * @param {?} element
         * @param {?} column
         * @return {?}
         */
        TableHelisaComponent.prototype.isSelectedCell = /**
         * @param {?} element
         * @param {?} column
         * @return {?}
         */
            function (element, column) {
                if (this.multipleCell) {
                    for (var index = 0; index < this.selectedCells.length; index++) {
                        if (this.selectedCells[index].column.name === column.name &&
                            this.selectedCells[index].row.data === element.data) {
                            return index;
                        }
                    }
                }
                return -1;
            };
        /**
         * @param {?} row
         * @param {?} column
         * @return {?}
         */
        TableHelisaComponent.prototype.getClassToCell = /**
         * @param {?} row
         * @param {?} column
         * @return {?}
         */
            function (row, column) {
                var _this = this;
                /** @type {?} */
                var classToCell = '';
                if (this.configCellStyles) {
                    /** @type {?} */
                    var found = this.configCellStyles.find(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        return c.cellData === _this.getValue(row, column);
                    }));
                    if (found) {
                        classToCell = found.classCell;
                    }
                }
                return classToCell;
            };
        /**
         * @param {?} row
         * @return {?}
         */
        TableHelisaComponent.prototype.getClassToRow = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                var _this = this;
                /** @type {?} */
                var classToRow = '';
                if (this.configRowStylesFromColumn) {
                    /** @type {?} */
                    var found = this.configRowStylesFromColumn.find(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        return c.data === _this.getValue(row, c.column);
                    }));
                    if (found) {
                        classToRow = found.classRow;
                    }
                }
                return classToRow;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TableHelisaComponent.prototype.onDrop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var array = this.data.data;
                dragDrop.moveItemInArray(array, event.previousIndex, event.currentIndex);
                this.drop.emit({ value: array[event.previousIndex].data, order: event.currentIndex });
                this.data.data = clonedeep(array);
            };
        TableHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-table',
                        template: "<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\">\r\n    <table cdkDropList (cdkDropListDropped)=\"onDrop($event)\" mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable>\r\n      <ng-container [matColumnDef]=\"column.name\" *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <div *ngIf=\"!column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef> {{column.title}} </th>\r\n        </div>\r\n        <div *ngIf=\"column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column.title}} </th>\r\n        </div>\r\n        <td mat-cell *matCellDef=\"let element\" (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n          [class.selected-row]=\"isSelectedCell(element, column) >= 0\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n          {{ getValue(element.data, column) }}\r\n        </td>\r\n        <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <div *ngIf=\"showFooter\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"showTitle\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"isDragged\">\r\n        <tr cdkDrag [cdkDragData]=\"row\" mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row)\" [class.selected-row]=\"row.data === selectedObject && !multipleCell\"\r\n          [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>\r\n      <div *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !multipleCell\" [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: footerDisplayedColumns(); when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n</div>",
                        styles: [".div-table-helisa .container-table{width:100%;height:100%}.div-table-helisa .container-table .table-helisa{width:100%}.div-table-helisa .container-table .table-helisa /deep/ tbody tr,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr,.div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td,.div-table-helisa .container-table .table-helisa /deep/ tbody tr th,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,.div-table-helisa .container-table .table-helisa /deep/ thead tr td,.div-table-helisa .container-table .table-helisa /deep/ thead tr th{padding:2px 10px 0}.div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}.div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}.div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
                    }] }
        ];
        /** @nocollapse */
        TableHelisaComponent.ctorParameters = function () {
            return [
                { type: TableHelisaService }
            ];
        };
        TableHelisaComponent.propDecorators = {
            matSort: [{ type: i0.ViewChild, args: [material.MatSort,] }],
            matTable: [{ type: i0.ViewChild, args: [material.MatTable,] }],
            sort: [{ type: i0.Output }],
            total: [{ type: i0.Output }],
            search: [{ type: i0.Output }],
            select: [{ type: i0.Output }],
            selectCell: [{ type: i0.Output }],
            nextPage: [{ type: i0.Output }],
            showTitle: [{ type: i0.Input }],
            multipleCell: [{ type: i0.Input }],
            count: [{ type: i0.Input }],
            configCellStyles: [{ type: i0.Input }],
            configRowStylesFromColumn: [{ type: i0.Input }],
            selectedCells: [{ type: i0.Input }],
            drop: [{ type: i0.Output }],
            isDragged: [{ type: i0.Input }],
            isRemote: [{ type: i0.Input }],
            columnConfiguration: [{ type: i0.Input }],
            dataSource: [{ type: i0.Input }],
            selectedIndexRow: [{ type: i0.Input }]
        };
        return TableHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateHelisaComponent = /** @class */ (function () {
        function DateHelisaComponent() {
            this.placeholder = "";
            this.dateFormControl = new forms.FormControl('');
        }
        /**
         * @return {?}
         */
        DateHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DateHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-date-helisa',
                        template: "<div>\r\n<mat-form-field class=\"example-full-width\">\r\n  <input matInput [matDatepicker]=\"picker\" [formControl]= \"dateFormControl\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker touchUi #picker></mat-datepicker>\r\n</mat-form-field>\r\n</div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DateHelisaComponent.ctorParameters = function () { return []; };
        DateHelisaComponent.propDecorators = {
            placeholder: [{ type: i0.Input }],
            dateFormControl: [{ type: i0.Input }]
        };
        return DateHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        // Service message commands
        /**
         * @param {?} idResidentialArea
         * @return {?}
         */
        TreeHelisaService.prototype.changeNodeSelected =
            // Service message commands
            /**
             * @param {?} idResidentialArea
             * @return {?}
             */
            function (idResidentialArea) {
                this.emitNodeSelected.next(idResidentialArea);
            };
        // Service message commands
        // Service message commands
        /**
         * @param {?} data
         * @return {?}
         */
        TreeHelisaService.prototype.changeDataSource =
            // Service message commands
            /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this.emitDataSource.next(data);
            };
        /**
         * @param {?} expand
         * @return {?}
         */
        TreeHelisaService.prototype.expandAllNodes = /**
         * @param {?} expand
         * @return {?}
         */
            function (expand) {
                this.emitExpandAllNodes.next(expand);
            };
        /**
         * @param {?} collapse
         * @return {?}
         */
        TreeHelisaService.prototype.collapseAllNodes = /**
         * @param {?} collapse
         * @return {?}
         */
            function (collapse) {
                this.emitCollapseAllNodes.next(collapse);
            };
        /**
         * @return {?}
         */
        TreeHelisaService.prototype.refreshTree = /**
         * @return {?}
         */
            function () {
                this.emitRefreshTree.next();
            };
        /**
         * @return {?}
         */
        TreeHelisaService.prototype.refreshTreeWithPagination = /**
         * @return {?}
         */
            function () {
                this.emitRefreshTreeWithPagination.next();
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaService.prototype.expandOneNode = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                this.emitExpandOneNode.next(node);
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaService.prototype.collapseOneNode = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                this.emitCollapseOneNode.next(node);
            };
        TreeHelisaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TreeHelisaService.ctorParameters = function () { return []; };
        /** @nocollapse */ TreeHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
        return TreeHelisaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ TreeHelisaConnect = /** @class */ (function () {
        function TreeHelisaConnect() {
            this.page = 0;
            this.isLastPage = false;
            this.isUsed = false;
        }
        /**
         * @return {?}
         */
        TreeHelisaConnect.prototype.nextPage = /**
         * @return {?}
         */
            function () {
                return this.page = this.page + 1;
            };
        return TreeHelisaConnect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TreeHelisaComponent = /** @class */ (function () {
        //#endregion ====== Variables ========
        function TreeHelisaComponent(treeHelisaService, router$$1, elementRef) {
            this.treeHelisaService = treeHelisaService;
            this.router = router$$1;
            this.elementRef = elementRef;
            this.selectedOptions = new Map();
            /**
             * Establece si se mostraran las opciones de
             * Creacion, edición y eliminacion del nodo
             */
            this.showOptionsNode = true;
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
            this.treeControl = new tree.NestedTreeControl(( /**
             * @param {?} node
             * @return {?}
             */function (node) { return node.children; }));
            this.dataSource = new material.MatTreeNestedDataSource();
            this.isSingleClick = true;
            this.currentNode = null;
            /**
             * Verifica si el nodo tiene hijos
             */
            this.hasChild = ( /**
             * @param {?} _
             * @param {?} node
             * @return {?}
             */function (_$$1, node) { return !!node.children && node.children.length > 0; });
            //cargar datos pasados por el @Input
            if (!!this.data) {
                /** @type {?} */
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
         * @return {?}
         */
        TreeHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // si se cargan datos por medio del servicio
                this.treeHelisaService.dataSourceObservable
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                    if (!!res && !!res.children) {
                        _this.receivePage(res.children);
                    }
                    else {
                        _this.dataSource.data = [];
                        _this.treeControl.dataNodes = [];
                    }
                }));
                // Observable, si cambia el nodo seleccionado por medio del servicio
                this.treeHelisaService.nodeSelected
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                    if (!!_this.data && !!_this.data.children)
                        _this.selectNode(_this.data, res);
                }));
                this.treeHelisaService.refreshTreeObservable
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                    _this.refreshTree();
                }));
                this.treeHelisaService.refreshTreeWithPaginationObservable
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                    _this.refreshTreeWithPagination();
                }));
            };
        /**
         * @return {?}
         */
        TreeHelisaComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.treeHelisaService.nodeExpand.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    if (res != null) {
                        if (res) {
                            _this.tree.treeControl.expandAll();
                        }
                    }
                }));
                this.treeHelisaService.nodeCollapse.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    if (res != null) {
                        if (res) {
                            _this.tree.treeControl.collapseAll();
                        }
                    }
                }));
                this.treeHelisaService.expandOneNodeObservable
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                    if (res != undefined) {
                        _this.treeControl.expand(res);
                    }
                }));
                this.treeHelisaService.collapseOneNodeObservable
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                    if (res != undefined) {
                        _this.treeControl.collapse(res);
                    }
                }));
            };
        //#region  ====== Events ===========
        //#region  ====== Events ===========
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.onRedirect =
            //#region  ====== Events ===========
            /**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                var _this = this;
                this.isSingleClick = true;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (_this.isSingleClick) {
                        _this.selectNode(_this.data, node.id);
                        // if(!!node && !node.children){
                        if (!!node) {
                            _this.nodeSelected.emit(node.id);
                            _this.currentNode = node;
                        }
                    }
                }), 350);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TreeHelisaComponent.prototype.onScroll = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var element = event.target;
                if ((element.offsetHeight + element.scrollTop) >= element.scrollHeight) {
                    this.goNextPage();
                }
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.onEdit = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                node.isEditable = true;
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.onAdd = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                // si no tiene hijos instanciar el array
                if (!node.children) {
                    node.children = [];
                }
                node.children.push({
                    id: null,
                    name: "",
                    isSelected: false,
                    parent: node,
                    isEditable: true
                });
                this.refreshTree();
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.onDelete = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                // Remueve el nodo utilizando la libreria de lodash   
                _.remove(node.parent.children, node);
                this.refreshTree();
                this.removed.emit(node.id);
            };
        /**
         * @param {?} node
         * @param {?} value
         * @return {?}
         */
        TreeHelisaComponent.prototype.onEdited = /**
         * @param {?} node
         * @param {?} value
         * @return {?}
         */
            function (node, value) {
                node.name = value;
                if (node.id == null && node.name == "") {
                    _.remove(node.parent.children, node);
                    this.refreshTree();
                }
                else if (node.id && node.id != null && node.name.trim() !== "") {
                    this.edited.emit(node);
                    node.isEditable = false;
                }
                else if (!!node.id && node.id == null && node.name.trim() !== "") {
                    this.added.emit(node);
                    node.isEditable = false;
                }
            };
        /**
         * @param {?} node
         * @param {?} value
         * @return {?}
         */
        TreeHelisaComponent.prototype.onCancel = /**
         * @param {?} node
         * @param {?} value
         * @return {?}
         */
            function (node, value) {
                // Si no tiene id por ser un nuevo item, lo elimina
                if (node.id == null) {
                    _.remove(node.parent.children, node);
                    this.refreshTree();
                }
                node.isEditable = false;
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.onDblClick = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                this.isSingleClick = false;
                this.dobleClick.emit(node.id);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TreeHelisaComponent.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.key) {
                    case 'Delete':
                        this.keypressDelete.emit((!!this.currentNode && this.currentNode.id) ? this.currentNode.id : null);
                        break;
                    case 'Insert':
                        this.keypressInsert.emit((!!this.currentNode && this.currentNode.id) ? this.currentNode.id : null);
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
        //#endregion ======= Events ========
        //#region  ======== Metodos =============
        /**
         * @private
         * @return {?}
         */
        TreeHelisaComponent.prototype.moveUpIntoTree =
            //#endregion ======= Events ========
            //#region  ======== Metodos =============
            /**
             * @private
             * @return {?}
             */
            function () {
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
                            /** @type {?} */
                            var index = this.currentNode.parent.children.indexOf(this.currentNode);
                            if (this.currentNode.parent.id == null && index == 0) {
                                return 0;
                            }
                            else { // si tiene nodos al mismo nivel salta al nodo anterior
                                if (index != undefined && index == 0) {
                                    this.currentNode = this.currentNode.parent;
                                    this.selectNode(this.data, this.currentNode.id);
                                    if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                        this.treeHelisaService.expandOneNode(this.currentNode);
                                    }
                                }
                                else { // si no tiene nodos al mismo nivel salta al nodo padre
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
        /**
         * @private
         * @return {?}
         */
        TreeHelisaComponent.prototype.moveDownIntoTree = /**
         * @private
         * @return {?}
         */
            function () {
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
                            /** @type {?} */
                            var index = (!!this.currentNode && !!this.currentNode.parent) ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
                            // si tiene childrens pasa al primer children
                            if (!!this.currentNode.children &&
                                this.currentNode.children.length > 0) {
                                this.currentNode = this.currentNode.children[0];
                                this.selectNode(this.data, this.currentNode.id);
                                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                    this.treeHelisaService.expandOneNode(this.currentNode);
                                }
                            }
                            // Si es el ultimo nodo del array pasa al nodo hermano del padre (tio) hacia abajo
                            else if (index != undefined &&
                                index == this.currentNode.parent.children.length - 1 &&
                                this.currentNode.parent.parent != null &&
                                this.currentNode.parent.parent.children != null &&
                                this.currentNode.parent.parent.children.length > 0) {
                                /** @type {?} */
                                var indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
                                this.currentNode = (this.currentNode.parent.parent.children[indexOfParent + 1] == undefined) ? this.currentNode : this.currentNode.parent.parent.children[indexOfParent + 1];
                                this.selectNode(this.data, this.currentNode.id);
                                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                    this.treeHelisaService.expandOneNode(this.currentNode);
                                }
                            }
                            else { // si no tiene nodos al mismo nivel salta al siguiente hacia abajo
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
         * Obtiene la descripcion completa del nodo
         * @example Nodo padre,nodo hijo,nodo nieto
         * @param node Debe tener todos los parent llenos hacia arriba
         */
        /**
         * Obtiene la descripcion completa del nodo
         * \@example Nodo padre,nodo hijo,nodo nieto
         * @param {?} node Debe tener todos los parent llenos hacia arriba
         * @return {?}
         */
        TreeHelisaComponent.getDescription = /**
         * Obtiene la descripcion completa del nodo
         * \@example Nodo padre,nodo hijo,nodo nieto
         * @param {?} node Debe tener todos los parent llenos hacia arriba
         * @return {?}
         */
            function (node) {
                /** @type {?} */
                var result = [node.name];
                /** @type {?} */
                var concat = "";
                if (node.parent) {
                    result.push(this.getDescription(node.parent));
                }
                if (result.length == 1)
                    return node.name;
                result = result.reverse();
                for (var i = 0; i < result.length; i++) {
                    /** @type {?} */
                    var element = result[i];
                    concat = concat + element + ((i == result.length - 1) ? "" : ",");
                }
                return concat;
            };
        /**
         * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
         */
        /**
         * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
         * @private
         * @return {?}
         */
        TreeHelisaComponent.prototype.refreshTree = /**
         * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
         * @private
         * @return {?}
         */
            function () {
                this.data = null;
                /** @type {?} */
                var _data = this.dataSource.data;
                this.dataSource.data = null;
                this.dataSource.data = _data;
                this.treeControl.dataNodes = _data;
            };
        /**
         * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
         */
        /**
         * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
         * @private
         * @return {?}
         */
        TreeHelisaComponent.prototype.refreshTreeWithPagination = /**
         * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var _data = this.dataSource.data;
                this.dataSource.data = null;
                this.dataSource.data = _data;
                this.treeControl.dataNodes = _data;
            };
        /**
         * @private
         * @return {?}
         */
        TreeHelisaComponent.prototype.goNextPage = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this.treeHelisaConnect.isLastPage && !this.treeHelisaConnect.isUsed) {
                    this.treeHelisaConnect.isUsed = true;
                    this.rangeScrolled.emit({
                        page: this.treeHelisaConnect.nextPage()
                    });
                }
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        TreeHelisaComponent.prototype.receivePage = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                if (!this.data) {
                    this.data = { id: null, name: "root", isSelected: false };
                }
                if (!this.data.children) {
                    this.data.children = new Array();
                    this.treeHelisaConnect = new TreeHelisaConnect();
                }
                this.data.children = this.data.children.concat(data);
                this.data.children.forEach(( /**
                 * @param {?} node
                 * @return {?}
                 */function (node) {
                    _this.fillParent(node, _this.data);
                }));
                this.dataSource.data = this.data.children;
                this.treeControl.dataNodes = this.data.children;
                this.treeHelisaConnect.isLastPage = data.length === 0;
                this.treeHelisaConnect.isUsed = false;
            };
        /**
         * Llenan el campo parent de todos los nodos hijos
         * @param node
         * @param parent
         */
        /**
         * Llenan el campo parent de todos los nodos hijos
         * @private
         * @param {?} node
         * @param {?} parent
         * @return {?}
         */
        TreeHelisaComponent.prototype.fillParent = /**
         * Llenan el campo parent de todos los nodos hijos
         * @private
         * @param {?} node
         * @param {?} parent
         * @return {?}
         */
            function (node, parent) {
                var _this = this;
                node.parent = parent;
                if (node.children && node.children.length > 0) {
                    node.children.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        _this.fillParent(item, node);
                    }));
                }
            };
        /**
         * coloca como true del isSelected del nodo que concuerde con el id
         * @param node
         * @param id
         */
        /**
         * coloca como true del isSelected del nodo que concuerde con el id
         * @private
         * @param {?} node
         * @param {?} id
         * @return {?}
         */
        TreeHelisaComponent.prototype.selectNode = /**
         * coloca como true del isSelected del nodo que concuerde con el id
         * @private
         * @param {?} node
         * @param {?} id
         * @return {?}
         */
            function (node, id) {
                this.upSelectNode(node);
                if (node.id == id) {
                    node.isSelected = true;
                    this.expandAllParents(node);
                    return node;
                }
                else if (node.children != null) {
                    /** @type {?} */
                    var i;
                    /** @type {?} */
                    var result = null;
                    for (i = 0; result == null && i < node.children.length; i++) {
                        result = this.selectNode(node.children[i], id);
                    }
                    return result;
                }
                return null;
            };
        /**
         * @private
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.expandAllParents = /**
         * @private
         * @param {?} node
         * @return {?}
         */
            function (node) {
                if (!!node && !!node.parent) {
                    this.treeHelisaService.expandOneNode(node.parent);
                    this.expandAllParents(node.parent);
                }
            };
        /**
         * Elimina el isSelected de todos los nodos
         * @param node
         */
        /**
         * Elimina el isSelected de todos los nodos
         * @private
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.upSelectNode = /**
         * Elimina el isSelected de todos los nodos
         * @private
         * @param {?} node
         * @return {?}
         */
            function (node) {
                node.isSelected = false;
                if (!!node.children)
                    for (var i = 0; i < node.children.length; i++) {
                        this.upSelectNode(node.children[i]);
                    }
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.getClassNode = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                /** @type {?} */
                var classNode = [];
                if (node.isSelected) {
                    classNode.push("isSelected");
                }
                if (node.classNode) {
                    classNode.push(node.classNode);
                }
                return classNode;
            };
        /**
         * @param {?} node
         * @param {?} editMode
         * @return {?}
         */
        TreeHelisaComponent.prototype.onEditMode = /**
         * @param {?} node
         * @param {?} editMode
         * @return {?}
         */
            function (node, editMode) {
                this.getSelectedOptions(node).editMode = editMode;
            };
        /**
         * @param {?} event
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.onSelectOption = /**
         * @param {?} event
         * @param {?} node
         * @return {?}
         */
            function (event, node) {
                node.isCheckedOption = event.source.selected;
                if (node.isCheckedOption)
                    this.checkedOptionNode.emit(node.id);
                else
                    this.uncheckedOptionNode.emit(node.id);
            };
        /**
         * @param {?} node
         * @return {?}
         */
        TreeHelisaComponent.prototype.getSelectedOptions = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                if (this.selectedOptions.has(node.id))
                    this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
                else
                    this.reloadSelectedOptions(node, false);
                return this.selectedOptions.get(node.id);
            };
        /**
         * @private
         * @param {?} node
         * @param {?} editMode
         * @return {?}
         */
        TreeHelisaComponent.prototype.reloadSelectedOptions = /**
         * @private
         * @param {?} node
         * @param {?} editMode
         * @return {?}
         */
            function (node, editMode) {
                /** @type {?} */
                var array = new Array();
                node.options.forEach(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) {
                    if (option.isCheckedOption)
                        array.push(option.id);
                }));
                /** @type {?} */
                var obj = { formControl: new forms.FormControl(array), editMode: editMode };
                this.selectedOptions.set(node.id, obj);
            };
        TreeHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-tree',
                        template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li class=\"mat-tree-node\" [ngClass]=\"getClassNode(node)\"\r\n          (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" *ngIf=\"!node.isEditable\" class=\"tree-node\">\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        {{node.name}}\r\n      </li>\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n\r\n          <button mat-icon-button matTreeNodeToggle\r\n                  [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{treeControl.isExpanded(node) ? 'remove' : 'add'}}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\r\n             [ngClass]=\"getClassNode(node)\">{{node.name}}</p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n</div>\r\n<ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n  <ng-container matTreeNodeOutlet></ng-container>\r\n</ul>\r\n</li>\r\n</mat-nested-tree-node>\r\n</mat-tree>\r\n</div>\r\n",
                        host: {
                            '(document:keyup)': 'onKeyDown($event)'
                        },
                        styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.isSelected{background:red}.tree-options{display:inline}.container-tree{overflow:scroll;height:350px;width:100%}.tree-node{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
                    }] }
        ];
        /** @nocollapse */
        TreeHelisaComponent.ctorParameters = function () {
            return [
                { type: TreeHelisaService },
                { type: router.Router },
                { type: i0.ElementRef }
            ];
        };
        TreeHelisaComponent.propDecorators = {
            tree: [{ type: i0.ViewChild, args: ['tree',] }],
            data: [{ type: i0.Input }],
            showOptionsNode: [{ type: i0.Input }],
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
            uncheckedOptionNode: [{ type: i0.Output }]
        };
        return TreeHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var AutocompleteHelisaService = /** @class */ (function () {
        function AutocompleteHelisaService() {
            this.emitChangeSource = new rxjs.BehaviorSubject([]);
            this.dataSource$ = this.emitChangeSource.asObservable();
        }
        /**
         * @param {?} options
         * @return {?}
         */
        AutocompleteHelisaService.prototype.setDataSource = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.emitChangeSource.next(options);
            };
        AutocompleteHelisaService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AutocompleteHelisaService.ctorParameters = function () { return []; };
        return AutocompleteHelisaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var AutocompleteHelisaComponent = /** @class */ (function () {
        function AutocompleteHelisaComponent(autocompleteHelisaService) {
            this.autocompleteHelisaService = autocompleteHelisaService;
            this.myControl = new forms.FormControl();
            this.options = new Array();
            this.onSelectedValue = new i0.EventEmitter();
            this.isRemote = false;
            this.isLoading = false;
        }
        /**
         * @return {?}
         */
        AutocompleteHelisaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isRemote) {
                    this.autocompleteHelisaService.dataSource$.subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.options = data;
                        _this.filteredOptions = rxjs.of(_this.options);
                    }));
                }
                this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return _this._filter(value); })));
            };
        /**
         * @return {?}
         */
        AutocompleteHelisaComponent.prototype.getService = /**
         * @return {?}
         */
            function () {
                return this.autocompleteHelisaService;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AutocompleteHelisaComponent.prototype._filter = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value instanceof Object) {
                    this.myControl.setValue(value.displayText);
                }
                else {
                    if (!this.isRemote) {
                        /** @type {?} */
                        var filterValue_1 = value.toLowerCase().split(' ');
                        return this.options.filter(( /**
                         * @param {?} option
                         * @return {?}
                         */function (option) {
                            /** @type {?} */
                            var ws = true;
                            filterValue_1.forEach(( /**
                             * @param {?} text
                             * @return {?}
                             */function (text) { return ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0; }));
                            return ws;
                        })).splice(0, 5);
                    }
                    else {
                        return this.options;
                    }
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AutocompleteHelisaComponent.prototype.onSelected = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectedValue = event.option.value;
                this.onSelectedValue.emit(this.selectedValue.value);
            };
        AutocompleteHelisaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hel-autocomplete',
                        template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\" [value]=\"option\">\r\n      {{option.displayText}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>",
                        providers: [AutocompleteHelisaService],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AutocompleteHelisaComponent.ctorParameters = function () {
            return [
                { type: AutocompleteHelisaService }
            ];
        };
        AutocompleteHelisaComponent.propDecorators = {
            myControl: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            onSelectedValue: [{ type: i0.Output }],
            isRemote: [{ type: i0.Input }]
        };
        return AutocompleteHelisaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HelisaLibModule = /** @class */ (function () {
        function HelisaLibModule() {
        }
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
                            AutocompleteHelisaComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatAutocompleteModule,
                            material.MatButtonModule,
                            material.MatCheckboxModule,
                            toolbar.MatToolbarModule,
                            expansion.MatExpansionModule,
                            formField.MatFormFieldModule,
                            material.MatInputModule,
                            select.MatSelectModule,
                            material.MatOptionModule,
                            list.MatListModule,
                            icon.MatIconModule,
                            material.MatSnackBarModule,
                            card.MatCardModule,
                            layout.LayoutModule,
                            toolbar.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatSidenavModule,
                            icon.MatIconModule,
                            list.MatListModule,
                            material.MatGridListModule,
                            card.MatCardModule,
                            material.MatMenuModule,
                            material.MatInputModule,
                            select.MatSelectModule,
                            material.MatRadioModule,
                            progressSpinner.MatProgressSpinnerModule,
                            material.MatTableModule,
                            material.MatPaginatorModule,
                            material.MatSortModule,
                            i1$1.MatDialogModule,
                            tabs.MatTabsModule,
                            datepicker.MatDatepickerModule,
                            material.MatNativeDateModule,
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
                            material.MatButtonModule,
                            material.MatCheckboxModule,
                            toolbar.MatToolbarModule,
                            expansion.MatExpansionModule,
                            formField.MatFormFieldModule,
                            material.MatInputModule,
                            select.MatSelectModule,
                            material.MatOptionModule,
                            list.MatListModule,
                            icon.MatIconModule,
                            material.MatSnackBarModule,
                            card.MatCardModule,
                            layout.LayoutModule,
                            toolbar.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatSidenavModule,
                            icon.MatIconModule,
                            list.MatListModule,
                            material.MatGridListModule,
                            card.MatCardModule,
                            material.MatMenuModule,
                            material.MatInputModule,
                            select.MatSelectModule,
                            material.MatRadioModule,
                            progressSpinner.MatProgressSpinnerModule,
                            material.MatTableModule,
                            material.MatPaginatorModule,
                            material.MatSortModule,
                            i1$1.MatDialogModule,
                            tabs.MatTabsModule,
                            datepicker.MatDatepickerModule,
                            material.MatNativeDateModule,
                            stepper.MatStepperModule,
                            chips.MatChipsModule,
                            dragDrop.DragDropModule,
                            tree$1.MatTreeModule
                        ],
                        providers: [
                            TableHelisaService,
                            TreeHelisaService
                        ]
                    },] }
        ];
        return HelisaLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.InputWithButtonComponent = InputWithButtonComponent;
    exports.ToastHelisaComponent = ToastHelisaComponent;
    exports.ToastHelisaService = ToastHelisaService;
    exports.ToastType = ToastType;
    exports.AlertHelisaType = AlertHelisaType;
    exports.AlertHelisaComponent = AlertHelisaComponent;
    exports.AlertHelisaService = AlertHelisaService;
    exports.DependencyTableHelisaComponent = DependencyTableHelisaComponent;
    exports.DependencyTableHelisaService = DependencyTableHelisaService;
    exports.InputHelisaComponent = InputHelisaComponent;
    exports.TableHelisaComponent = TableHelisaComponent;
    exports.TotalType = TotalType;
    exports.ChangeColumnConfigurationType = ChangeColumnConfigurationType;
    exports.TableHelisaType = TableHelisaType;
    exports.ColumnConfigUtil = ColumnConfigUtil;
    exports.TableHelisaService = TableHelisaService;
    exports.DateHelisaComponent = DateHelisaComponent;
    exports.TreeHelisaComponent = TreeHelisaComponent;
    exports.TreeHelisaConnect = TreeHelisaConnect;
    exports.TreeHelisaService = TreeHelisaService;
    exports.AutocompleteHelisaComponent = AutocompleteHelisaComponent;
    exports.AutocompleteHelisaService = AutocompleteHelisaService;
    exports.HelisaLibModule = HelisaLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=helisa-lib.umd.js.map
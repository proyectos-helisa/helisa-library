import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import * as moment_ from 'moment';
import { __values, __spread } from 'tslib';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Router } from '@angular/router';
import { remove, orderBy } from 'lodash';
import { filter, tap, map, startWith, throttleTime, debounceTime, takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSort, MatTable, MatTableDataSource, MatTreeNestedDataSource, MatAutocomplete, MatTooltip, MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatRadioModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog as MatDialog$1, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, Inject, Injectable, Directive, HostBinding, PLATFORM_ID, Pipe, HostListener, ElementRef, ViewChildren, defineInjectable, inject, NgModule, ViewChild } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputWithButtonComponent = /** @class */ (function () {
    function InputWithButtonComponent() {
        this.placeholder = '';
        this.inputFormControl = new FormControl('', Validators.required);
        this.requiredMessage = 'El campo es requerido';
        this.value = '';
        this.done = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputWithButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.value !== '') {
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
        { type: Component, args: [{
                    selector: 'hel-input-with-button',
                    template: "<div>\r\n  <mat-form-field>\r\n    <input matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \r\n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\r\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\r\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\r\n      {{ requiredMessage }}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InputWithButtonComponent.ctorParameters = function () { return []; };
    InputWithButtonComponent.propDecorators = {
        placeholder: [{ type: Input }],
        inputFormControl: [{ type: Input }],
        requiredMessage: [{ type: Input }],
        value: [{ type: Input }],
        done: [{ type: Output }],
        cancel: [{ type: Output }]
    };
    return InputWithButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
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
        { type: Component, args: [{
                    selector: 'hel-toast',
                    template: "<div [ngClass]=\"'toast-'+data.type\">\r\n  <span class=\"toast-message\">{{ data.message }}</span>\r\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\r\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\r\n  </ng-container>    \r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ToastHelisaComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastHelisaService.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ ToastHelisaService.ngInjectableDef = defineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(inject(MatSnackBar$1)); }, token: ToastHelisaService, providedIn: "root" });
    return ToastHelisaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ToastType = {
    DONE: 'done',
    ERROR: 'error',
    INFO: 'info',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var AlertHelisaType = {
    ERROR: 'ERROR',
    CONFIRMATION: 'CONFIRMATION',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertHelisaComponent = /** @class */ (function () {
    function AlertHelisaComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        this.title = data.title;
        this.hasCancel = data.type === AlertHelisaType.CONFIRMATION;
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.code === 'Escape') {
                _this.dialogRef.close(_this.onCancel());
            }
        }));
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
        { type: Component, args: [{
                    selector: 'hel-alert',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >cancelar</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>aceptar</button>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertHelisaService.ngInjectableDef = defineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(inject(MatDialog$1)); }, token: AlertHelisaService, providedIn: "root" });
    return AlertHelisaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var DependencyTableHelisaService = /** @class */ (function () {
    function DependencyTableHelisaService() {
        this.tables = new Subject();
        this.infoTables = new Array();
        this.emitVisibilityButton$ = new Subject();
        this.emitVisibilityButton = this.emitVisibilityButton$.asObservable();
        this.emitVisibilityAllButtons$ = new Subject();
        this.emitVisibilityAllButtons = this.emitVisibilityAllButtons$.asObservable();
        this.emitIsCellSelection$ = new Subject();
        this.emitIsCellSelection = this.emitIsCellSelection$.asObservable();
        this.emitChangeColumns$ = new Subject();
        this.emitChangeColumns = this.emitChangeColumns$.asObservable();
        this.emitTotal = new Subject();
        this.emitNextPage = new Subject();
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
     * @param {?} config
     * @return {?}
     */
    DependencyTableHelisaService.prototype.selectIndexRow = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (this.infoTables[config.order]) {
            this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
            this.tables.next(this.infoTables);
        }
    };
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeVisibilityButton = /**
     * Muestra o esconde el boton una tabla en especifico
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    function (event) {
        this.emitVisibilityButton$.next(event);
    };
    /**
     * Esconde los botones de todas las tablas
     * @param show indicar si se muestran o no todos los botones de las tablas
     */
    /**
     * Esconde los botones de todas las tablas
     * @param {?} show indicar si se muestran o no todos los botones de las tablas
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeVisibilityAllButtons = /**
     * Esconde los botones de todas las tablas
     * @param {?} show indicar si se muestran o no todos los botones de las tablas
     * @return {?}
     */
    function (show) {
        this.emitVisibilityAllButtons$.next(show);
    };
    /**
     * Para habilitar el manejo de selección de celda
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    /**
     * Para habilitar el manejo de selección de celda
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeisCellSelection = /**
     * Para habilitar el manejo de selección de celda
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    function (event) {
        this.emitIsCellSelection$.next(event);
    };
    /**
     * Para habilitar el cambio de columnas
     * @param event para indicar el index de la tabla y en "data" columnas
     */
    /**
     * Para habilitar el cambio de columnas
     * @param {?} event para indicar el index de la tabla y en "data" columnas
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeColumnsByTable = /**
     * Para habilitar el cambio de columnas
     * @param {?} event para indicar el index de la tabla y en "data" columnas
     * @return {?}
     */
    function (event) {
        this.emitChangeColumns$.next(event);
    };
    DependencyTableHelisaService.decorators = [
        { type: Injectable }
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
        this.emitChangeSource = new Subject();
        this.emitNextPage = new Subject();
        this.totalReturn = this.emitChangeSource.asObservable();
        this.nextPageReturn = this.emitNextPage.asObservable();
        this.emitVisibleButton$ = new Subject();
        /**
         * Observable para saber si se debe mostrar o esconder el boton de add row
         */
        this.emitVisibleButton = this.emitVisibleButton$.asObservable();
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
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param change indicar si se muestra o no el boton de add row de la tabla
     */
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param {?} change indicar si se muestra o no el boton de add row de la tabla
     * @return {?}
     */
    TableHelisaService.prototype.changeVisibilityButton = /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param {?} change indicar si se muestra o no el boton de add row de la tabla
     * @return {?}
     */
    function (change) {
        this.emitVisibleButton$.next(change);
    };
    TableHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ TableHelisaService.ngInjectableDef = defineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
    return TableHelisaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var DependencyTableHelisaComponent = /** @class */ (function () {
    function DependencyTableHelisaComponent(dependencyTableHelisaService, tableService) {
        this.dependencyTableHelisaService = dependencyTableHelisaService;
        this.tableService = tableService;
        this.tables = [];
        this.showToolTip = true;
        /**
         * deprecated, use selectObject
         */
        this.selected = new EventEmitter();
        this.selectObject = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.total = new EventEmitter();
        this.sort = new EventEmitter();
        this.drop = new EventEmitter();
        this.addRow = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.bookClicked = new EventEmitter();
        this.selectedObject = null;
        /**
         * Tiempo antes de ocultarla el mensaje del tooltip
         */
        this.hideDelay = 600;
        /**
         * Tiempo antes de mostra el mensaje del tooltip
         */
        this.showDelay = 500;
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
        this.dependencyTableHelisaService.emitNextPage.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.tableService.addPage(event.data, _this.viewTables.toArray()[event.index]);
        }));
        this.dependencyTableHelisaService.emitTotal.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.tableService.setTotal(event.data, _this.viewTables[event.index]);
        }));
        // Observable para mostrar o esconder el boton de una tabla
        this.dependencyTableHelisaService.emitVisibilityButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!!data && data.index !== undefined) {
                /** @type {?} */
                var table = _this.tables[data.index];
                if (!!table) {
                    table.addRowButton.showButton = data.data;
                }
            }
        }));
        // Observable para mostrar o esconder los botones de todas las tablas
        this.dependencyTableHelisaService.emitVisibilityAllButtons.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data !== undefined && data != null) {
                _this.tables.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    if (!!element.addRowButton) {
                        element.addRowButton.showButton = data;
                    }
                }));
            }
        }));
        // Observable para manejo de selección de celdas
        this.dependencyTableHelisaService.emitIsCellSelection.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!!data && data.index !== undefined) {
                /** @type {?} */
                var table = _this.tables[data.index];
                if (table) {
                    table.isCellSelection = data.data;
                }
            }
        }));
        // Observable para manejo de columnas
        this.dependencyTableHelisaService.emitChangeColumns.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!!data && data.index !== undefined) {
                /** @type {?} */
                var table = _this.tables[data.index];
                if (table) {
                    table.columns = data.data;
                }
            }
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
            .subscribe((/**
         * @param {?} tables
         * @return {?}
         */
        function (tables) {
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
        this.selected.emit({ index: index, data: event.value });
        this.selectObject.emit({ index: index, data: event });
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
    DependencyTableHelisaComponent.prototype.onDrop = /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    function (index, event) {
        this.drop.emit({ index: index, data: event });
    };
    /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param index indica el indice de la tabla de la cual se dispara el evento
     */
    /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param {?} index indica el indice de la tabla de la cual se dispara el evento
     * @return {?}
     */
    DependencyTableHelisaComponent.prototype.onAddRow = /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param {?} index indica el indice de la tabla de la cual se dispara el evento
     * @return {?}
     */
    function (index) {
        this.addRow.emit(index);
    };
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    DependencyTableHelisaComponent.prototype.selectedCell = /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        if (this.tables[index].isCellSelection) {
            this.selectCell.emit({ index: index, data: event });
        }
    };
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    DependencyTableHelisaComponent.prototype.onBookClicked = /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        this.bookClicked.emit({ index: index, data: event });
    };
    DependencyTableHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-dependency-table',
                    template: "<div>    \r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\"\r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\r\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\"\r\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\r\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\r\n    (bookClicked)=\"onBookClicked(i,$event)\"\r\n    [showToolTip]=\"showToolTip\"\r\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\">\r\n  </hel-table>\r\n</div>\r\n",
                    providers: [DependencyTableHelisaService],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DependencyTableHelisaComponent.ctorParameters = function () { return [
        { type: DependencyTableHelisaService },
        { type: TableHelisaService }
    ]; };
    DependencyTableHelisaComponent.propDecorators = {
        viewTables: [{ type: ViewChildren, args: ['viewTables',] }],
        showToolTip: [{ type: Input }],
        selected: [{ type: Output }],
        selectObject: [{ type: Output }],
        nextPage: [{ type: Output }],
        total: [{ type: Output }],
        sort: [{ type: Output }],
        drop: [{ type: Output }],
        addRow: [{ type: Output }],
        selectCell: [{ type: Output }],
        bookClicked: [{ type: Output }],
        hideDelay: [{ type: Input }],
        showDelay: [{ type: Input }]
    };
    return DependencyTableHelisaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var InputHelisaType = {
    DEFAULT: 0, IDENTITY: 1, NUMERIC: 2, DOUBLE: 3,
};
InputHelisaType[InputHelisaType.DEFAULT] = 'DEFAULT';
InputHelisaType[InputHelisaType.IDENTITY] = 'IDENTITY';
InputHelisaType[InputHelisaType.NUMERIC] = 'NUMERIC';
InputHelisaType[InputHelisaType.DOUBLE] = 'DOUBLE';
var InputHelisaComponent = /** @class */ (function () {
    function InputHelisaComponent() {
        this.DECIMAL_SEPARATOR = '.';
        this.THOUSAND_SEPARATOR = ',';
        this.placeholder = '';
        this.floatLabel = 'never';
        // Mostrar o no el icono de buscar
        this.isSearch = false;
        // @Input() inputFormControl: FormControl = new FormControl('');
        this.isFocused = false;
        /**
         * Deprecated
         */
        this.disabled = false;
        this.type = InputHelisaType.DEFAULT;
        /**
         * Deprecated
         */
        this.setValue = new EventEmitter();
        this.formControlMask = new FormControl('');
        this.realValue = '';
        this.inputFormReal = new FormControl('');
    }
    Object.defineProperty(InputHelisaComponent.prototype, "inputFormControl", {
        set: /**
         * @param {?} formControl
         * @return {?}
         */
        function (formControl) {
            var _this = this;
            this.inputFormReal = formControl;
            this.inputFormReal.valueChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.statusChange(_this.inputFormReal.status);
                if (_this.getMaskedValue(data) !== _this.formControlMask.value) {
                    _this.change(data);
                }
            }));
            this.formControlMask.setValidators(this.inputFormReal.validator);
            this.change(this.inputFormReal.value);
            // disable control
            if (formControl.disabled) {
                this.formControlMask.disable({ onlySelf: true });
            }
            this.inputFormReal.statusChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.statusChange(data);
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    InputHelisaComponent.prototype.statusChange = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data === 'INVALID') {
            this.formControlMask.setErrors({ key: 'Error de validación.' });
        }
        else {
            this.formControlMask.setErrors(null);
        }
    };
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
        this.setValue.emit(this.realValue);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputHelisaComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event != null) {
            event = event + '';
        }
        /** @type {?} */
        var position = this.nameInput.nativeElement.selectionStart;
        /** @type {?} */
        var length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) !== this.formControlMask.value) {
            this.formControlMask.setValue(this.getMaskedValue(this.realValue));
            position += this.nameInput.nativeElement.value.length - length;
            this.nameInput.nativeElement.selectionStart = position;
            this.nameInput.nativeElement.selectionEnd = position;
        }
        this.inputFormReal.setValue(this.realValue);
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    InputHelisaComponent.prototype.getMaskedValue = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        /** @type {?} */
        var maskedStr = '';
        if (this.type === InputHelisaType.IDENTITY) {
            for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
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
        }
        return maskedStr;
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    InputHelisaComponent.prototype.getRealValue = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        var e_1, _a, e_2, _b, e_3, _c;
        if (str == null) {
            return str;
        }
        str = str + '';
        /** @type {?} */
        var realStr = '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        if (this.type === InputHelisaType.IDENTITY) {
            try {
                for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
                    var strItem = str_1_1.value;
                    if (strItem.match('[a-zA-Z0-9]')) {
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
        if (this.type === InputHelisaType.NUMERIC) {
            try {
                for (var str_2 = __values(str), str_2_1 = str_2.next(); !str_2_1.done; str_2_1 = str_2.next()) {
                    var strItem = str_2_1.value;
                    if (strItem.match('[0-9]')) {
                        realStr += strItem;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (str_2_1 && !str_2_1.done && (_b = str_2.return)) _b.call(str_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            /** @type {?} */
            var haveDot = false;
            try {
                for (var str_3 = __values(str), str_3_1 = str_3.next(); !str_3_1.done; str_3_1 = str_3.next()) {
                    var strItem = str_3_1.value;
                    if (strItem.match('[0-9]') || ((strItem === this.DECIMAL_SEPARATOR) && !haveDot)) {
                        realStr += strItem;
                    }
                    haveDot = haveDot || (strItem === this.DECIMAL_SEPARATOR);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (str_3_1 && !str_3_1.done && (_c = str_3.return)) _c.call(str_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return realStr;
    };
    InputHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-input',
                    template: "<mat-form-field [floatLabel]=\"floatLabel\">\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\" \r\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\r\n  >\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                    styles: ["/deep/ hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
                }] }
    ];
    /** @nocollapse */
    InputHelisaComponent.ctorParameters = function () { return []; };
    InputHelisaComponent.propDecorators = {
        placeholder: [{ type: Input }],
        floatLabel: [{ type: Input }],
        isSearch: [{ type: Input }],
        isFocused: [{ type: Input }],
        disabled: [{ type: Input }],
        type: [{ type: Input }],
        setValue: [{ type: Output }],
        nameInput: [{ type: ViewChild, args: ['inputText',] }],
        inputFormControl: [{ type: Input }]
    };
    return InputHelisaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColumnType = {
    NORMAL: 0, URL: 1,
};
ColumnType[ColumnType.NORMAL] = 'NORMAL';
ColumnType[ColumnType.URL] = 'URL';
/** @enum {number} */
var EventScope = {
    USER: 0, CODE_CALL: 1,
};
EventScope[EventScope.USER] = 'USER';
EventScope[EventScope.CODE_CALL] = 'CODE_CALL';
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
// @dynamic
/**
 * @template T
 */
var  
// @dynamic
/**
 * @template T
 */
ColumnConfigUtil = /** @class */ (function () {
    function ColumnConfigUtil() {
    }
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    ColumnConfigUtil.prototype.getValue = /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    function (obj, column) {
        return column.name.split('.').reduce((/**
         * @param {?} o
         * @param {?} field
         * @return {?}
         */
        function (o, field) { return o && o[field]; }), obj);
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
 */
TableHelisaConnectComponent = /** @class */ (function () {
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
        this.displayedColumnsWithTitle = [];
        this.displayedColumnsWithSubtitle = [];
        this.displayedColumnsWithFooter = [];
        this.type = TableHelisaType.LOCAL;
        this.scrollCount = 0;
        this.hasSubtitle = false;
        this.indexRowStartDrag = -1;
        this.lastIndexRowDrag = -1;
        this.dataBeforeDrag = null;
        this.dataSource$ = [];
        this.scrollX = 0;
        this.scrollY = 0;
        this.sort = new EventEmitter();
        this.total = new EventEmitter();
        this.search = new EventEmitter();
        /**
         * Deprecado, cambiar por electObject
         */
        this.select = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.selectObject = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.showTitle = true;
        this.isCellSelection = false;
        this.drop = new EventEmitter();
        this.isDragged = false;
        this.addRowButton = { showButton: false, text: '' };
        this.addRow = new EventEmitter();
        this.bookClicked = new EventEmitter();
        this.addBookButton = false;
        this.showToolTip = true;
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
    }
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tableService.nextPageReturn.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data.table || data.table) {
                _this.receivePage(data.obj);
            }
        }));
        this.tableService.totalReturn.subscribe((/**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            if (info) {
                _this.columnConfig.forEach((/**
                 * @param {?} column
                 * @param {?} idx
                 * @return {?}
                 */
                function (column, idx) {
                    if (column === info.obj.column) {
                        _this.totalData[idx] = _this.getGroupValue(column, { sum: info.obj.value, count: _this.count });
                    }
                }));
            }
        }));
        this.matSort.sortChange.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var column = _this.columnConfig.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.name === event.active; }));
            column.sortDirection = event.direction;
            _this.sort.emit({ column: column, columnConfigurations: _this.columnConfig, type: ChangeColumnConfigurationType.SORT });
        }));
        this.tableService.emitVisibleButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data !== undefined && data != null) {
                _this.addRowButton.showButton = data;
            }
        }));
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isCellSelection) {
            this.matTable.renderRows();
        }
    };
    Object.defineProperty(TableHelisaComponent.prototype, "isRemote", {
        set: /**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
            this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
            if (this.type === TableHelisaType.REMOTE) {
                this.goNextPage();
            }
            else {
                this.tableHelisaConnectComponent.page++;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHelisaComponent.prototype, "columnConfiguration", {
        set: /**
         * @param {?} columnConfiguration
         * @return {?}
         */
        function (columnConfiguration) {
            var _this = this;
            this.hasSubtitle = false;
            this.columnConfig = columnConfiguration;
            this.displayedColumns.splice(0, this.displayedColumns.length);
            if (columnConfiguration) {
                if (this.addBookButton) {
                    /** @type {?} */
                    var columnCount = columnConfiguration.length;
                    /** @type {?} */
                    var countSubtitle_1 = 0;
                    /** @type {?} */
                    var showBookButton_1 = false;
                    columnConfiguration.forEach((/**
                     * @param {?} column
                     * @return {?}
                     */
                    function (column) {
                        if (!!column.subtitle) {
                            countSubtitle_1 = countSubtitle_1 + 1;
                        }
                        if ((!showBookButton_1) && (column.name === 'bookButton')) {
                            showBookButton_1 = true;
                        }
                    }));
                    /** @type {?} */
                    var subtitleTemp = columnCount === countSubtitle_1;
                    if (!showBookButton_1) {
                        columnConfiguration.push({
                            name: 'bookButton',
                            title: '',
                            subtitle: subtitleTemp ? '' : undefined,
                            visible: true
                        });
                    }
                }
                columnConfiguration.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    if (column.visible) {
                        _this.displayedColumns.push(column.name);
                    }
                    if (!_this.hasSubtitle) {
                        _this.hasSubtitle = column.subtitle !== undefined;
                    }
                }));
                if (this.rawData) {
                    this.dataSource = this.rawData;
                }
            }
            this.displayedColumnsWithTitle.splice(0, this.displayedColumnsWithTitle.length);
            this.displayedColumnsWithSubtitle.splice(0, this.displayedColumnsWithSubtitle.length);
            this.displayedColumnsWithFooter.splice(0, this.displayedColumnsWithFooter.length);
            this.getColumnsWithTitle().forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return _this.displayedColumnsWithTitle.push(col); }));
            this.getHeaderSubtitle().forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return _this.displayedColumnsWithSubtitle.push(col); }));
            this.footerDisplayedColumns().forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return _this.displayedColumnsWithFooter.push(col); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHelisaComponent.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataSource$;
        },
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            this.dataSource$ = dataSource;
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
         */
        function (idRowSelected) {
            this.indexRowSelect = idRowSelected;
            if (this.rawData && this.rawData.length) {
                if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                    this.indexRowSelect = 0;
                }
                this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
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
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.totalType !== undefined && (_this.type === TableHelisaType.LOCAL || _this.tableHelisaConnectComponent.page <= 1)) {
                _this.totalData = new Array(_this.columnConfig.length);
                _this.showFooter = true;
                _this.total.emit({ column: column, columnConfigurations: _this.columnConfig, type: ChangeColumnConfigurationType.TOTAL });
            }
            _this.showSearch = _this.showSearch || column.searchable;
            haveGroup = haveGroup || column.groupable;
        }));
        if (haveGroup) {
            this.rawData = this.rawData.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                /** @type {?} */
                var result = 0;
                _this.columnConfig.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    if (result === 0) {
                        result = _this.compare(a, b);
                    }
                }));
                return result;
            }));
        }
        this.rawData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            if (haveGroup && (changeData.length === 0 || _this.compare((/** @type {?} */ (changeData[changeData.length - 1].data)), row) !== 0)) {
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
        this.data = new MatTableDataSource(changeData);
        if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
            if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0) {
                this.indexRowSelect = 0;
            }
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
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
        this.columnConfig.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            if (column.totalType !== undefined) {
                if (rowTotal[index] === undefined) {
                    rowTotal[index] = { sum: ((/** @type {?} */ (new ColumnConfigUtil().getValue(row, column)))), count: 1 };
                }
                else {
                    rowTotal[index].sum += ((/** @type {?} */ (new ColumnConfigUtil().getValue(row, column))));
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
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (ws === 0 && column.groupable) {
                if (((/** @type {?} */ (new ColumnConfigUtil().getValue(a, column)))) < ((/** @type {?} */ (new ColumnConfigUtil().getValue(b, column))))) {
                    ws = -1;
                }
                else if (((/** @type {?} */ (new ColumnConfigUtil().getValue(a, column)))) > ((/** @type {?} */ (new ColumnConfigUtil().getValue(b, column))))) {
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
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.groupable) {
                result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
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
        return this.displayedColumns.map((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return 'footer-' + name; }));
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
        return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
    };
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.getValueTooltip = /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    function (obj, column) {
        if (this.showToolTip) {
            return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
        }
        else {
            return null;
        }
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
     * @param {?} isUser
     * @return {?}
     */
    TableHelisaComponent.prototype.selectRow = /**
     * @param {?} row
     * @param {?} isUser
     * @return {?}
     */
    function (row, isUser) {
        this.selectedObject = (/** @type {?} */ (row.data));
        this.select.emit(this.selectedObject);
        this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
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
        var element = (/** @type {?} */ (event.target));
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    TableHelisaComponent.prototype.goNextPage = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
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
        this.tableHelisaConnectComponent.isLastPage = data.length === 0;
        this.tableHelisaConnectComponent.isUsed = false;
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.dblClickCell = /**
     * @return {?}
     */
    function () {
        this.selectCell.emit((/** @type {?} */ (this.selectedCells)));
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
        this.selectedCells = { column: column, row: element };
        this.selectCell.emit(this.selectedCells);
    };
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.isSelectedCell = /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        if (this.isCellSelection) {
            if (this.selectedCells != null) {
                if (this.selectedCells.column.name === column.name &&
                    ((/** @type {?} */ (this.selectedCells.row))).data === row.data) {
                    return true;
                }
            }
        }
        return false;
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
        var classToCell = new Array();
        if (this.configCellStyles) {
            /** @type {?} */
            var found = this.configCellStyles.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                return c.cellData === _this.getValue(row, column);
            }));
            if (found) {
                classToCell.push(found.classCell);
            }
        }
        if (column.columnStyle) {
            classToCell.push(column.columnStyle);
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
        var classToRow = new Array();
        if (row === this.selectedObject && !this.isCellSelection) {
            classToRow.push('');
        }
        if (this.configRowStylesFromColumn) {
            /** @type {?} */
            var found = this.configRowStylesFromColumn.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                return c.data === _this.getValue(row, c.column);
            }));
            if (found) {
                classToRow.push(found.classRow);
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
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            var rowIndex = this.getRowIndex(event.pageY);
            /** @type {?} */
            var array = this.dataBeforeDrag.data;
            /** @type {?} */
            var rawData = this.rawData;
            moveItemInArray(array, this.indexRowStartDrag, rowIndex);
            moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
            this.drop.emit({ value: (/** @type {?} */ (array[rowIndex].data)), order: rowIndex });
            this.rawData = rawData;
            this.data = new MatTableDataSource(array);
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.tableKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.isCellSelection) {
            /** @type {?} */
            var currentIndex_1 = this.data.data.findIndex((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return row.data === _this.selectedObject; }));
            /** @type {?} */
            var newSelection_1 = -10;
            if (event.key === 'ArrowDown') {
                this.scrollCount++;
                this.data.data.forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                function (row, index) {
                    if (newSelection_1 === -10 && index > currentIndex_1 && row.rowType === RowType.ROW) {
                        newSelection_1 = index;
                    }
                }));
            }
            if (event.key === 'ArrowUp') {
                this.scrollCount--;
                currentIndex_1 = this.data.data.length - currentIndex_1 - 1;
                this.data.data.reverse().forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                function (row, index) {
                    if (newSelection_1 === -10 && index > currentIndex_1 && row.rowType === RowType.ROW) {
                        newSelection_1 = index;
                    }
                }));
                this.data.data.reverse();
                if (newSelection_1 !== -10) {
                    newSelection_1 = this.data.data.length - newSelection_1 - 1;
                }
            }
            if (newSelection_1 !== -10) {
                this.selectRow(this.data.data[newSelection_1], true);
            }
            if (Math.abs(this.scrollCount) >= 2) {
                this.scrollCount = 0;
            }
            else {
                event.preventDefault();
            }
        }
    };
    /**
     * Emite el evento cuando se da click al boton AddRow
     */
    /**
     * Emite el evento cuando se da click al boton AddRow
     * @return {?}
     */
    TableHelisaComponent.prototype.onAddRow = /**
     * Emite el evento cuando se da click al boton AddRow
     * @return {?}
     */
    function () {
        this.addRow.emit();
    };
    /**
     * @param {?} selectedObject
     * @return {?}
     */
    TableHelisaComponent.prototype.onBookClicked = /**
     * @param {?} selectedObject
     * @return {?}
     */
    function (selectedObject) {
        this.bookClicked.emit(selectedObject);
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.getHeaderSubtitle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = this.columnConfig.map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            if (column.visible && column.subtitle !== undefined) {
                return 'subtitle' + index;
            }
            else {
                return null;
            }
        })).filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data != null; }));
        return x;
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.getColumnsWithTitle = /**
     * @return {?}
     */
    function () {
        return this.columnConfig.filter((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            return column.visible && column.title !== undefined;
        })).map((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return col.name; }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.dragger = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            var rowIndex = this.getRowIndex(event.pageY);
            if (rowIndex !== this.lastIndexRowDrag) {
                this.lastIndexRowDrag = rowIndex;
                // This can have a memory problem with big data
                /** @type {?} */
                var array = __spread(this.dataBeforeDrag.data);
                moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                this.data = new MatTableDataSource(array);
            }
            event.preventDefault();
            return true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.startDrag = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.indexRowStartDrag = this.getRowIndex(event.pageY);
        this.lastIndexRowDrag = this.indexRowStartDrag;
        this.dataBeforeDrag = this.data;
    };
    /**
     * @private
     * @param {?} pageY
     * @return {?}
     */
    TableHelisaComponent.prototype.getRowIndex = /**
     * @private
     * @param {?} pageY
     * @return {?}
     */
    function (pageY) {
        /** @type {?} */
        var offsetTop = 0;
        /** @type {?} */
        var container = this.containerTable.nativeElement;
        while ((container !== null) && (offsetTop === 0)) {
            offsetTop = container.offsetTop;
            container = container.parentElement;
        }
        /** @type {?} */
        var rowIndex = -1;
        /** @type {?} */
        var rows = this.matTableElement.nativeElement.children[1].children;
        for (var i = 0; i < rows.length; i++) {
            /** @type {?} */
            var row = ((/** @type {?} */ (rows[i])));
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
        get: /**
         * @return {?}
         */
        function () {
            return ColumnType;
        },
        enumerable: true,
        configurable: true
    });
    TableHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-table',
                    template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\r\n<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\r\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\r\n          <ng-container *ngIf=\"column.title != undefined\">\r\n            <div *ngIf=\"!column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\r\n                {{column.title}} </th>\r\n            </div>\r\n            <div *ngIf=\"column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\r\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \r\n                  <th mat-header-cell *matHeaderCellDef ></th>\r\n                  <td mat-cell *matCellDef=\"let element;\">\r\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\" (click)=\"onBookClicked(selectedObject)\">\r\n                      <i class=\"material-icons-outlined\">description</i>\r\n                    </button>\r\n                  </td>\r\n          </ng-container>\r\n\r\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\r\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\r\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\r\n          </td>\r\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n        </ng-container>\r\n\r\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\r\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\r\n            {{column.subtitle}}</th>\r\n        </ng-container>\r\n      </ng-container>\r\n \r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\r\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\r\n        </tr>\r\n      </ng-container>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n",
                    styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}tbody tr td button{line-height:inherit;height:auto}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table{position:relative}/deep/ hel-table>button{justify-content:center;align-items:flex-start;background:0 0;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}/deep/ hel-table>button:focus{outline:0}/deep/ hel-table>button:hover{opacity:1}/deep/ hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:'+';color:#fff;height:26px;width:20px}/deep/ hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}/deep/ hel-table .buttons-container{order:2}/deep/ hel-table .buttons-container.hasTitle{padding-top:26px}/deep/ hel-table .buttons-container.hasSubtitle{padding-top:26px}/deep/ hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}/deep/ hel-table .buttons-container>div{height:26px}/deep/ hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}/deep/ hel-table .buttons-container>div button>*{display:flex;height:100%}/deep/ hel-table .div-table-helisa{height:100%}/deep/ hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa{width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ table{table-layout:fixed}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td button{line-height:inherit;height:auto}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot{display:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
                }] }
    ];
    /** @nocollapse */
    TableHelisaComponent.ctorParameters = function () { return [
        { type: TableHelisaService }
    ]; };
    TableHelisaComponent.propDecorators = {
        matSort: [{ type: ViewChild, args: [MatSort,] }],
        matTable: [{ type: ViewChild, args: [MatTable,] }],
        matTableElement: [{ type: ViewChild, args: [MatTable, { read: ElementRef },] }],
        containerTable: [{ type: ViewChild, args: ['containerTable',] }],
        sort: [{ type: Output }],
        total: [{ type: Output }],
        search: [{ type: Output }],
        select: [{ type: Output }],
        selectCell: [{ type: Output }],
        selectObject: [{ type: Output }],
        nextPage: [{ type: Output }],
        showTitle: [{ type: Input }],
        isCellSelection: [{ type: Input }],
        count: [{ type: Input }],
        configCellStyles: [{ type: Input }],
        configRowStylesFromColumn: [{ type: Input }],
        selectedCells: [{ type: Input }],
        drop: [{ type: Output }],
        isDragged: [{ type: Input }],
        addRowButton: [{ type: Input }],
        addRow: [{ type: Output }],
        bookClicked: [{ type: Output }],
        addBookButton: [{ type: Input }],
        showToolTip: [{ type: Input }],
        hideDelay: [{ type: Input }],
        showDelay: [{ type: Input }],
        isRemote: [{ type: Input }],
        columnConfiguration: [{ type: Input }],
        dataSource: [{ type: Input }],
        selectedIndexRow: [{ type: Input }]
    };
    return TableHelisaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = moment_;
/** @enum {string} */
var TypeCalendarEnum = {
    NORMAL: 'norma',
    MONTH_YEAR: 'mounth-year',
};
var DateHelisaComponent = /** @class */ (function () {
    function DateHelisaComponent() {
        this.floatLabel = 'never';
        this.dateFormControl = new FormControl('');
        this.date = new Date();
        /**
         * Formato de fecha.
         * Los formatos validos son aquellos que maneja la libreria momentjs
         * https://momentjs.com/docs/#/parsing/string-format/
         */
        this.dateFormat = 'DD/MM/YYYY';
        this.errorMessage = 'La fecha no concuerda con el formato ';
        this.placeholder = this.dateFormat;
        /**
         * Si este valor es diferente a TypeCalendarEnum.NORMAL no
         * será tomado en cuenta
         */
        this.typeCalendar = TypeCalendarEnum.NORMAL;
        /**
         * Para evitar nuevos eventos miestras se realiza el parseo
         */
        this.isFromInputEvent = false;
        /**
         * Verificar si el formato es valido
         */
        this.invalidFormat = false;
    }
    /**
     * @return {?}
     */
    DateHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dateToVisualize = new FormControl('', this.dateFormControl.validator);
        this.formHandler();
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            this.dateFormat = 'MM/YYYY';
            this.placeholder = this.dateFormat;
        }
        /**
         * establecer valor por defecto de la fecha
         * @type {?}
         */
        var incommingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
        if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
            this.dateToVisualize.setValue(incommingDate);
        }
    };
    Object.defineProperty(DateHelisaComponent.prototype, "typeCalendarEnum", {
        get: /**
         * @return {?}
         */
        function () {
            return TypeCalendarEnum;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     */
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    DateHelisaComponent.prototype.getStartView = /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    function () {
        // multi-year
        if (this.typeCalendar === this.typeCalendarEnum.MONTH_YEAR) {
            return 'multi-year';
        }
        else {
            return 'month';
        }
    };
    /**
     * @private
     * @return {?}
     */
    DateHelisaComponent.prototype.formHandler = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.dateToVisualize.valueChanges
            .pipe(tap((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (date.length > _this.dateFormat.length) {
                _this.invalidFormat = true;
            }
            else {
                _this.invalidFormat = false;
            }
        })), filter((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return date.length === _this.dateFormat.length; })))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.invalidFormat = false;
            /** @type {?} */
            var isValid = moment(date, _this.dateFormat, true).isValid();
            /** @type {?} */
            var result = moment(date, _this.dateFormat).format('YYYY-MM-DD');
            if (!!result && (result === 'Invalid date' || !isValid)) {
                _this.invalidFormat = true;
                return;
            }
            if (!!result) {
                if (!_this.isFromInputEvent) {
                    _this.isFromInputEvent = true;
                    /** @type {?} */
                    var subString = result.split('-');
                    /** @type {?} */
                    var year = parseFloat(subString[0]);
                    /** @type {?} */
                    var month = parseFloat(subString[1]);
                    /** @type {?} */
                    var day = parseFloat(subString[2]);
                    _this.date.setFullYear(year);
                    _this.date.setDate(day);
                    _this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                    /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                    if (_this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
                        _this.date = moment(_this.date).endOf('month').toDate();
                    }
                    _this.dateToVisualize.setValue(moment(_this.date, 'YYYY-MM-DD').format(_this.dateFormat));
                    _this.dateFormControl.setValue(_this.date);
                    _this.isFromInputEvent = false;
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isFromInputEvent = false;
                    }), 1500);
                }
            }
        }));
        this.dateFormControl.valueChanges
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var incommingDate = moment(date, _this.dateFormat).format(_this.dateFormat);
            if (_this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                _this.dateToVisualize.setValue(incommingDate);
            }
        }));
    };
    /**
     * Evento que se dispara luego seleccionar un mes
     */
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    DateHelisaComponent.prototype.monthSelectedHandler = /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    function (chosenMonthDate, datepicker) {
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            /** @type {?} */
            var date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
        }
    };
    /**
     * Evento desde el control touch del calendar
     */
    /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    DateHelisaComponent.prototype.dateChange = /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    function (type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(event.value);
    };
    /**
     * @return {?}
     */
    DateHelisaComponent.prototype.getErrorMessage = /**
     * @return {?}
     */
    function () {
        return this.errorMessage + this.dateFormat;
    };
    DateHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-date-helisa',
                    template: "<div>\r\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\r\n    <input matInput \r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\r\n    \r\n    \r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar \r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput \r\n    [matDatepicker]=\"picker\" \r\n    hidden=\"hide\" \r\n    [value]=\"dateToVisualize.value\" \r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n  \r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n    \r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DateHelisaComponent.ctorParameters = function () { return []; };
    DateHelisaComponent.propDecorators = {
        floatLabel: [{ type: Input }],
        dateFormControl: [{ type: Input }],
        dateFormat: [{ type: Input }],
        errorMessage: [{ type: Input }],
        placeholder: [{ type: Input }],
        typeCalendar: [{ type: Input }]
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
        this.emitNodeSelected = new BehaviorSubject(1);
        // Observable string streams
        this.nodeSelected = this.emitNodeSelected.asObservable();
        // Observable string sources
        this.emitDataSource = new BehaviorSubject(undefined);
        // Observable string streams
        this.dataSourceObservable = this.emitDataSource.asObservable();
        // Expand node observable
        this.emitExpandAllNodes = new BehaviorSubject(null);
        this.nodeExpand = this.emitExpandAllNodes.asObservable();
        // Collapse node observable
        this.emitCollapseAllNodes = new BehaviorSubject(null);
        this.nodeCollapse = this.emitCollapseAllNodes.asObservable();
        this.emitRefreshTree = new Subject();
        this.refreshTreeObservable = this.emitRefreshTree.asObservable();
        this.emitRefreshTreeWithPagination = new Subject();
        this.refreshTreeWithPaginationObservable = this.emitRefreshTreeWithPagination.asObservable();
        this.emitExpandOneNode = new Subject();
        this.expandOneNodeObservable = this.emitExpandOneNode.asObservable();
        this.emitCollapseOneNode = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TreeHelisaService.ctorParameters = function () { return []; };
    /** @nocollapse */ TreeHelisaService.ngInjectableDef = defineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
    return TreeHelisaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
TreeHelisaConnect = /** @class */ (function () {
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
    function TreeHelisaComponent(treeHelisaService, router, elementRef) {
        this.treeHelisaService = treeHelisaService;
        this.router = router;
        this.elementRef = elementRef;
        this.selectedOptions = new Map();
        /**
         * Retorna el id del nodo removido
         */
        this.removed = new EventEmitter();
        /**
         * Retorna un nodo editado
         */
        this.edited = new EventEmitter();
        /**
         * Retorna un nodo sin id del nodo , pero si con el parent
         * para conocer a cual fue añadido
         */
        this.added = new EventEmitter();
        this.collapseParent = new EventEmitter();
        this.rangeScrolled = new EventEmitter();
        this.nodeSelected = new EventEmitter();
        this.dobleClick = new EventEmitter();
        this.keypressDelete = new EventEmitter();
        this.keypressInsert = new EventEmitter();
        this.checkedOptionNode = new EventEmitter();
        this.uncheckedOptionNode = new EventEmitter();
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.children; }));
        this.dataSource = new MatTreeNestedDataSource();
        this.isSingleClick = true;
        this.currentNode = null;
        // cargar datos pasados por el @Input
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
        var concat = '';
        if (node.parent) {
            result.push(this.getDescription(node.parent));
        }
        if (result.length === 1) {
            return node.name;
        }
        result = result.reverse();
        for (var i = 0; i < result.length; i++) {
            /** @type {?} */
            var element = result[i];
            concat = concat + element + (i === result.length - 1 ? '' : ',');
        }
        return concat;
    };
    /**
     * @return {?}
     */
    TreeHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // si se cargan datos por medio del servicio
        this.treeHelisaService.dataSourceObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!!res && !!res.children) {
                _this.receivePage(res.children);
            }
            else {
                _this.dataSource.data = [];
                _this.treeControl.dataNodes = [];
            }
        }));
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!!_this.data && !!_this.data.children) {
                _this.selectNode(_this.data, res);
            }
        }));
        this.treeHelisaService.refreshTreeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.refreshTree();
        }));
        this.treeHelisaService.refreshTreeWithPaginationObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
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
        this.treeHelisaService.nodeExpand.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res != null) {
                if (res) {
                    _this.tree.treeControl.expandAll();
                }
            }
        }));
        this.treeHelisaService.nodeCollapse.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res !== null) {
                if (res) {
                    _this.tree.treeControl.collapseAll();
                }
            }
        }));
        this.treeHelisaService.expandOneNodeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res !== undefined) {
                _this.treeControl.expand(res);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res !== undefined) {
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
        setTimeout((/**
         * @return {?}
         */
        function () {
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
        var element = (/** @type {?} */ (event.target));
        if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
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
            name: '',
            isSelected: false,
            parent: node,
            isEditable: true
        });
        if (node.children) {
            this.isDisabled = true;
            this.treeHelisaService.expandOneNode(node);
        }
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
        remove(node.parent.children, node);
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
        if (node.id == null && node.name === '') {
            remove(node.parent.children, node);
            this.refreshTree();
        }
        else if (node.id && node.id != null && node.name.trim() !== '') {
            this.edited.emit(node);
            node.isEditable = false;
        }
        else if (node.id == null && node.name.trim() !== '') {
            this.added.emit(node);
            node.isEditable = false;
        }
        this.isDisabled = false;
        this.refreshTree();
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
        this.isDisabled = false;
        // Si no tiene id por ser un nuevo item, lo elimina
        if (node.id == null) {
            remove(node.parent.children, node);
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
                        /** @type {?} */
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
    /**
     * Verifica si el nodo tiene hijos
     * @param {?} t
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.hasChild = /**
     * Verifica si el nodo tiene hijos
     * @param {?} t
     * @param {?} node
     * @return {?}
     */
    function (t, node) {
        return !!node.children && node.children.length > 0;
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
        var datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
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
        var datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
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
            this.data = { id: null, name: 'root', isSelected: false };
        }
        if (!this.data.children) {
            this.data.children = new Array();
            this.treeHelisaConnect = new TreeHelisaConnect();
        }
        this.data.children = this.data.children.concat(data);
        this.data.children.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.fillParent(node, _this.data);
        }));
        this.data.children = this.reorderByOrderIndex(this.data.children);
        this.dataSource.data = this.data.children;
        this.treeControl.dataNodes = this.data.children;
        this.treeHelisaConnect.isLastPage = data.length === 0;
        this.treeHelisaConnect.isUsed = false;
    };
    /**
     * Llenan el campo parent de todos los nodos hijos
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
            node.children.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.fillParent(item, node);
            }));
        }
    };
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
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
        if (!!!node) {
            return null;
        }
        if (node.id !== undefined && node.id === id) {
            node.isSelected = true;
            this.expandAllParents(node);
            return node;
        }
        else if (node.children != null) {
            /** @type {?} */
            var i = void 0;
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
            classNode.push('isSelected');
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
        if (node.isCheckedOption) {
            this.checkedOptionNode.emit(node.id);
        }
        else {
            this.uncheckedOptionNode.emit(node.id);
        }
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
        if (this.selectedOptions.has(node.id)) {
            this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
        }
        else {
            this.reloadSelectedOptions(node, false);
        }
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
        node.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option.isCheckedOption) {
                array.push(option.id);
            }
        }));
        /** @type {?} */
        var obj = { formControl: new FormControl(array), editMode: editMode };
        this.selectedOptions.set(node.id, obj);
    };
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param id  number | string
     * @returns Node o null si no hay un nodo con ese id
     */
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param {?} id  number | string
     * @return {?} Node o null si no hay un nodo con ese id
     */
    TreeHelisaComponent.prototype.getNodeById = /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param {?} id  number | string
     * @return {?} Node o null si no hay un nodo con ese id
     */
    function (id) {
        /** @type {?} */
        var queue = __spread(this.dataSource.data);
        while (queue.length > 0) {
            /** @type {?} */
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
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.reorderByOrderIndex = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (!!node && node.length > 0) {
            try {
                node = orderBy(node, (/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.orderIndex; }), ['asc']);
                node.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    if (!!element.children && element != null) {
                        element.children = _this.reorderByOrderIndex(element.children);
                    }
                }));
                return node;
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    TreeHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-tree',
                    template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li\r\n        class=\"mat-tree-node\"\r\n        [ngClass]=\"getClassNode(node)\"\r\n        (click)=\"onRedirect(node)\"\r\n        (dblclick)=\"onDblClick(node)\"\r\n        *ngIf=\"!node.isEditable\"\r\n        class=\"tree-node\"\r\n      >\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        {{ node.name }}\r\n      </li>\r\n      <li class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n              option.name\r\n            }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n        </hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\r\n            <ng-container *ngIf=\"node.data\">\r\n              <ul>\r\n                <ng-container *ngFor=\"let col of node.data\">\r\n                  <li *ngIf=\"col.visible\">\r\n                    {{ col.name }}\r\n                  </li>\r\n                </ng-container>\r\n              </ul>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\r\n          </p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n          <li class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </li>\r\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n                  option.name\r\n                }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n              <mat-icon>done</mat-icon>\r\n            </button>\r\n          </div>\r\n          <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n            </hel-input-with-button>\r\n          </li>\r\n        </div>\r\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n          <ng-container matTreeNodeOutlet></ng-container>\r\n        </ul>\r\n      </li>\r\n    </mat-nested-tree-node>\r\n  </mat-tree>\r\n</div>\r\n",
                    styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.isSelected{background:red}.tree-options{display:inline}.container-tree{overflow:scroll;height:350px;width:100%}.tree-node{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    TreeHelisaComponent.ctorParameters = function () { return [
        { type: TreeHelisaService },
        { type: Router },
        { type: ElementRef }
    ]; };
    TreeHelisaComponent.propDecorators = {
        tree: [{ type: ViewChild, args: ['tree',] }],
        data: [{ type: Input }],
        removed: [{ type: Output }],
        edited: [{ type: Output }],
        added: [{ type: Output }],
        collapseParent: [{ type: Output }],
        rangeScrolled: [{ type: Output }],
        nodeSelected: [{ type: Output }],
        dobleClick: [{ type: Output }],
        keypressDelete: [{ type: Output }],
        keypressInsert: [{ type: Output }],
        checkedOptionNode: [{ type: Output }],
        uncheckedOptionNode: [{ type: Output }],
        onKeyDown: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
    };
    return TreeHelisaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var AutocompleteHelisaService = /** @class */ (function () {
    function AutocompleteHelisaService() {
        this.emitChangeSource = new BehaviorSubject([]);
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
        { type: Injectable }
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
        this.myControl = new FormControl();
        this.options = new Array();
        this.selectedValueEmmiter = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.isRemote = false;
        this.isLoading = false;
        this.onScrollObservable = new Subject();
    }
    /**
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.onScrollObservable.asObservable()
            .pipe(debounceTime(500), throttleTime(500))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.nextPage.emit();
        }));
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.options = data;
                    _this.filteredOptions = of(_this.options);
                }));
            }));
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this._checkRegex(x); })), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._filter(value); })));
    };
    /**
     * @param {?=} option
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.displayFn = /**
     * @param {?=} option
     * @return {?}
     */
    function (option) {
        return option ? option.displayText : undefined;
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
    /** Elimina caracteres extraños */
    /**
     * Elimina caracteres extraños
     * @private
     * @param {?} value
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype._checkRegex = /**
     * Elimina caracteres extraños
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        return value;
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
        if (!(value)) {
            if (!this.isRemote) {
                /** @type {?} */
                var filterValue_1 = value.toLowerCase().split(' ');
                return this.options.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    /** @type {?} */
                    var ws = true;
                    filterValue_1.forEach((/**
                     * @param {?} text
                     * @return {?}
                     */
                    function (text) { return ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0; }));
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
        this.selectedValueEmmiter.emit(this.selectedValue.value);
    };
    /**
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.getNextPage = /**
     * @return {?}
     */
    function () {
        this.onScrollObservable.next();
    };
    AutocompleteHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-autocomplete',
                    template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\r\n      {{option.displayText}}\r\n    </mat-option>    \r\n  </mat-autocomplete>\r\n</mat-form-field>",
                    providers: [AutocompleteHelisaService],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AutocompleteHelisaComponent.ctorParameters = function () { return [
        { type: AutocompleteHelisaService }
    ]; };
    AutocompleteHelisaComponent.propDecorators = {
        myControl: [{ type: Input }],
        options: [{ type: Input }],
        selectedValueEmmiter: [{ type: Output }],
        nextPage: [{ type: Output }],
        isRemote: [{ type: Input }]
    };
    return AutocompleteHelisaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OptionsScrollDirective = /** @class */ (function () {
    function OptionsScrollDirective(autoComplete) {
        var _this = this;
        this.autoComplete = autoComplete;
        /**
         * This value would different depends of styles
         */
        this.thresholdPercent = .9;
        this.optionsScroll = new EventEmitter();
        this.destroy = new Subject();
        this.lastScrollTop = 0;
        this.autoComplete.opened.pipe(tap((/**
         * @return {?}
         */
        function () {
            // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
            // Note: The panel will be available on next tick
            // Note: The panel wil NOT open if there are no options to display
            setTimeout((/**
             * @return {?}
             */
            function () {
                // Note: remove listner just for safety, in case the close event is skipped.
                _this.removeScrollEventListener();
                if (!!_this.autoComplete &&
                    !!_this.autoComplete.panel &&
                    !!_this.autoComplete.panel.nativeElement) {
                    _this.autoComplete.panel.nativeElement
                        .addEventListener('scroll', _this.onScroll.bind(_this), false);
                }
            }));
        })), takeUntil(this.destroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        function () { return _this.removeScrollEventListener(); })), takeUntil(this.destroy)).subscribe();
    }
    /**
     * @private
     * @return {?}
     */
    OptionsScrollDirective.prototype.removeScrollEventListener = /**
     * @private
     * @return {?}
     */
    function () {
        if (!!this.autoComplete &&
            !!this.autoComplete.panel &&
            !!this.autoComplete.panel.nativeElement) {
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
        }
    };
    /**
     * @return {?}
     */
    OptionsScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy.next();
        this.destroy.complete();
        this.removeScrollEventListener();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OptionsScrollDirective.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Credits: how to know if it's down or up scroll "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        /** @type {?} */
        var st = ((/** @type {?} */ (event.target))).pageYOffset || ((/** @type {?} */ (event.target))).scrollTop;
        if (st > this.lastScrollTop) {
            // downscroll code
            if (this.thresholdPercent === undefined) {
                this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
            }
            else {
                /** @type {?} */
                var threshold = this.thresholdPercent * 100 * ((/** @type {?} */ (event.target))).scrollHeight / 100;
                /** @type {?} */
                var current = ((/** @type {?} */ (event.target))).scrollTop + ((/** @type {?} */ (event.target))).clientHeight;
                // console.log(`scroll ${current}, threshold: ${threshold}`)
                if (current > threshold) {
                    // console.log('load next page');
                    this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
                }
            }
        }
        this.lastScrollTop = st <= 0 ? 0 : st;
    };
    OptionsScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mat-autocomplete[optionsScroll]'
                },] }
    ];
    /** @nocollapse */
    OptionsScrollDirective.ctorParameters = function () { return [
        { type: MatAutocomplete }
    ]; };
    OptionsScrollDirective.propDecorators = {
        thresholdPercent: [{ type: Input }],
        optionsScroll: [{ type: Output }]
    };
    return OptionsScrollDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    HelTooltipDirective.prototype.mouseover = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentContent = this.elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    HelTooltipDirective.prototype.isEllipsisActive = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return (e.offsetWidth < e.scrollWidth);
    };
    HelTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[helTooltip]',
                    providers: [MatTooltip]
                },] }
    ];
    /** @nocollapse */
    HelTooltipDirective.ctorParameters = function () { return [
        { type: MatTooltip },
        { type: ElementRef }
    ]; };
    HelTooltipDirective.propDecorators = {
        message: [{ type: Input, args: ['helTooltip',] }],
        hideDelay: [{ type: Input }],
        showDelay: [{ type: Input }],
        mouseover: [{ type: HostListener, args: ['mouseover',] }]
    };
    return HelTooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExternalLinkDirective = /** @class */ (function () {
    function ExternalLinkDirective(platformId) {
        this.platformId = platformId;
        this.relAttr = '';
        this.targetAttr = '';
        this.hrefAttr = '';
    }
    /**
     * @return {?}
     */
    ExternalLinkDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.hrefAttr = this.href;
        if (this.isLinkExternal()) {
            this.relAttr = 'noopener';
            this.targetAttr = '_blank';
        }
    };
    /**
     * @private
     * @return {?}
     */
    ExternalLinkDirective.prototype.isLinkExternal = /**
     * @private
     * @return {?}
     */
    function () {
        return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
    };
    ExternalLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[href]',
                },] }
    ];
    /** @nocollapse */
    ExternalLinkDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ExternalLinkDirective.propDecorators = {
        relAttr: [{ type: HostBinding, args: ['attr.rel',] }],
        targetAttr: [{ type: HostBinding, args: ['attr.target',] }],
        hrefAttr: [{ type: HostBinding, args: ['attr.href',] }],
        href: [{ type: Input }]
    };
    return ExternalLinkDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExternalLinkPipe = /** @class */ (function () {
    function ExternalLinkPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    ExternalLinkPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return '//' + value;
    };
    ExternalLinkPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'externalLink'
                },] }
    ];
    return ExternalLinkPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HelisaLibModule = /** @class */ (function () {
    function HelisaLibModule() {
    }
    HelisaLibModule.decorators = [
        { type: NgModule, args: [{
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
                        ExternalLinkPipe
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatAutocompleteModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatToolbarModule,
                        MatExpansionModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatOptionModule,
                        MatListModule,
                        MatIconModule,
                        MatSnackBarModule,
                        MatCardModule,
                        LayoutModule,
                        MatTooltipModule,
                        MatButtonModule,
                        MatSidenavModule,
                        MatIconModule,
                        MatListModule,
                        MatGridListModule,
                        MatCardModule,
                        MatMenuModule,
                        MatInputModule,
                        MatSelectModule,
                        MatRadioModule,
                        MatProgressSpinnerModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatStepperModule,
                        MatChipsModule,
                        DragDropModule,
                        MatTreeModule
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
                        MatButtonModule,
                        MatCheckboxModule,
                        MatToolbarModule,
                        MatExpansionModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatOptionModule,
                        MatListModule,
                        MatIconModule,
                        MatSnackBarModule,
                        MatCardModule,
                        LayoutModule,
                        MatTooltipModule,
                        MatButtonModule,
                        MatSidenavModule,
                        MatIconModule,
                        MatListModule,
                        MatGridListModule,
                        MatCardModule,
                        MatMenuModule,
                        MatInputModule,
                        MatSelectModule,
                        MatRadioModule,
                        MatProgressSpinnerModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatStepperModule,
                        MatChipsModule,
                        DragDropModule,
                        MatTreeModule
                    ],
                    providers: [TableHelisaService, TreeHelisaService]
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

export { InputWithButtonComponent, ToastHelisaComponent, ToastHelisaService, ToastType, AlertHelisaType, AlertHelisaComponent, AlertHelisaService, DependencyTableHelisaComponent, DependencyTableHelisaService, InputHelisaType, InputHelisaComponent, TableHelisaComponent, ColumnType, EventScope, TotalType, ChangeColumnConfigurationType, TableHelisaType, ColumnConfigUtil, TableHelisaService, TypeCalendarEnum, DateHelisaComponent, TreeHelisaComponent, TreeHelisaConnect, TreeHelisaService, AutocompleteHelisaComponent, AutocompleteHelisaService, OptionsScrollDirective, HelTooltipDirective, HelisaLibModule, ExternalLinkDirective as ɵa, ExternalLinkPipe as ɵb };

//# sourceMappingURL=helisa-lib.js.map
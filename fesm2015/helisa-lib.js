import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import * as moment_ from 'moment';
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
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Inject, Injectable, Directive, HostBinding, PLATFORM_ID, Pipe, HostListener, ViewChildren, defineInjectable, inject, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputWithButtonComponent {
    constructor() {
        this.placeholder = '';
        this.inputFormControl = new FormControl('', Validators.required);
        this.requiredMessage = 'El campo es requerido';
        this.value = '';
        this.isFocused = false;
        this.done = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.value !== '') {
            this.inputFormControl.setValue(this.value);
        }
        this.nameField.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    onDone() {
        if (this.inputFormControl.valid) {
            this.done.emit(this.inputFormControl.value);
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancel.emit();
    }
}
InputWithButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input-with-button',
                template: "<div>\n  <mat-form-field>\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
InputWithButtonComponent.ctorParameters = () => [];
InputWithButtonComponent.propDecorators = {
    placeholder: [{ type: Input }],
    inputFormControl: [{ type: Input }],
    requiredMessage: [{ type: Input }],
    value: [{ type: Input }],
    isFocused: [{ type: Input }],
    nameField: [{ type: ViewChild, args: ['inputText',] }],
    done: [{ type: Output }],
    cancel: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class ToastHelisaComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ToastHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-toast',
                template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ToastHelisaComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastHelisaService {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    /**
     * @param {?} type
     * @param {?} message
     * @param {?=} subMessages
     * @return {?}
     */
    showToast(type, message, subMessages) {
        subMessages = subMessages ? subMessages : [];
        this.snackBar.openFromComponent(ToastHelisaComponent, {
            data: { message, type, subMessages },
            duration: this.durationInSeconds * 1000
        });
    }
}
ToastHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastHelisaService.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ ToastHelisaService.ngInjectableDef = defineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(inject(MatSnackBar$1)); }, token: ToastHelisaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ToastType = {
    DONE: 'done',
    ERROR: 'error',
    INFO: 'info',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AlertHelisaType = {
    ERROR: 'ERROR',
    CONFIRMATION: 'CONFIRMATION',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertHelisaComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
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
        (event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AlertHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >cancelar</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>aceptar</button>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertHelisaService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @return {?}
     */
    openDialog(type, title, content) {
        /** @type {?} */
        const dialogRef = this.dialog.open(AlertHelisaComponent, {
            width: '250px',
            data: { title, content, type }
        });
        return dialogRef.afterClosed();
    }
}
AlertHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertHelisaService.ngInjectableDef = defineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(inject(MatDialog$1)); }, token: AlertHelisaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DependencyTableHelisaService {
    constructor() {
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
     * @return {?}
     */
    getTables() {
        return this.tables;
    }
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param {?} configTable Objeto que contiene la configuración para la tabla.
     * @param {?=} withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     * @return {?}
     */
    updateDependency(configTable, withRemoveDependency = false) {
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
    }
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    setTotal(event) {
        this.emitTotal.next(event);
    }
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    addPage(event) {
        this.emitNextPage.next(event);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    selectIndexRow(config) {
        if (this.infoTables[config.order]) {
            this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
            this.tables.next(this.infoTables);
        }
    }
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    changeVisibilityButton(event) {
        this.emitVisibilityButton$.next(event);
    }
    /**
     * Esconde los botones de todas las tablas
     * @param {?} show indicar si se muestran o no todos los botones de las tablas
     * @return {?}
     */
    changeVisibilityAllButtons(show) {
        this.emitVisibilityAllButtons$.next(show);
    }
    /**
     * Para habilitar el manejo de selección de celda
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    changeisCellSelection(event) {
        this.emitIsCellSelection$.next(event);
    }
    /**
     * Para habilitar el cambio de columnas
     * @param {?} event para indicar el index de la tabla y en "data" columnas
     * @return {?}
     */
    changeColumnsByTable(event) {
        this.emitChangeColumns$.next(event);
    }
}
DependencyTableHelisaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DependencyTableHelisaService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class TableHelisaService {
    constructor() {
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
    setTotal(total, table) {
        this.emitChangeSource.next({ obj: total, table });
    }
    /**
     * @param {?} page
     * @param {?=} table
     * @return {?}
     */
    addPage(page, table) {
        this.emitNextPage.next({ obj: page, table });
    }
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param {?} change indicar si se muestra o no el boton de add row de la tabla
     * @return {?}
     */
    changeVisibilityButton(change) {
        this.emitVisibleButton$.next(change);
    }
}
TableHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ TableHelisaService.ngInjectableDef = defineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DependencyTableHelisaComponent {
    /**
     * @param {?} dependencyTableHelisaService
     * @param {?} tableService
     */
    constructor(dependencyTableHelisaService, tableService) {
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
    ngOnInit() {
        this.getTables();
        this.dependencyTableHelisaService.emitNextPage.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.tableService.addPage(event.data, this.viewTables.toArray()[event.index]);
        }));
        this.dependencyTableHelisaService.emitTotal.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.tableService.setTotal(event.data, this.viewTables[event.index]);
        }));
        // Observable para mostrar o esconder el boton de una tabla
        this.dependencyTableHelisaService.emitVisibilityButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!!data && data.index !== undefined) {
                /** @type {?} */
                const table = this.tables[data.index];
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
        (data) => {
            if (data !== undefined && data != null) {
                this.tables.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
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
        (data) => {
            if (!!data && data.index !== undefined) {
                /** @type {?} */
                const table = this.tables[data.index];
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
        (data) => {
            if (!!data && data.index !== undefined) {
                /** @type {?} */
                const table = this.tables[data.index];
                if (table) {
                    table.columns = data.data;
                }
            }
        }));
    }
    /**
     * retorna el servicio que gestiona el componente.
     * @return {?}
     */
    getService() {
        return this.dependencyTableHelisaService;
    }
    /**
     * Obtiene un observable con las tablas dependientes desde el servicio.
     * @return {?}
     */
    getTables() {
        this.dependencyTableHelisaService.getTables()
            .subscribe((/**
         * @param {?} tables
         * @return {?}
         */
        (tables) => {
            this.tables = tables;
        }));
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla seleccionada
     * @param {?} event
     * @return {?}
     */
    onSelectedDependency(index, event) {
        this.selectedObject = { index, data: event };
        this.selected.emit({ index, data: event.value });
        this.selectObject.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onNextPage(index, event) {
        this.nextPage.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onTotal(index, event) {
        this.total.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onSort(index, event) {
        this.sort.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onDrop(index, event) {
        this.drop.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param {?} index indica el indice de la tabla de la cual se dispara el evento
     * @return {?}
     */
    onAddRow(index) {
        this.addRow.emit(index);
    }
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    selectedCell(index, event) {
        if (this.tables[index].isCellSelection) {
            this.selectCell.emit({ index, data: event });
        }
    }
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    onBookClicked(index, event) {
        this.bookClicked.emit({ index, data: event });
    }
}
DependencyTableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\"\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\"\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\n    (bookClicked)=\"onBookClicked(i,$event)\"\n    [showToolTip]=\"showToolTip\"\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\">\n  </hel-table>\n</div>\n",
                providers: [DependencyTableHelisaService],
                styles: [""]
            }] }
];
/** @nocollapse */
DependencyTableHelisaComponent.ctorParameters = () => [
    { type: DependencyTableHelisaService },
    { type: TableHelisaService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const InputHelisaType = {
    DEFAULT: 0, IDENTITY: 1, NUMERIC: 2, DOUBLE: 3,
};
InputHelisaType[InputHelisaType.DEFAULT] = 'DEFAULT';
InputHelisaType[InputHelisaType.IDENTITY] = 'IDENTITY';
InputHelisaType[InputHelisaType.NUMERIC] = 'NUMERIC';
InputHelisaType[InputHelisaType.DOUBLE] = 'DOUBLE';
class InputHelisaComponent {
    constructor() {
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
    /**
     * @param {?} formControl
     * @return {?}
     */
    set inputFormControl(formControl) {
        this.inputFormReal = formControl;
        this.inputFormReal.valueChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.statusChange(this.inputFormReal.status);
            if (this.getMaskedValue(data) !== this.formControlMask.value) {
                this.change(data);
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
        (data) => {
            this.statusChange(data);
        }));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    statusChange(data) {
        if (data === 'INVALID') {
            this.formControlMask.setErrors({ key: 'Error de validación.' });
        }
        else {
            this.formControlMask.setErrors(null);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isFocused) {
            this.nameInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    search() {
        this.setValue.emit(this.realValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        if (event != null) {
            event = event + '';
        }
        /** @type {?} */
        let position = this.nameInput.nativeElement.selectionStart;
        /** @type {?} */
        const length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) !== this.formControlMask.value) {
            this.formControlMask.setValue(this.getMaskedValue(this.realValue));
            position += this.nameInput.nativeElement.value.length - length;
            this.nameInput.nativeElement.selectionStart = position;
            this.nameInput.nativeElement.selectionEnd = position;
        }
        this.inputFormReal.setValue(this.realValue);
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    getMaskedValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        /** @type {?} */
        let maskedStr = '';
        if (this.type === InputHelisaType.IDENTITY) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0) {
                for (let i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++) {
                    maskedStr += str[i];
                }
            }
            for (let i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        return maskedStr;
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    getRealValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        /** @type {?} */
        let realStr = '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        if (this.type === InputHelisaType.IDENTITY) {
            for (const strItem of str) {
                if (strItem.match('[a-zA-Z0-9]')) {
                    realStr += strItem;
                }
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (const strItem of str) {
                if (strItem.match('[0-9]')) {
                    realStr += strItem;
                }
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            /** @type {?} */
            let haveDot = false;
            for (const strItem of str) {
                if (strItem.match('[0-9]') || ((strItem === this.DECIMAL_SEPARATOR) && !haveDot)) {
                    realStr += strItem;
                }
                haveDot = haveDot || (strItem === this.DECIMAL_SEPARATOR);
            }
        }
        return realStr;
    }
}
InputHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input',
                template: "<mat-form-field [floatLabel]=\"floatLabel\">\n  <input #inputText matInput placeholder=\"{{placeholder}}\" \n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\n  >\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\n</mat-form-field>\n",
                styles: ["/deep/ hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            }] }
];
/** @nocollapse */
InputHelisaComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ColumnType = {
    NORMAL: 0, URL: 1,
};
ColumnType[ColumnType.NORMAL] = 'NORMAL';
ColumnType[ColumnType.URL] = 'URL';
/** @enum {number} */
const EventScope = {
    USER: 0, CODE_CALL: 1,
};
EventScope[EventScope.USER] = 'USER';
EventScope[EventScope.CODE_CALL] = 'CODE_CALL';
/** @enum {number} */
const TotalType = {
    SUM: 0, AVERAGE: 1, COUNT: 2,
};
TotalType[TotalType.SUM] = 'SUM';
TotalType[TotalType.AVERAGE] = 'AVERAGE';
TotalType[TotalType.COUNT] = 'COUNT';
/** @enum {number} */
const ChangeColumnConfigurationType = {
    SORT: 0, UNKNOWN: 1, TOTAL: 2,
};
ChangeColumnConfigurationType[ChangeColumnConfigurationType.SORT] = 'SORT';
ChangeColumnConfigurationType[ChangeColumnConfigurationType.UNKNOWN] = 'UNKNOWN';
ChangeColumnConfigurationType[ChangeColumnConfigurationType.TOTAL] = 'TOTAL';
/** @enum {number} */
const TableHelisaType = {
    REMOTE: 0, LOCAL: 1,
};
TableHelisaType[TableHelisaType.REMOTE] = 'REMOTE';
TableHelisaType[TableHelisaType.LOCAL] = 'LOCAL';
// @dynamic
/**
 * @template T
 */
class ColumnConfigUtil {
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    getValue(obj, column) {
        return column.name.split('.').reduce((/**
         * @param {?} o
         * @param {?} field
         * @return {?}
         */
        (o, field) => o && o[field]), obj);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class TableHelisaConnectComponent {
    constructor() {
        this.page = 0;
        this.isLastPage = false;
        this.isUsed = false;
    }
    /**
     * @param {?} columnConfig
     * @param {?} search
     * @return {?}
     */
    getBody(columnConfig, search) {
        return {};
    }
    /**
     * @return {?}
     */
    nextPage() {
        return this.page++;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const RowType = {
    GROUP_TITLE: 0, GROUP_FOOTER: 1, ROW: 2,
};
RowType[RowType.GROUP_TITLE] = 'GROUP_TITLE';
RowType[RowType.GROUP_FOOTER] = 'GROUP_FOOTER';
RowType[RowType.ROW] = 'ROW';
/**
 * @template T
 */
class TableHelisaComponent {
    /**
     * @param {?} tableService
     */
    constructor(tableService) {
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
    ngOnInit() {
        this.tableService.nextPageReturn.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!data.table || data.table) {
                this.receivePage(data.obj);
            }
        }));
        this.tableService.totalReturn.subscribe((/**
         * @param {?} info
         * @return {?}
         */
        (info) => {
            if (info) {
                this.columnConfig.forEach((/**
                 * @param {?} column
                 * @param {?} idx
                 * @return {?}
                 */
                (column, idx) => {
                    if (column === info.obj.column) {
                        this.totalData[idx] = this.getGroupValue(column, { sum: info.obj.value, count: this.count });
                    }
                }));
            }
        }));
        this.matSort.sortChange.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const column = this.columnConfig.find((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.name === event.active));
            column.sortDirection = event.direction;
            this.sort.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.SORT });
        }));
        this.tableService.emitVisibleButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data !== undefined && data != null) {
                this.addRowButton.showButton = data;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isCellSelection) {
            this.matTable.renderRows();
        }
    }
    /**
     * @param {?} w
     * @return {?}
     */
    set isRemote(w) {
        this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
        this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
        if (this.type === TableHelisaType.REMOTE) {
            this.goNextPage();
        }
        else {
            this.tableHelisaConnectComponent.page++;
        }
    }
    /**
     * @param {?} columnConfiguration
     * @return {?}
     */
    set columnConfiguration(columnConfiguration) {
        this.hasSubtitle = false;
        this.columnConfig = columnConfiguration;
        this.displayedColumns.splice(0, this.displayedColumns.length);
        if (columnConfiguration) {
            if (this.addBookButton) {
                /** @type {?} */
                const columnCount = columnConfiguration.length;
                /** @type {?} */
                let countSubtitle = 0;
                /** @type {?} */
                let showBookButton = false;
                columnConfiguration.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    if (!!column.subtitle) {
                        countSubtitle = countSubtitle + 1;
                    }
                    if ((!showBookButton) && (column.name === 'bookButton')) {
                        showBookButton = true;
                    }
                }));
                /** @type {?} */
                const subtitleTemp = columnCount === countSubtitle;
                if (!showBookButton) {
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
            (column) => {
                if (column.visible) {
                    this.displayedColumns.push(column.name);
                }
                if (!this.hasSubtitle) {
                    this.hasSubtitle = column.subtitle !== undefined;
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
        (col) => this.displayedColumnsWithTitle.push(col)));
        this.getHeaderSubtitle().forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => this.displayedColumnsWithSubtitle.push(col)));
        this.footerDisplayedColumns().forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => this.displayedColumnsWithFooter.push(col)));
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        this.dataSource$ = dataSource;
        this.rawData = dataSource;
        if (this.rawData) {
            this.prepareDataSource();
        }
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this.dataSource$;
    }
    /**
     * @param {?} idRowSelected
     * @return {?}
     */
    set selectedIndexRow(idRowSelected) {
        this.indexRowSelect = idRowSelected;
        if (this.rawData && this.rawData.length) {
            if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                this.indexRowSelect = 0;
            }
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
        }
    }
    /**
     * @private
     * @return {?}
     */
    prepareDataSource() {
        /** @type {?} */
        const changeData = Array();
        /** @type {?} */
        let haveGroup = false;
        /** @type {?} */
        let groupFooter;
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (column.totalType !== undefined && (this.type === TableHelisaType.LOCAL || this.tableHelisaConnectComponent.page <= 1)) {
                this.totalData = new Array(this.columnConfig.length);
                this.showFooter = true;
                this.total.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.TOTAL });
            }
            this.showSearch = this.showSearch || column.searchable;
            haveGroup = haveGroup || column.groupable;
        }));
        if (haveGroup) {
            this.rawData = this.rawData.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                /** @type {?} */
                let result = 0;
                this.columnConfig.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    if (result === 0) {
                        result = this.compare(a, b);
                    }
                }));
                return result;
            }));
        }
        this.rawData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            if (haveGroup && (changeData.length === 0 || this.compare((/** @type {?} */ (changeData[changeData.length - 1].data)), row) !== 0)) {
                if (groupFooter) {
                    changeData.push({ data: groupFooter, rowType: RowType.GROUP_FOOTER });
                }
                changeData.push({ data: row, rowType: RowType.GROUP_TITLE });
                groupFooter = new Array(this.columnConfig.length);
            }
            if (haveGroup) {
                this.addTotalGroup(groupFooter, row);
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
    }
    /**
     * @private
     * @param {?} rowTotal
     * @param {?} row
     * @return {?}
     */
    addTotalGroup(rowTotal, row) {
        this.columnConfig.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
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
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    compare(a, b) {
        /** @type {?} */
        let ws = 0;
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
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
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getGroupDescription(obj) {
        /** @type {?} */
        let result = '';
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (column.groupable) {
                result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
            }
        }));
        return result;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    isGroupTitle(index, item) {
        return item.rowType === RowType.GROUP_TITLE;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    isRow(index, item) {
        return item.rowType === RowType.ROW;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    isGroupFooter(index, item) {
        return item.rowType === RowType.GROUP_FOOTER;
    }
    /**
     * @return {?}
     */
    footerDisplayedColumns() {
        return this.displayedColumns.map((/**
         * @param {?} name
         * @return {?}
         */
        (name) => 'footer-' + name));
    }
    /**
     * @param {?} column
     * @param {?} data
     * @return {?}
     */
    getGroupValue(column, data) {
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
    }
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    getValue(obj, column) {
        return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
    }
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    getValueTooltip(obj, column) {
        if (this.showToolTip) {
            return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    searchText(text) {
        this.lastSearch = text;
        this.search.emit({ text, columnConfigurations: this.columnConfig });
    }
    /**
     * @param {?} row
     * @param {?} isUser
     * @param {?=} column
     * @return {?}
     */
    selectRow(row, isUser, column) {
        if ((column === undefined || column === null)) {
            this.selectedObject = (/** @type {?} */ (row.data));
            this.select.emit(this.selectedObject);
            this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
        }
        else if (!!column && column.name !== 'bookButton') {
            this.selectedObject = (/** @type {?} */ (row.data));
            this.select.emit(this.selectedObject);
            this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const element = (/** @type {?} */ (event.target));
        /** @type {?} */
        let isScrollY;
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
    }
    /**
     * @private
     * @return {?}
     */
    goNextPage() {
        if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
            this.tableHelisaConnectComponent.isUsed = true;
            this.nextPage.emit({
                page: this.tableHelisaConnectComponent.nextPage(),
                body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
            });
        }
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    receivePage(data) {
        if (!this.rawData) {
            this.rawData = new Array();
        }
        this.rawData = this.rawData.concat(data);
        this.dataSource = this.rawData;
        this.tableHelisaConnectComponent.isLastPage = data.length === 0;
        this.tableHelisaConnectComponent.isUsed = false;
    }
    /**
     * @return {?}
     */
    dblClickCell() {
        this.selectCell.emit((/** @type {?} */ (this.selectedCells)));
    }
    /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    selectedCell(element, column) {
        this.selectRow(element, true, column);
        this.selectedCells = { column, row: element };
        this.selectCell.emit(this.selectedCells);
    }
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    isSelectedCell(row, column) {
        if (this.isCellSelection) {
            if (this.selectedCells != null) {
                if (this.selectedCells.column.name === column.name &&
                    ((/** @type {?} */ (this.selectedCells.row))).data === row.data) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    getClassToCell(row, column) {
        /** @type {?} */
        const classToCell = new Array();
        if (this.configCellStyles) {
            /** @type {?} */
            const found = this.configCellStyles.find((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                return c.cellData === this.getValue(row, column);
            }));
            if (found) {
                classToCell.push(found.classCell);
            }
        }
        if (column.columnStyle) {
            classToCell.push(column.columnStyle);
        }
        return classToCell;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getClassToRow(row) {
        /** @type {?} */
        const classToRow = new Array();
        if (row === this.selectedObject && !this.isCellSelection) {
            classToRow.push('');
        }
        if (this.configRowStylesFromColumn) {
            /** @type {?} */
            const found = this.configRowStylesFromColumn.find((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                return c.data === this.getValue(row, c.column);
            }));
            if (found) {
                classToRow.push(found.classRow);
            }
        }
        return classToRow;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            const rowIndex = this.getRowIndex(event.pageY);
            /** @type {?} */
            const array = this.dataBeforeDrag.data;
            /** @type {?} */
            const rawData = this.rawData;
            moveItemInArray(array, this.indexRowStartDrag, rowIndex);
            moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
            this.drop.emit({ value: (/** @type {?} */ (array[rowIndex].data)), order: rowIndex });
            this.rawData = rawData;
            this.data = new MatTableDataSource(array);
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tableKeydown(event) {
        if (!this.isCellSelection) {
            /** @type {?} */
            let currentIndex = this.data.data.findIndex((/**
             * @param {?} row
             * @return {?}
             */
            (row) => row.data === this.selectedObject));
            /** @type {?} */
            let newSelection = -10;
            if (event.key === 'ArrowDown') {
                this.scrollCount++;
                this.data.data.forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                (row, index) => {
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
                }));
            }
            if (event.key === 'ArrowUp') {
                this.scrollCount--;
                currentIndex = this.data.data.length - currentIndex - 1;
                this.data.data.reverse().forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                (row, index) => {
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
                }));
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
        }
    }
    /**
     * Emite el evento cuando se da click al boton AddRow
     * @return {?}
     */
    onAddRow() {
        this.addRow.emit();
    }
    /**
     * @param {?} selectedObject
     * @return {?}
     */
    onBookClicked(selectedObject) {
        this.bookClicked.emit(selectedObject);
    }
    /**
     * @return {?}
     */
    getHeaderSubtitle() {
        /** @type {?} */
        const x = this.columnConfig.map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
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
        (data) => data != null));
        return x;
    }
    /**
     * @return {?}
     */
    getColumnsWithTitle() {
        return this.columnConfig.filter((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.visible && column.title !== undefined)).map((/**
         * @param {?} col
         * @return {?}
         */
        (col) => col.name));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragger(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            const rowIndex = this.getRowIndex(event.pageY);
            if (rowIndex !== this.lastIndexRowDrag) {
                this.lastIndexRowDrag = rowIndex;
                // This can have a memory problem with big data
                /** @type {?} */
                const array = [...this.dataBeforeDrag.data];
                moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                this.data = new MatTableDataSource(array);
            }
            event.preventDefault();
            return true;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startDrag(event) {
        this.indexRowStartDrag = this.getRowIndex(event.pageY);
        this.lastIndexRowDrag = this.indexRowStartDrag;
        this.dataBeforeDrag = this.data;
    }
    /**
     * @private
     * @param {?} pageY
     * @return {?}
     */
    getRowIndex(pageY) {
        /** @type {?} */
        let offsetTop = 0;
        /** @type {?} */
        let container = this.containerTable.nativeElement;
        while ((container !== null) && (offsetTop === 0)) {
            offsetTop = container.offsetTop;
            container = container.parentElement;
        }
        /** @type {?} */
        let rowIndex = -1;
        /** @type {?} */
        const rows = this.matTableElement.nativeElement.children[1].children;
        for (let i = 0; i < rows.length; i++) {
            /** @type {?} */
            const row = ((/** @type {?} */ (rows[i])));
            if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop) {
                rowIndex = i;
            }
        }
        if (rowIndex < 0) {
            rowIndex = 0;
        }
        return rowIndex;
    }
    /**
     * @return {?}
     */
    get columnType() {
        return ColumnType;
    }
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \n                  <th mat-header-cell *matHeaderCellDef ></th>\n                  <td mat-cell *matCellDef=\"let element;\" (click)=\"onBookClicked(selectedObject)\">\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                      <i class=\"material-icons-outlined\">description</i>\n                    </button>\n                  </td>\n          </ng-container>\n\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n \n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" \n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
                styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}tbody tr td button{line-height:inherit;height:auto}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table{position:relative}/deep/ hel-table>button{justify-content:center;align-items:flex-start;background:0 0;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}/deep/ hel-table>button:focus{outline:0}/deep/ hel-table>button:hover{opacity:1}/deep/ hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:'+';color:#fff;height:26px;width:20px}/deep/ hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}/deep/ hel-table .buttons-container{order:2}/deep/ hel-table .buttons-container.hasTitle{padding-top:26px}/deep/ hel-table .buttons-container.hasSubtitle{padding-top:26px}/deep/ hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}/deep/ hel-table .buttons-container>div{height:26px}/deep/ hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}/deep/ hel-table .buttons-container>div button>*{display:flex;height:100%}/deep/ hel-table .div-table-helisa{height:100%}/deep/ hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa{width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ table{table-layout:fixed}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td button{line-height:inherit;height:auto}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot{display:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
            }] }
];
/** @nocollapse */
TableHelisaComponent.ctorParameters = () => [
    { type: TableHelisaService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
/** @enum {string} */
const TypeCalendarEnum = {
    NORMAL: 'norma',
    MONTH_YEAR: 'mounth-year',
};
class DateHelisaComponent {
    constructor() {
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
    ngOnInit() {
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
        const incommingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
        if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
            this.dateToVisualize.setValue(incommingDate);
        }
    }
    /**
     * @return {?}
     */
    get typeCalendarEnum() {
        return TypeCalendarEnum;
    }
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    getStartView() {
        // multi-year
        if (this.typeCalendar === this.typeCalendarEnum.MONTH_YEAR) {
            return 'multi-year';
        }
        else {
            return 'month';
        }
    }
    /**
     * @private
     * @return {?}
     */
    formHandler() {
        this.dateToVisualize.valueChanges
            .pipe(tap((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            if (date.length > this.dateFormat.length) {
                this.invalidFormat = true;
            }
            else {
                this.invalidFormat = false;
            }
        })), filter((/**
         * @param {?} date
         * @return {?}
         */
        (date) => date.length === this.dateFormat.length)))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            this.invalidFormat = false;
            /** @type {?} */
            const isValid = moment(date, this.dateFormat, true).isValid();
            /** @type {?} */
            const result = moment(date, this.dateFormat).format('YYYY-MM-DD');
            if (!!result && (result === 'Invalid date' || !isValid)) {
                this.invalidFormat = true;
                return;
            }
            if (!!result) {
                if (!this.isFromInputEvent) {
                    this.isFromInputEvent = true;
                    /** @type {?} */
                    const subString = result.split('-');
                    /** @type {?} */
                    const year = parseFloat(subString[0]);
                    /** @type {?} */
                    const month = parseFloat(subString[1]);
                    /** @type {?} */
                    const day = parseFloat(subString[2]);
                    this.date.setFullYear(year);
                    this.date.setDate(day);
                    this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                    /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                    if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
                        this.date = moment(this.date).endOf('month').toDate();
                    }
                    this.dateToVisualize.setValue(moment(this.date, 'YYYY-MM-DD').format(this.dateFormat));
                    this.dateFormControl.setValue(this.date);
                    this.isFromInputEvent = false;
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.isFromInputEvent = false;
                    }), 1500);
                }
            }
        }));
        this.dateFormControl.valueChanges
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            /** @type {?} */
            const incommingDate = moment(date, this.dateFormat).format(this.dateFormat);
            if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incommingDate);
            }
        }));
    }
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    monthSelectedHandler(chosenMonthDate, datepicker) {
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            /** @type {?} */
            const date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
        }
    }
    /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    dateChange(type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(event.value);
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.errorMessage + this.dateFormat;
    }
}
DateHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-date-helisa',
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput \n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\n    \n    \n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar \n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput \n    [matDatepicker]=\"picker\" \n    hidden=\"hide\" \n    [value]=\"dateToVisualize.value\" \n    (dateChange)=\"dateChange('change', $event)\">\n    <!--  -->\n  \n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n    \n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DateHelisaComponent.ctorParameters = () => [];
DateHelisaComponent.propDecorators = {
    floatLabel: [{ type: Input }],
    dateFormControl: [{ type: Input }],
    dateFormat: [{ type: Input }],
    errorMessage: [{ type: Input }],
    placeholder: [{ type: Input }],
    typeCalendar: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeHelisaService {
    constructor() {
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
    /**
     * @param {?} idResidentialArea
     * @return {?}
     */
    changeNodeSelected(idResidentialArea) {
        this.emitNodeSelected.next(idResidentialArea);
    }
    // Service message commands
    /**
     * @param {?} data
     * @return {?}
     */
    changeDataSource(data) {
        this.emitDataSource.next(data);
    }
    /**
     * @param {?} expand
     * @return {?}
     */
    expandAllNodes(expand) {
        this.emitExpandAllNodes.next(expand);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    collapseAllNodes(collapse) {
        this.emitCollapseAllNodes.next(collapse);
    }
    /**
     * @return {?}
     */
    refreshTree() {
        this.emitRefreshTree.next();
    }
    /**
     * @return {?}
     */
    refreshTreeWithPagination() {
        this.emitRefreshTreeWithPagination.next();
    }
    /**
     * @param {?} node
     * @return {?}
     */
    expandOneNode(node) {
        this.emitExpandOneNode.next(node);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    collapseOneNode(node) {
        this.emitCollapseOneNode.next(node);
    }
}
TreeHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TreeHelisaService.ctorParameters = () => [];
/** @nocollapse */ TreeHelisaService.ngInjectableDef = defineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class TreeHelisaConnect {
    constructor() {
        this.page = 0;
        this.isLastPage = false;
        this.isUsed = false;
    }
    /**
     * @return {?}
     */
    nextPage() {
        return this.page = this.page + 1;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeHelisaComponent {
    //#endregion ====== Variables ========
    /**
     * @param {?} treeHelisaService
     * @param {?} router
     * @param {?} elementRef
     */
    constructor(treeHelisaService, router, elementRef) {
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
        (node) => node.children));
        this.dataSource = new MatTreeNestedDataSource();
        this.isSingleClick = true;
        this.currentNode = null;
        // cargar datos pasados por el @Input
        if (!!this.data) {
            /** @type {?} */
            const data = this.data;
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
     * \@example Nodo padre,nodo hijo,nodo nieto
     * @param {?} node Debe tener todos los parent llenos hacia arriba
     * @return {?}
     */
    static getDescription(node) {
        /** @type {?} */
        let result = [node.name];
        /** @type {?} */
        let concat = '';
        if (node.parent) {
            result.push(this.getDescription(node.parent));
        }
        if (result.length === 1) {
            return node.name;
        }
        result = result.reverse();
        for (let i = 0; i < result.length; i++) {
            /** @type {?} */
            const element = result[i];
            concat = concat + element + (i === result.length - 1 ? '' : ',');
        }
        return concat;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // si se cargan datos por medio del servicio
        this.treeHelisaService.dataSourceObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!!res && !!res.children) {
                this.selectedNode = res.id;
                this.receivePage(res.children);
            }
            else {
                this.dataSource.data = [];
                this.treeControl.dataNodes = [];
            }
        }));
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!!this.data && !!this.data.children) {
                this.selectNode(this.data, res);
            }
        }));
        this.treeHelisaService.refreshTreeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.refreshTree();
        }));
        this.treeHelisaService.refreshTreeWithPaginationObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.refreshTreeWithPagination();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.treeHelisaService.nodeExpand.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res != null) {
                if (res) {
                    this.tree.treeControl.expandAll();
                }
            }
        }));
        this.treeHelisaService.nodeCollapse.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res !== null) {
                if (res) {
                    this.tree.treeControl.collapseAll();
                }
            }
        }));
        this.treeHelisaService.expandOneNodeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res !== undefined) {
                this.treeControl.expand(res);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res !== undefined) {
                this.treeControl.collapse(res);
            }
        }));
    }
    //#region  ====== Events ===========
    /**
     * @param {?} node
     * @return {?}
     */
    onRedirect(node) {
        this.isSingleClick = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.isSingleClick) {
                this.selectNode(node, node.id);
                // if(!!node && !node.children){
                if (!!node) {
                    this.nodeSelected.emit(node.id);
                    this.currentNode = node;
                }
            }
        }), 350);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const element = (/** @type {?} */ (event.target));
        if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
            this.goNextPage();
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onEdit(node) {
        node.isEditable = true;
        this.isDisabled = true;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onAdd(node) {
        // si no tiene hijos instanciar el array
        if (!node.children) {
            node.children = [];
        }
        node.children.push({
            id: Math.random(),
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
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onDelete(node) {
        // Remueve el nodo utilizando la libreria de lodash
        remove(node.parent.children, node);
        this.refreshTree();
        this.removed.emit(node.id);
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    onEdited(node, value) {
        node.name = value;
        if (node.id == null && node.name === '') {
            remove(node.parent.children, node);
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
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    onCancel(node, value) {
        this.isDisabled = false;
        // Si no tiene id por ser un nuevo item, lo elimina
        if (node.id == null) {
            remove(node.parent.children, node);
            this.refreshTree();
        }
        node.isEditable = false;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onDblClick(node) {
        this.isSingleClick = false;
        this.dobleClick.emit(node.id);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
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
    }
    //#endregion ======= Events ========
    //#region  ======== Metodos =============
    /**
     * @private
     * @return {?}
     */
    moveUpIntoTree() {
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
                    const index = this.currentNode.parent.children.indexOf(this.currentNode);
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
    }
    /**
     * @private
     * @return {?}
     */
    moveDownIntoTree() {
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
                    const index = !!this.currentNode && !!this.currentNode.parent ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
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
                        const indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
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
    }
    /**
     * Verifica si el nodo tiene hijos
     * @param {?} t
     * @param {?} node
     * @return {?}
     */
    hasChild(t, node) {
        return !!node.children && node.children.length > 0;
    }
    /**
     * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
     * @private
     * @return {?}
     */
    refreshTree() {
        this.data = null;
        /** @type {?} */
        const datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
    }
    /**
     * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
     * @private
     * @return {?}
     */
    refreshTreeWithPagination() {
        /** @type {?} */
        const datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
    }
    /**
     * @private
     * @return {?}
     */
    goNextPage() {
        if (!this.treeHelisaConnect.isLastPage && !this.treeHelisaConnect.isUsed) {
            this.treeHelisaConnect.isUsed = true;
            this.rangeScrolled.emit({
                page: this.treeHelisaConnect.nextPage()
            });
        }
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    receivePage(data) {
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
        (node) => {
            this.fillParent(node, this.data);
        }));
        this.data.children = this.reorderByOrderIndex(this.data.children);
        this.dataSource.data = this.data.children;
        this.treeControl.dataNodes = this.data.children;
        this.treeHelisaConnect.isLastPage = data.length === 0;
        this.treeHelisaConnect.isUsed = false;
    }
    /**
     * Llenan el campo parent de todos los nodos hijos
     * @private
     * @param {?} node
     * @param {?} parent
     * @return {?}
     */
    fillParent(node, parent) {
        node.parent = parent;
        if (node.children && node.children.length > 0) {
            node.children.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.fillParent(item, node);
            }));
        }
    }
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
     * @private
     * @param {?} node
     * @param {?} id
     * @return {?}
     */
    selectNode(node, id) {
        this.upSelectNode(node);
        if (!!node) {
            if (!!this.selectedNode) {
                /** @type {?} */
                const nodeSelected = this.getNodeById(this.selectedNode);
                nodeSelected.isSelected = false;
            }
        }
        if (!!!node) {
            return null;
        }
        if (node.id !== undefined && node.id === id) {
            node.isSelected = true;
            this.expandAllParents(node);
            this.selectedNode = node.id;
            return node;
        }
        else if (node.children != null) {
            /** @type {?} */
            let i;
            /** @type {?} */
            let result = null;
            for (i = 0; result == null && i < node.children.length; i++) {
                result = this.selectNode(node.children[i], id);
            }
            return result;
        }
        return null;
    }
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    expandAllParents(node) {
        if (!!node && !!node.parent) {
            this.treeHelisaService.expandOneNode(node.parent);
            this.expandAllParents(node.parent);
        }
    }
    /**
     * Elimina el isSelected de todos los nodos
     * @private
     * @param {?} node
     * @return {?}
     */
    upSelectNode(node) {
        if (!!node && node.isSelected !== undefined) {
            node.isSelected = false;
            if (!!node.children) {
                for (const childrenNode of node.children) {
                    this.upSelectNode(childrenNode);
                }
            }
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getClassNode(node) {
        /** @type {?} */
        const classNode = [];
        if (node.isSelected) {
            classNode.push('isSelected');
        }
        if (node.classNode) {
            classNode.push(node.classNode);
        }
        return classNode;
    }
    /**
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    onEditMode(node, editMode) {
        this.getSelectedOptions(node).editMode = editMode;
    }
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    onSelectOption(event, node) {
        node.isCheckedOption = event.source.selected;
        if (node.isCheckedOption) {
            this.checkedOptionNode.emit(node.id);
        }
        else {
            this.uncheckedOptionNode.emit(node.id);
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getSelectedOptions(node) {
        if (this.selectedOptions.has(node.id)) {
            this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
        }
        else {
            this.reloadSelectedOptions(node, false);
        }
        return this.selectedOptions.get(node.id);
    }
    /**
     * @private
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    reloadSelectedOptions(node, editMode) {
        /** @type {?} */
        const array = new Array();
        node.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            if (option.isCheckedOption) {
                array.push(option.id);
            }
        }));
        /** @type {?} */
        const obj = { formControl: new FormControl(array), editMode };
        this.selectedOptions.set(node.id, obj);
    }
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param {?} id  number | string
     * @return {?} Node o null si no hay un nodo con ese id
     */
    getNodeById(id) {
        /** @type {?} */
        const queue = [...this.dataSource.data];
        while (queue.length > 0) {
            /** @type {?} */
            const curr = queue.shift();
            if (curr.id === id) {
                return curr;
            }
            else {
                if (!!curr.children) {
                    queue.push(...curr.children);
                }
            }
        }
        return null;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    reorderByOrderIndex(node) {
        if (!!node && node.length > 0) {
            try {
                node = orderBy(node, (/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => x.orderIndex), ['asc']);
                node.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
                    if (!!element.children && element != null) {
                        element.children = this.reorderByOrderIndex(element.children);
                    }
                }));
                return node;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
TreeHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-tree',
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      <li\n        class=\"mat-tree-node\"\n        [ngClass]=\"getClassNode(node)\"\n        (click)=\"onRedirect(node)\"\n        (dblclick)=\"onDblClick(node)\"\n        *ngIf=\"!node.isEditable\"\n        class=\"tree-node\"\n      >\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        <ng-container *ngIf=\"node.data\">\n          <ul>\n            <ng-container *ngFor=\"let col of node.data\">\n              <li *ngIf=\"col.visible\">\n                {{ col.name }}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n      </li>\n      <li class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled\" (click)=\"onEdit(node)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled\" (click)=\"onDelete(node)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </li>\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n              option.name\n            }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </div>\n\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n        <hel-input-with-button [isFocused]=\"true\" [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n        </hel-input-with-button>\n      </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\n      <li>\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\n            </mat-icon>\n          </button>\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\n            <ng-container *ngIf=\"node.data\">\n              <ul>\n                <ng-container *ngFor=\"let col of node.data\">\n                  <li *ngIf=\"col.visible\">\n                    {{ col.name }}\n                  </li>\n                </ng-container>\n              </ul>\n            </ng-container>\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n          </p>\n        </div>\n        <div class=\"tree-options\">\n          <li class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled\" (click)=\"onEdit(node)\">\n              <mat-icon>edit</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\n              <mat-icon>add</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled\" (click)=\"onDelete(node)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </li>\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n                  option.name\n                }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n              <mat-icon>done</mat-icon>\n            </button>\n          </div>\n          <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n            </hel-input-with-button>\n          </li>\n        </div>\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n          <ng-container matTreeNodeOutlet></ng-container>\n        </ul>\n      </li>\n    </mat-nested-tree-node>\n  </mat-tree>\n</div>\n",
                styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.isSelected{background:red}.tree-options{display:inline}.container-tree{overflow:scroll;height:350px;width:100%}.tree-node{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
            }] }
];
/** @nocollapse */
TreeHelisaComponent.ctorParameters = () => [
    { type: TreeHelisaService },
    { type: Router },
    { type: ElementRef }
];
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
class AutocompleteHelisaService {
    constructor() {
        this.emitChangeSource = new BehaviorSubject([]);
        this.dataSource$ = this.emitChangeSource.asObservable();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setDataSource(options) {
        this.emitChangeSource.next(options);
    }
}
AutocompleteHelisaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AutocompleteHelisaService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class AutocompleteHelisaComponent {
    /**
     * @param {?} autocompleteHelisaService
     */
    constructor(autocompleteHelisaService) {
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
    ngOnInit() {
        this.onScrollObservable.asObservable()
            .pipe(debounceTime(500), throttleTime(500))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.nextPage.emit();
        }));
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.options = data;
                    this.filteredOptions = of(this.options);
                }));
            }));
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => this._checkRegex(x))), map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this._filter(value))));
    }
    /**
     * @param {?=} option
     * @return {?}
     */
    displayFn(option) {
        return option ? option.displayText : undefined;
    }
    /**
     * @return {?}
     */
    getService() {
        return this.autocompleteHelisaService;
    }
    /**
     * Elimina caracteres extraños
     * @private
     * @param {?} value
     * @return {?}
     */
    _checkRegex(value) {
        value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        return value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        if (!(value)) {
            if (!this.isRemote) {
                /** @type {?} */
                const filterValue = value.toLowerCase().split(' ');
                return this.options.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => {
                    /** @type {?} */
                    let ws = true;
                    filterValue.forEach((/**
                     * @param {?} text
                     * @return {?}
                     */
                    (text) => ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0));
                    return ws;
                })).splice(0, 5);
            }
            else {
                return this.options;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelected(event) {
        this.selectedValue = event.option.value;
        this.selectedValueEmmiter.emit(this.selectedValue.value);
    }
    /**
     * @return {?}
     */
    getNextPage() {
        this.onScrollObservable.next();
    }
}
AutocompleteHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-autocomplete',
                template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
                providers: [AutocompleteHelisaService],
                styles: [""]
            }] }
];
/** @nocollapse */
AutocompleteHelisaComponent.ctorParameters = () => [
    { type: AutocompleteHelisaService }
];
AutocompleteHelisaComponent.propDecorators = {
    myControl: [{ type: Input }],
    options: [{ type: Input }],
    selectedValueEmmiter: [{ type: Output }],
    nextPage: [{ type: Output }],
    isRemote: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptionsScrollDirective {
    /**
     * @param {?} autoComplete
     */
    constructor(autoComplete) {
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
        () => {
            // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
            // Note: The panel will be available on next tick
            // Note: The panel wil NOT open if there are no options to display
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Note: remove listner just for safety, in case the close event is skipped.
                this.removeScrollEventListener();
                if (!!this.autoComplete &&
                    !!this.autoComplete.panel &&
                    !!this.autoComplete.panel.nativeElement) {
                    this.autoComplete.panel.nativeElement
                        .addEventListener('scroll', this.onScroll.bind(this), false);
                }
            }));
        })), takeUntil(this.destroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        () => this.removeScrollEventListener())), takeUntil(this.destroy)).subscribe();
    }
    /**
     * @private
     * @return {?}
     */
    removeScrollEventListener() {
        if (!!this.autoComplete &&
            !!this.autoComplete.panel &&
            !!this.autoComplete.panel.nativeElement) {
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
        this.removeScrollEventListener();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        // Credits: how to know if it's down or up scroll "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        /** @type {?} */
        const st = ((/** @type {?} */ (event.target))).pageYOffset || ((/** @type {?} */ (event.target))).scrollTop;
        if (st > this.lastScrollTop) {
            // downscroll code
            if (this.thresholdPercent === undefined) {
                this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
            }
            else {
                /** @type {?} */
                const threshold = this.thresholdPercent * 100 * ((/** @type {?} */ (event.target))).scrollHeight / 100;
                /** @type {?} */
                const current = ((/** @type {?} */ (event.target))).scrollTop + ((/** @type {?} */ (event.target))).clientHeight;
                // console.log(`scroll ${current}, threshold: ${threshold}`)
                if (current > threshold) {
                    // console.log('load next page');
                    this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
                }
            }
        }
        this.lastScrollTop = st <= 0 ? 0 : st;
    }
}
OptionsScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: 'mat-autocomplete[optionsScroll]'
            },] }
];
/** @nocollapse */
OptionsScrollDirective.ctorParameters = () => [
    { type: MatAutocomplete }
];
OptionsScrollDirective.propDecorators = {
    thresholdPercent: [{ type: Input }],
    optionsScroll: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelTooltipDirective {
    /**
     * @param {?} tooltip
     * @param {?} elemRef
     */
    constructor(tooltip, elemRef) {
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
    mouseover() {
        /** @type {?} */
        const currentContent = this.elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    isEllipsisActive(e) {
        return (e.offsetWidth < e.scrollWidth);
    }
}
HelTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[helTooltip]',
                providers: [MatTooltip]
            },] }
];
/** @nocollapse */
HelTooltipDirective.ctorParameters = () => [
    { type: MatTooltip },
    { type: ElementRef }
];
HelTooltipDirective.propDecorators = {
    message: [{ type: Input, args: ['helTooltip',] }],
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }],
    mouseover: [{ type: HostListener, args: ['mouseover',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExternalLinkDirective {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.relAttr = '';
        this.targetAttr = '';
        this.hrefAttr = '';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.hrefAttr = this.href;
        if (this.isLinkExternal()) {
            this.relAttr = 'noopener';
            this.targetAttr = '_blank';
        }
    }
    /**
     * @private
     * @return {?}
     */
    isLinkExternal() {
        return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
    }
}
ExternalLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[href]',
            },] }
];
/** @nocollapse */
ExternalLinkDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ExternalLinkDirective.propDecorators = {
    relAttr: [{ type: HostBinding, args: ['attr.rel',] }],
    targetAttr: [{ type: HostBinding, args: ['attr.target',] }],
    hrefAttr: [{ type: HostBinding, args: ['attr.href',] }],
    href: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExternalLinkPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        return '//' + value;
    }
}
ExternalLinkPipe.decorators = [
    { type: Pipe, args: [{
                name: 'externalLink'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelisaLibModule {
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, QueryList, ViewChildren, Input } from '@angular/core';
import { DependencyTableHelisaService } from './dependency-table-helisa.service';
import { TableHelisaService } from '../table-helisa/table-helisa.service';
/**
 * @record
 * @template T
 */
export function EventDependency() { }
if (false) {
    /** @type {?} */
    EventDependency.prototype.index;
    /** @type {?} */
    EventDependency.prototype.data;
}
/**
 * @template T
 */
export class DependencyTableHelisaComponent {
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
if (false) {
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.tables;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.viewTables;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.showToolTip;
    /**
     * deprecated, use selectObject
     * @type {?}
     */
    DependencyTableHelisaComponent.prototype.selected;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.selectObject;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.nextPage;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.total;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.sort;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.drop;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.addRow;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.selectCell;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.bookClicked;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.selectedObject;
    /**
     * Tiempo antes de ocultarla el mensaje del tooltip
     * @type {?}
     */
    DependencyTableHelisaComponent.prototype.hideDelay;
    /**
     * Tiempo antes de mostra el mensaje del tooltip
     * @type {?}
     */
    DependencyTableHelisaComponent.prototype.showDelay;
    /**
     * @type {?}
     * @private
     */
    DependencyTableHelisaComponent.prototype.dependencyTableHelisaService;
    /**
     * @type {?}
     * @private
     */
    DependencyTableHelisaComponent.prototype.tableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUcxRSxxQ0FHQzs7O0lBRkMsZ0NBQWM7O0lBQ2QsK0JBQVE7Ozs7O0FBV1YsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7SUFnQ3pDLFlBQW9CLDRCQUE2RCxFQUFVLFlBQW1DO1FBQTFHLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBaUM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUE5QjlILFdBQU0sR0FBMEIsRUFBRSxDQUFDO1FBRTFCLGdCQUFXLEdBQVksSUFBSSxDQUFDOzs7O1FBSzNCLGFBQVEsR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDcEYsaUJBQVksR0FBMEMsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDbkcsYUFBUSxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUM5RixVQUFLLEdBQTBDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBQ3ZGLFNBQUksR0FBMEMsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDdEYsU0FBSSxHQUEwQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUN0RixXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUQsZUFBVSxHQUEwQyxJQUFJLFlBQVks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QUFLOzs7O0lBM0JOLGdEQUFtQzs7SUFDbkMsb0RBQTJFOztJQUMzRSxxREFBcUM7Ozs7O0lBS3JDLGtEQUE4Rjs7SUFDOUYsc0RBQTZHOztJQUM3RyxrREFBd0c7O0lBQ3hHLCtDQUFpRzs7SUFDakcsOENBQWdHOztJQUNoRyw4Q0FBZ0c7O0lBQ2hHLGdEQUFvRTs7SUFDcEUsb0RBQTBHOztJQUMxRyxxREFBMkc7O0lBQzNHLHdEQUEyQzs7Ozs7SUFNM0MsbURBQWlDOzs7OztJQUtqQyxtREFBaUM7Ozs7O0lBR3JCLHNFQUFxRTs7Ozs7SUFBRSxzREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGUgfSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBSZXF1ZXN0VGFibGVIZWxpc2EsIFNlbGVjdE9iamVjdCwgVG90YWxUYWJsZUhlbGlzYSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRhYmxlSGVsaXNhU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudERlcGVuZGVuY3k8VD4ge1xuICBpbmRleDogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWRlcGVuZGVuY3ktdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxuICBwcm92aWRlcnM6IFtEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRhYmxlczogQXJyYXk8Q29uZmlnVGFibGU8VD4+ID0gW107XG4gIEBWaWV3Q2hpbGRyZW4oJ3ZpZXdUYWJsZXMnKSB2aWV3VGFibGVzOiBRdWVyeUxpc3Q8VGFibGVIZWxpc2FDb21wb25lbnQ8VD4+O1xuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIGRlcHJlY2F0ZWQsIHVzZSBzZWxlY3RPYmplY3RcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTxUPj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9ICB8IFQ+PigpO1xuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30+PigpO1xuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9Pj4oKTtcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdENlbGw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBzZWxlY3RlZE9iamVjdDogRXZlbnREZXBlbmRlbmN5PHt9PiA9IG51bGw7XG5cblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTxUPiwgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxUPikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZXRUYWJsZXMoKTtcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdE5leHRQYWdlLnN1YnNjcmliZShcbiAgICAgIChldmVudDogRXZlbnREZXBlbmRlbmN5PFRbXT4pID0+IHtcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UuYWRkUGFnZShldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXMudG9BcnJheSgpW2V2ZW50LmluZGV4XSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VG90YWwuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4pID0+IHtcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uuc2V0VG90YWwoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzW2V2ZW50LmluZGV4XSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtb3N0cmFyIG8gZXNjb25kZXIgZWwgYm90b24gZGUgdW5hIHRhYmxhXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRWaXNpYmlsaXR5QnV0dG9uLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcbiAgICAgICAgICBpZiAoISF0YWJsZSkge1xuICAgICAgICAgICAgdGFibGUuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtb3N0cmFyIG8gZXNjb25kZXIgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMuc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhYmxlcy5mb3JFYWNoKChlbGVtZW50OiBDb25maWdUYWJsZTxUPikgPT4ge1xuICAgICAgICAgICAgaWYgKCEhZWxlbWVudC5hZGRSb3dCdXR0b24pIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1hbmVqbyBkZSBzZWxlY2Npw7NuIGRlIGNlbGRhc1xuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0SXNDZWxsU2VsZWN0aW9uLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcbiAgICAgICAgICBpZiAodGFibGUpIHtcbiAgICAgICAgICAgIHRhYmxlLmlzQ2VsbFNlbGVjdGlvbiA9IGRhdGEuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1hbmVqbyBkZSBjb2x1bW5hc1xuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0Q2hhbmdlQ29sdW1ucy5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPikgPT4ge1xuICAgICAgICBpZiAoISFkYXRhICYmIGRhdGEuaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHRhYmxlOiBDb25maWdUYWJsZTxUPiA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xuICAgICAgICAgIGlmICh0YWJsZSkge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucyA9IGRhdGEuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldG9ybmEgZWwgc2VydmljaW8gcXVlIGdlc3Rpb25hIGVsIGNvbXBvbmVudGUuXG4gICAqL1xuICBnZXRTZXJ2aWNlKCk6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U7XG4gIH1cblxuICAvKipcbiAgICogT2J0aWVuZSB1biBvYnNlcnZhYmxlIGNvbiBsYXMgdGFibGFzIGRlcGVuZGllbnRlcyBkZXNkZSBlbCBzZXJ2aWNpby5cbiAgICovXG4gIGdldFRhYmxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZ2V0VGFibGVzKClcbiAgICAgIC5zdWJzY3JpYmUoKHRhYmxlczogQ29uZmlnVGFibGU8VD5bXSkgPT4ge1xuICAgICAgICB0aGlzLnRhYmxlcyA9IHRhYmxlcztcbiAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHNlbGVjY2lvbmFkYVxuICAgKiBAcGFyYW0gZGF0YSByZXRvcm5hIGxhIGZpbGEgcXVlIGZ1ZSBzZWxlY2Npb25hZGFcbiAgICovXG4gIG9uU2VsZWN0ZWREZXBlbmRlbmN5KGluZGV4OiBudW1iZXIsIGV2ZW50OiBTZWxlY3RPYmplY3Q8VD4pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0geyBpbmRleCwgZGF0YTogZXZlbnQgfTtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQudmFsdWUgfSk7XG4gICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxuICAgKi9cbiAgb25OZXh0UGFnZShpbmRleDogbnVtYmVyLCBldmVudDogUmVxdWVzdFRhYmxlSGVsaXNhPFQ+KTogdm9pZCB7XG4gICAgdGhpcy5uZXh0UGFnZS5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXG4gICAqL1xuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VD4pOiB2b2lkIHtcbiAgICB0aGlzLnRvdGFsLmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcbiAgICovXG4gIG9uU29ydChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5zb3J0LmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcbiAgICovXG4gIG9uRHJvcChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5kcm9wLmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIGFsIGN1YWwgc2UgbGUgZGViZSBhw7FhZGlyIHVuYSBudWV2YSBmaWxhXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIGRlIGxhIGN1YWwgc2UgZGlzcGFyYSBlbCBldmVudG9cbiAgICovXG4gIG9uQWRkUm93KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFJvdy5lbWl0KGluZGV4KTtcbiAgfVxuXG4gIHNlbGVjdGVkQ2VsbChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFibGVzW2luZGV4XS5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQm9va0NsaWNrZWQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUPik6IHZvaWQge1xuICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxufVxuIl19
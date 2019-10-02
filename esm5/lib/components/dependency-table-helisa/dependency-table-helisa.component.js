/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, QueryList, ViewChildren, Input } from '@angular/core';
import { DependencyTableHelisaService } from './dependency-table-helisa.service';
import { TableHelisaService } from '../table-helisa/table-helisa.service';
/**
 * @record
 */
export function EventDependency() { }
if (false) {
    /** @type {?} */
    EventDependency.prototype.index;
    /** @type {?} */
    EventDependency.prototype.data;
}
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
            if (!!data && data.index != undefined) {
                /** @type {?} */
                var table = _this.tables[data.index];
                if (!!table) {
                    table.addRowButton.showButton = data.data;
                }
            }
        }));
        //Observable para mostrar o esconder los botones de todas las tablas
        this.dependencyTableHelisaService.emitVisibilityAllButtons.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data != undefined && data != null) {
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
        //Observable para manejo de selección de celdas
        this.dependencyTableHelisaService.emitIsCellSelection.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!!data && data.index != undefined) {
                /** @type {?} */
                var table = _this.tables[data.index];
                if (table) {
                    table.isCellSelection = data.data;
                }
            }
        }));
        //Observable para manejo de columnas
        this.dependencyTableHelisaService.emitChangeColumns.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!!data && data.index != undefined) {
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
                    template: "<div>    \r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\r\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\"\r\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\r\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\r\n    (bookClicked)=\"onBookClicked(i,$event)\"\r\n    [showToolTip]=\"showToolTip\">\r\n  </hel-table>\r\n</div>\r\n",
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
        bookClicked: [{ type: Output }]
    };
    return DependencyTableHelisaComponent;
}());
export { DependencyTableHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRzFFLHFDQUdDOzs7SUFGQyxnQ0FBYzs7SUFDZCwrQkFBUzs7QUFLWDtJQTBCRSx3Q0FBb0IsNEJBQTBELEVBQVUsWUFBcUM7UUFBekcsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUF5QjtRQWxCN0gsV0FBTSxHQUF1QixFQUFFLENBQUM7UUFFdkIsZ0JBQVcsR0FBVyxJQUFJLENBQUM7Ozs7UUFLMUIsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM5RSxpQkFBWSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNsRixhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzlFLFVBQUssR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDM0UsU0FBSSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMxRSxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzFFLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDakQsZ0JBQVcsR0FB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QVksU0FBQyxZQUFZOzhCQUN6QixLQUFLOzJCQUtMLE1BQU07K0JBQ04sTUFBTTsyQkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOztJQXFKVCxxQ0FBQztDQUFBLEFBNUtELElBNEtDO1NBdEtZLDhCQUE4Qjs7O0lBRXpDLGdEQUFnQzs7SUFDaEMsb0RBQTZFOztJQUM3RSxxREFBb0M7Ozs7O0lBS3BDLGtEQUF3Rjs7SUFDeEYsc0RBQTRGOztJQUM1RixrREFBd0Y7O0lBQ3hGLCtDQUFxRjs7SUFDckYsOENBQW9GOztJQUNwRiw4Q0FBb0Y7O0lBQ3BGLGdEQUFvRTs7SUFDcEUsb0RBQTJEOztJQUMzRCxxREFBMkY7O0lBQzNGLHdEQUF1Qzs7Ozs7SUFFM0Isc0VBQWtFOzs7OztJQUFFLHNEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UsIENvbmZpZ1RhYmxlIH0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSwgU2VsZWN0T2JqZWN0fSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERlcGVuZGVuY3kge1xyXG4gIGluZGV4OiBudW1iZXIsXHJcbiAgZGF0YTogYW55XHJcbn1cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtZGVwZW5kZW5jeS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIHByb3ZpZGVyczogW0RlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0YWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPiA9IFtdO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ3ZpZXdUYWJsZXMnKSB2aWV3VGFibGVzOiBRdWVyeUxpc3Q8VGFibGVIZWxpc2FDb21wb25lbnQ8YW55Pj47XHJcbiAgQElucHV0KCkgc2hvd1Rvb2xUaXA6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlcHJlY2F0ZWQsIHVzZSBzZWxlY3RPYmplY3RcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBhZGRSb3c6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdENlbGwgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7ICBcclxuICBzZWxlY3RlZE9iamVjdDogRXZlbnREZXBlbmRlbmN5ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPGFueT4pIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VGFibGVzKCk7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdE5leHRQYWdlLnN1YnNjcmliZShcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLmFkZFBhZ2UoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzLnRvQXJyYXkoKVtldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VG90YWwuc3Vic2NyaWJlKFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uuc2V0VG90YWwoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzW2V2ZW50LmluZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBlbCBib3RvbiBkZSB1bmEgdGFibGFcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUJ1dHRvbi5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGE9PnsgICAgICAgIFxyXG4gICAgICAgIGlmKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZSA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xyXG4gICAgICAgICAgICBpZighIXRhYmxlKXtcclxuICAgICAgICAgICAgICB0YWJsZS5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIC8vT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zLnN1YnNjcmliZShcclxuICAgICAgZGF0YT0+e1xyXG4gICAgICAgIGlmKGRhdGEgIT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCl7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZighIWVsZW1lbnQuYWRkUm93QnV0dG9uKXtcclxuICAgICAgICAgICAgICBlbGVtZW50LmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgLy9PYnNlcnZhYmxlIHBhcmEgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFzXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdElzQ2VsbFNlbGVjdGlvbi5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGxldCB0YWJsZSA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xyXG4gICAgICAgICAgaWYgKHRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmlzQ2VsbFNlbGVjdGlvbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vT2JzZXJ2YWJsZSBwYXJhIG1hbmVqbyBkZSBjb2x1bW5hc1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRDaGFuZ2VDb2x1bW5zLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgbGV0IHRhYmxlID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XHJcbiAgICAgICAgICBpZiAodGFibGUpIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSBlbCBzZXJ2aWNpbyBxdWUgZ2VzdGlvbmEgZWwgY29tcG9uZW50ZS5cclxuICAgKi9cclxuICBnZXRTZXJ2aWNlKCk6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgdW4gb2JzZXJ2YWJsZSBjb24gbGFzIHRhYmxhcyBkZXBlbmRpZW50ZXMgZGVzZGUgZWwgc2VydmljaW8uXHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCkge1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmdldFRhYmxlcygpXHJcbiAgICAgIC5zdWJzY3JpYmUodGFibGVzID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlcyA9IHRhYmxlcztcclxuICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgc2VsZWNjaW9uYWRhXHJcbiAgICogQHBhcmFtIGRhdGEgcmV0b3JuYSBsYSBmaWxhIHF1ZSBmdWUgc2VsZWNjaW9uYWRhXHJcbiAgICovXHJcbiAgb25TZWxlY3RlZERlcGVuZGVuY3koaW5kZXg6IG51bWJlciwgZXZlbnQ6IFNlbGVjdE9iamVjdDxhbnk+KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0geyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH07XHJcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7aW5kZXg6IGluZGV4LCBkYXRhOiBldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25OZXh0UGFnZShpbmRleDogbnVtYmVyLCBldmVudDogUmVxdWVzdFRhYmxlSGVsaXNhKSB7XHJcbiAgICB0aGlzLm5leHRQYWdlLmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Ub3RhbChpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnRvdGFsLmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Tb3J0KGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuc29ydC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uRHJvcChpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmRyb3AuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0ZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgYWwgY3VhbCBzZSBsZSBkZWJlIGHDsWFkaXIgdW5hIG51ZXZhIGZpbGFcclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBkZSBsYSBjdWFsIHNlIGRpc3BhcmEgZWwgZXZlbnRvXHJcbiAgICovXHJcbiAgb25BZGRSb3coaW5kZXg6bnVtYmVyKXtcclxuICAgIHRoaXMuYWRkUm93LmVtaXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWRDZWxsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnRhYmxlc1tpbmRleF0uaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQm9va0NsaWNrZWQoaW5kZXgsZXZlbnQpe1xyXG4gICAgdGhpcy5ib29rQ2xpY2tlZC5lbWl0KHtpbmRleDppbmRleCAsZGF0YTpldmVudH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
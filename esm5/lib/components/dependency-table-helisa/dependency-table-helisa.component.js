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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUcxRSxxQ0FHQzs7O0lBRkMsZ0NBQWM7O0lBQ2QsK0JBQVE7Ozs7O0FBS1Y7SUFzQ0Usd0NBQW9CLDRCQUE2RCxFQUFVLFlBQW1DO1FBQTFHLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBaUM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUE5QjlILFdBQU0sR0FBMEIsRUFBRSxDQUFDO1FBRTFCLGdCQUFXLEdBQVksSUFBSSxDQUFDOzs7O1FBSzNCLGFBQVEsR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDcEYsaUJBQVksR0FBMEMsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDbkcsYUFBUSxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUM5RixVQUFLLEdBQTBDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBQ3ZGLFNBQUksR0FBMEMsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDdEYsU0FBSSxHQUEwQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUN0RixXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUQsZUFBVSxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUNoRyxnQkFB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QkFqQlEsNEJBQTRCO2dCQUU1QixrQkFBa0I7Ozs2QkFtQnhCLFlBQVksU0FBQyxZQUFZOzhCQUN6QixLQUFLOzJCQUtMLE1BQU07K0JBQ04sTUFBTTsyQkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOzRCQU9OLEtBQUs7NEJBS0wsS0FBSzs7SUFxSlIscUNBQUM7Q0FBQSxBQXhMRCxJQXdMQztTQWxMWSw4QkFBOEI7OztJQUV6QyxnREFBbUM7O0lBQ25DLG9EQUEyRTs7SUFDM0UscURBQXFDOzs7OztJQUtyQyxrREFBOEY7O0lBQzlGLHNEQUE2Rzs7SUFDN0csa0RBQXdHOztJQUN4RywrQ0FBaUc7O0lBQ2pHLDhDQUFnRzs7SUFDaEcsOENBQWdHOztJQUNoRyxnREFBb0U7O0lBQ3BFLG9EQUEwRzs7SUFDMUcscURBQTJHOztJQUMzRyx3REFBMkM7Ozs7O0lBTTNDLG1EQUFpQzs7Ozs7SUFLakMsbURBQWlDOzs7OztJQUdyQixzRUFBcUU7Ozs7O0lBQUUsc0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGUgfSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSwgU2VsZWN0T2JqZWN0LCBUb3RhbFRhYmxlSGVsaXNhIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREZXBlbmRlbmN5PFQ+IHtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGRhdGE6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtZGVwZW5kZW5jeS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIHByb3ZpZGVyczogW0RlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0YWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPFQ+PiA9IFtdO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ3ZpZXdUYWJsZXMnKSB2aWV3VGFibGVzOiBRdWVyeUxpc3Q8VGFibGVIZWxpc2FDb21wb25lbnQ8VD4+O1xyXG4gIEBJbnB1dCgpIHNob3dUb29sVGlwOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogZGVwcmVjYXRlZCwgdXNlIHNlbGVjdE9iamVjdFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTxUPj4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gIHwgVD4+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XHJcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0Q2VsbDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+KCk7XHJcbiAgQE91dHB1dCgpIGJvb2tDbGlja2VkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcclxuICBzZWxlY3RlZE9iamVjdDogRXZlbnREZXBlbmRlbmN5PHt9PiA9IG51bGw7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcclxuICAgKi9cclxuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4sIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0VGFibGVzKCk7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdE5leHRQYWdlLnN1YnNjcmliZShcclxuICAgICAgKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VFtdPikgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLmFkZFBhZ2UoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzLnRvQXJyYXkoKVtldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VG90YWwuc3Vic2NyaWJlKFxyXG4gICAgICAoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUb3RhbFRhYmxlSGVsaXNhPikgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldFRvdGFsKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlc1tldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtb3N0cmFyIG8gZXNjb25kZXIgZWwgYm90b24gZGUgdW5hIHRhYmxhXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlCdXR0b24uc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KSA9PiB7XHJcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHRhYmxlOiBDb25maWdUYWJsZTxUPiA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xyXG4gICAgICAgICAgaWYgKCEhdGFibGUpIHtcclxuICAgICAgICAgICAgdGFibGUuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtb3N0cmFyIG8gZXNjb25kZXIgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucy5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudGFibGVzLmZvckVhY2goKGVsZW1lbnQ6IENvbmZpZ1RhYmxlPFQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghIWVsZW1lbnQuYWRkUm93QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFzXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdElzQ2VsbFNlbGVjdGlvbi5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhOiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pID0+IHtcclxuICAgICAgICBpZiAoISFkYXRhICYmIGRhdGEuaW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XHJcbiAgICAgICAgICBpZiAodGFibGUpIHtcclxuICAgICAgICAgICAgdGFibGUuaXNDZWxsU2VsZWN0aW9uID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1hbmVqbyBkZSBjb2x1bW5hc1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRDaGFuZ2VDb2x1bW5zLnN1YnNjcmliZShcclxuICAgICAgKGRhdGE6IEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4pID0+IHtcclxuICAgICAgICBpZiAoISFkYXRhICYmIGRhdGEuaW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XHJcbiAgICAgICAgICBpZiAodGFibGUpIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSBlbCBzZXJ2aWNpbyBxdWUgZ2VzdGlvbmEgZWwgY29tcG9uZW50ZS5cclxuICAgKi9cclxuICBnZXRTZXJ2aWNlKCk6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgdW4gb2JzZXJ2YWJsZSBjb24gbGFzIHRhYmxhcyBkZXBlbmRpZW50ZXMgZGVzZGUgZWwgc2VydmljaW8uXHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmdldFRhYmxlcygpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHRhYmxlczogQ29uZmlnVGFibGU8VD5bXSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVzID0gdGFibGVzO1xyXG4gICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBzZWxlY2Npb25hZGFcclxuICAgKiBAcGFyYW0gZGF0YSByZXRvcm5hIGxhIGZpbGEgcXVlIGZ1ZSBzZWxlY2Npb25hZGFcclxuICAgKi9cclxuICBvblNlbGVjdGVkRGVwZW5kZW5jeShpbmRleDogbnVtYmVyLCBldmVudDogU2VsZWN0T2JqZWN0PFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0geyBpbmRleCwgZGF0YTogZXZlbnQgfTtcclxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudC52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2VsZWN0T2JqZWN0LmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvbk5leHRQYWdlKGluZGV4OiBudW1iZXIsIGV2ZW50OiBSZXF1ZXN0VGFibGVIZWxpc2E8VD4pOiB2b2lkIHtcclxuICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uVG90YWwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUPik6IHZvaWQge1xyXG4gICAgdGhpcy50b3RhbC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Tb3J0KGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc29ydC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Ecm9wKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VD4pOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIGFsIGN1YWwgc2UgbGUgZGViZSBhw7FhZGlyIHVuYSBudWV2YSBmaWxhXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgZGUgbGEgY3VhbCBzZSBkaXNwYXJhIGVsIGV2ZW50b1xyXG4gICAqL1xyXG4gIG9uQWRkUm93KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkUm93LmVtaXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWRDZWxsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VD4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYmxlc1tpbmRleF0uaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Cb29rQ2xpY2tlZChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
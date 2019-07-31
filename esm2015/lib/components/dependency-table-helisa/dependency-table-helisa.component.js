/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
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
export class DependencyTableHelisaComponent {
    /**
     * @param {?} dependencyTableHelisaService
     * @param {?} tableService
     */
    constructor(dependencyTableHelisaService, tableService) {
        this.dependencyTableHelisaService = dependencyTableHelisaService;
        this.tableService = tableService;
        this.tables = [];
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
        this.selectedObject = null;
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
        event => {
            this.tableService.addPage(event.data, this.viewTables.toArray()[event.index]);
        }));
        this.dependencyTableHelisaService.emitTotal.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.tableService.setTotal(event.data, this.viewTables[event.index]);
        }));
        // Observable para mostrar o esconder el boton de una tabla
        this.dependencyTableHelisaService.emitVisibilityButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (!!data && data.index != undefined) {
                /** @type {?} */
                let table = this.tables[data.index];
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
        data => {
            if (data != undefined && data != null) {
                this.tables.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
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
        data => {
            if (!!data && data.index != undefined) {
                /** @type {?} */
                let table = this.tables[data.index];
                if (table) {
                    table.isCellSelection = data.data;
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
        tables => {
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
        this.selectedObject = { index: index, data: event };
        this.selected.emit({ index: index, data: event.value });
        this.selectObject.emit({ index: index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onNextPage(index, event) {
        this.nextPage.emit({ index: index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onTotal(index, event) {
        this.total.emit({ index: index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onSort(index, event) {
        this.sort.emit({ index: index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param {?} index indica el indice de la tabla que genera el evento
     * @param {?} event evento generado desde la tabla
     * @return {?}
     */
    onDrop(index, event) {
        this.drop.emit({ index: index, data: event });
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
            this.selectCell.emit({ index: index, data: event });
        }
    }
}
DependencyTableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\r\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\"\r\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\">\r\n  </hel-table>\r\n</div>\r\n",
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
    selected: [{ type: Output }],
    selectObject: [{ type: Output }],
    nextPage: [{ type: Output }],
    total: [{ type: Output }],
    sort: [{ type: Output }],
    drop: [{ type: Output }],
    addRow: [{ type: Output }],
    selectCell: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.tables;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.viewTables;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLDRCQUE0QixFQUFlLE1BQU0sbUNBQW1DLENBQUM7QUFFOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFHMUUscUNBR0M7OztJQUZDLGdDQUFjOztJQUNkLCtCQUFTOztBQVdYLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBa0J6QyxZQUFvQiw0QkFBMEQsRUFBVSxZQUFxQztRQUF6RyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBaEI3SCxXQUFNLEdBQXVCLEVBQUUsQ0FBQzs7OztRQU10QixhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzlFLGlCQUFZLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2xGLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsVUFBSyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMzRSxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzFFLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDMUUsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMzRCxtQkFBYyxHQUFvQixJQUFJLENBQUM7SUFFMEYsQ0FBQzs7OztJQUVsSSxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUN0RCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsU0FBUzs7OztRQUNuRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQ0YsQ0FBQztRQUVGLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUM5RCxJQUFJLENBQUEsRUFBRTtZQUNKLElBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBQzs7b0JBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQztvQkFDVCxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUMzQzthQUNKO1FBQ0gsQ0FBQyxFQUNGLENBQUE7UUFFRCxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLFNBQVM7Ozs7UUFDbEUsSUFBSSxDQUFBLEVBQUU7WUFDSixJQUFHLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksRUFBQztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM1QixJQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDO3dCQUN4QixPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7cUJBQ3hDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQ0YsQ0FBQTtRQUVELCtDQUErQztRQUMvQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsbUJBQW1CLENBQUMsU0FBUzs7OztRQUM3RCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTs7b0JBQ2pDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLElBQUksS0FBSyxFQUFFO29CQUNULEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFLRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFLRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsRUFBRTthQUMxQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxFQUNBLENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBT0Qsb0JBQW9CLENBQUMsS0FBYSxFQUFFLEtBQXdCO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7O0lBT0QsVUFBVSxDQUFDLEtBQWEsRUFBRSxLQUF5QjtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBVTtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxLQUFhLEVBQUUsS0FBVTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxLQUFhLEVBQUUsS0FBVTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBTUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7O1lBMUpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywyd0JBQXVEO2dCQUV2RCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzs7YUFDMUM7Ozs7WUFqQlEsNEJBQTRCO1lBRTVCLGtCQUFrQjs7O3lCQW1CeEIsWUFBWSxTQUFDLFlBQVk7dUJBS3pCLE1BQU07MkJBQ04sTUFBTTt1QkFDTixNQUFNO29CQUNOLE1BQU07bUJBQ04sTUFBTTttQkFDTixNQUFNO3FCQUNOLE1BQU07eUJBQ04sTUFBTTs7OztJQWJQLGdEQUFnQzs7SUFDaEMsb0RBQTZFOzs7OztJQUs3RSxrREFBd0Y7O0lBQ3hGLHNEQUE0Rjs7SUFDNUYsa0RBQXdGOztJQUN4RiwrQ0FBcUY7O0lBQ3JGLDhDQUFvRjs7SUFDcEYsOENBQW9GOztJQUNwRixnREFBb0U7O0lBQ3BFLG9EQUEyRDs7SUFDM0Qsd0RBQXVDOzs7OztJQUUzQixzRUFBa0U7Ozs7O0lBQUUsc0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGUgfSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbHVtbkNvbmZpZywgUmVxdWVzdFRhYmxlSGVsaXNhLCBTZWxlY3RPYmplY3R9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50RGVwZW5kZW5jeSB7XHJcbiAgaW5kZXg6IG51bWJlcixcclxuICBkYXRhOiBhbnlcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kZXBlbmRlbmN5LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgcHJvdmlkZXJzOiBbRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHRhYmxlczogQXJyYXk8Q29uZmlnVGFibGU+ID0gW107XHJcbiAgQFZpZXdDaGlsZHJlbigndmlld1RhYmxlcycpIHZpZXdUYWJsZXM6IFF1ZXJ5TGlzdDxUYWJsZUhlbGlzYUNvbXBvbmVudDxhbnk+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogZGVwcmVjYXRlZCwgdXNlIHNlbGVjdE9iamVjdFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0Q2VsbCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIHNlbGVjdGVkT2JqZWN0OiBFdmVudERlcGVuZGVuY3kgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UsIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8YW55PikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRUYWJsZXMoKTtcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0TmV4dFBhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UuYWRkUGFnZShldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXMudG9BcnJheSgpW2V2ZW50LmluZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRUb3RhbC5zdWJzY3JpYmUoXHJcbiAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5zZXRUb3RhbChldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXNbZXZlbnQuaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIHVuYSB0YWJsYVxyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRWaXNpYmlsaXR5QnV0dG9uLnN1YnNjcmliZShcclxuICAgICAgZGF0YT0+eyAgICAgICAgXHJcbiAgICAgICAgaWYoISFkYXRhICYmIGRhdGEuaW5kZXggIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHRhYmxlID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XHJcbiAgICAgICAgICAgIGlmKCEhdGFibGUpe1xyXG4gICAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgLy9PYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGxvcyBib3RvbmVzIGRlIHRvZGFzIGxhcyB0YWJsYXNcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMuc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhPT57XHJcbiAgICAgICAgaWYoZGF0YSAhPSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKXtcclxuICAgICAgICAgIHRoaXMudGFibGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCEhZWxlbWVudC5hZGRSb3dCdXR0b24pe1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICAvL09ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgc2VsZWNjacOzbiBkZSBjZWxkYXNcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0SXNDZWxsU2VsZWN0aW9uLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgbGV0IHRhYmxlID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XHJcbiAgICAgICAgICBpZiAodGFibGUpIHtcclxuICAgICAgICAgICAgdGFibGUuaXNDZWxsU2VsZWN0aW9uID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIGVsIHNlcnZpY2lvIHF1ZSBnZXN0aW9uYSBlbCBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIGdldFNlcnZpY2UoKTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSB1biBvYnNlcnZhYmxlIGNvbiBsYXMgdGFibGFzIGRlcGVuZGllbnRlcyBkZXNkZSBlbCBzZXJ2aWNpby5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKSB7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZ2V0VGFibGVzKClcclxuICAgICAgLnN1YnNjcmliZSh0YWJsZXMgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVzID0gdGFibGVzO1xyXG4gICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBzZWxlY2Npb25hZGFcclxuICAgKiBAcGFyYW0gZGF0YSByZXRvcm5hIGxhIGZpbGEgcXVlIGZ1ZSBzZWxlY2Npb25hZGFcclxuICAgKi9cclxuICBvblNlbGVjdGVkRGVwZW5kZW5jeShpbmRleDogbnVtYmVyLCBldmVudDogU2VsZWN0T2JqZWN0PGFueT4pIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfTtcclxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHtpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvbk5leHRQYWdlKGluZGV4OiBudW1iZXIsIGV2ZW50OiBSZXF1ZXN0VGFibGVIZWxpc2EpIHtcclxuICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMudG90YWwuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvblNvcnQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5zb3J0LmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Ecm9wKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRlIGVsIGluZGljZSBkZSBsYSB0YWJsYSBhbCBjdWFsIHNlIGxlIGRlYmUgYcOxYWRpciB1bmEgbnVldmEgZmlsYVxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIGRlIGxhIGN1YWwgc2UgZGlzcGFyYSBlbCBldmVudG9cclxuICAgKi9cclxuICBvbkFkZFJvdyhpbmRleDpudW1iZXIpe1xyXG4gICAgdGhpcy5hZGRSb3cuZW1pdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudGFibGVzW2luZGV4XS5pc0NlbGxTZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
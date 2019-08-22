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
        this.bookClicked = new EventEmitter();
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
        //Observable para manejo de columnas
        this.dependencyTableHelisaService.emitChangeColumns.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (!!data && data.index != undefined) {
                /** @type {?} */
                let table = this.tables[data.index];
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
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    onBookClicked(index, event) {
        this.bookClicked.emit({ index: index, data: event });
    }
}
DependencyTableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\r\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\"\r\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\r\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\r\n    (bookClicked)=\"onBookClicked(i,$event)\">\r\n  </hel-table>\r\n</div>\r\n",
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
    selectCell: [{ type: Output }],
    bookClicked: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLDRCQUE0QixFQUFlLE1BQU0sbUNBQW1DLENBQUM7QUFFOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFHMUUscUNBR0M7OztJQUZDLGdDQUFjOztJQUNkLCtCQUFTOztBQVdYLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBbUJ6QyxZQUFvQiw0QkFBMEQsRUFBVSxZQUFxQztRQUF6RyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBakI3SCxXQUFNLEdBQXVCLEVBQUUsQ0FBQzs7OztRQU10QixhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzlFLGlCQUFZLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2xGLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsVUFBSyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMzRSxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzFFLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDMUUsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNqRCxnQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFB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Rjs7SUFDcEYsOENBQW9GOztJQUNwRixnREFBb0U7O0lBQ3BFLG9EQUEyRDs7SUFDM0QscURBQTJGOztJQUMzRix3REFBdUM7Ozs7O0lBRTNCLHNFQUFrRTs7Ozs7SUFBRSxzREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBDb25maWdUYWJsZSB9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7Q29sdW1uQ29uZmlnLCBSZXF1ZXN0VGFibGVIZWxpc2EsIFNlbGVjdE9iamVjdH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREZXBlbmRlbmN5IHtcclxuICBpbmRleDogbnVtYmVyLFxyXG4gIGRhdGE6IGFueVxyXG59XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRlcGVuZGVuY3ktdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXSxcclxuICBwcm92aWRlcnM6IFtEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdGFibGVzOiBBcnJheTxDb25maWdUYWJsZT4gPSBbXTtcclxuICBAVmlld0NoaWxkcmVuKCd2aWV3VGFibGVzJykgdmlld1RhYmxlczogUXVlcnlMaXN0PFRhYmxlSGVsaXNhQ29tcG9uZW50PGFueT4+O1xyXG5cclxuICAvKipcclxuICAgKiBkZXByZWNhdGVkLCB1c2Ugc2VsZWN0T2JqZWN0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RPYmplY3Q6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgYWRkUm93OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIGJvb2tDbGlja2VkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpOyAgXHJcbiAgc2VsZWN0ZWRPYmplY3Q6IEV2ZW50RGVwZW5kZW5jeSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxhbnk+KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFRhYmxlcygpO1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXROZXh0UGFnZS5zdWJzY3JpYmUoXHJcbiAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5hZGRQYWdlKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlcy50b0FycmF5KClbZXZlbnQuaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFRvdGFsLnN1YnNjcmliZShcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldFRvdGFsKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlc1tldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtb3N0cmFyIG8gZXNjb25kZXIgZWwgYm90b24gZGUgdW5hIHRhYmxhXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlCdXR0b24uc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhPT57ICAgICAgICBcclxuICAgICAgICBpZighIWRhdGEgJiYgZGF0YS5pbmRleCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBsZXQgdGFibGUgPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcclxuICAgICAgICAgICAgaWYoISF0YWJsZSl7XHJcbiAgICAgICAgICAgICAgdGFibGUuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICAvL09ic2VydmFibGUgcGFyYSBtb3N0cmFyIG8gZXNjb25kZXIgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucy5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGE9PntcclxuICAgICAgICBpZihkYXRhICE9IHVuZGVmaW5lZCAmJiBkYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgdGhpcy50YWJsZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoISFlbGVtZW50LmFkZFJvd0J1dHRvbil7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIC8vT2JzZXJ2YWJsZSBwYXJhIG1hbmVqbyBkZSBzZWxlY2Npw7NuIGRlIGNlbGRhc1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRJc0NlbGxTZWxlY3Rpb24uc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICBpZiAoISFkYXRhICYmIGRhdGEuaW5kZXggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBsZXQgdGFibGUgPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcclxuICAgICAgICAgIGlmICh0YWJsZSkge1xyXG4gICAgICAgICAgICB0YWJsZS5pc0NlbGxTZWxlY3Rpb24gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAvL09ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgY29sdW1uYXNcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0Q2hhbmdlQ29sdW1ucy5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGxldCB0YWJsZSA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xyXG4gICAgICAgICAgaWYgKHRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldG9ybmEgZWwgc2VydmljaW8gcXVlIGdlc3Rpb25hIGVsIGNvbXBvbmVudGUuXHJcbiAgICovXHJcbiAgZ2V0U2VydmljZSgpOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlIHtcclxuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIHVuIG9ic2VydmFibGUgY29uIGxhcyB0YWJsYXMgZGVwZW5kaWVudGVzIGRlc2RlIGVsIHNlcnZpY2lvLlxyXG4gICAqL1xyXG4gIGdldFRhYmxlcygpIHtcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5nZXRUYWJsZXMoKVxyXG4gICAgICAuc3Vic2NyaWJlKHRhYmxlcyA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZXMgPSB0YWJsZXM7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHNlbGVjY2lvbmFkYVxyXG4gICAqIEBwYXJhbSBkYXRhIHJldG9ybmEgbGEgZmlsYSBxdWUgZnVlIHNlbGVjY2lvbmFkYVxyXG4gICAqL1xyXG4gIG9uU2VsZWN0ZWREZXBlbmRlbmN5KGluZGV4OiBudW1iZXIsIGV2ZW50OiBTZWxlY3RPYmplY3Q8YW55Pikge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9O1xyXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudC52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2VsZWN0T2JqZWN0LmVtaXQoe2luZGV4OiBpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uTmV4dFBhZ2UoaW5kZXg6IG51bWJlciwgZXZlbnQ6IFJlcXVlc3RUYWJsZUhlbGlzYSkge1xyXG4gICAgdGhpcy5uZXh0UGFnZS5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uVG90YWwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy50b3RhbC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uU29ydChpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNvcnQuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvbkRyb3AoaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5kcm9wLmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIGFsIGN1YWwgc2UgbGUgZGViZSBhw7FhZGlyIHVuYSBudWV2YSBmaWxhXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgZGUgbGEgY3VhbCBzZSBkaXNwYXJhIGVsIGV2ZW50b1xyXG4gICAqL1xyXG4gIG9uQWRkUm93KGluZGV4Om51bWJlcil7XHJcbiAgICB0aGlzLmFkZFJvdy5lbWl0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkQ2VsbChpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XHJcbiAgICBpZiAodGhpcy50YWJsZXNbaW5kZXhdLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJvb2tDbGlja2VkKGluZGV4LGV2ZW50KXtcclxuICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdCh7aW5kZXg6aW5kZXggLGRhdGE6ZXZlbnR9KTtcclxuICB9XHJcbn1cclxuIl19
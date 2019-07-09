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
export class DependencyTableHelisaComponent {
    /**
     * @param {?} dependencyTableHelisaService
     * @param {?} tableService
     */
    constructor(dependencyTableHelisaService, tableService) {
        this.dependencyTableHelisaService = dependencyTableHelisaService;
        this.tableService = tableService;
        this.tables = [];
        this.selected = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.total = new EventEmitter();
        this.sort = new EventEmitter();
        this.isDragged = false;
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
        this.selected.emit({ index: index, data: event });
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
}
DependencyTableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-dependency-table',
                template: "<div>\r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (select)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\" (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"true\">\r\n  </hel-table>\r\n</div>\r\n",
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
    nextPage: [{ type: Output }],
    total: [{ type: Output }],
    sort: [{ type: Output }],
    isDragged: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.tables;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.viewTables;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.selected;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.nextPage;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.total;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.sort;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.isDragged;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRzFFLHFDQUdDOzs7SUFGQyxnQ0FBYzs7SUFDZCwrQkFBUzs7QUFTWCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQWF6QyxZQUFvQiw0QkFBMEQsRUFBVSxZQUFxQztRQUF6RyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBWDdILFdBQU0sR0FBdUIsRUFBRSxDQUFDO1FBSXRCLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM5RSxVQUFLLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzNFLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDM0UsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFtQixJQUFJLENBQUM7SUFFMkYsQ0FBQzs7OztJQUVsSSxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUN0RCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsU0FBUzs7OztRQUNuRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDO0lBQzNDLENBQUM7Ozs7O0lBS0QsU0FBUztRQUNQLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLEVBQUU7YUFDMUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQU9ELG9CQUFvQixDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU9ELFVBQVUsQ0FBQyxLQUFhLEVBQUUsS0FBeUI7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7SUFPRCxPQUFPLENBQUMsS0FBYSxFQUFFLEtBQVU7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsS0FBYSxFQUFFLEtBQVU7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZ2ZBQXVEO2dCQUV2RCxTQUFTLEVBQUUsQ0FBRSw0QkFBNEIsQ0FBRTs7YUFDNUM7Ozs7WUFmUSw0QkFBNEI7WUFFNUIsa0JBQWtCOzs7eUJBaUJ4QixZQUFZLFNBQUMsWUFBWTt1QkFHekIsTUFBTTt1QkFDTixNQUFNO29CQUNOLE1BQU07bUJBQ04sTUFBTTt3QkFDTixLQUFLOzs7O0lBUk4sZ0RBQWdDOztJQUNoQyxvREFBNkU7O0lBRzdFLGtEQUF3Rjs7SUFDeEYsa0RBQXdGOztJQUN4RiwrQ0FBcUY7O0lBQ3JGLDhDQUFvRjs7SUFDcEYsbURBQTJCOztJQUMzQix3REFBc0M7Ozs7O0lBRTFCLHNFQUFrRTs7Ozs7SUFBRSxzREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBDb25maWdUYWJsZSB9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgUmVxdWVzdFRhYmxlSGVsaXNhIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREZXBlbmRlbmN5e1xyXG4gIGluZGV4OiBudW1iZXIsXHJcbiAgZGF0YTogYW55XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRlcGVuZGVuY3ktdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXSxcclxuICBwcm92aWRlcnM6IFsgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0YWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPiA9IFtdO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ3ZpZXdUYWJsZXMnKSB2aWV3VGFibGVzOiBRdWVyeUxpc3Q8VGFibGVIZWxpc2FDb21wb25lbnQ8YW55Pj47XHJcbiAgXHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBJbnB1dCgpIGlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gIHNlbGVjdGVkT2JqZWN0OkV2ZW50RGVwZW5kZW5jeSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxhbnk+KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFRhYmxlcygpO1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXROZXh0UGFnZS5zdWJzY3JpYmUoXHJcbiAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5hZGRQYWdlKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlcy50b0FycmF5KClbZXZlbnQuaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRUb3RhbC5zdWJzY3JpYmUoXHJcbiAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5zZXRUb3RhbChldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXNbZXZlbnQuaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldG9ybmEgZWwgc2VydmljaW8gcXVlIGdlc3Rpb25hIGVsIGNvbXBvbmVudGUuXHJcbiAgICovXHJcbiAgZ2V0U2VydmljZSgpIDogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSB1biBvYnNlcnZhYmxlIGNvbiBsYXMgdGFibGFzIGRlcGVuZGllbnRlcyBkZXNkZSBlbCBzZXJ2aWNpby5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKXtcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5nZXRUYWJsZXMoKVxyXG4gICAgICAuc3Vic2NyaWJlKHRhYmxlcyA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZXMgPSB0YWJsZXM7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBzZWxlY2Npb25hZGFcclxuICAgKiBAcGFyYW0gZGF0YSByZXRvcm5hIGxhIGZpbGEgcXVlIGZ1ZSBzZWxlY2Npb25hZGFcclxuICAgKi9cclxuICBvblNlbGVjdGVkRGVwZW5kZW5jeShpbmRleDogbnVtYmVyLCBldmVudDogYW55KXtcclxuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB7aW5kZXg6aW5kZXgsZGF0YTpldmVudH07ICAgIFxyXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHtpbmRleDppbmRleCwgZGF0YTpldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25OZXh0UGFnZShpbmRleDogbnVtYmVyLCBldmVudDogUmVxdWVzdFRhYmxlSGVsaXNhKSB7XHJcbiAgICB0aGlzLm5leHRQYWdlLmVtaXQoe2luZGV4OmluZGV4LCBkYXRhOmV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpe1xyXG4gICAgdGhpcy50b3RhbC5lbWl0KHtpbmRleDppbmRleCwgZGF0YTpldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Tb3J0KGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpe1xyXG4gICAgdGhpcy5zb3J0LmVtaXQoe2luZGV4OmluZGV4LCBkYXRhOmV2ZW50fSk7XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuIl19
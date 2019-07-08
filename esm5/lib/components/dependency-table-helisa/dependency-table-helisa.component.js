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
        this.selected = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.total = new EventEmitter();
        this.sort = new EventEmitter();
        this.isDragged = false;
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
        { type: Component, args: [{
                    selector: 'hel-dependency-table',
                    template: "<div>\r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (select)=\"onSelectedDependency(i, $event)\"  (nextPage)=\"onNextPage(i, $event)\" (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"true\">\r\n  </hel-table>\r\n</div>\r\n",
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
        selected: [{ type: Output }],
        nextPage: [{ type: Output }],
        total: [{ type: Output }],
        sort: [{ type: Output }],
        isDragged: [{ type: Input }]
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
    DependencyTableHelisaComponent.prototype.selected;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.nextPage;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.total;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.sort;
    /** @type {?} */
    DependencyTableHelisaComponent.prototype.isDragged;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRzFFLHFDQUdDOzs7SUFGQyxnQ0FBYzs7SUFDZCwrQkFBUzs7QUFHWDtJQWtCRSx3Q0FBb0IsNEJBQTBELEVBQVUsWUFBcUM7UUFBekcsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUF5QjtRQVY3SCxXQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUl0QixhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzlFLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsVUFBSyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMzRSxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzNFLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFFc0csQ0FBQzs7OztJQUVsSSxpREFBUTs7O0lBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsNEJBQTRCLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFDdEQsVUFBQSxLQUFLO1lBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFDRixDQUFDO1FBRUYsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7O1FBQ25ELFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtREFBVTs7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGtEQUFTOzs7O0lBQVQ7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLEVBQUU7YUFDMUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCw2REFBb0I7Ozs7OztJQUFwQixVQUFxQixLQUFhLEVBQUUsS0FBVTtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxtREFBVTs7Ozs7O0lBQVYsVUFBVyxLQUFhLEVBQUUsS0FBeUI7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsZ0RBQU87Ozs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLEtBQVU7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsK0NBQU07Ozs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLEtBQVU7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMscWNBQXVEO29CQUV2RCxTQUFTLEVBQUUsQ0FBRSw0QkFBNEIsQ0FBRTs7aUJBQzVDOzs7O2dCQWZRLDRCQUE0QjtnQkFFNUIsa0JBQWtCOzs7NkJBaUJ4QixZQUFZLFNBQUMsWUFBWTsyQkFHekIsTUFBTTsyQkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTs0QkFDTixLQUFLOztJQTBFUixxQ0FBQztDQUFBLEFBMUZELElBMEZDO1NBcEZZLDhCQUE4Qjs7O0lBRXpDLGdEQUFnQzs7SUFDaEMsb0RBQTZFOztJQUc3RSxrREFBd0Y7O0lBQ3hGLGtEQUF3Rjs7SUFDeEYsK0NBQXFGOztJQUNyRiw4Q0FBb0Y7O0lBQ3BGLG1EQUEyQjs7Ozs7SUFFZixzRUFBa0U7Ozs7O0lBQUUsc0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGUgfSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50RGVwZW5kZW5jeXtcclxuICBpbmRleDogbnVtYmVyLFxyXG4gIGRhdGE6IGFueVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kZXBlbmRlbmN5LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgcHJvdmlkZXJzOiBbIERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdGFibGVzOiBBcnJheTxDb25maWdUYWJsZT4gPSBbXTtcclxuICBAVmlld0NoaWxkcmVuKCd2aWV3VGFibGVzJykgdmlld1RhYmxlczogUXVlcnlMaXN0PFRhYmxlSGVsaXNhQ29tcG9uZW50PGFueT4+O1xyXG4gIFxyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBASW5wdXQoKSBpc0RyYWdnZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPGFueT4pIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VGFibGVzKCk7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdE5leHRQYWdlLnN1YnNjcmliZShcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLmFkZFBhZ2UoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzLnRvQXJyYXkoKVtldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFRvdGFsLnN1YnNjcmliZShcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldFRvdGFsKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlc1tldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSBlbCBzZXJ2aWNpbyBxdWUgZ2VzdGlvbmEgZWwgY29tcG9uZW50ZS5cclxuICAgKi9cclxuICBnZXRTZXJ2aWNlKCkgOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlIHtcclxuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIHVuIG9ic2VydmFibGUgY29uIGxhcyB0YWJsYXMgZGVwZW5kaWVudGVzIGRlc2RlIGVsIHNlcnZpY2lvLlxyXG4gICAqL1xyXG4gIGdldFRhYmxlcygpe1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmdldFRhYmxlcygpXHJcbiAgICAgIC5zdWJzY3JpYmUodGFibGVzID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlcyA9IHRhYmxlcztcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHNlbGVjY2lvbmFkYVxyXG4gICAqIEBwYXJhbSBkYXRhIHJldG9ybmEgbGEgZmlsYSBxdWUgZnVlIHNlbGVjY2lvbmFkYVxyXG4gICAqL1xyXG4gIG9uU2VsZWN0ZWREZXBlbmRlbmN5KGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpe1xyXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHtpbmRleDppbmRleCwgZGF0YTpldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25OZXh0UGFnZShpbmRleDogbnVtYmVyLCBldmVudDogUmVxdWVzdFRhYmxlSGVsaXNhKSB7XHJcbiAgICB0aGlzLm5leHRQYWdlLmVtaXQoe2luZGV4OmluZGV4LCBkYXRhOmV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpe1xyXG4gICAgdGhpcy50b3RhbC5lbWl0KHtpbmRleDppbmRleCwgZGF0YTpldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Tb3J0KGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpe1xyXG4gICAgdGhpcy5zb3J0LmVtaXQoe2luZGV4OmluZGV4LCBkYXRhOmV2ZW50fSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19
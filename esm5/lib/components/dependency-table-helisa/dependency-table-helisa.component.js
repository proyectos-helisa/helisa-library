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
var DependencyTableHelisaComponent = /** @class */ (function () {
    function DependencyTableHelisaComponent(dependencyTableHelisaService, tableService) {
        this.dependencyTableHelisaService = dependencyTableHelisaService;
        this.tableService = tableService;
        this.tables = [];
        this.selected = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.total = new EventEmitter();
        this.sort = new EventEmitter();
        this.drop = new EventEmitter();
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
    DependencyTableHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-dependency-table',
                    template: "<div>\r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (select)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\" \r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\">\r\n  </hel-table>\r\n</div>\r\n",
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
        drop: [{ type: Output }]
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
    DependencyTableHelisaComponent.prototype.drop;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLDRCQUE0QixFQUFlLE1BQU0sbUNBQW1DLENBQUM7QUFFOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFHMUUscUNBR0M7OztJQUZDLGdDQUFjOztJQUNkLCtCQUFTOztBQUdYO0lBa0JFLHdDQUFvQiw0QkFBMEQsRUFBVSxZQUFxQztRQUF6RyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBVjdILFdBQU0sR0FBdUIsRUFBRSxDQUFDO1FBR3RCLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM5RSxVQUFLLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzNFLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDMUUsU0FBSSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNwRixtQkFBYyxHQUFvQixJQUFJLENBQUM7SUFFMEYsQ0FBQzs7OztJQUVsSSxpREFBUTs7O0lBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsNEJBQTRCLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFDdEQsVUFBQSxLQUFLO1lBQ0gs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O0lBQ3JGLDhDQUFvRjs7SUFDcEYsOENBQW9GOztJQUNwRix3REFBdUM7Ozs7O0lBRTNCLHNFQUFrRTs7Ozs7SUFBRSxzREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBDb25maWdUYWJsZSB9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgUmVxdWVzdFRhYmxlSGVsaXNhIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREZXBlbmRlbmN5IHtcclxuICBpbmRleDogbnVtYmVyLFxyXG4gIGRhdGE6IGFueVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kZXBlbmRlbmN5LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgcHJvdmlkZXJzOiBbRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHRhYmxlczogQXJyYXk8Q29uZmlnVGFibGU+ID0gW107XHJcbiAgQFZpZXdDaGlsZHJlbigndmlld1RhYmxlcycpIHZpZXdUYWJsZXM6IFF1ZXJ5TGlzdDxUYWJsZUhlbGlzYUNvbXBvbmVudDxhbnk+PjtcclxuXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgc2VsZWN0ZWRPYmplY3Q6IEV2ZW50RGVwZW5kZW5jeSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxhbnk+KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFRhYmxlcygpO1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXROZXh0UGFnZS5zdWJzY3JpYmUoXHJcbiAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5hZGRQYWdlKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlcy50b0FycmF5KClbZXZlbnQuaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFRvdGFsLnN1YnNjcmliZShcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldFRvdGFsKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlc1tldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSBlbCBzZXJ2aWNpbyBxdWUgZ2VzdGlvbmEgZWwgY29tcG9uZW50ZS5cclxuICAgKi9cclxuICBnZXRTZXJ2aWNlKCk6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgdW4gb2JzZXJ2YWJsZSBjb24gbGFzIHRhYmxhcyBkZXBlbmRpZW50ZXMgZGVzZGUgZWwgc2VydmljaW8uXHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCkge1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmdldFRhYmxlcygpXHJcbiAgICAgIC5zdWJzY3JpYmUodGFibGVzID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlcyA9IHRhYmxlcztcclxuICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgc2VsZWNjaW9uYWRhXHJcbiAgICogQHBhcmFtIGRhdGEgcmV0b3JuYSBsYSBmaWxhIHF1ZSBmdWUgc2VsZWNjaW9uYWRhXHJcbiAgICovXHJcbiAgb25TZWxlY3RlZERlcGVuZGVuY3koaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9O1xyXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uTmV4dFBhZ2UoaW5kZXg6IG51bWJlciwgZXZlbnQ6IFJlcXVlc3RUYWJsZUhlbGlzYSkge1xyXG4gICAgdGhpcy5uZXh0UGFnZS5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uVG90YWwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy50b3RhbC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uU29ydChpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNvcnQuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvbkRyb3AoaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5kcm9wLmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
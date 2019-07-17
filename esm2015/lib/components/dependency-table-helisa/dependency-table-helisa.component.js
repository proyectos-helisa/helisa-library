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
        console.log(event);
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
}
DependencyTableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\r\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\">\r\n  </hel-table>\r\n</div>\r\n",
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
    addRow: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLDRCQUE0QixFQUFlLE1BQU0sbUNBQW1DLENBQUM7QUFFOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFHMUUscUNBR0M7OztJQUZDLGdDQUFjOztJQUNkLCtCQUFTOztBQVdYLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBaUJ6QyxZQUFvQiw0QkFBMEQsRUFBVSxZQUFxQztRQUF6RyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBZjdILFdBQU0sR0FBdUIsRUFBRSxDQUFDOzs7O1FBTXRCLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsaUJBQVksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEYsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM5RSxVQUFLLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzNFLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDMUUsU0FBSSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMxRSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEUsbUJBQWMsR0FBb0IsSUFBSSxDQUFDO0lBRTBGLENBQUM7Ozs7SUFFbEksUUFBUTtRQUNOLElBQUksQ0FBQyxT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bnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGUgfSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbHVtbkNvbmZpZywgUmVxdWVzdFRhYmxlSGVsaXNhLCBTZWxlY3RPYmplY3R9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50RGVwZW5kZW5jeSB7XHJcbiAgaW5kZXg6IG51bWJlcixcclxuICBkYXRhOiBhbnlcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kZXBlbmRlbmN5LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgcHJvdmlkZXJzOiBbRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHRhYmxlczogQXJyYXk8Q29uZmlnVGFibGU+ID0gW107XHJcbiAgQFZpZXdDaGlsZHJlbigndmlld1RhYmxlcycpIHZpZXdUYWJsZXM6IFF1ZXJ5TGlzdDxUYWJsZUhlbGlzYUNvbXBvbmVudDxhbnk+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogZGVwcmVjYXRlZCwgdXNlIHNlbGVjdE9iamVjdFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBzZWxlY3RlZE9iamVjdDogRXZlbnREZXBlbmRlbmN5ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPGFueT4pIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VGFibGVzKCk7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdE5leHRQYWdlLnN1YnNjcmliZShcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLmFkZFBhZ2UoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzLnRvQXJyYXkoKVtldmVudC5pbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VG90YWwuc3Vic2NyaWJlKFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uuc2V0VG90YWwoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzW2V2ZW50LmluZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBlbCBib3RvbiBkZSB1bmEgdGFibGFcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUJ1dHRvbi5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGE9PnsgICAgICAgIFxyXG4gICAgICAgIGlmKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZSA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xyXG4gICAgICAgICAgICBpZighIXRhYmxlKXtcclxuICAgICAgICAgICAgICB0YWJsZS5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIC8vT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zLnN1YnNjcmliZShcclxuICAgICAgZGF0YT0+e1xyXG4gICAgICAgIGlmKGRhdGEgIT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCl7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZighIWVsZW1lbnQuYWRkUm93QnV0dG9uKXtcclxuICAgICAgICAgICAgICBlbGVtZW50LmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIGVsIHNlcnZpY2lvIHF1ZSBnZXN0aW9uYSBlbCBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIGdldFNlcnZpY2UoKTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSB1biBvYnNlcnZhYmxlIGNvbiBsYXMgdGFibGFzIGRlcGVuZGllbnRlcyBkZXNkZSBlbCBzZXJ2aWNpby5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKSB7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZ2V0VGFibGVzKClcclxuICAgICAgLnN1YnNjcmliZSh0YWJsZXMgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVzID0gdGFibGVzO1xyXG4gICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBzZWxlY2Npb25hZGFcclxuICAgKiBAcGFyYW0gZGF0YSByZXRvcm5hIGxhIGZpbGEgcXVlIGZ1ZSBzZWxlY2Npb25hZGFcclxuICAgKi9cclxuICBvblNlbGVjdGVkRGVwZW5kZW5jeShpbmRleDogbnVtYmVyLCBldmVudDogU2VsZWN0T2JqZWN0PGFueT4pIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfTtcclxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHtpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvbk5leHRQYWdlKGluZGV4OiBudW1iZXIsIGV2ZW50OiBSZXF1ZXN0VGFibGVIZWxpc2EpIHtcclxuICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMudG90YWwuZW1pdCh7IGluZGV4OiBpbmRleCwgZGF0YTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvblNvcnQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5zb3J0LmVtaXQoeyBpbmRleDogaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Ecm9wKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHsgaW5kZXg6IGluZGV4LCBkYXRhOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRlIGVsIGluZGljZSBkZSBsYSB0YWJsYSBhbCBjdWFsIHNlIGxlIGRlYmUgYcOxYWRpciB1bmEgbnVldmEgZmlsYVxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIGRlIGxhIGN1YWwgc2UgZGlzcGFyYSBlbCBldmVudG9cclxuICAgKi9cclxuICBvbkFkZFJvdyhpbmRleDpudW1iZXIpe1xyXG4gICAgdGhpcy5hZGRSb3cuZW1pdChpbmRleCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
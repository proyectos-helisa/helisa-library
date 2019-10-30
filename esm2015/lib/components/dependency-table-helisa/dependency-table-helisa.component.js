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
        this.dependencyTableHelisaService.selectedIndexRow.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.indexRowSelect = event;
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
                template: "<div>\r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\" \r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (select)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\" (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"true\">\r\n  </hel-table>\r\n</div>\r\n",
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
    isDragged: [{ type: Input }],
    indexRowSelect: [{ type: Input }]
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
    DependencyTableHelisaComponent.prototype.indexRowSelect;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRzFFLHFDQUdDOzs7SUFGQyxnQ0FBYzs7SUFDZCwrQkFBUzs7QUFTWCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQWN6QyxZQUFvQiw0QkFBMEQsRUFBVSxZQUFxQztRQUF6RyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBWjdILFdBQU0sR0FBdUIsRUFBRSxDQUFDO1FBSXRCLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM5RSxVQUFLLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzNFLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDM0UsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUzQixtQkFBYyxHQUFtQixJQUFJLENBQUM7SUFFMkYsQ0FBQzs7OztJQUVsSSxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUN0RCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsU0FBUzs7OztRQUNuRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQzFELEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxFQUNGLENBQUE7SUFDSCxDQUFDOzs7OztJQUtELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUtELFNBQVM7UUFDUCxJQUFJLENBQUMsNEJBQTRCLENBQUMsU0FBUyxFQUFFO2FBQzFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsS0FBVTtRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7SUFPRCxVQUFVLENBQUMsS0FBYSxFQUFFLEtBQXlCO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7O0lBT0QsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBT0QsTUFBTSxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFoR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDBlQUF1RDtnQkFFdkQsU0FBUyxFQUFFLENBQUUsNEJBQTRCLENBQUU7O2FBQzVDOzs7O1lBZlEsNEJBQTRCO1lBRTVCLGtCQUFrQjs7O3lCQWlCeEIsWUFBWSxTQUFDLFlBQVk7dUJBR3pCLE1BQU07dUJBQ04sTUFBTTtvQkFDTixNQUFNO21CQUNOLE1BQU07d0JBQ04sS0FBSzs2QkFDTCxLQUFLOzs7O0lBVE4sZ0RBQWdDOztJQUNoQyxvREFBNkU7O0lBRzdFLGtEQUF3Rjs7SUFDeEYsa0RBQXdGOztJQUN4RiwrQ0FBcUY7O0lBQ3JGLDhDQUFvRjs7SUFDcEYsbURBQTJCOztJQUMzQix3REFBZ0M7O0lBQ2hDLHdEQUFzQzs7Ozs7SUFFMUIsc0VBQWtFOzs7OztJQUFFLHNEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UsIENvbmZpZ1RhYmxlIH0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBSZXF1ZXN0VGFibGVIZWxpc2EgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERlcGVuZGVuY3l7XHJcbiAgaW5kZXg6IG51bWJlcixcclxuICBkYXRhOiBhbnlcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtZGVwZW5kZW5jeS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIHByb3ZpZGVyczogWyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHRhYmxlczogQXJyYXk8Q29uZmlnVGFibGU+ID0gW107XHJcbiAgQFZpZXdDaGlsZHJlbigndmlld1RhYmxlcycpIHZpZXdUYWJsZXM6IFF1ZXJ5TGlzdDxUYWJsZUhlbGlzYUNvbXBvbmVudDxhbnk+PjtcclxuICBcclxuXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgQElucHV0KCkgaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5kZXhSb3dTZWxlY3Q6IG51bWJlcjtcclxuICBzZWxlY3RlZE9iamVjdDpFdmVudERlcGVuZGVuY3kgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UsIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8YW55PikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRUYWJsZXMoKTtcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0TmV4dFBhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UuYWRkUGFnZShldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXMudG9BcnJheSgpW2V2ZW50LmluZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VG90YWwuc3Vic2NyaWJlKFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uuc2V0VG90YWwoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzW2V2ZW50LmluZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLnNlbGVjdGVkSW5kZXhSb3cuc3Vic2NyaWJlKFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IGV2ZW50O1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIGVsIHNlcnZpY2lvIHF1ZSBnZXN0aW9uYSBlbCBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIGdldFNlcnZpY2UoKSA6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgdW4gb2JzZXJ2YWJsZSBjb24gbGFzIHRhYmxhcyBkZXBlbmRpZW50ZXMgZGVzZGUgZWwgc2VydmljaW8uXHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCl7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZ2V0VGFibGVzKClcclxuICAgICAgLnN1YnNjcmliZSh0YWJsZXMgPT4ge1xyXG4gICAgICAgIHRoaXMudGFibGVzID0gdGFibGVzO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgc2VsZWNjaW9uYWRhXHJcbiAgICogQHBhcmFtIGRhdGEgcmV0b3JuYSBsYSBmaWxhIHF1ZSBmdWUgc2VsZWNjaW9uYWRhXHJcbiAgICovXHJcbiAgb25TZWxlY3RlZERlcGVuZGVuY3koaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSl7XHJcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0ge2luZGV4OmluZGV4LGRhdGE6ZXZlbnR9OyAgICBcclxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7aW5kZXg6aW5kZXgsIGRhdGE6ZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uTmV4dFBhZ2UoaW5kZXg6IG51bWJlciwgZXZlbnQ6IFJlcXVlc3RUYWJsZUhlbGlzYSkge1xyXG4gICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtpbmRleDppbmRleCwgZGF0YTpldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Ub3RhbChpbmRleDogbnVtYmVyLCBldmVudDogYW55KXtcclxuICAgIHRoaXMudG90YWwuZW1pdCh7aW5kZXg6aW5kZXgsIGRhdGE6ZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uU29ydChpbmRleDogbnVtYmVyLCBldmVudDogYW55KXtcclxuICAgIHRoaXMuc29ydC5lbWl0KHtpbmRleDppbmRleCwgZGF0YTpldmVudH0pO1xyXG4gIH1cclxuICAgIFxyXG59XHJcbiJdfQ==
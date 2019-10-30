/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function ConfigTable() { }
if (false) {
    /** @type {?} */
    ConfigTable.prototype.columns;
    /** @type {?} */
    ConfigTable.prototype.isRemote;
    /** @type {?|undefined} */
    ConfigTable.prototype.dataSource;
    /** @type {?|undefined} */
    ConfigTable.prototype.count;
    /** @type {?|undefined} */
    ConfigTable.prototype.order;
    /** @type {?|undefined} */
    ConfigTable.prototype.showTitle;
}
export class DependencyTableHelisaService {
    constructor() {
        this.tables = new Subject();
        this.infoTables = new Array();
        this.emitTotal = new Subject();
        this.emitNextPage = new Subject();
        this.selectedIndexRow$ = new Subject();
        this.selectedIndexRow = this.selectedIndexRow$.asObservable();
    }
    /**
     * retorna un Observable<ConfigTable[]>
     * @return {?}
     */
    getTables() {
        return this.tables;
    }
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param {?} configTable Objeto que contiene la configuración para la tabla.
     * @param {?=} withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     * @return {?}
     */
    updateDependency(configTable, withRemoveDependency = false) {
        if (withRemoveDependency) {
            this.infoTables = this.infoTables.slice(0, !configTable.order ? 0 : configTable.order);
        }
        if (!configTable.order || configTable.order >= this.infoTables.length) {
            configTable.order = this.infoTables.length;
        }
        this.infoTables[configTable.order] = configTable;
        if (configTable.isRemote) {
            configTable.dataSource = null;
            if (configTable.count === null)
                throw "hace falta el count";
        }
        else {
            if (configTable.dataSource === null)
                throw "hace falta el dataSource";
            configTable.count = configTable.dataSource.length;
        }
        this.tables.next(this.infoTables);
    }
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    setTotal(event) {
        this.emitTotal.next(event);
    }
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    addPage(event) {
        this.emitNextPage.next(event);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectIndexRow(index) {
        this.selectedIndexRow$.next(index);
    }
}
DependencyTableHelisaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DependencyTableHelisaService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    DependencyTableHelisaService.prototype.tables;
    /** @type {?} */
    DependencyTableHelisaService.prototype.infoTables;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitTotal;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitNextPage;
    /**
     * @type {?}
     * @private
     */
    DependencyTableHelisaService.prototype.selectedIndexRow$;
    /** @type {?} */
    DependencyTableHelisaService.prototype.selectedIndexRow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQU9DOzs7SUFOQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBbUI7O0FBSXJCLE1BQU0sT0FBTyw0QkFBNEI7SUFTdkM7UUFOQSxXQUFNLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRTdDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUMzQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBdUR0QyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQzNDLHFCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQXREaEQsQ0FBQzs7Ozs7SUFLakIsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7OztJQVFELGdCQUFnQixDQUFDLFdBQXdCLEVBQUUsdUJBQWdDLEtBQUs7UUFDOUUsSUFBRyxvQkFBb0IsRUFBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hGO1FBQ0QsSUFBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNwRSxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ2pELElBQUcsV0FBVyxDQUFDLFFBQVEsRUFBQztZQUN0QixXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFHLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSTtnQkFDM0IsTUFBTSxxQkFBcUIsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBRyxXQUFXLENBQUMsVUFBVSxLQUFLLElBQUk7Z0JBQ2hDLE1BQU0sMEJBQTBCLENBQUM7WUFDakMsV0FBVyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUNyRDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFNRCxRQUFRLENBQUMsS0FBc0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBTUQsT0FBTyxDQUFDLEtBQXNCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBT0QsY0FBYyxDQUFDLEtBQVk7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFwRUYsVUFBVTs7Ozs7O0lBSVQsOENBQStDOztJQUMvQyxrREFBNkM7O0lBRTdDLGlEQUEyQzs7SUFDM0Msb0RBQThDOzs7OztJQXVEOUMseURBQWtEOztJQUNsRCx3REFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXZlbnREZXBlbmRlbmN5IH0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdUYWJsZSB7XHJcbiAgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPixcclxuICBpc1JlbW90ZTogYm9vbGVhbixcclxuICBkYXRhU291cmNlPzogQXJyYXk8YW55PixcclxuICBjb3VudD86IG51bWJlcixcclxuICBvcmRlcj86IG51bWJlcixcclxuICBzaG93VGl0bGU/OiBib29sZWFuXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKCkgXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlIHtcclxuICBcclxuXHJcbiAgdGFibGVzOiBTdWJqZWN0PENvbmZpZ1RhYmxlW10+ID0gbmV3IFN1YmplY3QoKTtcclxuICBpbmZvVGFibGVzOiBBcnJheTxDb25maWdUYWJsZT4gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgZW1pdFRvdGFsID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIGVtaXROZXh0UGFnZSA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSB1biBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+XHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCk6IE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGxhcyBkZXBlbmRlbmNpYXMsIGFncmVuZG8gbGEgdGFibGEgcXVlIGVudmlhbiBlbiBlbCBvcmRlbiBjb3JyZXNwb25kaWVudGUgbyBhbCBmaW5hbC5cclxuICAgKiBUYW1iacOpbiByZW11ZXZlIGxhcyBkZXBlbmRlY2lhcyBxdWUgaGF5IGFwYXJ0aXIgZGUgbGEgdGFibGEgc2VndW4gc2UgaW5kaXF1ZSBlbiBlbCBwYXJhbWV0cm8uXHJcbiAgICogQHBhcmFtIGNvbmZpZ1RhYmxlIE9iamV0byBxdWUgY29udGllbmUgbGEgY29uZmlndXJhY2nDs24gcGFyYSBsYSB0YWJsYS5cclxuICAgKiBAcGFyYW0gd2l0aFJlbW92ZURlcGVuZGVuY3kgYm9vbGVhbiBwb3IgZGVmZWN0byBlcyBmYWxzZSwgc2kgZXMgJ3RydWUnIGluZGljYSBxdWUgcmVtdWV2YSBsYXMgZGVwZW5kZW5jaWFzIGFwYXJ0aXIgZGUgZWwuXHJcbiAgICovXHJcbiAgdXBkYXRlRGVwZW5kZW5jeShjb25maWdUYWJsZTogQ29uZmlnVGFibGUsIHdpdGhSZW1vdmVEZXBlbmRlbmN5OiBib29sZWFuID0gZmFsc2Upe1xyXG4gICAgaWYod2l0aFJlbW92ZURlcGVuZGVuY3kpe1xyXG4gICAgICB0aGlzLmluZm9UYWJsZXMgPSB0aGlzLmluZm9UYWJsZXMuc2xpY2UoMCwgIWNvbmZpZ1RhYmxlLm9yZGVyID8gMCA6IGNvbmZpZ1RhYmxlLm9yZGVyKTtcclxuICAgIH1cclxuICAgIGlmKCFjb25maWdUYWJsZS5vcmRlciB8fCBjb25maWdUYWJsZS5vcmRlciA+PSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLm9yZGVyID0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWdUYWJsZS5vcmRlcl0gPSBjb25maWdUYWJsZTtcclxuICAgIGlmKGNvbmZpZ1RhYmxlLmlzUmVtb3RlKXtcclxuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XHJcbiAgICAgIGlmKGNvbmZpZ1RhYmxlLmNvdW50ID09PSBudWxsKVxyXG4gICAgICAgIHRocm93IFwiaGFjZSBmYWx0YSBlbCBjb3VudFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYoY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9PT0gbnVsbClcclxuICAgICAgICB0aHJvdyBcImhhY2UgZmFsdGEgZWwgZGF0YVNvdXJjZVwiO1xyXG4gICAgICAgIGNvbmZpZ1RhYmxlLmNvdW50ID0gY29uZmlnVGFibGUuZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgdG90YWwgY29uIGxhIGluZm9ybWFjacOzbiBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hIFxyXG4gICAqL1xyXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIGFncmVnYXIgcGFnaW5hIGNvbiBsYSBwYWdpbmEgcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIGFkZFBhZ2UoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4Um93JCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICBwdWJsaWMgc2VsZWN0ZWRJbmRleFJvdyA9IHRoaXMuc2VsZWN0ZWRJbmRleFJvdyQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHNlbGVjdEluZGV4Um93KGluZGV4Om51bWJlcil7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhSb3ckLm5leHQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
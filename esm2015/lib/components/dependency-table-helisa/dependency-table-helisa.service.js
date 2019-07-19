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
    /** @type {?|undefined} */
    ConfigTable.prototype.indexRowSelect;
    /** @type {?|undefined} */
    ConfigTable.prototype.isDragged;
    /** @type {?|undefined} */
    ConfigTable.prototype.addRowButton;
    /** @type {?|undefined} */
    ConfigTable.prototype.configRowStylesFromColumn;
}
export class DependencyTableHelisaService {
    constructor() {
        this.tables = new Subject();
        this.infoTables = new Array();
        this.emitVisibilityButton$ = new Subject();
        this.emitVisibilityButton = this.emitVisibilityButton$.asObservable();
        this.emitVisibilityAllButtons$ = new Subject();
        this.emitVisibilityAllButtons = this.emitVisibilityAllButtons$.asObservable();
        this.emitTotal = new Subject();
        this.emitNextPage = new Subject();
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
     * @param {?} config
     * @return {?}
     */
    selectIndexRow(config) {
        if (this.infoTables[config.order]) {
            this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
            this.tables.next(this.infoTables);
        }
    }
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    changeVisibilityButton(event) {
        this.emitVisibilityButton$.next(event);
    }
    /**
     * Esconde los botones de todas las tablas
     * @param {?} show indicar si se muestran o no todos los botones de las tablas
     * @return {?}
     */
    changeVisibilityAllButtons(show) {
        this.emitVisibilityAllButtons$.next(show);
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
    /**
     * @type {?}
     * @private
     */
    DependencyTableHelisaService.prototype.emitVisibilityButton$;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitVisibilityButton;
    /**
     * @type {?}
     * @private
     */
    DependencyTableHelisaService.prototype.emitVisibilityAllButtons$;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitVisibilityAllButtons;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitTotal;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitNextPage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVdDOzs7SUFWQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQixtQ0FBNEI7O0lBQzVCLGdEQUFrRDs7QUFJcEQsTUFBTSxPQUFPLDRCQUE0QjtJQWV2QztRQVpBLFdBQU0sR0FBMkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQyxlQUFVLEdBQXVCLElBQUksS0FBSyxFQUFFLENBQUM7UUFFckMsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDL0QseUJBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpELDhCQUF5QixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDM0QsNkJBQXdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpFLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUMzQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO0lBRTlCLENBQUM7Ozs7O0lBS2pCLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFRRCxnQkFBZ0IsQ0FBQyxXQUF3QixFQUFFLHVCQUFnQyxLQUFLO1FBQzlFLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckUsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUNqRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUk7Z0JBQzVCLE1BQU0scUJBQXFCLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksV0FBVyxDQUFDLFVBQVUsS0FBSyxJQUFJO2dCQUNqQyxNQUFNLDBCQUEwQixDQUFDO1lBQ25DLFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBTUQsUUFBUSxDQUFDLEtBQXNCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQU1ELE9BQU8sQ0FBQyxLQUFzQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUFtQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUFFO0lBQ3hDLENBQUM7Ozs7OztJQU9ELHNCQUFzQixDQUFDLEtBQXFCO1FBQzFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBT0QsMEJBQTBCLENBQUMsSUFBWTtRQUNyQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXpGRixVQUFVOzs7Ozs7SUFJVCw4Q0FBK0M7O0lBQy9DLGtEQUE2Qzs7Ozs7SUFFN0MsNkRBQStEOztJQUMvRCw0REFBaUU7Ozs7O0lBRWpFLGlFQUEyRDs7SUFDM0QsZ0VBQXlFOztJQUV6RSxpREFBMkM7O0lBQzNDLG9EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Q29sdW1uQ29uZmlnLCBSZXF1ZXN0VGFibGVIZWxpc2EsIEFkZFJvd0J1dHRvbiwgQ29uZmlnUm93U3R5bGVzfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEV2ZW50RGVwZW5kZW5jeX0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdUYWJsZSB7XHJcbiAgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPixcclxuICBpc1JlbW90ZTogYm9vbGVhbixcclxuICBkYXRhU291cmNlPzogQXJyYXk8YW55PixcclxuICBjb3VudD86IG51bWJlcixcclxuICBvcmRlcj86IG51bWJlcixcclxuICBzaG93VGl0bGU/OiBib29sZWFuLFxyXG4gIGluZGV4Um93U2VsZWN0PzogbnVtYmVyLFxyXG4gIGlzRHJhZ2dlZD86IEJvb2xlYW4sXHJcbiAgYWRkUm93QnV0dG9uPzogQWRkUm93QnV0dG9uLFxyXG4gIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4/OiBBcnJheTxDb25maWdSb3dTdHlsZXM+XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2Uge1xyXG5cclxuXHJcbiAgdGFibGVzOiBTdWJqZWN0PENvbmZpZ1RhYmxlW10+ID0gbmV3IFN1YmplY3QoKTtcclxuICBpbmZvVGFibGVzOiBBcnJheTxDb25maWdUYWJsZT4gPSBuZXcgQXJyYXkoKTtcclxuICBcclxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QnV0dG9uJCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0VmlzaWJpbGl0eUJ1dHRvbiA9IHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIFxyXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zID0gdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBlbWl0VG90YWwgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdE5leHRQYWdlID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIHVuIE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKTogT2JzZXJ2YWJsZTxDb25maWdUYWJsZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgbGFzIGRlcGVuZGVuY2lhcywgYWdyZW5kbyBsYSB0YWJsYSBxdWUgZW52aWFuIGVuIGVsIG9yZGVuIGNvcnJlc3BvbmRpZW50ZSBvIGFsIGZpbmFsLlxyXG4gICAqIFRhbWJpw6luIHJlbXVldmUgbGFzIGRlcGVuZGVjaWFzIHF1ZSBoYXkgYXBhcnRpciBkZSBsYSB0YWJsYSBzZWd1biBzZSBpbmRpcXVlIGVuIGVsIHBhcmFtZXRyby5cclxuICAgKiBAcGFyYW0gY29uZmlnVGFibGUgT2JqZXRvIHF1ZSBjb250aWVuZSBsYSBjb25maWd1cmFjacOzbiBwYXJhIGxhIHRhYmxhLlxyXG4gICAqIEBwYXJhbSB3aXRoUmVtb3ZlRGVwZW5kZW5jeSBib29sZWFuIHBvciBkZWZlY3RvIGVzIGZhbHNlLCBzaSBlcyAndHJ1ZScgaW5kaWNhIHF1ZSByZW11ZXZhIGxhcyBkZXBlbmRlbmNpYXMgYXBhcnRpciBkZSBlbC5cclxuICAgKi9cclxuICB1cGRhdGVEZXBlbmRlbmN5KGNvbmZpZ1RhYmxlOiBDb25maWdUYWJsZSwgd2l0aFJlbW92ZURlcGVuZGVuY3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHdpdGhSZW1vdmVEZXBlbmRlbmN5KSB7XHJcbiAgICAgIHRoaXMuaW5mb1RhYmxlcyA9IHRoaXMuaW5mb1RhYmxlcy5zbGljZSgwLCAhY29uZmlnVGFibGUub3JkZXIgPyAwIDogY29uZmlnVGFibGUub3JkZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjb25maWdUYWJsZS5vcmRlciB8fCBjb25maWdUYWJsZS5vcmRlciA+PSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLm9yZGVyID0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWdUYWJsZS5vcmRlcl0gPSBjb25maWdUYWJsZTtcclxuICAgIGlmIChjb25maWdUYWJsZS5pc1JlbW90ZSkge1xyXG4gICAgICBjb25maWdUYWJsZS5kYXRhU291cmNlID0gbnVsbDtcclxuICAgICAgaWYgKGNvbmZpZ1RhYmxlLmNvdW50ID09PSBudWxsKVxyXG4gICAgICAgIHRocm93IFwiaGFjZSBmYWx0YSBlbCBjb3VudFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UgPT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgXCJoYWNlIGZhbHRhIGVsIGRhdGFTb3VyY2VcIjtcclxuICAgICAgY29uZmlnVGFibGUuY291bnQgPSBjb25maWdUYWJsZS5kYXRhU291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSB0b3RhbCBjb24gbGEgaW5mb3JtYWNpw7NuIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXHJcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmEgXHJcbiAgICovXHJcbiAgc2V0VG90YWwoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0VG90YWwubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgYWdyZWdhciBwYWdpbmEgY29uIGxhIHBhZ2luYSBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hXHJcbiAgICovXHJcbiAgYWRkUGFnZShldmVudDogRXZlbnREZXBlbmRlbmN5KSB7XHJcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEluZGV4Um93KGNvbmZpZzogQ29uZmlnVGFibGUpIHtcclxuICAgIGlmICh0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXSkge1xyXG4gICAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXS5pbmRleFJvd1NlbGVjdCA9IGNvbmZpZy5pbmRleFJvd1NlbGVjdDtcclxuICAgICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpOyB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogTXVlc3RyYSBvIGVzY29uZGUgZWwgYm90b24gdW5hIHRhYmxhIGVuIGVzcGVjaWZpY29cclxuICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgdHJ1ZSBvIGZhbHNlXHJcbiAgICovXHJcbiAgY2hhbmdlVmlzaWJpbGl0eUJ1dHRvbihldmVudDpFdmVudERlcGVuZGVuY3kpe1xyXG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRXNjb25kZSBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXHJcbiAgICogQHBhcmFtIHNob3cgaW5kaWNhciBzaSBzZSBtdWVzdHJhbiBvIG5vIHRvZG9zIGxvcyBib3RvbmVzIGRlIGxhcyB0YWJsYXNcclxuICAgKi9cclxuICBjaGFuZ2VWaXNpYmlsaXR5QWxsQnV0dG9ucyhzaG93OmJvb2xlYW4pe1xyXG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLm5leHQoc2hvdyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
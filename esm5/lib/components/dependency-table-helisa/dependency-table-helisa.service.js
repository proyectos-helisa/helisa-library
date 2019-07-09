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
}
var DependencyTableHelisaService = /** @class */ (function () {
    function DependencyTableHelisaService() {
        this.tables = new Subject();
        this.infoTables = new Array();
        this.emitTotal = new Subject();
        this.emitNextPage = new Subject();
    }
    /**
     * retorna un Observable<ConfigTable[]>
     */
    /**
     * retorna un Observable<ConfigTable[]>
     * @return {?}
     */
    DependencyTableHelisaService.prototype.getTables = /**
     * retorna un Observable<ConfigTable[]>
     * @return {?}
     */
    function () {
        return this.tables;
    };
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param configTable Objeto que contiene la configuración para la tabla.
     * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     */
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param {?} configTable Objeto que contiene la configuración para la tabla.
     * @param {?=} withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     * @return {?}
     */
    DependencyTableHelisaService.prototype.updateDependency = /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param {?} configTable Objeto que contiene la configuración para la tabla.
     * @param {?=} withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     * @return {?}
     */
    function (configTable, withRemoveDependency) {
        if (withRemoveDependency === void 0) { withRemoveDependency = false; }
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
    };
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    DependencyTableHelisaService.prototype.setTotal = /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    function (event) {
        this.emitTotal.next(event);
    };
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    DependencyTableHelisaService.prototype.addPage = /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param {?} event wrapper que contiene el indice de la tabla y la información de la pagina
     * @return {?}
     */
    function (event) {
        this.emitNextPage.next(event);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DependencyTableHelisaService.prototype.selectIndexRow = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (this.infoTables[config.order]) {
            this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
            this.tables.next(this.infoTables);
        }
    };
    DependencyTableHelisaService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DependencyTableHelisaService.ctorParameters = function () { return []; };
    return DependencyTableHelisaService;
}());
export { DependencyTableHelisaService };
if (false) {
    /** @type {?} */
    DependencyTableHelisaService.prototype.tables;
    /** @type {?} */
    DependencyTableHelisaService.prototype.infoTables;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitTotal;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitNextPage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVFDOzs7SUFQQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF1Qjs7QUFHekI7SUFVRTtRQU5BLFdBQU0sR0FBMkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQyxlQUFVLEdBQXVCLElBQUksS0FBSyxFQUFFLENBQUM7UUFFN0MsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQzNDLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7SUFFOUIsQ0FBQztJQUVqQjs7T0FFRzs7Ozs7SUFDSCxnREFBUzs7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCx1REFBZ0I7Ozs7Ozs7SUFBaEIsVUFBaUIsV0FBd0IsRUFBRSxvQkFBcUM7UUFBckMscUNBQUEsRUFBQSw0QkFBcUM7UUFDOUUsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNyRSxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ2pELElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN4QixXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSTtnQkFDNUIsTUFBTSxxQkFBcUIsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxXQUFXLENBQUMsVUFBVSxLQUFLLElBQUk7Z0JBQ2pDLE1BQU0sMEJBQTBCLENBQUM7WUFDbkMsV0FBVyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQXNCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDhDQUFPOzs7OztJQUFQLFVBQVEsS0FBc0I7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxxREFBYzs7OztJQUFkLFVBQWUsTUFBbUI7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FBRTtJQUN4QyxDQUFDOztnQkFqRUYsVUFBVTs7OztJQW1FWCxtQ0FBQztDQUFBLEFBbkVELElBbUVDO1NBbEVZLDRCQUE0Qjs7O0lBR3ZDLDhDQUErQzs7SUFDL0Msa0RBQTZDOztJQUU3QyxpREFBMkM7O0lBQzNDLG9EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgUmVxdWVzdFRhYmxlSGVsaXNhIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFdmVudERlcGVuZGVuY3kgfSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RhYmxlIHtcclxuICBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LFxyXG4gIGlzUmVtb3RlOiBib29sZWFuLFxyXG4gIGRhdGFTb3VyY2U/OiBBcnJheTxhbnk+LFxyXG4gIGNvdW50PzogbnVtYmVyLFxyXG4gIG9yZGVyPzogbnVtYmVyLFxyXG4gIHNob3dUaXRsZT86IGJvb2xlYW4sXHJcbiAgaW5kZXhSb3dTZWxlY3Q/OiBudW1iZXJcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSB7XHJcblxyXG5cclxuICB0YWJsZXM6IFN1YmplY3Q8Q29uZmlnVGFibGVbXT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGluZm9UYWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPiA9IG5ldyBBcnJheSgpO1xyXG5cclxuICBlbWl0VG90YWwgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdE5leHRQYWdlID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIHVuIE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKTogT2JzZXJ2YWJsZTxDb25maWdUYWJsZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgbGFzIGRlcGVuZGVuY2lhcywgYWdyZW5kbyBsYSB0YWJsYSBxdWUgZW52aWFuIGVuIGVsIG9yZGVuIGNvcnJlc3BvbmRpZW50ZSBvIGFsIGZpbmFsLlxyXG4gICAqIFRhbWJpw6luIHJlbXVldmUgbGFzIGRlcGVuZGVjaWFzIHF1ZSBoYXkgYXBhcnRpciBkZSBsYSB0YWJsYSBzZWd1biBzZSBpbmRpcXVlIGVuIGVsIHBhcmFtZXRyby5cclxuICAgKiBAcGFyYW0gY29uZmlnVGFibGUgT2JqZXRvIHF1ZSBjb250aWVuZSBsYSBjb25maWd1cmFjacOzbiBwYXJhIGxhIHRhYmxhLlxyXG4gICAqIEBwYXJhbSB3aXRoUmVtb3ZlRGVwZW5kZW5jeSBib29sZWFuIHBvciBkZWZlY3RvIGVzIGZhbHNlLCBzaSBlcyAndHJ1ZScgaW5kaWNhIHF1ZSByZW11ZXZhIGxhcyBkZXBlbmRlbmNpYXMgYXBhcnRpciBkZSBlbC5cclxuICAgKi9cclxuICB1cGRhdGVEZXBlbmRlbmN5KGNvbmZpZ1RhYmxlOiBDb25maWdUYWJsZSwgd2l0aFJlbW92ZURlcGVuZGVuY3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHdpdGhSZW1vdmVEZXBlbmRlbmN5KSB7XHJcbiAgICAgIHRoaXMuaW5mb1RhYmxlcyA9IHRoaXMuaW5mb1RhYmxlcy5zbGljZSgwLCAhY29uZmlnVGFibGUub3JkZXIgPyAwIDogY29uZmlnVGFibGUub3JkZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjb25maWdUYWJsZS5vcmRlciB8fCBjb25maWdUYWJsZS5vcmRlciA+PSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLm9yZGVyID0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWdUYWJsZS5vcmRlcl0gPSBjb25maWdUYWJsZTtcclxuICAgIGlmIChjb25maWdUYWJsZS5pc1JlbW90ZSkge1xyXG4gICAgICBjb25maWdUYWJsZS5kYXRhU291cmNlID0gbnVsbDtcclxuICAgICAgaWYgKGNvbmZpZ1RhYmxlLmNvdW50ID09PSBudWxsKVxyXG4gICAgICAgIHRocm93IFwiaGFjZSBmYWx0YSBlbCBjb3VudFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UgPT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgXCJoYWNlIGZhbHRhIGVsIGRhdGFTb3VyY2VcIjtcclxuICAgICAgY29uZmlnVGFibGUuY291bnQgPSBjb25maWdUYWJsZS5kYXRhU291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSB0b3RhbCBjb24gbGEgaW5mb3JtYWNpw7NuIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXHJcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmEgXHJcbiAgICovXHJcbiAgc2V0VG90YWwoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0VG90YWwubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgYWdyZWdhciBwYWdpbmEgY29uIGxhIHBhZ2luYSBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hXHJcbiAgICovXHJcbiAgYWRkUGFnZShldmVudDogRXZlbnREZXBlbmRlbmN5KSB7XHJcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEluZGV4Um93KGNvbmZpZzogQ29uZmlnVGFibGUpIHtcclxuICAgIGlmICh0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXSkge1xyXG4gICAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXS5pbmRleFJvd1NlbGVjdCA9IGNvbmZpZy5pbmRleFJvd1NlbGVjdDtcclxuICAgICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpOyB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
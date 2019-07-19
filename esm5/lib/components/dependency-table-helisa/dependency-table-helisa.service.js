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
var DependencyTableHelisaService = /** @class */ (function () {
    function DependencyTableHelisaService() {
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
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeVisibilityButton = /**
     * Muestra o esconde el boton una tabla en especifico
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    function (event) {
        this.emitVisibilityButton$.next(event);
    };
    /**
     * Esconde los botones de todas las tablas
     * @param show indicar si se muestran o no todos los botones de las tablas
     */
    /**
     * Esconde los botones de todas las tablas
     * @param {?} show indicar si se muestran o no todos los botones de las tablas
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeVisibilityAllButtons = /**
     * Esconde los botones de todas las tablas
     * @param {?} show indicar si se muestran o no todos los botones de las tablas
     * @return {?}
     */
    function (show) {
        this.emitVisibilityAllButtons$.next(show);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVdDOzs7SUFWQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQixtQ0FBNEI7O0lBQzVCLGdEQUFrRDs7QUFHcEQ7SUFnQkU7UUFaQSxXQUFNLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQy9ELHlCQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCw4QkFBeUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzNELDZCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDM0MsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztJQUU5QixDQUFDO0lBRWpCOztPQUVHOzs7OztJQUNILGdEQUFTOzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNILHVEQUFnQjs7Ozs7OztJQUFoQixVQUFpQixXQUF3QixFQUFFLG9CQUFxQztRQUFyQyxxQ0FBQSxFQUFBLDRCQUFxQztRQUM5RSxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEY7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3JFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDakQsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3hCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksV0FBVyxDQUFDLEtBQUssS0FBSyxJQUFJO2dCQUM1QixNQUFNLHFCQUFxQixDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLFdBQVcsQ0FBQyxVQUFVLEtBQUssSUFBSTtnQkFDakMsTUFBTSwwQkFBMEIsQ0FBQztZQUNuQyxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILCtDQUFROzs7OztJQUFSLFVBQVMsS0FBc0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsOENBQU87Ozs7O0lBQVAsVUFBUSxLQUFzQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELHFEQUFjOzs7O0lBQWQsVUFBZSxNQUFtQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUFFO0lBQ3hDLENBQUM7SUFHRDs7O09BR0c7Ozs7OztJQUNILDZEQUFzQjs7Ozs7SUFBdEIsVUFBdUIsS0FBcUI7UUFDMUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0Q7OztPQUdHOzs7Ozs7SUFDSCxpRUFBMEI7Ozs7O0lBQTFCLFVBQTJCLElBQVk7UUFDckMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkF6RkYsVUFBVTs7OztJQTJGWCxtQ0FBQztDQUFBLEFBM0ZELElBMkZDO1NBMUZZLDRCQUE0Qjs7O0lBR3ZDLDhDQUErQzs7SUFDL0Msa0RBQTZDOzs7OztJQUU3Qyw2REFBK0Q7O0lBQy9ELDREQUFpRTs7Ozs7SUFFakUsaUVBQTJEOztJQUMzRCxnRUFBeUU7O0lBRXpFLGlEQUEyQzs7SUFDM0Msb0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSwgQWRkUm93QnV0dG9uLCBDb25maWdSb3dTdHlsZXN9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXZlbnREZXBlbmRlbmN5fSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RhYmxlIHtcclxuICBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LFxyXG4gIGlzUmVtb3RlOiBib29sZWFuLFxyXG4gIGRhdGFTb3VyY2U/OiBBcnJheTxhbnk+LFxyXG4gIGNvdW50PzogbnVtYmVyLFxyXG4gIG9yZGVyPzogbnVtYmVyLFxyXG4gIHNob3dUaXRsZT86IGJvb2xlYW4sXHJcbiAgaW5kZXhSb3dTZWxlY3Q/OiBudW1iZXIsXHJcbiAgaXNEcmFnZ2VkPzogQm9vbGVhbixcclxuICBhZGRSb3dCdXR0b24/OiBBZGRSb3dCdXR0b24sXHJcbiAgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbj86IEFycmF5PENvbmZpZ1Jvd1N0eWxlcz5cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSB7XHJcblxyXG5cclxuICB0YWJsZXM6IFN1YmplY3Q8Q29uZmlnVGFibGVbXT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGluZm9UYWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPiA9IG5ldyBBcnJheSgpO1xyXG4gIFxyXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlCdXR0b24kID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIGVtaXRWaXNpYmlsaXR5QnV0dG9uID0gdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMgPSB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGVtaXRUb3RhbCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0TmV4dFBhZ2UgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldG9ybmEgdW4gT2JzZXJ2YWJsZTxDb25maWdUYWJsZVtdPlxyXG4gICAqL1xyXG4gIGdldFRhYmxlcygpOiBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+IHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBsYXMgZGVwZW5kZW5jaWFzLCBhZ3JlbmRvIGxhIHRhYmxhIHF1ZSBlbnZpYW4gZW4gZWwgb3JkZW4gY29ycmVzcG9uZGllbnRlIG8gYWwgZmluYWwuXHJcbiAgICogVGFtYmnDqW4gcmVtdWV2ZSBsYXMgZGVwZW5kZWNpYXMgcXVlIGhheSBhcGFydGlyIGRlIGxhIHRhYmxhIHNlZ3VuIHNlIGluZGlxdWUgZW4gZWwgcGFyYW1ldHJvLlxyXG4gICAqIEBwYXJhbSBjb25maWdUYWJsZSBPYmpldG8gcXVlIGNvbnRpZW5lIGxhIGNvbmZpZ3VyYWNpw7NuIHBhcmEgbGEgdGFibGEuXHJcbiAgICogQHBhcmFtIHdpdGhSZW1vdmVEZXBlbmRlbmN5IGJvb2xlYW4gcG9yIGRlZmVjdG8gZXMgZmFsc2UsIHNpIGVzICd0cnVlJyBpbmRpY2EgcXVlIHJlbXVldmEgbGFzIGRlcGVuZGVuY2lhcyBhcGFydGlyIGRlIGVsLlxyXG4gICAqL1xyXG4gIHVwZGF0ZURlcGVuZGVuY3koY29uZmlnVGFibGU6IENvbmZpZ1RhYmxlLCB3aXRoUmVtb3ZlRGVwZW5kZW5jeTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAod2l0aFJlbW92ZURlcGVuZGVuY3kpIHtcclxuICAgICAgdGhpcy5pbmZvVGFibGVzID0gdGhpcy5pbmZvVGFibGVzLnNsaWNlKDAsICFjb25maWdUYWJsZS5vcmRlciA/IDAgOiBjb25maWdUYWJsZS5vcmRlcik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWNvbmZpZ1RhYmxlLm9yZGVyIHx8IGNvbmZpZ1RhYmxlLm9yZGVyID49IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGgpIHtcclxuICAgICAgY29uZmlnVGFibGUub3JkZXIgPSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZ1RhYmxlLm9yZGVyXSA9IGNvbmZpZ1RhYmxlO1xyXG4gICAgaWYgKGNvbmZpZ1RhYmxlLmlzUmVtb3RlKSB7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UgPSBudWxsO1xyXG4gICAgICBpZiAoY29uZmlnVGFibGUuY291bnQgPT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgXCJoYWNlIGZhbHRhIGVsIGNvdW50XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9PT0gbnVsbClcclxuICAgICAgICB0aHJvdyBcImhhY2UgZmFsdGEgZWwgZGF0YVNvdXJjZVwiO1xyXG4gICAgICBjb25maWdUYWJsZS5jb3VudCA9IGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIHRvdGFsIGNvbiBsYSBpbmZvcm1hY2nDs24gcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYSBcclxuICAgKi9cclxuICBzZXRUb3RhbChldmVudDogRXZlbnREZXBlbmRlbmN5KSB7XHJcbiAgICB0aGlzLmVtaXRUb3RhbC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSBhZ3JlZ2FyIHBhZ2luYSBjb24gbGEgcGFnaW5hIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXHJcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcclxuICAgKi9cclxuICBhZGRQYWdlKGV2ZW50OiBFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SW5kZXhSb3coY29uZmlnOiBDb25maWdUYWJsZSkge1xyXG4gICAgaWYgKHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdKSB7XHJcbiAgICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdLmluZGV4Um93U2VsZWN0ID0gY29uZmlnLmluZGV4Um93U2VsZWN0O1xyXG4gICAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7IH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBNdWVzdHJhIG8gZXNjb25kZSBlbCBib3RvbiB1bmEgdGFibGEgZW4gZXNwZWNpZmljb1xyXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiB0cnVlIG8gZmFsc2VcclxuICAgKi9cclxuICBjaGFuZ2VWaXNpYmlsaXR5QnV0dG9uKGV2ZW50OkV2ZW50RGVwZW5kZW5jeSl7XHJcbiAgICB0aGlzLmVtaXRWaXNpYmlsaXR5QnV0dG9uJC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFc2NvbmRlIGxvcyBib3RvbmVzIGRlIHRvZGFzIGxhcyB0YWJsYXNcclxuICAgKiBAcGFyYW0gc2hvdyBpbmRpY2FyIHNpIHNlIG11ZXN0cmFuIG8gbm8gdG9kb3MgbG9zIGJvdG9uZXMgZGUgbGFzIHRhYmxhc1xyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlBbGxCdXR0b25zKHNob3c6Ym9vbGVhbil7XHJcbiAgICB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQubmV4dChzaG93KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
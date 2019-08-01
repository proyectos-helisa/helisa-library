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
    /** @type {?|undefined} */
    ConfigTable.prototype.isCellSelection;
}
var DependencyTableHelisaService = /** @class */ (function () {
    function DependencyTableHelisaService() {
        this.tables = new Subject();
        this.infoTables = new Array();
        this.emitVisibilityButton$ = new Subject();
        this.emitVisibilityButton = this.emitVisibilityButton$.asObservable();
        this.emitVisibilityAllButtons$ = new Subject();
        this.emitVisibilityAllButtons = this.emitVisibilityAllButtons$.asObservable();
        this.emitIsCellSelection$ = new Subject();
        this.emitIsCellSelection = this.emitIsCellSelection$.asObservable();
        this.emitChangeColumns$ = new Subject();
        this.emitChangeColumns = this.emitChangeColumns$.asObservable();
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
    /**
     * Para habilitar el manejo de selección de celda
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    /**
     * Para habilitar el manejo de selección de celda
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeisCellSelection = /**
     * Para habilitar el manejo de selección de celda
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    function (event) {
        this.emitIsCellSelection$.next(event);
    };
    /**
    * Para habilitar el cambio de columnas
    * @param event para indicar el index de la tabla y en "data" columnas
    */
    /**
     * Para habilitar el cambio de columnas
     * @param {?} event para indicar el index de la tabla y en "data" columnas
     * @return {?}
     */
    DependencyTableHelisaService.prototype.changeChangeColumns = /**
     * Para habilitar el cambio de columnas
     * @param {?} event para indicar el index de la tabla y en "data" columnas
     * @return {?}
     */
    function (event) {
        this.emitChangeColumns$.next(event);
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
    /**
     * @type {?}
     * @private
     */
    DependencyTableHelisaService.prototype.emitIsCellSelection$;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitIsCellSelection;
    /**
     * @type {?}
     * @private
     */
    DependencyTableHelisaService.prototype.emitChangeColumns$;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitChangeColumns;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitTotal;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitNextPage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVlDOzs7SUFYQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQixtQ0FBNEI7O0lBQzVCLGdEQUFtRDs7SUFDbkQsc0NBQXlCOztBQUczQjtJQXNCRTtRQWxCQSxXQUFNLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQy9ELHlCQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCw4QkFBeUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzNELDZCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqRSx5QkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUM5RCx3QkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDNUQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNELGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUMzQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO0lBRTlCLENBQUM7SUFFakI7O09BRUc7Ozs7O0lBQ0gsZ0RBQVM7Ozs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsdURBQWdCOzs7Ozs7O0lBQWhCLFVBQWlCLFdBQXdCLEVBQUUsb0JBQXFDO1FBQXJDLHFDQUFBLEVBQUEsNEJBQXFDO1FBQzlFLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckUsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUNqRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUk7Z0JBQzVCLE1BQU0scUJBQXFCLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksV0FBVyxDQUFDLFVBQVUsS0FBSyxJQUFJO2dCQUNqQyxNQUFNLDBCQUEwQixDQUFDO1lBQ25DLFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsK0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFzQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw4Q0FBTzs7Ozs7SUFBUCxVQUFRLEtBQXNCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQscURBQWM7Ozs7SUFBZCxVQUFlLE1BQW1CO1FBQ2hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQUU7SUFDeEMsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7O0lBQ0gsNkRBQXNCOzs7OztJQUF0QixVQUF1QixLQUFxQjtRQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRDs7O09BR0c7Ozs7OztJQUNILGlFQUEwQjs7Ozs7SUFBMUIsVUFBMkIsSUFBWTtRQUNyQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDREQUFxQjs7Ozs7SUFBckIsVUFBc0IsS0FBcUI7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUE7OztNQUdFOzs7Ozs7SUFDSCwwREFBbUI7Ozs7O0lBQW5CLFVBQW9CLEtBQXFCO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBL0dGLFVBQVU7Ozs7SUFpSFgsbUNBQUM7Q0FBQSxBQWpIRCxJQWlIQztTQWhIWSw0QkFBNEI7OztJQUd2Qyw4Q0FBK0M7O0lBQy9DLGtEQUE2Qzs7Ozs7SUFFN0MsNkRBQStEOztJQUMvRCw0REFBaUU7Ozs7O0lBRWpFLGlFQUEyRDs7SUFDM0QsZ0VBQXlFOzs7OztJQUV6RSw0REFBOEQ7O0lBQzlELDJEQUErRDs7Ozs7SUFFL0QsMERBQTREOztJQUM1RCx5REFBMkQ7O0lBRTNELGlEQUEyQzs7SUFDM0Msb0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSwgQWRkUm93QnV0dG9uLCBDb25maWdSb3dTdHlsZXN9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXZlbnREZXBlbmRlbmN5fSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RhYmxlIHtcclxuICBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LFxyXG4gIGlzUmVtb3RlOiBib29sZWFuLFxyXG4gIGRhdGFTb3VyY2U/OiBBcnJheTxhbnk+LFxyXG4gIGNvdW50PzogbnVtYmVyLFxyXG4gIG9yZGVyPzogbnVtYmVyLFxyXG4gIHNob3dUaXRsZT86IGJvb2xlYW4sXHJcbiAgaW5kZXhSb3dTZWxlY3Q/OiBudW1iZXIsXHJcbiAgaXNEcmFnZ2VkPzogYm9vbGVhbixcclxuICBhZGRSb3dCdXR0b24/OiBBZGRSb3dCdXR0b24sXHJcbiAgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbj86IEFycmF5PENvbmZpZ1Jvd1N0eWxlcz4sXHJcbiAgaXNDZWxsU2VsZWN0aW9uPzogYm9vbGVhblxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcblxyXG4gIHRhYmxlczogU3ViamVjdDxDb25maWdUYWJsZVtdPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgaW5mb1RhYmxlczogQXJyYXk8Q29uZmlnVGFibGU+ID0gbmV3IEFycmF5KCk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUJ1dHRvbiQgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdFZpc2liaWxpdHlCdXR0b24gPSB0aGlzLmVtaXRWaXNpYmlsaXR5QnV0dG9uJC5hc09ic2VydmFibGUoKTtcclxuICBcclxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIGVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyA9IHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0SXNDZWxsU2VsZWN0aW9uJCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0SXNDZWxsU2VsZWN0aW9uID0gdGhpcy5lbWl0SXNDZWxsU2VsZWN0aW9uJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlQ29sdW1ucyQgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdENoYW5nZUNvbHVtbnMgPSB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZW1pdFRvdGFsID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIGVtaXROZXh0UGFnZSA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSB1biBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+XHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCk6IE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGxhcyBkZXBlbmRlbmNpYXMsIGFncmVuZG8gbGEgdGFibGEgcXVlIGVudmlhbiBlbiBlbCBvcmRlbiBjb3JyZXNwb25kaWVudGUgbyBhbCBmaW5hbC5cclxuICAgKiBUYW1iacOpbiByZW11ZXZlIGxhcyBkZXBlbmRlY2lhcyBxdWUgaGF5IGFwYXJ0aXIgZGUgbGEgdGFibGEgc2VndW4gc2UgaW5kaXF1ZSBlbiBlbCBwYXJhbWV0cm8uXHJcbiAgICogQHBhcmFtIGNvbmZpZ1RhYmxlIE9iamV0byBxdWUgY29udGllbmUgbGEgY29uZmlndXJhY2nDs24gcGFyYSBsYSB0YWJsYS5cclxuICAgKiBAcGFyYW0gd2l0aFJlbW92ZURlcGVuZGVuY3kgYm9vbGVhbiBwb3IgZGVmZWN0byBlcyBmYWxzZSwgc2kgZXMgJ3RydWUnIGluZGljYSBxdWUgcmVtdWV2YSBsYXMgZGVwZW5kZW5jaWFzIGFwYXJ0aXIgZGUgZWwuXHJcbiAgICovXHJcbiAgdXBkYXRlRGVwZW5kZW5jeShjb25maWdUYWJsZTogQ29uZmlnVGFibGUsIHdpdGhSZW1vdmVEZXBlbmRlbmN5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICh3aXRoUmVtb3ZlRGVwZW5kZW5jeSkge1xyXG4gICAgICB0aGlzLmluZm9UYWJsZXMgPSB0aGlzLmluZm9UYWJsZXMuc2xpY2UoMCwgIWNvbmZpZ1RhYmxlLm9yZGVyID8gMCA6IGNvbmZpZ1RhYmxlLm9yZGVyKTtcclxuICAgIH1cclxuICAgIGlmICghY29uZmlnVGFibGUub3JkZXIgfHwgY29uZmlnVGFibGUub3JkZXIgPj0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aCkge1xyXG4gICAgICBjb25maWdUYWJsZS5vcmRlciA9IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnVGFibGUub3JkZXJdID0gY29uZmlnVGFibGU7XHJcbiAgICBpZiAoY29uZmlnVGFibGUuaXNSZW1vdGUpIHtcclxuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5jb3VudCA9PT0gbnVsbClcclxuICAgICAgICB0aHJvdyBcImhhY2UgZmFsdGEgZWwgY291bnRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5kYXRhU291cmNlID09PSBudWxsKVxyXG4gICAgICAgIHRocm93IFwiaGFjZSBmYWx0YSBlbCBkYXRhU291cmNlXCI7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLmNvdW50ID0gY29uZmlnVGFibGUuZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgdG90YWwgY29uIGxhIGluZm9ybWFjacOzbiBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hIFxyXG4gICAqL1xyXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIGFncmVnYXIgcGFnaW5hIGNvbiBsYSBwYWdpbmEgcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIGFkZFBhZ2UoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbmRleFJvdyhjb25maWc6IENvbmZpZ1RhYmxlKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0pIHtcclxuICAgICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0uaW5kZXhSb3dTZWxlY3QgPSBjb25maWcuaW5kZXhSb3dTZWxlY3Q7XHJcbiAgICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTsgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIE11ZXN0cmEgbyBlc2NvbmRlIGVsIGJvdG9uIHVuYSB0YWJsYSBlbiBlc3BlY2lmaWNvXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oZXZlbnQ6RXZlbnREZXBlbmRlbmN5KXtcclxuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEVzY29uZGUgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xyXG4gICAqIEBwYXJhbSBzaG93IGluZGljYXIgc2kgc2UgbXVlc3RyYW4gbyBubyB0b2RvcyBsb3MgYm90b25lcyBkZSBsYXMgdGFibGFzXHJcbiAgICovXHJcbiAgY2hhbmdlVmlzaWJpbGl0eUFsbEJ1dHRvbnMoc2hvdzpib29sZWFuKXtcclxuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5uZXh0KHNob3cpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFcclxuICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgdHJ1ZSBvIGZhbHNlIFxyXG4gICAqL1xyXG4gIGNoYW5nZWlzQ2VsbFNlbGVjdGlvbihldmVudDpFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdElzQ2VsbFNlbGVjdGlvbiQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICAgLyoqXHJcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgY2FtYmlvIGRlIGNvbHVtbmFzXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIGNvbHVtbmFzIFxyXG4gICAqL1xyXG4gIGNoYW5nZUNoYW5nZUNvbHVtbnMoZXZlbnQ6RXZlbnREZXBlbmRlbmN5KSB7XHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
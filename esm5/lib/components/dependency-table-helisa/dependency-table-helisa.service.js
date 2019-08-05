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
            this.infoTables = this.infoTables.splice(!configTable.order ? 0 : configTable.order, this.infoTables.length);
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
    DependencyTableHelisaService.prototype.changeColumnsByTable = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVlDOzs7SUFYQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQixtQ0FBNEI7O0lBQzVCLGdEQUFtRDs7SUFDbkQsc0NBQXlCOztBQUczQjtJQXNCRTtRQWxCQSxXQUFNLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQy9ELHlCQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCw4QkFBeUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzNELDZCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqRSx5QkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUM5RCx3QkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDNUQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNELGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUMzQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO0lBRTlCLENBQUM7SUFFakI7O09BRUc7Ozs7O0lBQ0gsZ0RBQVM7Ozs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsdURBQWdCOzs7Ozs7O0lBQWhCLFVBQWlCLFdBQXdCLEVBQUUsb0JBQXFDO1FBQXJDLHFDQUFBLEVBQUEsNEJBQXFDO1FBQzlFLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlHO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNyRSxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ2pELElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN4QixXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSTtnQkFDNUIsTUFBTSxxQkFBcUIsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxXQUFXLENBQUMsVUFBVSxLQUFLLElBQUk7Z0JBQ2pDLE1BQU0sMEJBQTBCLENBQUM7WUFDbkMsV0FBVyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQXNCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDhDQUFPOzs7OztJQUFQLFVBQVEsS0FBc0I7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxxREFBYzs7OztJQUFkLFVBQWUsTUFBbUI7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FBRTtJQUN4QyxDQUFDO0lBR0Q7OztPQUdHOzs7Ozs7SUFDSCw2REFBc0I7Ozs7O0lBQXRCLFVBQXVCLEtBQXFCO1FBQzFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7O0lBQ0gsaUVBQTBCOzs7OztJQUExQixVQUEyQixJQUFZO1FBQ3JDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNERBQXFCOzs7OztJQUFyQixVQUFzQixLQUFxQjtRQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFQTs7O01BR0U7Ozs7OztJQUNILDJEQUFvQjs7Ozs7SUFBcEIsVUFBcUIsS0FBcUI7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkEvR0YsVUFBVTs7OztJQWlIWCxtQ0FBQztDQUFBLEFBakhELElBaUhDO1NBaEhZLDRCQUE0Qjs7O0lBR3ZDLDhDQUErQzs7SUFDL0Msa0RBQTZDOzs7OztJQUU3Qyw2REFBK0Q7O0lBQy9ELDREQUFpRTs7Ozs7SUFFakUsaUVBQTJEOztJQUMzRCxnRUFBeUU7Ozs7O0lBRXpFLDREQUE4RDs7SUFDOUQsMkRBQStEOzs7OztJQUUvRCwwREFBNEQ7O0lBQzVELHlEQUEyRDs7SUFFM0QsaURBQTJDOztJQUMzQyxvREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0NvbHVtbkNvbmZpZywgUmVxdWVzdFRhYmxlSGVsaXNhLCBBZGRSb3dCdXR0b24sIENvbmZpZ1Jvd1N0eWxlc30gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFdmVudERlcGVuZGVuY3l9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVGFibGUge1xyXG4gIGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sXHJcbiAgaXNSZW1vdGU6IGJvb2xlYW4sXHJcbiAgZGF0YVNvdXJjZT86IEFycmF5PGFueT4sXHJcbiAgY291bnQ/OiBudW1iZXIsXHJcbiAgb3JkZXI/OiBudW1iZXIsXHJcbiAgc2hvd1RpdGxlPzogYm9vbGVhbixcclxuICBpbmRleFJvd1NlbGVjdD86IG51bWJlcixcclxuICBpc0RyYWdnZWQ/OiBib29sZWFuLFxyXG4gIGFkZFJvd0J1dHRvbj86IEFkZFJvd0J1dHRvbixcclxuICBjb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uPzogQXJyYXk8Q29uZmlnUm93U3R5bGVzPixcclxuICBpc0NlbGxTZWxlY3Rpb24/OiBib29sZWFuXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2Uge1xyXG5cclxuXHJcbiAgdGFibGVzOiBTdWJqZWN0PENvbmZpZ1RhYmxlW10+ID0gbmV3IFN1YmplY3QoKTtcclxuICBpbmZvVGFibGVzOiBBcnJheTxDb25maWdUYWJsZT4gPSBuZXcgQXJyYXkoKTtcclxuICBcclxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QnV0dG9uJCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0VmlzaWJpbGl0eUJ1dHRvbiA9IHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIFxyXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zID0gdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIGVtaXRJc0NlbGxTZWxlY3Rpb24kID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIGVtaXRJc0NlbGxTZWxlY3Rpb24gPSB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VDb2x1bW5zJCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0Q2hhbmdlQ29sdW1ucyA9IHRoaXMuZW1pdENoYW5nZUNvbHVtbnMkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBlbWl0VG90YWwgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdE5leHRQYWdlID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIHVuIE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKTogT2JzZXJ2YWJsZTxDb25maWdUYWJsZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgbGFzIGRlcGVuZGVuY2lhcywgYWdyZW5kbyBsYSB0YWJsYSBxdWUgZW52aWFuIGVuIGVsIG9yZGVuIGNvcnJlc3BvbmRpZW50ZSBvIGFsIGZpbmFsLlxyXG4gICAqIFRhbWJpw6luIHJlbXVldmUgbGFzIGRlcGVuZGVjaWFzIHF1ZSBoYXkgYXBhcnRpciBkZSBsYSB0YWJsYSBzZWd1biBzZSBpbmRpcXVlIGVuIGVsIHBhcmFtZXRyby5cclxuICAgKiBAcGFyYW0gY29uZmlnVGFibGUgT2JqZXRvIHF1ZSBjb250aWVuZSBsYSBjb25maWd1cmFjacOzbiBwYXJhIGxhIHRhYmxhLlxyXG4gICAqIEBwYXJhbSB3aXRoUmVtb3ZlRGVwZW5kZW5jeSBib29sZWFuIHBvciBkZWZlY3RvIGVzIGZhbHNlLCBzaSBlcyAndHJ1ZScgaW5kaWNhIHF1ZSByZW11ZXZhIGxhcyBkZXBlbmRlbmNpYXMgYXBhcnRpciBkZSBlbC5cclxuICAgKi9cclxuICB1cGRhdGVEZXBlbmRlbmN5KGNvbmZpZ1RhYmxlOiBDb25maWdUYWJsZSwgd2l0aFJlbW92ZURlcGVuZGVuY3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHdpdGhSZW1vdmVEZXBlbmRlbmN5KSB7XHJcbiAgICAgIHRoaXMuaW5mb1RhYmxlcyA9IHRoaXMuaW5mb1RhYmxlcy5zcGxpY2UoIWNvbmZpZ1RhYmxlLm9yZGVyID8gMCA6IGNvbmZpZ1RhYmxlLm9yZGVyLCB0aGlzLmluZm9UYWJsZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGlmICghY29uZmlnVGFibGUub3JkZXIgfHwgY29uZmlnVGFibGUub3JkZXIgPj0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aCkge1xyXG4gICAgICBjb25maWdUYWJsZS5vcmRlciA9IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnVGFibGUub3JkZXJdID0gY29uZmlnVGFibGU7XHJcbiAgICBpZiAoY29uZmlnVGFibGUuaXNSZW1vdGUpIHtcclxuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5jb3VudCA9PT0gbnVsbClcclxuICAgICAgICB0aHJvdyBcImhhY2UgZmFsdGEgZWwgY291bnRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5kYXRhU291cmNlID09PSBudWxsKVxyXG4gICAgICAgIHRocm93IFwiaGFjZSBmYWx0YSBlbCBkYXRhU291cmNlXCI7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLmNvdW50ID0gY29uZmlnVGFibGUuZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgdG90YWwgY29uIGxhIGluZm9ybWFjacOzbiBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hIFxyXG4gICAqL1xyXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIGFncmVnYXIgcGFnaW5hIGNvbiBsYSBwYWdpbmEgcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIGFkZFBhZ2UoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbmRleFJvdyhjb25maWc6IENvbmZpZ1RhYmxlKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0pIHtcclxuICAgICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0uaW5kZXhSb3dTZWxlY3QgPSBjb25maWcuaW5kZXhSb3dTZWxlY3Q7XHJcbiAgICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTsgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIE11ZXN0cmEgbyBlc2NvbmRlIGVsIGJvdG9uIHVuYSB0YWJsYSBlbiBlc3BlY2lmaWNvXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oZXZlbnQ6RXZlbnREZXBlbmRlbmN5KXtcclxuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEVzY29uZGUgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xyXG4gICAqIEBwYXJhbSBzaG93IGluZGljYXIgc2kgc2UgbXVlc3RyYW4gbyBubyB0b2RvcyBsb3MgYm90b25lcyBkZSBsYXMgdGFibGFzXHJcbiAgICovXHJcbiAgY2hhbmdlVmlzaWJpbGl0eUFsbEJ1dHRvbnMoc2hvdzpib29sZWFuKXtcclxuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5uZXh0KHNob3cpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFcclxuICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgdHJ1ZSBvIGZhbHNlIFxyXG4gICAqL1xyXG4gIGNoYW5nZWlzQ2VsbFNlbGVjdGlvbihldmVudDpFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdElzQ2VsbFNlbGVjdGlvbiQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICAgLyoqXHJcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgY2FtYmlvIGRlIGNvbHVtbmFzXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIGNvbHVtbmFzIFxyXG4gICAqL1xyXG4gIGNoYW5nZUNvbHVtbnNCeVRhYmxlKGV2ZW50OkV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
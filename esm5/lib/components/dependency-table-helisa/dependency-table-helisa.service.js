/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 * @template T
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
    /** @type {?|undefined} */
    ConfigTable.prototype.addBookButton;
}
/**
 * @template T
 */
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
            if (configTable.count === null) {
                throw new Error('hace falta el count');
            }
        }
        else {
            if (configTable.dataSource === null) {
                throw new Error('hace falta el dataSource');
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7OztBQUk1RCxpQ0FhQzs7O0lBWkMsOEJBQTZCOztJQUM3QiwrQkFBa0I7O0lBQ2xCLGlDQUFzQjs7SUFDdEIsNEJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsZ0NBQW9COztJQUNwQixxQ0FBd0I7O0lBQ3hCLGdDQUFvQjs7SUFDcEIsbUNBQTRCOztJQUM1QixnREFBc0Q7O0lBQ3RELHNDQUEwQjs7SUFDMUIsb0NBQXdCOzs7OztBQUcxQjtJQXNCRTtRQWxCQSxXQUFNLEdBQThCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUEwQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLDBCQUFxQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztRQUMzRyx5QkFBb0IsR0FBeUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9GLDhCQUF5QixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzdFLDZCQUF3QixHQUF3QixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEYseUJBQW9CLEdBQXNDLElBQUksT0FBTyxFQUE0QixDQUFDO1FBQzFHLHdCQUFtQixHQUF5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0YsdUJBQWtCLEdBQTZDLElBQUksT0FBTyxFQUFtQyxDQUFDO1FBQ3RILHNCQUFpQixHQUFn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QXJCLFVBQXNCLEtBQStCO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVBOzs7T0FHRzs7Ozs7O0lBQ0osMkRBQW9COzs7OztJQUFwQixVQUFzQixLQUFzQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQWxIRixVQUFVOzs7O0lBb0hYLG1DQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FuSFksNEJBQTRCOzs7SUFHdkMsOENBQWtEOztJQUNsRCxrREFBZ0Q7Ozs7O0lBRWhELDZEQUEyRzs7SUFDM0csNERBQXVHOzs7OztJQUV2RyxpRUFBNkU7O0lBQzdFLGdFQUE4Rjs7Ozs7SUFFOUYsNERBQTBHOztJQUMxRywyREFBcUc7Ozs7O0lBRXJHLDBEQUFzSDs7SUFDdEgseURBQXdHOztJQUV4RyxpREFBeUc7O0lBQ3pHLG9EQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Q29sdW1uQ29uZmlnLCBBZGRSb3dCdXR0b24sIENvbmZpZ1Jvd1N0eWxlcywgVG90YWxUYWJsZUhlbGlzYX0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFdmVudERlcGVuZGVuY3l9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVGFibGU8VD4ge1xyXG4gIGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbiAgaXNSZW1vdGU6IGJvb2xlYW47XHJcbiAgZGF0YVNvdXJjZT86IEFycmF5PFQ+O1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG4gIHNob3dUaXRsZT86IGJvb2xlYW47XHJcbiAgaW5kZXhSb3dTZWxlY3Q/OiBudW1iZXI7XHJcbiAgaXNEcmFnZ2VkPzogYm9vbGVhbjtcclxuICBhZGRSb3dCdXR0b24/OiBBZGRSb3dCdXR0b247XHJcbiAgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbj86IEFycmF5PENvbmZpZ1Jvd1N0eWxlczxUPj47XHJcbiAgaXNDZWxsU2VsZWN0aW9uPzogYm9vbGVhbjtcclxuICBhZGRCb29rQnV0dG9uPzogYm9vbGVhbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTxUPiB7XHJcblxyXG5cclxuICB0YWJsZXM6IFN1YmplY3Q8Q29uZmlnVGFibGU8VD5bXT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGluZm9UYWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPFQ+PiA9IG5ldyBBcnJheSgpO1xyXG5cclxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QnV0dG9uJDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PigpO1xyXG4gIGVtaXRWaXNpYmlsaXR5QnV0dG9uOiBPYnNlcnZhYmxlPEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSB0aGlzLmVtaXRWaXNpYmlsaXR5QnV0dG9uJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnM6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgZW1pdElzQ2VsbFNlbGVjdGlvbiQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4oKTtcclxuICBlbWl0SXNDZWxsU2VsZWN0aW9uOiBPYnNlcnZhYmxlPEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VDb2x1bW5zJDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4+KCk7XHJcbiAgZW1pdENoYW5nZUNvbHVtbnM6IE9ic2VydmFibGU8RXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPj4gPSB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZW1pdFRvdGFsOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxUb3RhbFRhYmxlSGVsaXNhPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4+KCk7XHJcbiAgZW1pdE5leHRQYWdlOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxUW10+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxUW10+PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIHVuIE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKTogT2JzZXJ2YWJsZTxDb25maWdUYWJsZTxUPltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgbGFzIGRlcGVuZGVuY2lhcywgYWdyZW5kbyBsYSB0YWJsYSBxdWUgZW52aWFuIGVuIGVsIG9yZGVuIGNvcnJlc3BvbmRpZW50ZSBvIGFsIGZpbmFsLlxyXG4gICAqIFRhbWJpw6luIHJlbXVldmUgbGFzIGRlcGVuZGVjaWFzIHF1ZSBoYXkgYXBhcnRpciBkZSBsYSB0YWJsYSBzZWd1biBzZSBpbmRpcXVlIGVuIGVsIHBhcmFtZXRyby5cclxuICAgKiBAcGFyYW0gY29uZmlnVGFibGUgT2JqZXRvIHF1ZSBjb250aWVuZSBsYSBjb25maWd1cmFjacOzbiBwYXJhIGxhIHRhYmxhLlxyXG4gICAqIEBwYXJhbSB3aXRoUmVtb3ZlRGVwZW5kZW5jeSBib29sZWFuIHBvciBkZWZlY3RvIGVzIGZhbHNlLCBzaSBlcyAndHJ1ZScgaW5kaWNhIHF1ZSByZW11ZXZhIGxhcyBkZXBlbmRlbmNpYXMgYXBhcnRpciBkZSBlbC5cclxuICAgKi9cclxuICB1cGRhdGVEZXBlbmRlbmN5KGNvbmZpZ1RhYmxlOiBDb25maWdUYWJsZTxUPiwgd2l0aFJlbW92ZURlcGVuZGVuY3k6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKHdpdGhSZW1vdmVEZXBlbmRlbmN5KSB7XHJcbiAgICAgIHRoaXMuaW5mb1RhYmxlcyA9IHRoaXMuaW5mb1RhYmxlcy5zbGljZSgwLCAhY29uZmlnVGFibGUub3JkZXIgPyAwIDogY29uZmlnVGFibGUub3JkZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjb25maWdUYWJsZS5vcmRlciB8fCBjb25maWdUYWJsZS5vcmRlciA+PSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLm9yZGVyID0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWdUYWJsZS5vcmRlcl0gPSBjb25maWdUYWJsZTtcclxuICAgIGlmIChjb25maWdUYWJsZS5pc1JlbW90ZSkge1xyXG4gICAgICBjb25maWdUYWJsZS5kYXRhU291cmNlID0gbnVsbDtcclxuICAgICAgaWYgKGNvbmZpZ1RhYmxlLmNvdW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYWNlIGZhbHRhIGVsIGNvdW50Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5kYXRhU291cmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYWNlIGZhbHRhIGVsIGRhdGFTb3VyY2UnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25maWdUYWJsZS5jb3VudCA9IGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIHRvdGFsIGNvbiBsYSBpbmZvcm1hY2nDs24gcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIGFncmVnYXIgcGFnaW5hIGNvbiBsYSBwYWdpbmEgcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIGFkZFBhZ2UoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUW10+KTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEluZGV4Um93KGNvbmZpZzogQ29uZmlnVGFibGU8VD4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXSkge1xyXG4gICAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXS5pbmRleFJvd1NlbGVjdCA9IGNvbmZpZy5pbmRleFJvd1NlbGVjdDtcclxuICAgICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIE11ZXN0cmEgbyBlc2NvbmRlIGVsIGJvdG9uIHVuYSB0YWJsYSBlbiBlc3BlY2lmaWNvXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQge1xyXG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRXNjb25kZSBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXHJcbiAgICogQHBhcmFtIHNob3cgaW5kaWNhciBzaSBzZSBtdWVzdHJhbiBvIG5vIHRvZG9zIGxvcyBib3RvbmVzIGRlIGxhcyB0YWJsYXNcclxuICAgKi9cclxuICBjaGFuZ2VWaXNpYmlsaXR5QWxsQnV0dG9ucyhzaG93OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQubmV4dChzaG93KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcmEgaGFiaWxpdGFyIGVsIG1hbmVqbyBkZSBzZWxlY2Npw7NuIGRlIGNlbGRhXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxyXG4gICAqL1xyXG4gIGNoYW5nZWlzQ2VsbFNlbGVjdGlvbihldmVudDogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQYXJhIGhhYmlsaXRhciBlbCBjYW1iaW8gZGUgY29sdW1uYXNcclxuICAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIGNvbHVtbmFzXHJcbiAgICAqL1xyXG4gIGNoYW5nZUNvbHVtbnNCeVRhYmxlKCBldmVudDogRXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPik6IHZvaWQge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
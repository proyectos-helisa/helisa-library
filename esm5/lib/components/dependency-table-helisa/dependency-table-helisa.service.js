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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7OztBQUk1RCxpQ0FhQzs7O0lBWkMsOEJBQTZCOztJQUM3QiwrQkFBa0I7O0lBQ2xCLGlDQUFzQjs7SUFDdEIsNEJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsZ0NBQW9COztJQUNwQixxQ0FBd0I7O0lBQ3hCLGdDQUFvQjs7SUFDcEIsbUNBQTRCOztJQUM1QixnREFBc0Q7O0lBQ3RELHNDQUEwQjs7SUFDMUIsb0NBQXdCOzs7OztBQUcxQjtJQXNCRTtRQWxCQSxXQUFNLEdBQThCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUEwQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLDBCQUFxQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztRQUMzRyx5QkFBb0IsR0FBeUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9GLDhCQUF5QixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzdFLDZCQUF3QixHQUF3QixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEYseUJBQW9CLEdBQXNDLElBQUksT0FBTyxFQUE0QixDQUFDO1FBQzFHLHdCQUFtQixHQUF5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0YsdUJBQWtCLEdBQTZDLElBQUksT0FBTyxFQUFtQyxDQUFDO1FBQ3RILHNCQUFpQixHQUFn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QXJCLFVBQXNCLEtBQStCO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVBOzs7T0FHRzs7Ozs7O0lBQ0osMkRBQW9COzs7OztJQUFwQixVQUFzQixLQUFzQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQWxIRixVQUFVOzs7O0lBb0hYLG1DQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FuSFksNEJBQTRCOzs7SUFHdkMsOENBQWtEOztJQUNsRCxrREFBZ0Q7Ozs7O0lBRWhELDZEQUEyRzs7SUFDM0csNERBQXVHOzs7OztJQUV2RyxpRUFBNkU7O0lBQzdFLGdFQUE4Rjs7Ozs7SUFFOUYsNERBQTBHOztJQUMxRywyREFBcUc7Ozs7O0lBRXJHLDBEQUFzSDs7SUFDdEgseURBQXdHOztJQUV4RyxpREFBeUc7O0lBQ3pHLG9EQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb2x1bW5Db25maWcsIEFkZFJvd0J1dHRvbiwgQ29uZmlnUm93U3R5bGVzLCBUb3RhbFRhYmxlSGVsaXNhfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudERlcGVuZGVuY3l9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdUYWJsZTxUPiB7XG4gIGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG4gIGlzUmVtb3RlOiBib29sZWFuO1xuICBkYXRhU291cmNlPzogQXJyYXk8VD47XG4gIGNvdW50PzogbnVtYmVyO1xuICBvcmRlcj86IG51bWJlcjtcbiAgc2hvd1RpdGxlPzogYm9vbGVhbjtcbiAgaW5kZXhSb3dTZWxlY3Q/OiBudW1iZXI7XG4gIGlzRHJhZ2dlZD86IGJvb2xlYW47XG4gIGFkZFJvd0J1dHRvbj86IEFkZFJvd0J1dHRvbjtcbiAgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbj86IEFycmF5PENvbmZpZ1Jvd1N0eWxlczxUPj47XG4gIGlzQ2VsbFNlbGVjdGlvbj86IGJvb2xlYW47XG4gIGFkZEJvb2tCdXR0b24/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTxUPiB7XG5cblxuICB0YWJsZXM6IFN1YmplY3Q8Q29uZmlnVGFibGU8VD5bXT4gPSBuZXcgU3ViamVjdCgpO1xuICBpbmZvVGFibGVzOiBBcnJheTxDb25maWdUYWJsZTxUPj4gPSBuZXcgQXJyYXkoKTtcblxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QnV0dG9uJDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PigpO1xuICBlbWl0VmlzaWJpbGl0eUJ1dHRvbjogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZW1pdElzQ2VsbFNlbGVjdGlvbiQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4oKTtcbiAgZW1pdElzQ2VsbFNlbGVjdGlvbjogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gdGhpcy5lbWl0SXNDZWxsU2VsZWN0aW9uJC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGVtaXRDaGFuZ2VDb2x1bW5zJDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4+KCk7XG4gIGVtaXRDaGFuZ2VDb2x1bW5zOiBPYnNlcnZhYmxlPEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4+ID0gdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZW1pdFRvdGFsOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxUb3RhbFRhYmxlSGVsaXNhPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4+KCk7XG4gIGVtaXROZXh0UGFnZTogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VFtdPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VFtdPj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiByZXRvcm5hIHVuIE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT5cbiAgICovXG4gIGdldFRhYmxlcygpOiBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlPFQ+W10+IHtcbiAgICByZXR1cm4gdGhpcy50YWJsZXM7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXphIGxhcyBkZXBlbmRlbmNpYXMsIGFncmVuZG8gbGEgdGFibGEgcXVlIGVudmlhbiBlbiBlbCBvcmRlbiBjb3JyZXNwb25kaWVudGUgbyBhbCBmaW5hbC5cbiAgICogVGFtYmnDqW4gcmVtdWV2ZSBsYXMgZGVwZW5kZWNpYXMgcXVlIGhheSBhcGFydGlyIGRlIGxhIHRhYmxhIHNlZ3VuIHNlIGluZGlxdWUgZW4gZWwgcGFyYW1ldHJvLlxuICAgKiBAcGFyYW0gY29uZmlnVGFibGUgT2JqZXRvIHF1ZSBjb250aWVuZSBsYSBjb25maWd1cmFjacOzbiBwYXJhIGxhIHRhYmxhLlxuICAgKiBAcGFyYW0gd2l0aFJlbW92ZURlcGVuZGVuY3kgYm9vbGVhbiBwb3IgZGVmZWN0byBlcyBmYWxzZSwgc2kgZXMgJ3RydWUnIGluZGljYSBxdWUgcmVtdWV2YSBsYXMgZGVwZW5kZW5jaWFzIGFwYXJ0aXIgZGUgZWwuXG4gICAqL1xuICB1cGRhdGVEZXBlbmRlbmN5KGNvbmZpZ1RhYmxlOiBDb25maWdUYWJsZTxUPiwgd2l0aFJlbW92ZURlcGVuZGVuY3k6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh3aXRoUmVtb3ZlRGVwZW5kZW5jeSkge1xuICAgICAgdGhpcy5pbmZvVGFibGVzID0gdGhpcy5pbmZvVGFibGVzLnNsaWNlKDAsICFjb25maWdUYWJsZS5vcmRlciA/IDAgOiBjb25maWdUYWJsZS5vcmRlcik7XG4gICAgfVxuICAgIGlmICghY29uZmlnVGFibGUub3JkZXIgfHwgY29uZmlnVGFibGUub3JkZXIgPj0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aCkge1xuICAgICAgY29uZmlnVGFibGUub3JkZXIgPSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnVGFibGUub3JkZXJdID0gY29uZmlnVGFibGU7XG4gICAgaWYgKGNvbmZpZ1RhYmxlLmlzUmVtb3RlKSB7XG4gICAgICBjb25maWdUYWJsZS5kYXRhU291cmNlID0gbnVsbDtcbiAgICAgIGlmIChjb25maWdUYWJsZS5jb3VudCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hhY2UgZmFsdGEgZWwgY291bnQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYWNlIGZhbHRhIGVsIGRhdGFTb3VyY2UnKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZ1RhYmxlLmNvdW50ID0gY29uZmlnVGFibGUuZGF0YVNvdXJjZS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgdG90YWwgY29uIGxhIGluZm9ybWFjacOzbiBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxuICAgKi9cbiAgc2V0VG90YWwoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUb3RhbFRhYmxlSGVsaXNhPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdFRvdGFsLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSBhZ3JlZ2FyIHBhZ2luYSBjb24gbGEgcGFnaW5hIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hXG4gICAqL1xuICBhZGRQYWdlKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VFtdPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgc2VsZWN0SW5kZXhSb3coY29uZmlnOiBDb25maWdUYWJsZTxUPik6IHZvaWQge1xuICAgIGlmICh0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXSkge1xuICAgICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0uaW5kZXhSb3dTZWxlY3QgPSBjb25maWcuaW5kZXhSb3dTZWxlY3Q7XG4gICAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogTXVlc3RyYSBvIGVzY29uZGUgZWwgYm90b24gdW5hIHRhYmxhIGVuIGVzcGVjaWZpY29cbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxuICAgKi9cbiAgY2hhbmdlVmlzaWJpbGl0eUJ1dHRvbihldmVudDogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQubmV4dChldmVudCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFc2NvbmRlIGxvcyBib3RvbmVzIGRlIHRvZGFzIGxhcyB0YWJsYXNcbiAgICogQHBhcmFtIHNob3cgaW5kaWNhciBzaSBzZSBtdWVzdHJhbiBvIG5vIHRvZG9zIGxvcyBib3RvbmVzIGRlIGxhcyB0YWJsYXNcbiAgICovXG4gIGNoYW5nZVZpc2liaWxpdHlBbGxCdXR0b25zKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQubmV4dChzaG93KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJhIGhhYmlsaXRhciBlbCBtYW5lam8gZGUgc2VsZWNjacOzbiBkZSBjZWxkYVxuICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgdHJ1ZSBvIGZhbHNlXG4gICAqL1xuICBjaGFuZ2Vpc0NlbGxTZWxlY3Rpb24oZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdElzQ2VsbFNlbGVjdGlvbiQubmV4dChldmVudCk7XG4gIH1cblxuICAgLyoqXG4gICAgKiBQYXJhIGhhYmlsaXRhciBlbCBjYW1iaW8gZGUgY29sdW1uYXNcbiAgICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiBjb2x1bW5hc1xuICAgICovXG4gIGNoYW5nZUNvbHVtbnNCeVRhYmxlKCBldmVudDogRXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdENoYW5nZUNvbHVtbnMkLm5leHQoZXZlbnQpO1xuICB9XG5cbn1cbiJdfQ==
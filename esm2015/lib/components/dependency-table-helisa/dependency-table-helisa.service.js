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
export class DependencyTableHelisaService {
    constructor() {
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
    /**
     * Para habilitar el manejo de selección de celda
     * @param {?} event para indicar el index de la tabla y en "data" true o false
     * @return {?}
     */
    changeisCellSelection(event) {
        this.emitIsCellSelection$.next(event);
    }
    /**
     * Para habilitar el cambio de columnas
     * @param {?} event para indicar el index de la tabla y en "data" columnas
     * @return {?}
     */
    changeColumnsByTable(event) {
        this.emitChangeColumns$.next(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7OztBQUk1RCxpQ0FhQzs7O0lBWkMsOEJBQTZCOztJQUM3QiwrQkFBa0I7O0lBQ2xCLGlDQUFzQjs7SUFDdEIsNEJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsZ0NBQW9COztJQUNwQixxQ0FBd0I7O0lBQ3hCLGdDQUFvQjs7SUFDcEIsbUNBQTRCOztJQUM1QixnREFBc0Q7O0lBQ3RELHNDQUEwQjs7SUFDMUIsb0NBQXdCOzs7OztBQUkxQixNQUFNLE9BQU8sNEJBQTRCO0lBcUJ2QztRQWxCQSxXQUFNLEdBQThCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUEwQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLDBCQUFxQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztRQUMzRyx5QkFBb0IsR0FBeUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9GLDhCQUF5QixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzdFLDZCQUF3QixHQUF3QixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEYseUJBQW9CLEdBQXNDLElBQUksT0FBTyxFQUE0QixDQUFDO1FBQzFHLHdCQUFtQixHQUF5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0YsdUJBQWtCLEdBQTZDLElBQUksT0FBTyxFQUFtQyxDQUFD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Qzs7O1lBbEhGLFVBQVU7Ozs7OztJQUlULDhDQUFrRDs7SUFDbEQsa0RBQWdEOzs7OztJQUVoRCw2REFBMkc7O0lBQzNHLDREQUF1Rzs7Ozs7SUFFdkcsaUVBQTZFOztJQUM3RSxnRUFBOEY7Ozs7O0lBRTlGLDREQUEwRzs7SUFDMUcsMkRBQXFHOzs7OztJQUVyRywwREFBc0g7O0lBQ3RILHlEQUF3Rzs7SUFFeEcsaURBQXlHOztJQUN6RyxvREFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q29sdW1uQ29uZmlnLCBBZGRSb3dCdXR0b24sIENvbmZpZ1Jvd1N0eWxlcywgVG90YWxUYWJsZUhlbGlzYX0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXZlbnREZXBlbmRlbmN5fSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVGFibGU8VD4ge1xuICBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+O1xuICBpc1JlbW90ZTogYm9vbGVhbjtcbiAgZGF0YVNvdXJjZT86IEFycmF5PFQ+O1xuICBjb3VudD86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7XG4gIHNob3dUaXRsZT86IGJvb2xlYW47XG4gIGluZGV4Um93U2VsZWN0PzogbnVtYmVyO1xuICBpc0RyYWdnZWQ/OiBib29sZWFuO1xuICBhZGRSb3dCdXR0b24/OiBBZGRSb3dCdXR0b247XG4gIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4/OiBBcnJheTxDb25maWdSb3dTdHlsZXM8VD4+O1xuICBpc0NlbGxTZWxlY3Rpb24/OiBib29sZWFuO1xuICBhZGRCb29rQnV0dG9uPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xuXG5cbiAgdGFibGVzOiBTdWJqZWN0PENvbmZpZ1RhYmxlPFQ+W10+ID0gbmV3IFN1YmplY3QoKTtcbiAgaW5mb1RhYmxlczogQXJyYXk8Q29uZmlnVGFibGU8VD4+ID0gbmV3IEFycmF5KCk7XG5cbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUJ1dHRvbiQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4oKTtcbiAgZW1pdFZpc2liaWxpdHlCdXR0b246IE9ic2VydmFibGU8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIGVtaXRWaXNpYmlsaXR5QWxsQnV0dG9uczogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGVtaXRJc0NlbGxTZWxlY3Rpb24kOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+KCk7XG4gIGVtaXRJc0NlbGxTZWxlY3Rpb246IE9ic2VydmFibGU8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IHRoaXMuZW1pdElzQ2VsbFNlbGVjdGlvbiQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlQ29sdW1ucyQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PigpO1xuICBlbWl0Q2hhbmdlQ29sdW1uczogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PiA9IHRoaXMuZW1pdENoYW5nZUNvbHVtbnMkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGVtaXRUb3RhbDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+PigpO1xuICBlbWl0TmV4dFBhZ2U6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRbXT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRbXT4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogcmV0b3JuYSB1biBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+XG4gICAqL1xuICBnZXRUYWJsZXMoKTogT2JzZXJ2YWJsZTxDb25maWdUYWJsZTxUPltdPiB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGl6YSBsYXMgZGVwZW5kZW5jaWFzLCBhZ3JlbmRvIGxhIHRhYmxhIHF1ZSBlbnZpYW4gZW4gZWwgb3JkZW4gY29ycmVzcG9uZGllbnRlIG8gYWwgZmluYWwuXG4gICAqIFRhbWJpw6luIHJlbXVldmUgbGFzIGRlcGVuZGVjaWFzIHF1ZSBoYXkgYXBhcnRpciBkZSBsYSB0YWJsYSBzZWd1biBzZSBpbmRpcXVlIGVuIGVsIHBhcmFtZXRyby5cbiAgICogQHBhcmFtIGNvbmZpZ1RhYmxlIE9iamV0byBxdWUgY29udGllbmUgbGEgY29uZmlndXJhY2nDs24gcGFyYSBsYSB0YWJsYS5cbiAgICogQHBhcmFtIHdpdGhSZW1vdmVEZXBlbmRlbmN5IGJvb2xlYW4gcG9yIGRlZmVjdG8gZXMgZmFsc2UsIHNpIGVzICd0cnVlJyBpbmRpY2EgcXVlIHJlbXVldmEgbGFzIGRlcGVuZGVuY2lhcyBhcGFydGlyIGRlIGVsLlxuICAgKi9cbiAgdXBkYXRlRGVwZW5kZW5jeShjb25maWdUYWJsZTogQ29uZmlnVGFibGU8VD4sIHdpdGhSZW1vdmVEZXBlbmRlbmN5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAod2l0aFJlbW92ZURlcGVuZGVuY3kpIHtcbiAgICAgIHRoaXMuaW5mb1RhYmxlcyA9IHRoaXMuaW5mb1RhYmxlcy5zbGljZSgwLCAhY29uZmlnVGFibGUub3JkZXIgPyAwIDogY29uZmlnVGFibGUub3JkZXIpO1xuICAgIH1cbiAgICBpZiAoIWNvbmZpZ1RhYmxlLm9yZGVyIHx8IGNvbmZpZ1RhYmxlLm9yZGVyID49IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZ1RhYmxlLm9yZGVyID0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZ1RhYmxlLm9yZGVyXSA9IGNvbmZpZ1RhYmxlO1xuICAgIGlmIChjb25maWdUYWJsZS5pc1JlbW90ZSkge1xuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XG4gICAgICBpZiAoY29uZmlnVGFibGUuY291bnQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYWNlIGZhbHRhIGVsIGNvdW50Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWdUYWJsZS5kYXRhU291cmNlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFjZSBmYWx0YSBlbCBkYXRhU291cmNlJyk7XG4gICAgICB9XG4gICAgICBjb25maWdUYWJsZS5jb3VudCA9IGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIHRvdGFsIGNvbiBsYSBpbmZvcm1hY2nDs24gcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcbiAgICovXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRUb3RhbC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgYWdyZWdhciBwYWdpbmEgY29uIGxhIHBhZ2luYSBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxuICAgKi9cbiAgYWRkUGFnZShldmVudDogRXZlbnREZXBlbmRlbmN5PFRbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIHNlbGVjdEluZGV4Um93KGNvbmZpZzogQ29uZmlnVGFibGU8VD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0pIHtcbiAgICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdLmluZGV4Um93U2VsZWN0ID0gY29uZmlnLmluZGV4Um93U2VsZWN0O1xuICAgICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIE11ZXN0cmEgbyBlc2NvbmRlIGVsIGJvdG9uIHVuYSB0YWJsYSBlbiBlc3BlY2lmaWNvXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiB0cnVlIG8gZmFsc2VcbiAgICovXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLm5leHQoZXZlbnQpO1xuICB9XG5cblxuICAvKipcbiAgICogRXNjb25kZSBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXG4gICAqIEBwYXJhbSBzaG93IGluZGljYXIgc2kgc2UgbXVlc3RyYW4gbyBubyB0b2RvcyBsb3MgYm90b25lcyBkZSBsYXMgdGFibGFzXG4gICAqL1xuICBjaGFuZ2VWaXNpYmlsaXR5QWxsQnV0dG9ucyhzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLm5leHQoc2hvdyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxuICAgKi9cbiAgY2hhbmdlaXNDZWxsU2VsZWN0aW9uKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgIC8qKlxuICAgICogUGFyYSBoYWJpbGl0YXIgZWwgY2FtYmlvIGRlIGNvbHVtbmFzXG4gICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgY29sdW1uYXNcbiAgICAqL1xuICBjaGFuZ2VDb2x1bW5zQnlUYWJsZSggZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5uZXh0KGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=
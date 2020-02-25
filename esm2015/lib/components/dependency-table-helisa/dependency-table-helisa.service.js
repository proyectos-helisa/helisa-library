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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7OztBQUk1RCxpQ0FhQzs7O0lBWkMsOEJBQTZCOztJQUM3QiwrQkFBa0I7O0lBQ2xCLGlDQUFzQjs7SUFDdEIsNEJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsZ0NBQW9COztJQUNwQixxQ0FBd0I7O0lBQ3hCLGdDQUFvQjs7SUFDcEIsbUNBQTRCOztJQUM1QixnREFBc0Q7O0lBQ3RELHNDQUEwQjs7SUFDMUIsb0NBQXdCOzs7OztBQUkxQixNQUFNLE9BQU8sNEJBQTRCO0lBcUJ2QztRQWxCQSxXQUFNLEdBQThCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUEwQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLDBCQUFxQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztRQUMzRyx5QkFBb0IsR0FBeUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9GLDhCQUF5QixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzdFLDZCQUF3QixHQUF3QixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEYseUJBQW9CLEdBQXNDLElBQUksT0FBTyxFQUE0QixDQUFDO1FBQzFHLHdCQUFtQixHQUF5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0YsdUJBQWtCLEdBQTZDLElBQUksT0FBTyxFQUFtQyxDQUFD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Qzs7O1lBbEhGLFVBQVU7Ozs7OztJQUlULDhDQUFrRDs7SUFDbEQsa0RBQWdEOzs7OztJQUVoRCw2REFBMkc7O0lBQzNHLDREQUF1Rzs7Ozs7SUFFdkcsaUVBQTZFOztJQUM3RSxnRUFBOEY7Ozs7O0lBRTlGLDREQUEwRzs7SUFDMUcsMkRBQXFHOzs7OztJQUVyRywwREFBc0g7O0lBQ3RILHlEQUF3Rzs7SUFFeEcsaURBQXlHOztJQUN6RyxvREFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0NvbHVtbkNvbmZpZywgQWRkUm93QnV0dG9uLCBDb25maWdSb3dTdHlsZXMsIFRvdGFsVGFibGVIZWxpc2F9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXZlbnREZXBlbmRlbmN5fSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RhYmxlPFQ+IHtcclxuICBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+O1xyXG4gIGlzUmVtb3RlOiBib29sZWFuO1xyXG4gIGRhdGFTb3VyY2U/OiBBcnJheTxUPjtcclxuICBjb3VudD86IG51bWJlcjtcclxuICBvcmRlcj86IG51bWJlcjtcclxuICBzaG93VGl0bGU/OiBib29sZWFuO1xyXG4gIGluZGV4Um93U2VsZWN0PzogbnVtYmVyO1xyXG4gIGlzRHJhZ2dlZD86IGJvb2xlYW47XHJcbiAgYWRkUm93QnV0dG9uPzogQWRkUm93QnV0dG9uO1xyXG4gIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4/OiBBcnJheTxDb25maWdSb3dTdHlsZXM8VD4+O1xyXG4gIGlzQ2VsbFNlbGVjdGlvbj86IGJvb2xlYW47XHJcbiAgYWRkQm9va0J1dHRvbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG5cclxuXHJcbiAgdGFibGVzOiBTdWJqZWN0PENvbmZpZ1RhYmxlPFQ+W10+ID0gbmV3IFN1YmplY3QoKTtcclxuICBpbmZvVGFibGVzOiBBcnJheTxDb25maWdUYWJsZTxUPj4gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUJ1dHRvbiQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4oKTtcclxuICBlbWl0VmlzaWJpbGl0eUJ1dHRvbjogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIGVtaXRJc0NlbGxTZWxlY3Rpb24kOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+KCk7XHJcbiAgZW1pdElzQ2VsbFNlbGVjdGlvbjogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gdGhpcy5lbWl0SXNDZWxsU2VsZWN0aW9uJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlQ29sdW1ucyQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PigpO1xyXG4gIGVtaXRDaGFuZ2VDb2x1bW5zOiBPYnNlcnZhYmxlPEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4+ID0gdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGVtaXRUb3RhbDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+PigpO1xyXG4gIGVtaXROZXh0UGFnZTogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VFtdPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VFtdPj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSB1biBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+XHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCk6IE9ic2VydmFibGU8Q29uZmlnVGFibGU8VD5bXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGxhcyBkZXBlbmRlbmNpYXMsIGFncmVuZG8gbGEgdGFibGEgcXVlIGVudmlhbiBlbiBlbCBvcmRlbiBjb3JyZXNwb25kaWVudGUgbyBhbCBmaW5hbC5cclxuICAgKiBUYW1iacOpbiByZW11ZXZlIGxhcyBkZXBlbmRlY2lhcyBxdWUgaGF5IGFwYXJ0aXIgZGUgbGEgdGFibGEgc2VndW4gc2UgaW5kaXF1ZSBlbiBlbCBwYXJhbWV0cm8uXHJcbiAgICogQHBhcmFtIGNvbmZpZ1RhYmxlIE9iamV0byBxdWUgY29udGllbmUgbGEgY29uZmlndXJhY2nDs24gcGFyYSBsYSB0YWJsYS5cclxuICAgKiBAcGFyYW0gd2l0aFJlbW92ZURlcGVuZGVuY3kgYm9vbGVhbiBwb3IgZGVmZWN0byBlcyBmYWxzZSwgc2kgZXMgJ3RydWUnIGluZGljYSBxdWUgcmVtdWV2YSBsYXMgZGVwZW5kZW5jaWFzIGFwYXJ0aXIgZGUgZWwuXHJcbiAgICovXHJcbiAgdXBkYXRlRGVwZW5kZW5jeShjb25maWdUYWJsZTogQ29uZmlnVGFibGU8VD4sIHdpdGhSZW1vdmVEZXBlbmRlbmN5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmICh3aXRoUmVtb3ZlRGVwZW5kZW5jeSkge1xyXG4gICAgICB0aGlzLmluZm9UYWJsZXMgPSB0aGlzLmluZm9UYWJsZXMuc2xpY2UoMCwgIWNvbmZpZ1RhYmxlLm9yZGVyID8gMCA6IGNvbmZpZ1RhYmxlLm9yZGVyKTtcclxuICAgIH1cclxuICAgIGlmICghY29uZmlnVGFibGUub3JkZXIgfHwgY29uZmlnVGFibGUub3JkZXIgPj0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aCkge1xyXG4gICAgICBjb25maWdUYWJsZS5vcmRlciA9IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnVGFibGUub3JkZXJdID0gY29uZmlnVGFibGU7XHJcbiAgICBpZiAoY29uZmlnVGFibGUuaXNSZW1vdGUpIHtcclxuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5jb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFjZSBmYWx0YSBlbCBjb3VudCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFjZSBmYWx0YSBlbCBkYXRhU291cmNlJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uZmlnVGFibGUuY291bnQgPSBjb25maWdUYWJsZS5kYXRhU291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSB0b3RhbCBjb24gbGEgaW5mb3JtYWNpw7NuIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXHJcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcclxuICAgKi9cclxuICBzZXRUb3RhbChldmVudDogRXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+KTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRUb3RhbC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSBhZ3JlZ2FyIHBhZ2luYSBjb24gbGEgcGFnaW5hIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXHJcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcclxuICAgKi9cclxuICBhZGRQYWdlKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VFtdPik6IHZvaWQge1xyXG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbmRleFJvdyhjb25maWc6IENvbmZpZ1RhYmxlPFQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0pIHtcclxuICAgICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0uaW5kZXhSb3dTZWxlY3QgPSBjb25maWcuaW5kZXhSb3dTZWxlY3Q7XHJcbiAgICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBNdWVzdHJhIG8gZXNjb25kZSBlbCBib3RvbiB1bmEgdGFibGEgZW4gZXNwZWNpZmljb1xyXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiB0cnVlIG8gZmFsc2VcclxuICAgKi9cclxuICBjaGFuZ2VWaXNpYmlsaXR5QnV0dG9uKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pOiB2b2lkIHtcclxuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEVzY29uZGUgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xyXG4gICAqIEBwYXJhbSBzaG93IGluZGljYXIgc2kgc2UgbXVlc3RyYW4gbyBubyB0b2RvcyBsb3MgYm90b25lcyBkZSBsYXMgdGFibGFzXHJcbiAgICovXHJcbiAgY2hhbmdlVmlzaWJpbGl0eUFsbEJ1dHRvbnMoc2hvdzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLm5leHQoc2hvdyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJhIGhhYmlsaXRhciBlbCBtYW5lam8gZGUgc2VsZWNjacOzbiBkZSBjZWxkYVxyXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiB0cnVlIG8gZmFsc2VcclxuICAgKi9cclxuICBjaGFuZ2Vpc0NlbGxTZWxlY3Rpb24oZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQge1xyXG4gICAgdGhpcy5lbWl0SXNDZWxsU2VsZWN0aW9uJC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gICAvKipcclxuICAgICogUGFyYSBoYWJpbGl0YXIgZWwgY2FtYmlvIGRlIGNvbHVtbmFzXHJcbiAgICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiBjb2x1bW5hc1xyXG4gICAgKi9cclxuICBjaGFuZ2VDb2x1bW5zQnlUYWJsZSggZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4pOiB2b2lkIHtcclxuICAgIHRoaXMuZW1pdENoYW5nZUNvbHVtbnMkLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
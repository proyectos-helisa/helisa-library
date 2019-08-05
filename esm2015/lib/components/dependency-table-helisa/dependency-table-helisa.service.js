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
            this.infoTables = this.infoTables.slice(!configTable.order ? 0 : configTable.order, this.infoTables.length);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVlDOzs7SUFYQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQixtQ0FBNEI7O0lBQzVCLGdEQUFtRDs7SUFDbkQsc0NBQXlCOztBQUkzQixNQUFNLE9BQU8sNEJBQTRCO0lBcUJ2QztRQWxCQSxXQUFNLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQy9ELHlCQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCw4QkFBeUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzNELDZCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqRSx5QkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUM5RCx3QkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDNUQsc0JBQWlCLEdBQUcsSUFBSSxD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RCw0REFBaUU7Ozs7O0lBRWpFLGlFQUEyRDs7SUFDM0QsZ0VBQXlFOzs7OztJQUV6RSw0REFBOEQ7O0lBQzlELDJEQUErRDs7Ozs7SUFFL0QsMERBQTREOztJQUM1RCx5REFBMkQ7O0lBRTNELGlEQUEyQzs7SUFDM0Msb0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSwgQWRkUm93QnV0dG9uLCBDb25maWdSb3dTdHlsZXN9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXZlbnREZXBlbmRlbmN5fSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RhYmxlIHtcclxuICBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LFxyXG4gIGlzUmVtb3RlOiBib29sZWFuLFxyXG4gIGRhdGFTb3VyY2U/OiBBcnJheTxhbnk+LFxyXG4gIGNvdW50PzogbnVtYmVyLFxyXG4gIG9yZGVyPzogbnVtYmVyLFxyXG4gIHNob3dUaXRsZT86IGJvb2xlYW4sXHJcbiAgaW5kZXhSb3dTZWxlY3Q/OiBudW1iZXIsXHJcbiAgaXNEcmFnZ2VkPzogYm9vbGVhbixcclxuICBhZGRSb3dCdXR0b24/OiBBZGRSb3dCdXR0b24sXHJcbiAgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbj86IEFycmF5PENvbmZpZ1Jvd1N0eWxlcz4sXHJcbiAgaXNDZWxsU2VsZWN0aW9uPzogYm9vbGVhblxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcblxyXG4gIHRhYmxlczogU3ViamVjdDxDb25maWdUYWJsZVtdPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgaW5mb1RhYmxlczogQXJyYXk8Q29uZmlnVGFibGU+ID0gbmV3IEFycmF5KCk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUJ1dHRvbiQgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdFZpc2liaWxpdHlCdXR0b24gPSB0aGlzLmVtaXRWaXNpYmlsaXR5QnV0dG9uJC5hc09ic2VydmFibGUoKTtcclxuICBcclxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIGVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyA9IHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0SXNDZWxsU2VsZWN0aW9uJCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0SXNDZWxsU2VsZWN0aW9uID0gdGhpcy5lbWl0SXNDZWxsU2VsZWN0aW9uJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlQ29sdW1ucyQgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdENoYW5nZUNvbHVtbnMgPSB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZW1pdFRvdGFsID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIGVtaXROZXh0UGFnZSA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0b3JuYSB1biBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+XHJcbiAgICovXHJcbiAgZ2V0VGFibGVzKCk6IE9ic2VydmFibGU8Q29uZmlnVGFibGVbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGxhcyBkZXBlbmRlbmNpYXMsIGFncmVuZG8gbGEgdGFibGEgcXVlIGVudmlhbiBlbiBlbCBvcmRlbiBjb3JyZXNwb25kaWVudGUgbyBhbCBmaW5hbC5cclxuICAgKiBUYW1iacOpbiByZW11ZXZlIGxhcyBkZXBlbmRlY2lhcyBxdWUgaGF5IGFwYXJ0aXIgZGUgbGEgdGFibGEgc2VndW4gc2UgaW5kaXF1ZSBlbiBlbCBwYXJhbWV0cm8uXHJcbiAgICogQHBhcmFtIGNvbmZpZ1RhYmxlIE9iamV0byBxdWUgY29udGllbmUgbGEgY29uZmlndXJhY2nDs24gcGFyYSBsYSB0YWJsYS5cclxuICAgKiBAcGFyYW0gd2l0aFJlbW92ZURlcGVuZGVuY3kgYm9vbGVhbiBwb3IgZGVmZWN0byBlcyBmYWxzZSwgc2kgZXMgJ3RydWUnIGluZGljYSBxdWUgcmVtdWV2YSBsYXMgZGVwZW5kZW5jaWFzIGFwYXJ0aXIgZGUgZWwuXHJcbiAgICovXHJcbiAgdXBkYXRlRGVwZW5kZW5jeShjb25maWdUYWJsZTogQ29uZmlnVGFibGUsIHdpdGhSZW1vdmVEZXBlbmRlbmN5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICh3aXRoUmVtb3ZlRGVwZW5kZW5jeSkge1xyXG4gICAgICB0aGlzLmluZm9UYWJsZXMgPSB0aGlzLmluZm9UYWJsZXMuc2xpY2UoIWNvbmZpZ1RhYmxlLm9yZGVyID8gMCA6IGNvbmZpZ1RhYmxlLm9yZGVyLCB0aGlzLmluZm9UYWJsZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGlmICghY29uZmlnVGFibGUub3JkZXIgfHwgY29uZmlnVGFibGUub3JkZXIgPj0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aCkge1xyXG4gICAgICBjb25maWdUYWJsZS5vcmRlciA9IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnVGFibGUub3JkZXJdID0gY29uZmlnVGFibGU7XHJcbiAgICBpZiAoY29uZmlnVGFibGUuaXNSZW1vdGUpIHtcclxuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5jb3VudCA9PT0gbnVsbClcclxuICAgICAgICB0aHJvdyBcImhhY2UgZmFsdGEgZWwgY291bnRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjb25maWdUYWJsZS5kYXRhU291cmNlID09PSBudWxsKVxyXG4gICAgICAgIHRocm93IFwiaGFjZSBmYWx0YSBlbCBkYXRhU291cmNlXCI7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLmNvdW50ID0gY29uZmlnVGFibGUuZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgdG90YWwgY29uIGxhIGluZm9ybWFjacOzbiBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hIFxyXG4gICAqL1xyXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIGFncmVnYXIgcGFnaW5hIGNvbiBsYSBwYWdpbmEgcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIGFkZFBhZ2UoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbmRleFJvdyhjb25maWc6IENvbmZpZ1RhYmxlKSB7XHJcbiAgICBpZiAodGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0pIHtcclxuICAgICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0uaW5kZXhSb3dTZWxlY3QgPSBjb25maWcuaW5kZXhSb3dTZWxlY3Q7XHJcbiAgICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTsgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIE11ZXN0cmEgbyBlc2NvbmRlIGVsIGJvdG9uIHVuYSB0YWJsYSBlbiBlc3BlY2lmaWNvXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oZXZlbnQ6RXZlbnREZXBlbmRlbmN5KXtcclxuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEVzY29uZGUgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xyXG4gICAqIEBwYXJhbSBzaG93IGluZGljYXIgc2kgc2UgbXVlc3RyYW4gbyBubyB0b2RvcyBsb3MgYm90b25lcyBkZSBsYXMgdGFibGFzXHJcbiAgICovXHJcbiAgY2hhbmdlVmlzaWJpbGl0eUFsbEJ1dHRvbnMoc2hvdzpib29sZWFuKXtcclxuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5uZXh0KHNob3cpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFcclxuICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgdHJ1ZSBvIGZhbHNlIFxyXG4gICAqL1xyXG4gIGNoYW5nZWlzQ2VsbFNlbGVjdGlvbihldmVudDpFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdElzQ2VsbFNlbGVjdGlvbiQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxuICAgLyoqXHJcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgY2FtYmlvIGRlIGNvbHVtbmFzXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIGNvbHVtbmFzIFxyXG4gICAqL1xyXG4gIGNoYW5nZUNvbHVtbnNCeVRhYmxlKGV2ZW50OkV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
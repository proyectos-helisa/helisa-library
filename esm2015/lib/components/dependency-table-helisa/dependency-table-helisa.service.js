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
    changeChangeColumns(event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVlDOzs7SUFYQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQixtQ0FBNEI7O0lBQzVCLGdEQUFtRDs7SUFDbkQsc0NBQXlCOztBQUkzQixNQUFNLE9BQU8sNEJBQTRCO0lBcUJ2QztRQWxCQSxXQUFNLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQy9ELHlCQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCw4QkFBeUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzNELDZCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqRSx5QkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUM5RCx3QkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDNUQsc0JBQWlCLEdBQUcsSUFBSSxD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RUFBMkQ7O0lBQzNELGdFQUF5RTs7Ozs7SUFFekUsNERBQThEOztJQUM5RCwyREFBK0Q7Ozs7O0lBRS9ELDBEQUE0RDs7SUFDNUQseURBQTJEOztJQUUzRCxpREFBMkM7O0lBQzNDLG9EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Q29sdW1uQ29uZmlnLCBSZXF1ZXN0VGFibGVIZWxpc2EsIEFkZFJvd0J1dHRvbiwgQ29uZmlnUm93U3R5bGVzfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEV2ZW50RGVwZW5kZW5jeX0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdUYWJsZSB7XHJcbiAgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPixcclxuICBpc1JlbW90ZTogYm9vbGVhbixcclxuICBkYXRhU291cmNlPzogQXJyYXk8YW55PixcclxuICBjb3VudD86IG51bWJlcixcclxuICBvcmRlcj86IG51bWJlcixcclxuICBzaG93VGl0bGU/OiBib29sZWFuLFxyXG4gIGluZGV4Um93U2VsZWN0PzogbnVtYmVyLFxyXG4gIGlzRHJhZ2dlZD86IGJvb2xlYW4sXHJcbiAgYWRkUm93QnV0dG9uPzogQWRkUm93QnV0dG9uLFxyXG4gIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4/OiBBcnJheTxDb25maWdSb3dTdHlsZXM+LFxyXG4gIGlzQ2VsbFNlbGVjdGlvbj86IGJvb2xlYW5cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSB7XHJcblxyXG5cclxuICB0YWJsZXM6IFN1YmplY3Q8Q29uZmlnVGFibGVbXT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGluZm9UYWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPiA9IG5ldyBBcnJheSgpO1xyXG4gIFxyXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlCdXR0b24kID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIGVtaXRWaXNpYmlsaXR5QnV0dG9uID0gdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMgPSB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgZW1pdElzQ2VsbFNlbGVjdGlvbiQgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcbiAgZW1pdElzQ2VsbFNlbGVjdGlvbiA9IHRoaXMuZW1pdElzQ2VsbFNlbGVjdGlvbiQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgZW1pdENoYW5nZUNvbHVtbnMkID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PigpO1xyXG4gIGVtaXRDaGFuZ2VDb2x1bW5zID0gdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGVtaXRUb3RhbCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0TmV4dFBhZ2UgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldG9ybmEgdW4gT2JzZXJ2YWJsZTxDb25maWdUYWJsZVtdPlxyXG4gICAqL1xyXG4gIGdldFRhYmxlcygpOiBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+IHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBsYXMgZGVwZW5kZW5jaWFzLCBhZ3JlbmRvIGxhIHRhYmxhIHF1ZSBlbnZpYW4gZW4gZWwgb3JkZW4gY29ycmVzcG9uZGllbnRlIG8gYWwgZmluYWwuXHJcbiAgICogVGFtYmnDqW4gcmVtdWV2ZSBsYXMgZGVwZW5kZWNpYXMgcXVlIGhheSBhcGFydGlyIGRlIGxhIHRhYmxhIHNlZ3VuIHNlIGluZGlxdWUgZW4gZWwgcGFyYW1ldHJvLlxyXG4gICAqIEBwYXJhbSBjb25maWdUYWJsZSBPYmpldG8gcXVlIGNvbnRpZW5lIGxhIGNvbmZpZ3VyYWNpw7NuIHBhcmEgbGEgdGFibGEuXHJcbiAgICogQHBhcmFtIHdpdGhSZW1vdmVEZXBlbmRlbmN5IGJvb2xlYW4gcG9yIGRlZmVjdG8gZXMgZmFsc2UsIHNpIGVzICd0cnVlJyBpbmRpY2EgcXVlIHJlbXVldmEgbGFzIGRlcGVuZGVuY2lhcyBhcGFydGlyIGRlIGVsLlxyXG4gICAqL1xyXG4gIHVwZGF0ZURlcGVuZGVuY3koY29uZmlnVGFibGU6IENvbmZpZ1RhYmxlLCB3aXRoUmVtb3ZlRGVwZW5kZW5jeTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAod2l0aFJlbW92ZURlcGVuZGVuY3kpIHtcclxuICAgICAgdGhpcy5pbmZvVGFibGVzID0gdGhpcy5pbmZvVGFibGVzLnNsaWNlKDAsICFjb25maWdUYWJsZS5vcmRlciA/IDAgOiBjb25maWdUYWJsZS5vcmRlcik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWNvbmZpZ1RhYmxlLm9yZGVyIHx8IGNvbmZpZ1RhYmxlLm9yZGVyID49IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGgpIHtcclxuICAgICAgY29uZmlnVGFibGUub3JkZXIgPSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZ1RhYmxlLm9yZGVyXSA9IGNvbmZpZ1RhYmxlO1xyXG4gICAgaWYgKGNvbmZpZ1RhYmxlLmlzUmVtb3RlKSB7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UgPSBudWxsO1xyXG4gICAgICBpZiAoY29uZmlnVGFibGUuY291bnQgPT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgXCJoYWNlIGZhbHRhIGVsIGNvdW50XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9PT0gbnVsbClcclxuICAgICAgICB0aHJvdyBcImhhY2UgZmFsdGEgZWwgZGF0YVNvdXJjZVwiO1xyXG4gICAgICBjb25maWdUYWJsZS5jb3VudCA9IGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIHRvdGFsIGNvbiBsYSBpbmZvcm1hY2nDs24gcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYSBcclxuICAgKi9cclxuICBzZXRUb3RhbChldmVudDogRXZlbnREZXBlbmRlbmN5KSB7XHJcbiAgICB0aGlzLmVtaXRUb3RhbC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSBhZ3JlZ2FyIHBhZ2luYSBjb24gbGEgcGFnaW5hIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXHJcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcclxuICAgKi9cclxuICBhZGRQYWdlKGV2ZW50OiBFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SW5kZXhSb3coY29uZmlnOiBDb25maWdUYWJsZSkge1xyXG4gICAgaWYgKHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdKSB7XHJcbiAgICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdLmluZGV4Um93U2VsZWN0ID0gY29uZmlnLmluZGV4Um93U2VsZWN0O1xyXG4gICAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7IH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBNdWVzdHJhIG8gZXNjb25kZSBlbCBib3RvbiB1bmEgdGFibGEgZW4gZXNwZWNpZmljb1xyXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiB0cnVlIG8gZmFsc2VcclxuICAgKi9cclxuICBjaGFuZ2VWaXNpYmlsaXR5QnV0dG9uKGV2ZW50OkV2ZW50RGVwZW5kZW5jeSl7XHJcbiAgICB0aGlzLmVtaXRWaXNpYmlsaXR5QnV0dG9uJC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFc2NvbmRlIGxvcyBib3RvbmVzIGRlIHRvZGFzIGxhcyB0YWJsYXNcclxuICAgKiBAcGFyYW0gc2hvdyBpbmRpY2FyIHNpIHNlIG11ZXN0cmFuIG8gbm8gdG9kb3MgbG9zIGJvdG9uZXMgZGUgbGFzIHRhYmxhc1xyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlBbGxCdXR0b25zKHNob3c6Ym9vbGVhbil7XHJcbiAgICB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQubmV4dChzaG93KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcmEgaGFiaWxpdGFyIGVsIG1hbmVqbyBkZSBzZWxlY2Npw7NuIGRlIGNlbGRhXHJcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZSBcclxuICAgKi9cclxuICBjaGFuZ2Vpc0NlbGxTZWxlY3Rpb24oZXZlbnQ6RXZlbnREZXBlbmRlbmN5KSB7XHJcbiAgICB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAqIFBhcmEgaGFiaWxpdGFyIGVsIGNhbWJpbyBkZSBjb2x1bW5hc1xyXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiBjb2x1bW5hcyBcclxuICAgKi9cclxuICBjaGFuZ2VDaGFuZ2VDb2x1bW5zKGV2ZW50OkV2ZW50RGVwZW5kZW5jeSkge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQubmV4dChldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
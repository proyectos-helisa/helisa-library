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
}
export class DependencyTableHelisaService {
    constructor() {
        this.tables = new Subject();
        this.infoTables = new Array();
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
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitTotal;
    /** @type {?} */
    DependencyTableHelisaService.prototype.emitNextPage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTVELGlDQVVDOzs7SUFUQyw4QkFBNkI7O0lBQzdCLCtCQUFrQjs7SUFDbEIsaUNBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZixnQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQixtQ0FBMkI7O0FBSTdCLE1BQU0sT0FBTyw0QkFBNEI7SUFTdkM7UUFOQSxXQUFNLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRTdDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUMzQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO0lBRTlCLENBQUM7Ozs7O0lBS2pCLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFRRCxnQkFBZ0IsQ0FBQyxXQUF3QixFQUFFLHVCQUFnQyxLQUFLO1FBQzlFLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckUsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUNqRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUk7Z0JBQzVCLE1BQU0scUJBQXFCLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksV0FBVyxDQUFDLFVBQVUsS0FBSyxJQUFJO2dCQUNqQyxNQUFNLDBCQUEwQixDQUFDO1lBQ25DLFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBTUQsUUFBUSxDQUFDLEtBQXNCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQU1ELE9BQU8sQ0FBQyxLQUFzQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUFtQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUFFO0lBQ3hDLENBQUM7OztZQWpFRixVQUFVOzs7Ozs7SUFJVCw4Q0FBK0M7O0lBQy9DLGtEQUE2Qzs7SUFFN0MsaURBQTJDOztJQUMzQyxvREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIFJlcXVlc3RUYWJsZUhlbGlzYSwgQWRkUm93QnV0dG9uIH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFdmVudERlcGVuZGVuY3l9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVGFibGUge1xyXG4gIGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sXHJcbiAgaXNSZW1vdGU6IGJvb2xlYW4sXHJcbiAgZGF0YVNvdXJjZT86IEFycmF5PGFueT4sXHJcbiAgY291bnQ/OiBudW1iZXIsXHJcbiAgb3JkZXI/OiBudW1iZXIsXHJcbiAgc2hvd1RpdGxlPzogYm9vbGVhbixcclxuICBpbmRleFJvd1NlbGVjdD86IG51bWJlcixcclxuICBpc0RyYWdnZWQ/OiBCb29sZWFuLFxyXG4gIGFkZFJvd0J1dHRvbj86IEFkZFJvd0J1dHRvblxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcblxyXG4gIHRhYmxlczogU3ViamVjdDxDb25maWdUYWJsZVtdPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgaW5mb1RhYmxlczogQXJyYXk8Q29uZmlnVGFibGU+ID0gbmV3IEFycmF5KCk7XHJcblxyXG4gIGVtaXRUb3RhbCA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeT4oKTtcclxuICBlbWl0TmV4dFBhZ2UgPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldG9ybmEgdW4gT2JzZXJ2YWJsZTxDb25maWdUYWJsZVtdPlxyXG4gICAqL1xyXG4gIGdldFRhYmxlcygpOiBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+IHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBsYXMgZGVwZW5kZW5jaWFzLCBhZ3JlbmRvIGxhIHRhYmxhIHF1ZSBlbnZpYW4gZW4gZWwgb3JkZW4gY29ycmVzcG9uZGllbnRlIG8gYWwgZmluYWwuXHJcbiAgICogVGFtYmnDqW4gcmVtdWV2ZSBsYXMgZGVwZW5kZWNpYXMgcXVlIGhheSBhcGFydGlyIGRlIGxhIHRhYmxhIHNlZ3VuIHNlIGluZGlxdWUgZW4gZWwgcGFyYW1ldHJvLlxyXG4gICAqIEBwYXJhbSBjb25maWdUYWJsZSBPYmpldG8gcXVlIGNvbnRpZW5lIGxhIGNvbmZpZ3VyYWNpw7NuIHBhcmEgbGEgdGFibGEuXHJcbiAgICogQHBhcmFtIHdpdGhSZW1vdmVEZXBlbmRlbmN5IGJvb2xlYW4gcG9yIGRlZmVjdG8gZXMgZmFsc2UsIHNpIGVzICd0cnVlJyBpbmRpY2EgcXVlIHJlbXVldmEgbGFzIGRlcGVuZGVuY2lhcyBhcGFydGlyIGRlIGVsLlxyXG4gICAqL1xyXG4gIHVwZGF0ZURlcGVuZGVuY3koY29uZmlnVGFibGU6IENvbmZpZ1RhYmxlLCB3aXRoUmVtb3ZlRGVwZW5kZW5jeTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAod2l0aFJlbW92ZURlcGVuZGVuY3kpIHtcclxuICAgICAgdGhpcy5pbmZvVGFibGVzID0gdGhpcy5pbmZvVGFibGVzLnNsaWNlKDAsICFjb25maWdUYWJsZS5vcmRlciA/IDAgOiBjb25maWdUYWJsZS5vcmRlcik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWNvbmZpZ1RhYmxlLm9yZGVyIHx8IGNvbmZpZ1RhYmxlLm9yZGVyID49IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGgpIHtcclxuICAgICAgY29uZmlnVGFibGUub3JkZXIgPSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZ1RhYmxlLm9yZGVyXSA9IGNvbmZpZ1RhYmxlO1xyXG4gICAgaWYgKGNvbmZpZ1RhYmxlLmlzUmVtb3RlKSB7XHJcbiAgICAgIGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UgPSBudWxsO1xyXG4gICAgICBpZiAoY29uZmlnVGFibGUuY291bnQgPT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgXCJoYWNlIGZhbHRhIGVsIGNvdW50XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9PT0gbnVsbClcclxuICAgICAgICB0aHJvdyBcImhhY2UgZmFsdGEgZWwgZGF0YVNvdXJjZVwiO1xyXG4gICAgICBjb25maWdUYWJsZS5jb3VudCA9IGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIHRvdGFsIGNvbiBsYSBpbmZvcm1hY2nDs24gcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcclxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYSBcclxuICAgKi9cclxuICBzZXRUb3RhbChldmVudDogRXZlbnREZXBlbmRlbmN5KSB7XHJcbiAgICB0aGlzLmVtaXRUb3RhbC5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSBhZ3JlZ2FyIHBhZ2luYSBjb24gbGEgcGFnaW5hIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXHJcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcclxuICAgKi9cclxuICBhZGRQYWdlKGV2ZW50OiBFdmVudERlcGVuZGVuY3kpIHtcclxuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SW5kZXhSb3coY29uZmlnOiBDb25maWdUYWJsZSkge1xyXG4gICAgaWYgKHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdKSB7XHJcbiAgICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdLmluZGV4Um93U2VsZWN0ID0gY29uZmlnLmluZGV4Um93U2VsZWN0O1xyXG4gICAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7IH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
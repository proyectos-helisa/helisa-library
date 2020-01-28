/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
/**
 * @record
 * @template T
 */
export function TableHelisaServiceInfo() { }
if (false) {
    /** @type {?} */
    TableHelisaServiceInfo.prototype.obj;
    /** @type {?|undefined} */
    TableHelisaServiceInfo.prototype.table;
}
/**
 * @template T
 */
var TableHelisaService = /** @class */ (function () {
    function TableHelisaService() {
        this.emitChangeSource = new Subject();
        this.emitNextPage = new Subject();
        this.totalReturn = this.emitChangeSource.asObservable();
        this.nextPageReturn = this.emitNextPage.asObservable();
        this.emitVisibleButton$ = new Subject();
        /**
         * Observable para saber si se debe mostrar o esconder el boton de add row
         */
        this.emitVisibleButton = this.emitVisibleButton$.asObservable();
    }
    /**
     * @param {?} total
     * @param {?=} table
     * @return {?}
     */
    TableHelisaService.prototype.setTotal = /**
     * @param {?} total
     * @param {?=} table
     * @return {?}
     */
    function (total, table) {
        this.emitChangeSource.next({ obj: total, table: table });
    };
    /**
     * @param {?} page
     * @param {?=} table
     * @return {?}
     */
    TableHelisaService.prototype.addPage = /**
     * @param {?} page
     * @param {?=} table
     * @return {?}
     */
    function (page, table) {
        this.emitNextPage.next({ obj: page, table: table });
    };
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param change indicar si se muestra o no el boton de add row de la tabla
     */
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param {?} change indicar si se muestra o no el boton de add row de la tabla
     * @return {?}
     */
    TableHelisaService.prototype.changeVisibilityButton = /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param {?} change indicar si se muestra o no el boton de add row de la tabla
     * @return {?}
     */
    function (change) {
        this.emitVisibleButton$.next(change);
    };
    TableHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ TableHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
    return TableHelisaService;
}());
export { TableHelisaService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TableHelisaService.prototype.emitChangeSource;
    /**
     * @type {?}
     * @private
     */
    TableHelisaService.prototype.emitNextPage;
    /** @type {?} */
    TableHelisaService.prototype.totalReturn;
    /** @type {?} */
    TableHelisaService.prototype.nextPageReturn;
    /**
     * @type {?}
     * @private
     */
    TableHelisaService.prototype.emitVisibleButton$;
    /**
     * Observable para saber si se debe mostrar o esconder el boton de add row
     * @type {?}
     */
    TableHelisaService.prototype.emitVisibleButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFrQzs7Ozs7QUFHcEM7SUFBQTtRQUtVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUE0QyxDQUFDO1FBQzNFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQStCLENBQUM7UUFFbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBVzFDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7Ozs7UUFJcEQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBVTVEOzs7Ozs7SUF2QkMscUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUF1QixFQUFFLEtBQStCO1FBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELG9DQUFPOzs7OztJQUFQLFVBQVEsSUFBUyxFQUFFLEtBQStCO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBU0Q7OztPQUdHOzs7Ozs7SUFDSCxtREFBc0I7Ozs7O0lBQXRCLFVBQXVCLE1BQWM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFoQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzZCQVpEO0NBNENDLEFBbENELElBa0NDO1NBL0JZLGtCQUFrQjs7Ozs7O0lBRTdCLDhDQUFtRjs7Ozs7SUFDbkYsMENBQWtFOztJQUVsRSx5Q0FBbUQ7O0lBQ25ELDRDQUFrRDs7Ozs7SUFXbEQsZ0RBQW9EOzs7OztJQUlwRCwrQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7VG90YWxUYWJsZUhlbGlzYX0gZnJvbSBcIi4vdGFibGUtaGVsaXNhLmludGVyZmFjZVwiO1xuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbXBvbmVudH0gZnJvbSBcIi4vdGFibGUtaGVsaXNhLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlSGVsaXNhU2VydmljZUluZm88VD4ge1xuICBvYmo6IFQ7XG4gIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8YW55Pjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcblxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2UgPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PigpO1xuICBwcml2YXRlIGVtaXROZXh0UGFnZSA9IG5ldyBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VFtdPj4oKTtcblxuICB0b3RhbFJldHVybiA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgbmV4dFBhZ2VSZXR1cm4gPSB0aGlzLmVtaXROZXh0UGFnZS5hc09ic2VydmFibGUoKTtcblxuICBzZXRUb3RhbCh0b3RhbDogVG90YWxUYWJsZUhlbGlzYSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPikge1xuICAgIHRoaXMuZW1pdENoYW5nZVNvdXJjZS5uZXh0KHtvYmo6IHRvdGFsLCB0YWJsZTogdGFibGV9KTtcbiAgfVxuXG4gIGFkZFBhZ2UocGFnZTogVFtdLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KSB7XG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dCh7b2JqOiBwYWdlLCB0YWJsZTogdGFibGV9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBlbWl0VmlzaWJsZUJ1dHRvbiQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAvKipcbiAgICogT2JzZXJ2YWJsZSBwYXJhIHNhYmVyIHNpIHNlIGRlYmUgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIGFkZCByb3dcbiAgICovXG4gIGVtaXRWaXNpYmxlQnV0dG9uID0gdGhpcy5lbWl0VmlzaWJsZUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgLyoqXG4gICAqIHBhcmEgbW9kaWZpY2FyIGVsIHZhbG9yIGRlIHNpIHNlIG11ZXN0cmEgbyBubyBlbCBib3RvbiBkZSBhZGQgcm93IGRlIGxhIHRhYmxhXG4gICAqIEBwYXJhbSBjaGFuZ2UgaW5kaWNhciBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxuICAgKi9cbiAgY2hhbmdlVmlzaWJpbGl0eUJ1dHRvbihjaGFuZ2U6Ym9vbGVhbil7XG4gICAgdGhpcy5lbWl0VmlzaWJsZUJ1dHRvbiQubmV4dChjaGFuZ2UpO1xuICB9XG5cbn1cbiJdfQ==
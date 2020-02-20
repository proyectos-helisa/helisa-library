/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFxQzs7Ozs7QUFHdkM7SUFBQTtRQUtVLHFCQUFnQixHQUFzRCxJQUFJLE9BQU8sRUFBNEMsQ0FBQztRQUM5SCxpQkFBWSxHQUF5QyxJQUFJLE9BQU8sRUFBK0IsQ0FBQztRQUV4RyxnQkFBVyxHQUF5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekcsbUJBQWMsR0FBNEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRix1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQzs7OztRQUl0RSxzQkFBaUIsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBa0JqRjs7Ozs7O0lBaEJDLHFDQUFROzs7OztJQUFSLFVBQVMsS0FBdUIsRUFBRSxLQUE4QztRQUM5RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsb0NBQU87Ozs7O0lBQVAsVUFBUSxJQUFTLEVBQUUsS0FBK0I7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxtREFBc0I7Ozs7O0lBQXRCLFVBQXVCLE1BQWU7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkEvQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzZCQVpEO0NBMkNDLEFBakNELElBaUNDO1NBOUJZLGtCQUFrQjs7Ozs7O0lBRTdCLDhDQUFzSTs7Ozs7SUFDdEksMENBQXdHOztJQUV4Ryx5Q0FBeUc7O0lBQ3pHLDRDQUEyRjs7Ozs7SUFFM0YsZ0RBQXNFOzs7OztJQUl0RSwrQ0FBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1RvdGFsVGFibGVIZWxpc2F9IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQge1RhYmxlSGVsaXNhQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlSGVsaXNhU2VydmljZUluZm88VD4ge1xuICBvYmo6IFQ7XG4gIHRhYmxlPzoge30gfCBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcblxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2U6IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPj4gPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PigpO1xuICBwcml2YXRlIGVtaXROZXh0UGFnZTogU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+ID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PigpO1xuXG4gIHRvdGFsUmV0dXJuOiBPYnNlcnZhYmxlPFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+ID0gdGhpcy5lbWl0Q2hhbmdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBuZXh0UGFnZVJldHVybjogT2JzZXJ2YWJsZTxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+ID0gdGhpcy5lbWl0TmV4dFBhZ2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0VmlzaWJsZUJ1dHRvbiQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAvKipcbiAgICogT2JzZXJ2YWJsZSBwYXJhIHNhYmVyIHNpIHNlIGRlYmUgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIGFkZCByb3dcbiAgICovXG4gIGVtaXRWaXNpYmxlQnV0dG9uOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0VmlzaWJsZUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgc2V0VG90YWwodG90YWw6IFRvdGFsVGFibGVIZWxpc2EsIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UubmV4dCh7b2JqOiB0b3RhbCwgdGFibGV9KTtcbiAgfVxuXG4gIGFkZFBhZ2UocGFnZTogVFtdLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dCh7b2JqOiBwYWdlLCB0YWJsZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmEgbW9kaWZpY2FyIGVsIHZhbG9yIGRlIHNpIHNlIG11ZXN0cmEgbyBubyBlbCBib3RvbiBkZSBhZGQgcm93IGRlIGxhIHRhYmxhXG4gICAqIEBwYXJhbSBjaGFuZ2UgaW5kaWNhciBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxuICAgKi9cbiAgY2hhbmdlVmlzaWJpbGl0eUJ1dHRvbihjaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRWaXNpYmxlQnV0dG9uJC5uZXh0KGNoYW5nZSk7XG4gIH1cblxufVxuIl19
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
export class TableHelisaService {
    constructor() {
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
    setTotal(total, table) {
        this.emitChangeSource.next({ obj: total, table });
    }
    /**
     * @param {?} page
     * @param {?=} table
     * @return {?}
     */
    addPage(page, table) {
        this.emitNextPage.next({ obj: page, table });
    }
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param {?} change indicar si se muestra o no el boton de add row de la tabla
     * @return {?}
     */
    changeVisibilityButton(change) {
        this.emitVisibleButton$.next(change);
    }
}
TableHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ TableHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFxQzs7Ozs7QUFNdkMsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHFCQUFnQixHQUFzRCxJQUFJLE9BQU8sRUFBNEMsQ0FBQztRQUM5SCxpQkFBWSxHQUF5QyxJQUFJLE9BQU8sRUFBK0IsQ0FBQztRQUV4RyxnQkFBVyxHQUF5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekcsbUJBQWMsR0FBNEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRix1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQzs7OztRQUl0RSxzQkFBaUIsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBa0JqRjs7Ozs7O0lBaEJDLFFBQVEsQ0FBQyxLQUF1QixFQUFFLEtBQThDO1FBQzlFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVMsRUFBRSxLQUErQjtRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFNRCxzQkFBc0IsQ0FBQyxNQUFlO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBL0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFHQyw4Q0FBc0k7Ozs7O0lBQ3RJLDBDQUF3Rzs7SUFFeEcseUNBQXlHOztJQUN6Ryw0Q0FBMkY7Ozs7O0lBRTNGLGdEQUFzRTs7Ozs7SUFJdEUsK0NBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7VG90YWxUYWJsZUhlbGlzYX0gZnJvbSAnLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUPiB7XHJcbiAgb2JqOiBUO1xyXG4gIHRhYmxlPzoge30gfCBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlU291cmNlOiBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+ID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPj4oKTtcclxuICBwcml2YXRlIGVtaXROZXh0UGFnZTogU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+ID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PigpO1xyXG5cclxuICB0b3RhbFJldHVybjogT2JzZXJ2YWJsZTxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PiA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBuZXh0UGFnZVJldHVybjogT2JzZXJ2YWJsZTxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+ID0gdGhpcy5lbWl0TmV4dFBhZ2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgZW1pdFZpc2libGVCdXR0b24kOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAvKipcclxuICAgKiBPYnNlcnZhYmxlIHBhcmEgc2FiZXIgc2kgc2UgZGViZSBtb3N0cmFyIG8gZXNjb25kZXIgZWwgYm90b24gZGUgYWRkIHJvd1xyXG4gICAqL1xyXG4gIGVtaXRWaXNpYmxlQnV0dG9uOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0VmlzaWJsZUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHNldFRvdGFsKHRvdGFsOiBUb3RhbFRhYmxlSGVsaXNhLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFRvdGFsVGFibGVIZWxpc2E+KTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UubmV4dCh7b2JqOiB0b3RhbCwgdGFibGV9KTtcclxuICB9XHJcblxyXG4gIGFkZFBhZ2UocGFnZTogVFtdLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KHtvYmo6IHBhZ2UsIHRhYmxlfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBwYXJhIG1vZGlmaWNhciBlbCB2YWxvciBkZSBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxyXG4gICAqIEBwYXJhbSBjaGFuZ2UgaW5kaWNhciBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oY2hhbmdlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRWaXNpYmxlQnV0dG9uJC5uZXh0KGNoYW5nZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
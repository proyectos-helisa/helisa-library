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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFxQzs7Ozs7QUFNdkMsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHFCQUFnQixHQUFzRCxJQUFJLE9BQU8sRUFBNEMsQ0FBQztRQUM5SCxpQkFBWSxHQUF5QyxJQUFJLE9BQU8sRUFBK0IsQ0FBQztRQUV4RyxnQkFBVyxHQUF5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekcsbUJBQWMsR0FBNEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRix1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQzs7OztRQUl0RSxzQkFBaUIsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBa0JqRjs7Ozs7O0lBaEJDLFFBQVEsQ0FBQyxLQUF1QixFQUFFLEtBQThDO1FBQzlFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVMsRUFBRSxLQUErQjtRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFNRCxzQkFBc0IsQ0FBQyxNQUFlO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBL0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFHQyw4Q0FBc0k7Ozs7O0lBQ3RJLDBDQUF3Rzs7SUFFeEcseUNBQXlHOztJQUN6Ryw0Q0FBMkY7Ozs7O0lBRTNGLGdEQUFzRTs7Ozs7SUFJdEUsK0NBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtUb3RhbFRhYmxlSGVsaXNhfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFQ+IHtcbiAgb2JqOiBUO1xuICB0YWJsZT86IHt9IHwgVGFibGVIZWxpc2FDb21wb25lbnQ8VD47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhU2VydmljZTxUPiB7XG5cbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlU291cmNlOiBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+ID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPj4oKTtcbiAgcHJpdmF0ZSBlbWl0TmV4dFBhZ2U6IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PiA9IG5ldyBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VFtdPj4oKTtcblxuICB0b3RhbFJldHVybjogT2JzZXJ2YWJsZTxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PiA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgbmV4dFBhZ2VSZXR1cm46IE9ic2VydmFibGU8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PiA9IHRoaXMuZW1pdE5leHRQYWdlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZW1pdFZpc2libGVCdXR0b24kOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgLyoqXG4gICAqIE9ic2VydmFibGUgcGFyYSBzYWJlciBzaSBzZSBkZWJlIG1vc3RyYXIgbyBlc2NvbmRlciBlbCBib3RvbiBkZSBhZGQgcm93XG4gICAqL1xuICBlbWl0VmlzaWJsZUJ1dHRvbjogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuZW1pdFZpc2libGVCdXR0b24kLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHNldFRvdGFsKHRvdGFsOiBUb3RhbFRhYmxlSGVsaXNhLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFRvdGFsVGFibGVIZWxpc2E+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlU291cmNlLm5leHQoe29iajogdG90YWwsIHRhYmxlfSk7XG4gIH1cblxuICBhZGRQYWdlKHBhZ2U6IFRbXSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoe29iajogcGFnZSwgdGFibGV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhIG1vZGlmaWNhciBlbCB2YWxvciBkZSBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxuICAgKiBAcGFyYW0gY2hhbmdlIGluZGljYXIgc2kgc2UgbXVlc3RyYSBvIG5vIGVsIGJvdG9uIGRlIGFkZCByb3cgZGUgbGEgdGFibGFcbiAgICovXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oY2hhbmdlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmlzaWJsZUJ1dHRvbiQubmV4dChjaGFuZ2UpO1xuICB9XG5cbn1cbiJdfQ==
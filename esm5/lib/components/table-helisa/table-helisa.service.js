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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFrQzs7Ozs7QUFHcEM7SUFBQTtRQUtVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUE0QyxDQUFDO1FBQzNFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQStCLENBQUM7UUFFbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBVzFDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7Ozs7UUFJcEQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBVTVEOzs7Ozs7SUF2QkMscUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUF1QixFQUFFLEtBQStCO1FBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELG9DQUFPOzs7OztJQUFQLFVBQVEsSUFBUyxFQUFFLEtBQStCO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBU0Q7OztPQUdHOzs7Ozs7SUFDSCxtREFBc0I7Ozs7O0lBQXRCLFVBQXVCLE1BQWM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFoQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzZCQVpEO0NBNENDLEFBbENELElBa0NDO1NBL0JZLGtCQUFrQjs7Ozs7O0lBRTdCLDhDQUFtRjs7Ozs7SUFDbkYsMENBQWtFOztJQUVsRSx5Q0FBbUQ7O0lBQ25ELDRDQUFrRDs7Ozs7SUFXbEQsZ0RBQW9EOzs7OztJQUlwRCwrQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge1RvdGFsVGFibGVIZWxpc2F9IGZyb20gXCIuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbXBvbmVudH0gZnJvbSBcIi4vdGFibGUtaGVsaXNhLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFQ+IHtcclxuICBvYmo6IFQ7XHJcbiAgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxhbnk+O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2UgPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PigpO1xyXG4gIHByaXZhdGUgZW1pdE5leHRQYWdlID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PigpO1xyXG5cclxuICB0b3RhbFJldHVybiA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBuZXh0UGFnZVJldHVybiA9IHRoaXMuZW1pdE5leHRQYWdlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBzZXRUb3RhbCh0b3RhbDogVG90YWxUYWJsZUhlbGlzYSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPikge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlU291cmNlLm5leHQoe29iajogdG90YWwsIHRhYmxlOiB0YWJsZX0pO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFnZShwYWdlOiBUW10sIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8VD4pIHtcclxuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoe29iajogcGFnZSwgdGFibGU6IHRhYmxlfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBlbWl0VmlzaWJsZUJ1dHRvbiQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIC8qKlxyXG4gICAqIE9ic2VydmFibGUgcGFyYSBzYWJlciBzaSBzZSBkZWJlIG1vc3RyYXIgbyBlc2NvbmRlciBlbCBib3RvbiBkZSBhZGQgcm93XHJcbiAgICovXHJcbiAgZW1pdFZpc2libGVCdXR0b24gPSB0aGlzLmVtaXRWaXNpYmxlQnV0dG9uJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogcGFyYSBtb2RpZmljYXIgZWwgdmFsb3IgZGUgc2kgc2UgbXVlc3RyYSBvIG5vIGVsIGJvdG9uIGRlIGFkZCByb3cgZGUgbGEgdGFibGFcclxuICAgKiBAcGFyYW0gY2hhbmdlIGluZGljYXIgc2kgc2UgbXVlc3RyYSBvIG5vIGVsIGJvdG9uIGRlIGFkZCByb3cgZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBjaGFuZ2VWaXNpYmlsaXR5QnV0dG9uKGNoYW5nZTpib29sZWFuKXtcclxuICAgIHRoaXMuZW1pdFZpc2libGVCdXR0b24kLm5leHQoY2hhbmdlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
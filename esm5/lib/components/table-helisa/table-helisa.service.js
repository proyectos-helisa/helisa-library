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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFrQzs7Ozs7QUFHcEM7SUFBQTtRQUtVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUE0QyxDQUFDO1FBQzNFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQStCLENBQUM7UUFFbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBU25EOzs7Ozs7SUFQQyxxQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQXVCLEVBQUUsS0FBK0I7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsb0NBQU87Ozs7O0lBQVAsVUFBUSxJQUFTLEVBQUUsS0FBK0I7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2dCQWpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NkJBWkQ7Q0E0QkMsQUFsQkQsSUFrQkM7U0FmWSxrQkFBa0I7Ozs7OztJQUU3Qiw4Q0FBbUY7Ozs7O0lBQ25GLDBDQUFrRTs7SUFFbEUseUNBQW1EOztJQUNuRCw0Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge1RvdGFsVGFibGVIZWxpc2F9IGZyb20gXCIuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbXBvbmVudH0gZnJvbSBcIi4vdGFibGUtaGVsaXNhLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFQ+IHtcclxuICBvYmo6IFQ7XHJcbiAgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxhbnk+O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2UgPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PigpO1xyXG4gIHByaXZhdGUgZW1pdE5leHRQYWdlID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PigpO1xyXG5cclxuICB0b3RhbFJldHVybiA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBuZXh0UGFnZVJldHVybiA9IHRoaXMuZW1pdE5leHRQYWdlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBzZXRUb3RhbCh0b3RhbDogVG90YWxUYWJsZUhlbGlzYSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPikge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlU291cmNlLm5leHQoe29iajogdG90YWwsIHRhYmxlOiB0YWJsZX0pO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFnZShwYWdlOiBUW10sIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8VD4pIHtcclxuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoe29iajogcGFnZSwgdGFibGU6IHRhYmxlfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
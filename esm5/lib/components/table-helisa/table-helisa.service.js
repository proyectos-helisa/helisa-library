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
 * @record
 */
export function TableHelisaConfig() { }
if (false) {
    /** @type {?|undefined} */
    TableHelisaConfig.prototype.selectedRow;
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
    /**
     * @param {?} configTable
     * @return {?}
     */
    TableHelisaService.prototype.setSelectedCells = /**
     * @param {?} configTable
     * @return {?}
     */
    function (configTable) {
        this.configTable = configTable;
    };
    /**
     * @return {?}
     */
    TableHelisaService.prototype.getSelectedCells = /**
     * @return {?}
     */
    function () {
        return this.configTable;
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
    /**
     * @type {?}
     * @private
     */
    TableHelisaService.prototype.configTable;
    /** @type {?} */
    TableHelisaService.prototype.totalReturn;
    /** @type {?} */
    TableHelisaService.prototype.nextPageReturn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFrQzs7Ozs7QUFHcEMsdUNBRUM7OztJQURDLHdDQUFzQjs7Ozs7QUFHeEI7SUFBQTtRQUtVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUE0QyxDQUFDO1FBQzNFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQStCLENBQUM7UUFHbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBa0JuRDs7Ozs7O0lBaEJDLHFDQUFROzs7OztJQUFSLFVBQVMsS0FBdUIsRUFBRSxLQUErQjtRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxvQ0FBTzs7Ozs7SUFBUCxVQUFRLElBQVMsRUFBRSxLQUErQjtRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsV0FBOEI7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELDZDQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQTFCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NkJBaEJEO0NBMENDLEFBNUJELElBNEJDO1NBekJZLGtCQUFrQjs7Ozs7O0lBRTdCLDhDQUFtRjs7Ozs7SUFDbkYsMENBQWtFOzs7OztJQUNsRSx5Q0FBdUM7O0lBRXZDLHlDQUFtRDs7SUFDbkQsNENBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtUb3RhbFRhYmxlSGVsaXNhfSBmcm9tIFwiLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7VGFibGVIZWxpc2FDb21wb25lbnR9IGZyb20gXCIuL3RhYmxlLWhlbGlzYS5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUPiB7XHJcbiAgb2JqOiBUO1xyXG4gIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUhlbGlzYUNvbmZpZyB7XHJcbiAgc2VsZWN0ZWRSb3c/OiBib29sZWFuO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2UgPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PigpO1xyXG4gIHByaXZhdGUgZW1pdE5leHRQYWdlID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PigpO1xyXG4gIHByaXZhdGUgY29uZmlnVGFibGU6IFRhYmxlSGVsaXNhQ29uZmlnO1xyXG5cclxuICB0b3RhbFJldHVybiA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBuZXh0UGFnZVJldHVybiA9IHRoaXMuZW1pdE5leHRQYWdlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBzZXRUb3RhbCh0b3RhbDogVG90YWxUYWJsZUhlbGlzYSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPikge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlU291cmNlLm5leHQoe29iajogdG90YWwsIHRhYmxlOiB0YWJsZX0pO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFnZShwYWdlOiBUW10sIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8VD4pIHtcclxuICAgIHRoaXMuZW1pdE5leHRQYWdlLm5leHQoe29iajogcGFnZSwgdGFibGU6IHRhYmxlfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZENlbGxzKGNvbmZpZ1RhYmxlOiBUYWJsZUhlbGlzYUNvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWdUYWJsZSA9IGNvbmZpZ1RhYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRDZWxscygpOiBUYWJsZUhlbGlzYUNvbmZpZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWdUYWJsZTtcclxuICB9XHJcbiBcclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TreeHelisaService {
    constructor() {
        // Observable string sources
        this.emitNodeSelected = new BehaviorSubject(1);
        // Observable string streams
        this.nodeSelected = this.emitNodeSelected.asObservable();
        // Observable string sources
        this.emitDataSource = new BehaviorSubject(undefined);
        // Observable string streams
        this.dataSourceObservable = this.emitDataSource.asObservable();
    }
    // Service message commands
    /**
     * @param {?} idResidentialArea
     * @return {?}
     */
    changeNodeSelected(idResidentialArea) {
        this.emitNodeSelected.next(idResidentialArea);
    }
    // Service message commands
    /**
     * @param {?} data
     * @return {?}
     */
    changeDataSource(data) {
        this.emitDataSource.next(data);
    }
}
TreeHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TreeHelisaService.ctorParameters = () => [];
/** @nocollapse */ TreeHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitNodeSelected;
    /** @type {?} */
    TreeHelisaService.prototype.nodeSelected;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitDataSource;
    /** @type {?} */
    TreeHelisaService.prototype.dataSourceObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBT2hELE1BQU0sT0FBTyxpQkFBaUI7SUFzQjFCOztRQW5CUSxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQzs7UUFFMUQsaUJBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBUzVDLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7O1FBRTlELHlCQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRMUQsQ0FBQzs7Ozs7O0lBakJELGtCQUFrQixDQUFDLGlCQUF5QjtRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBU0QsZ0JBQWdCLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUF2QkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7Ozs7Ozs7O0lBSUcsNkNBQTBEOztJQUUxRCx5Q0FBb0Q7Ozs7O0lBU3BELDJDQUE4RDs7SUFFOUQsaURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhU2VydmljZSB7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xyXG4gICAgcHJpdmF0ZSBlbWl0Tm9kZVNlbGVjdGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDEpOyAgICBcclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcclxuICAgIG5vZGVTZWxlY3RlZCA9IHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5hc09ic2VydmFibGUoKTtcclxuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xyXG4gICAgY2hhbmdlTm9kZVNlbGVjdGVkKGlkUmVzaWRlbnRpYWxBcmVhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVtaXROb2RlU2VsZWN0ZWQubmV4dChpZFJlc2lkZW50aWFsQXJlYSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXHJcbiAgICBwcml2YXRlIGVtaXREYXRhU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOb2RlPih1bmRlZmluZWQpOyAgICBcclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcclxuICAgIGRhdGFTb3VyY2VPYnNlcnZhYmxlID0gdGhpcy5lbWl0RGF0YVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xyXG4gICAgY2hhbmdlRGF0YVNvdXJjZShkYXRhOk5vZGUpIHtcclxuICAgICAgICB0aGlzLmVtaXREYXRhU291cmNlLm5leHQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICBcclxufSJdfQ==
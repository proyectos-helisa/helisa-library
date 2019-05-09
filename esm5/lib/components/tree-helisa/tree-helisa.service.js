/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var TreeHelisaService = /** @class */ (function () {
    function TreeHelisaService() {
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
    // Service message commands
    /**
     * @param {?} idResidentialArea
     * @return {?}
     */
    TreeHelisaService.prototype.changeNodeSelected = 
    // Service message commands
    /**
     * @param {?} idResidentialArea
     * @return {?}
     */
    function (idResidentialArea) {
        this.emitNodeSelected.next(idResidentialArea);
    };
    // Service message commands
    // Service message commands
    /**
     * @param {?} data
     * @return {?}
     */
    TreeHelisaService.prototype.changeDataSource = 
    // Service message commands
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.emitDataSource.next(data);
    };
    TreeHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TreeHelisaService.ctorParameters = function () { return []; };
    /** @nocollapse */ TreeHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
    return TreeHelisaService;
}());
export { TreeHelisaService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSWhEO0lBeUJJOztRQW5CUSxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQzs7UUFFMUQsaUJBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBUzVDLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7O1FBRTlELHlCQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRMUQsQ0FBQztJQWxCRCwyQkFBMkI7Ozs7OztJQUMzQiw4Q0FBa0I7Ozs7OztJQUFsQixVQUFtQixpQkFBeUI7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRRCwyQkFBMkI7Ozs7OztJQUMzQiw0Q0FBZ0I7Ozs7OztJQUFoQixVQUFpQixJQUFTO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQXZCSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Ozs0QkFQRDtDQWtDQyxBQTdCRCxJQTZCQztTQTFCWSxpQkFBaUI7Ozs7OztJQUcxQiw2Q0FBMEQ7O0lBRTFELHlDQUFvRDs7Ozs7SUFTcEQsMkNBQThEOztJQUU5RCxpREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXHJcbiAgICBwcml2YXRlIGVtaXROb2RlU2VsZWN0ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMSk7ICAgIFxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xyXG4gICAgbm9kZVNlbGVjdGVkID0gdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXHJcbiAgICBjaGFuZ2VOb2RlU2VsZWN0ZWQoaWRSZXNpZGVudGlhbEFyZWE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5uZXh0KGlkUmVzaWRlbnRpYWxBcmVhKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcclxuICAgIHByaXZhdGUgZW1pdERhdGFTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5vZGU+KHVuZGVmaW5lZCk7ICAgIFxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xyXG4gICAgZGF0YVNvdXJjZU9ic2VydmFibGUgPSB0aGlzLmVtaXREYXRhU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXHJcbiAgICBjaGFuZ2VEYXRhU291cmNlKGRhdGE6Tm9kZSkge1xyXG4gICAgICAgIHRoaXMuZW1pdERhdGFTb3VyY2UubmV4dChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG59Il19
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
        // Expand node observable
        this.emitExpandAllNodes = new BehaviorSubject(null);
        this.nodeExpand = this.emitExpandAllNodes.asObservable();
        // Collapse node observable
        this.emitCollapseAllNodes = new BehaviorSubject(null);
        this.nodeCollapse = this.emitCollapseAllNodes.asObservable();
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
    /**
     * @param {?} expand
     * @return {?}
     */
    expandAllNodes(expand) {
        this.emitExpandAllNodes.next(expand);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    collapseAllNodes(collapse) {
        this.emitCollapseAllNodes.next(collapse);
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
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitExpandAllNodes;
    /** @type {?} */
    TreeHelisaService.prototype.nodeExpand;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitCollapseAllNodes;
    /** @type {?} */
    TreeHelisaService.prototype.nodeCollapse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBT2hELE1BQU0sT0FBTyxpQkFBaUI7SUEyQzFCOztRQXhDUSxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQzs7UUFFMUQsaUJBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBUzVDLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7O1FBRTlELHlCQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBU2hELHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWhFLGVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBUTVDLHlCQUFvQixHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWxFLGlCQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBUTFELENBQUM7Ozs7OztJQXRDRCxrQkFBa0IsQ0FBQyxpQkFBeUI7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQVNELGdCQUFnQixDQUFDLElBQVM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFTQyxjQUFjLENBQUMsTUFBYztRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBUUQsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUE1Q04sVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7Ozs7Ozs7O0lBSUcsNkNBQTBEOztJQUUxRCx5Q0FBb0Q7Ozs7O0lBU3BELDJDQUE4RDs7SUFFOUQsaURBQTBEOzs7OztJQVN4RCwrQ0FBZ0U7O0lBRWhFLHVDQUFvRDs7Ozs7SUFRcEQsaURBQWtFOztJQUVsRSx5Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXHJcbiAgICBwcml2YXRlIGVtaXROb2RlU2VsZWN0ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMSk7ICAgIFxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xyXG4gICAgbm9kZVNlbGVjdGVkID0gdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXHJcbiAgICBjaGFuZ2VOb2RlU2VsZWN0ZWQoaWRSZXNpZGVudGlhbEFyZWE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5uZXh0KGlkUmVzaWRlbnRpYWxBcmVhKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcclxuICAgIHByaXZhdGUgZW1pdERhdGFTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5vZGU+KHVuZGVmaW5lZCk7ICAgIFxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xyXG4gICAgZGF0YVNvdXJjZU9ic2VydmFibGUgPSB0aGlzLmVtaXREYXRhU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXHJcbiAgICBjaGFuZ2VEYXRhU291cmNlKGRhdGE6Tm9kZSkge1xyXG4gICAgICAgIHRoaXMuZW1pdERhdGFTb3VyY2UubmV4dChkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgICBcclxuICAgIC8vIEV4cGFuZCBub2RlIG9ic2VydmFibGVcclxuICAgICAgcHJpdmF0ZSBlbWl0RXhwYW5kQWxsTm9kZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpOyAgICBcclxuICAgICAgXHJcbiAgICAgIG5vZGVFeHBhbmQgPSB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5hc09ic2VydmFibGUoKTtcclxuICAgICAgXHJcbiAgICAgIGV4cGFuZEFsbE5vZGVzKGV4cGFuZDpib29sZWFuKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5uZXh0KGV4cGFuZCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBDb2xsYXBzZSBub2RlIG9ic2VydmFibGVcclxuICAgICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VBbGxOb2RlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7ICAgIFxyXG4gICAgICBcclxuICAgICAgbm9kZUNvbGxhcHNlID0gdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5hc09ic2VydmFibGUoKTtcclxuICAgICAgXHJcbiAgICAgIGNvbGxhcHNlQWxsTm9kZXMoY29sbGFwc2U6Ym9vbGVhbikge1xyXG4gICAgICAgICAgdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5uZXh0KGNvbGxhcHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbn0iXX0=
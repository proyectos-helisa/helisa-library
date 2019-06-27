/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
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
        this.emitRefreshTree = new Subject();
        this.refreshTreeObservable = this.emitRefreshTree.asObservable();
        this.emitExpandOneNode = new Subject();
        this.expandOneNodeObservable = this.emitExpandOneNode.asObservable();
        this.emitCollapseOneNode = new Subject();
        this.collapseOneNodeObservable = this.emitCollapseOneNode.asObservable();
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
    /**
     * @return {?}
     */
    refreshTree() {
        this.emitRefreshTree.next();
    }
    /**
     * @param {?} indexNode
     * @return {?}
     */
    expandOneNode(indexNode) {
        this.emitExpandOneNode.next(indexNode);
    }
    /**
     * @param {?} indexNode
     * @return {?}
     */
    collapseOneNode(indexNode) {
        this.emitCollapseOneNode.next(indexNode);
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
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitRefreshTree;
    /** @type {?} */
    TreeHelisaService.prototype.refreshTreeObservable;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitExpandOneNode;
    /** @type {?} */
    TreeHelisaService.prototype.expandOneNodeObservable;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitCollapseOneNode;
    /** @type {?} */
    TreeHelisaService.prototype.collapseOneNodeObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQU81RCxNQUFNLE9BQU8saUJBQWlCO0lBNEQxQjs7UUF6RFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7O1FBRTFELGlCQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDOztRQVM1QyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFPLFNBQVMsQ0FBQyxDQUFDOztRQUU5RCx5QkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQVNoRCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNoRSxlQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDOztRQU81Qyx5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNsRSxpQkFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU1oRCxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDOUMsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU9wRCxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ2xELDRCQUF1QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUt4RCx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3BELDhCQUF5QixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU90RSxDQUFDOzs7Ozs7SUF2REQsa0JBQWtCLENBQUMsaUJBQXlCO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFTRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBT0MsY0FBYyxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQU1ELGdCQUFnQixDQUFDLFFBQWdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUtELFdBQVc7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBTUQsYUFBYSxDQUFDLFNBQWdCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFJRCxlQUFlLENBQUMsU0FBZ0I7UUFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUE3RE4sVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7Ozs7Ozs7O0lBSUcsNkNBQTBEOztJQUUxRCx5Q0FBb0Q7Ozs7O0lBU3BELDJDQUE4RDs7SUFFOUQsaURBQTBEOzs7OztJQVN4RCwrQ0FBZ0U7O0lBQ2hFLHVDQUFvRDs7Ozs7SUFPcEQsaURBQWtFOztJQUNsRSx5Q0FBd0Q7Ozs7O0lBTXhELDRDQUE4Qzs7SUFDOUMsa0RBQTREOzs7OztJQU81RCw4Q0FBa0Q7O0lBQ2xELG9EQUFnRTs7Ozs7SUFLaEUsZ0RBQW9EOztJQUNwRCxzREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXHJcbiAgICBwcml2YXRlIGVtaXROb2RlU2VsZWN0ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMSk7ICAgIFxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xyXG4gICAgbm9kZVNlbGVjdGVkID0gdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXHJcbiAgICBjaGFuZ2VOb2RlU2VsZWN0ZWQoaWRSZXNpZGVudGlhbEFyZWE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5uZXh0KGlkUmVzaWRlbnRpYWxBcmVhKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcclxuICAgIHByaXZhdGUgZW1pdERhdGFTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5vZGU+KHVuZGVmaW5lZCk7ICAgIFxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xyXG4gICAgZGF0YVNvdXJjZU9ic2VydmFibGUgPSB0aGlzLmVtaXREYXRhU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXHJcbiAgICBjaGFuZ2VEYXRhU291cmNlKGRhdGE6Tm9kZSkge1xyXG4gICAgICAgIHRoaXMuZW1pdERhdGFTb3VyY2UubmV4dChkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgICBcclxuICAgIC8vIEV4cGFuZCBub2RlIG9ic2VydmFibGVcclxuICAgICAgcHJpdmF0ZSBlbWl0RXhwYW5kQWxsTm9kZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpOyAgICAgICAgICBcclxuICAgICAgbm9kZUV4cGFuZCA9IHRoaXMuZW1pdEV4cGFuZEFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpOyAgICAgIFxyXG4gICAgICBleHBhbmRBbGxOb2RlcyhleHBhbmQ6Ym9vbGVhbikge1xyXG4gICAgICAgICAgdGhpcy5lbWl0RXhwYW5kQWxsTm9kZXMubmV4dChleHBhbmQpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gQ29sbGFwc2Ugbm9kZSBvYnNlcnZhYmxlXHJcbiAgICAgIHByaXZhdGUgZW1pdENvbGxhcHNlQWxsTm9kZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpOyAgICAgICAgICBcclxuICAgICAgbm9kZUNvbGxhcHNlID0gdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5hc09ic2VydmFibGUoKTsgICAgICBcclxuICAgICAgY29sbGFwc2VBbGxOb2Rlcyhjb2xsYXBzZTpib29sZWFuKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLm5leHQoY29sbGFwc2UpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgcHJpdmF0ZSBlbWl0UmVmcmVzaFRyZWUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgICByZWZyZXNoVHJlZU9ic2VydmFibGUgPSB0aGlzLmVtaXRSZWZyZXNoVHJlZS5hc09ic2VydmFibGUoKTtcclxuICAgICAgcmVmcmVzaFRyZWUoKXtcclxuICAgICAgICAgIHRoaXMuZW1pdFJlZnJlc2hUcmVlLm5leHQoKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRFeHBhbmRPbmVOb2RlID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gICAgICBleHBhbmRPbmVOb2RlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdEV4cGFuZE9uZU5vZGUuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICAgIGV4cGFuZE9uZU5vZGUoaW5kZXhOb2RlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5uZXh0KGluZGV4Tm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgZW1pdENvbGxhcHNlT25lTm9kZSA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgICAgY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdENvbGxhcHNlT25lTm9kZS5hc09ic2VydmFibGUoKTtcclxuICAgICAgY29sbGFwc2VPbmVOb2RlKGluZGV4Tm9kZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuZW1pdENvbGxhcHNlT25lTm9kZS5uZXh0KGluZGV4Tm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG59Il19